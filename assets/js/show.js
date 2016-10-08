"use strict";var latestWorkings=Vue.extend({template:"#app-latest-workings",data:function(){return{current_page:0,workings:[],is_loading:!1}},created:function(){this.loadLatestWorkings(0)},events:{scroll_bottom_reach:function(){this.is_loading||this.loadMorePage()}},methods:{loadMorePage:function(){this.current_page+=1,this.loadLatestWorkings(this.current_page)},loadLatestWorkings:function(t){var e=this;this.is_loading=!0,this.getLatestWorkings(t).then(function(t){e.workings=e.workings.concat(t.data.workings),e.is_loading=!1},function(t){e.is_loading=!1})},getLatestWorkings:function(t){var e={params:{page:t,limit:20}};return this.$http.get(WTS.constants.backendURL+"workings/latest",e)}}}),searchAndGroupByJobTitle=Vue.extend({template:"#app-search-and-group-by-job-title",data:function(){return{job_title_keyword:null,data:[],is_loading:!1}},events:{load_search_and_group_by_job_title:function(t){this.loadData(t)},data_loaded:function(){if(1===this.data.length){var t=this.$el.querySelector(".accordion__trigger");$(t).trigger("click")}}},methods:{loadData:function(t){var e=this;this.job_title_keyword=t,this.data=[],this.is_loading=!0,this.getData(t).then(function(t){e.data=t.data},function(t){e.data=[]}).then(function(){e.is_loading=!1,e.$emit("data_loaded")})},getData:function(t){var e={params:{job_title:t}};return this.$http.get(WTS.constants.backendURL+"workings/search-and-group/by-job-title",e)}}}),searchAndGroupByCompany=Vue.extend({template:"#app-search-and-group-by-company",data:function(){return{company_keyword:null,data:[],is_loading:!1}},events:{load_search_and_group_by_company:function(t){this.loadData(t)},data_loaded:function(){if(1===this.data.length){var t=this.$el.querySelector(".accordion__trigger");$(t).trigger("click")}}},methods:{loadData:function(t){var e=this;this.company_keyword=t,this.data=[],this.is_loading=!0,this.getData(t).then(function(t){e.data=t.data},function(t){e.data=[]}).then(function(){e.is_loading=!1,e.$emit("data_loaded")})},getData:function(t){var e={params:{company:t}};return this.$http.get(WTS.constants.backendURL+"workings/search-and-group/by-company",e)}}});Vue.filter("num",function(t){return t?t:"-"}),Vue.filter("overtime_frequency_string",function(t){if("0"==t)return"幾乎不";if("1"==t)return"偶而";if("2"==t)return"經常";if("3"==t)return"幾乎每天";throw new Error("invalid value")});var app=new Vue({el:"#app",components:{latestWorkings:latestWorkings,searchAndGroupByJobTitle:searchAndGroupByJobTitle,searchAndGroupByCompany:searchAndGroupByCompany},data:{currentView:null}}),searchBarApp=new Vue({el:"#section-search",data:{search_type:"by-company",keyword:""},methods:{onSubmit:function(){"by-company"===this.search_type?(router.setRoute("/search-and-group/by-company/"+encodeURIComponent(this.keyword)),this.$emit("submit",this.search_type,this.keyword)):"by-job-title"===this.search_type?(router.setRoute("/search-and-group/by-job-title/"+encodeURIComponent(this.keyword)),this.$emit("submit",this.search_type,this.keyword)):router.setRoute("/latest")},setInputInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"by-company",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.search_type=t,this.keyword=e}}}),router=Router({"/latest":function(){app.currentView="latestWorkings",searchBarApp.setInputInfo()},"/search-and-group/by-job-title/(.*)":function(t){app.currentView="searchAndGroupByJobTitle";var e=decodeURIComponent(t);searchBarApp.setInputInfo("by-job-title",e),Vue.nextTick(function(){app.$broadcast("load_search_and_group_by_job_title",e)})},"/search-and-group/by-company/(.*)":function(t){app.currentView="searchAndGroupByCompany";var e=decodeURIComponent(t);searchBarApp.setInputInfo("by-company",e),Vue.nextTick(function(){app.$broadcast("load_search_and_group_by_company",e)})}}).configure({notfound:function(){router.setRoute("/latest")}});$(window).on("scroll",function(){$(window).scrollTop()+window.innerHeight>=$(document).height()-100&&"latestWorkings"===app.currentView&&app.$broadcast("scroll_bottom_reach")}),$(function(){var t=$(searchBarApp.$el).find("#search-bar-input"),e=searchBarApp;t.autocomplete({source:function(n,a){"by-company"===e.search_type?(t.trigger("company-query-autocomplete-search",n.term),$.ajax({url:WTS.constants.backendURL+"workings/companies/search",data:{key:n.term},dataType:"json"}).done(function(t){var e=$.map(t,function(t,e){return{value:t._id.name,id:t._id.name}});a(e)}).fail(function(t,e){a([])})):"by-job-title"===e.search_type&&(t.trigger("jot-title-query-autocomplete-search",n.term),$.ajax({url:WTS.constants.backendURL+"workings/jobs/search",data:{key:n.term},dataType:"json"}).done(function(t){var e=$.map(t,function(t,e){return{value:t._id,id:t._id}});a(e)}).fail(function(t,e){a([])}))},select:function(e,n){"by-company"===searchBarApp.search_type?t.trigger("company-query-autocomplete-select",n.item.label):"by-job-title"===searchBarApp.search_type&&t.trigger("job-title-query-autocomplete-select",n.item.label)}})}),function(t,e){var n="QUERY_PAGE",a=t("#search-bar-input");a.on("company-query-autocomplete-search",function(t,e){ga("send","event",n,"company-query-autocomplete-search",e)}),a.on("job-title-query-autocomplete-search",function(t,e){ga("send","event",n,"job-title-query-autocomplete-search",e)}),a.on("ompany-query-autocomplete-select",function(t,e){ga("send","event",n,"ompany-query-autocomplete-select",e)}),a.on("job-title-query-autocomplete-select",function(t,e){ga("send","event",n,"job-title-query-autocomplete-select",e)}),e.$on("submit",function(t,e){"by-company"===t?ga("send","event",n,"company-form-submit",e):"by-job-title"===t&&ga("send","event",n,"job-title-form-submit",e)}),router.on("on","/latest",function(){ga("send","event",n,"visit-latest")}),router.on("on","/search-and-group/by-job-title/(.*)",function(t){ga("send","event",n,"visit-job-title",decodeURIComponent(t))}),router.on("on","/search-and-group/by-company/(.*)",function(t){ga("send","event",n,"visit-company",decodeURIComponent(t))})}(window.jQuery,searchBarApp),router.init(["/"]);