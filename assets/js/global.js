"use strict";var breakpoint={above_desktop:window.matchMedia("(min-width: 1025px)"),below_desktop:window.matchMedia("(max-width: 1024px)"),above_small:window.matchMedia("(min-width: 851px)"),below_small:window.matchMedia("(max-width: 850px)"),above_tablet:window.matchMedia("(min-width: 768px)"),below_tablet:window.matchMedia("(max-width: 767px)"),below_mobile:window.matchMedia("(max-width: 550px)")},accordion={item:".accordion__item",content:".accordion__content",toggle:function(o){o.parents(this.item).toggleClass("is-active"),o.parents(this.item).find(this.content).slideToggle(400)},open:function(o){o.parents(this.item).addClass("is-active"),o.parents(this.item).find(this.content).slideDown(400)},closeAll:function(o){var t=o.parents(".accordion");t.find(this.item).removeClass("is-active"),t.find(this.content).slideUp(400)}};$("body").on("click",".accordion__trigger",function(){accordion.toggle($(this))});var btn_back_to_top=document.getElementById("btn-back-to-top");btn_back_to_top&&(window.addEventListener("scroll",function(){document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop>50?btn_back_to_top.classList.add("is-active"):btn_back_to_top.classList.remove("is-active")}),btn_back_to_top.addEventListener("click",function(){$("html, body").animate({scrollTop:0},600)})),window.WTS=window.WTS||{},WTS.constants={backendURL:"https://tranquil-fortress-92731.herokuapp.com/",siteURL:"https://worktime.goodjob.life/"},$("body").on("click","[data-modal-id]",function(){$("body, html").addClass("is-fixed");var o=$(this).attr("data-modal-id"),t=$('[data-modal="'+o+'"]');t.addClass("is-open")});var closeModal=function(){$(".modal").removeClass("is-open"),$("body, html").removeClass("is-fixed")};$("body").on("click",".js-close-modal",function(){closeModal()}),$("body").on("click",".modal",function(o){$(o.target).closest(".modal__container").length||closeModal()}),$("[data-show-trigger]").on("click",function(){var o=$(this).attr("data-show-trigger");$('[data-show="'+o+'"]').slideToggle()});var form_modal=document.getElementById("modal-alert"),closeFormModal=function(){form_modal.classList.remove("is-open"),$("body, html").removeClass("is-fixed"),form_modal.innerHTML=""},showAlert=function(o,t,e,n){var l=void 0,a=void 0;"go-to-show"==n?l='<a href="/show.html" class="modal-content__btn btn-black btn-m">查看最新工時</a>':"go-to-form"==n?l='<button class="modal-content__btn btn-black btn-m" id="modal-scroll-to-form">重新填寫</button>':"go-fb-login"==n&&(l='<button id="fb-login-and-submit-in-modal" class="modal-content__btn btn-black btn-m">以<svg role="img" class="icon-facebook"><use xlink:href="#icon-facebook"></use></svg>驗證並送出資料</button>'),"success"==o?a="form-checked":"alert"==o&&(a="form-alert");var s='\n  <div class="modal__inner">\n    <div class="modal__close wrapper-s js-close-modal"><svg role="img"><use xlink:href="#x"></use></svg></div>\n    <div class="modal__container wrapper-s">\n      <div class="modal-content">\n        <div class="modal-content__icon"><svg role="img"><use xlink:href="#'+a+'"></use></svg></div>\n        <h5 class="modal-content__heading">'+t+'</h5>\n        <h6 class="modal-content__paragraph">'+e+"</h6>\n        "+l+"\n      </div>\n    </div>\n  </div>\n  ";form_modal.innerHTML=s,form_modal.classList.add("is-open"),document.querySelector("html").classList.add("is-fixed"),document.querySelector("body").classList.add("is-fixed")};$("body").on("click","#modal-scroll-to-form",function(o){var t=section_form.offsetTop-58;o.preventDefault(),closeFormModal(),$("html, body").animate({scrollTop:t},600)}),$("body").on("click","#fb-login-and-submit-in-modal",function(o){o.preventDefault(),closeFormModal(),$("#work-form").trigger("submit")}),$("body").on("click",".modal__close",function(){closeFormModal()}),$("body").on("click",".modal",function(o){$(o.target).closest(".modal__container").length||closeFormModal()});var header=document.getElementById("header");breakpoint.above_small.matches&&window.addEventListener("scroll",function(){document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop>100?header.classList.add("is-fixed"):(document.documentElement&&document.documentElement.scrollTop||0==document.body.scrollTop)&&header.classList.remove("is-fixed")});var header_button=document.getElementById("header-button"),header_nav=document.getElementById("header-nav");header_button.addEventListener("click",function(){this.classList.toggle("is-open"),header_nav.classList.toggle("is-open"),document.querySelector(".btn-scroll-down")&&document.querySelector(".btn-scroll-down").classList.toggle("hide")});for(var nav_scroll=document.querySelectorAll(".js-scrollpage"),i=0;i<nav_scroll.length;i++)nav_scroll[i].addEventListener("click",function(){header_button.classList.remove("is-open"),header_nav.classList.remove("is-open")});var scroll_to_form=document.querySelectorAll(".js-scrollToForm"),scroll_to_faq=document.querySelectorAll(".js-scrollToFaq"),section_form=document.getElementById("section-form"),section_faq=document.getElementById("section-faq");section_form&&!function(){for(var o=section_form.offsetTop-58,t=0;t<scroll_to_form.length;t++)scroll_to_form[t].addEventListener("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:o},600)})}(),section_faq&&!function(){for(var o=section_faq.offsetTop-58,t=0;t<scroll_to_faq.length;t++)scroll_to_faq[t].addEventListener("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:o},600)})}();var highlightCurrentPage=function(){for(var o=document.querySelectorAll(".site-menu__item"),t=window.location.pathname,e=0;e<o.length;e++){var n=o[e].childNodes[0];n.getAttribute("href")===t?n.classList.add("is-current"):n.classList.remove("is-current")}};highlightCurrentPage();