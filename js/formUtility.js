var jobTypeList = ["儲備幹部", "經營管理主管", "主管特別助理", "人力資源主管", "教育訓練人員", "人力╱外勞仲介", "人力資源人員", "人力資源助理", "行政人員", "行政主管", "總務主管", "總務人員", "秘書", "資料輸入人員", "文件管理師", "圖書資料管理人員", "總機人員", "櫃檯接待人員", "工讀生", "行政助理", "法務╱智財主管", "法務人員", "其他法律專業人員", "工商登記服務人員", "法務助理", "律師", "商標╱專利人員", "代書╱地政士", "廣告企劃主管", "行銷企劃主管", "品牌宣傳及媒體公關人員╱主管", "產品行銷人員", "行銷企劃人員", "活動企劃人員", "網站行銷企劃", "媒體公關╱宣傳採買", "廣告文案╱企劃", "市場調查╱市場分析", "不動產╱商場開發人員", "行銷企劃助理", "產品企劃主管", "產品企劃開發人員", "傳播媒體企劃人員", "發行企劃╱出版人員", "遊戲企劃人員", "專案管理主管", "營運管理師╱系統整合╱ERP專案師", "軟體相關專案管理師", "其他專案管理師", "產品管理師", "客戶服務主管", "電話客服類人員", "其他客戶服務人員", "門市╱店員╱專櫃人員", "售票╱收銀人員", "店長╱賣場管理人員", "連鎖店管理人員", "國內業務主管", "國外業務主管", "專案業務主管", "國內業務人員", "國外業務人員", "廣告AE業務人員", "電話行銷人員", "醫藥業務代表", "不動產經紀人", "汽車銷售人員", "傳銷人員", "駐校代表", "業務助理", "產品事業處主管", "通路開發人員", "國貿人員", "船務╱押匯╱報關人員", "保稅人員", "餐飲服務生", "中餐廚師", "西餐廚師", "其他類廚師", "麵包師", "西點╱蛋糕師", "調酒師╱吧台人員", "餐廚助手", "食品衛生管理師", "洗碗人員", "日式廚師", "旅遊休閒類主管", "飯店或餐廳主管", "飯店工作人員", "空服員", "地勤人員", "領隊", "導遊", "OP╱旅行社人員", "美容工作者", "美髮工作者", "整體造型師", "美姿美儀人員", "美療╱芳療師", "寵物美容專業人員", "美甲彩繪師", "美容類助理", "美髮類助理", "軟體專案主管", "電子商務技術主管", "通訊軟體工程師", "軟體設計工程師", "韌體設計工程師", "Internet程式設計師", "電腦系統分析師", "電玩程式設計師", "其他資訊專業人員", "資訊助理人員", "BIOS工程師", "演算法開發工程師", "MIS╱網管主管", "資料庫管理人員", "MIS程式設計師", "MES工程師", "網路管理工程師", "系統維護╱操作人員", "資訊設備管制人員", "網路安全分析師", "領班", "作業員╱包裝員", "電機工程技術員", "CNC機台操作人員", "CNC電腦程式編排人員", "車床人員", "銑床人員", "沖壓模具技術人員", "塑膠模具技術人員", "機械加工技術人員", "塑膠射出技術人員", "印前製作╱印刷技術人員", "噴漆人員", "板金技術員", "PCB技術人員", "焊接及切割技術員", "紡織工務", "打版人員", "製鞋類人員", "車縫╱裁縫類人員", "樂器製造及調音技術員", "珠寶及貴金屬技術員", "機械裝配員", "電機設備裝配員", "農業及林業設備操作員", "推土機及有關設備操作員", "吊車╱起重機及有關設備操作員", "手工包裝工及有關工作者", "其他機械操作員", "鑄造╱鍛造模具技術人員", "粉末冶金模具技術人員", "壓鑄模具技術人員", "電鍍╱表面處理技術人員", "精密拋光技術人員", "線切割技術員", "雷射操作技術員", "染整技術人員", "鍋爐操作技術人員", "塗裝技術人員", "產品售後技術服務", "業務支援工程師", "電腦組裝╱測試", "通信測試維修人員", "產品維修人員", "空調冷凍技術人員", "汽車╱機車引擎技術人員", "其他汽車╱機車技術維修人員", "飛機裝修工", "農業及工業用機器裝修工", "電機裝修工", "電子設備裝修工", "電話及電報機裝修工", "電信及電力線路架設工", "精密儀器製造工及修理工", "FAE工程師", "採購主管", "資材主管", "採購人員", "倉管", "物管╱資材", "採購助理", "運輸物流類主管", "運輸交通專業人員", "外務╱快遞╱送貨", "鐵路車輛駕駛員", "小客車╱計程車及小貨車司機", "大貨車及其他類司機", "飛行機師", "飛安人員", "倉儲物流人員", "船長╱大副╱船員", "營建主管", "建築師", "都市╱交通規劃人員", "土木技師╱土木工程師", "結構技師╱結構工程師", "水利工程師", "工程配管繪圖", "水保技師╱水保工程師", "內業工程師", "工務人員╱助理", "水電工程師", "估算人員", "發包人員", "土地開發人員", "營造工程師", "工地監工╱主任", "建築物電力系統維修工", "砌磚工及砌石工", "混凝土工", "木工", "泥水工", "油漆工", "建築物清潔工", "金屬建材架構人員", "泥水小工及有關工作者", "其他營建構造工及有關工作者", "水電工", "防水施工人員", "CAD╱CAM工程師", "建築設計╱繪圖人員", "水電及其他工程繪圖人員", "機械設計╱繪圖人員", "量測╱儀校人員", "室內設計╱裝潢人員", "景觀設計師", "多媒體開發主管", "廣告設計", "展場╱櫥窗佈置人員", "多媒體動畫設計師", "平面設計╱美編人員", "網頁設計師", "美術設計", "商業設計", "服裝╱皮包╱鞋類設計", "工業設計", "包裝設計", "電腦繪圖人員", "設計助理", "織品設計", "節目製作人員", "演員", "導演╱導播", "模特兒", "音樂家╱作曲╱歌唱及演奏家", "舞蹈指導與舞蹈家", "藝術指導 ╱藝術總監", "電台工作人員", "播音╱配音人員", "影片製作技術人員", "燈光╱音響師", "攝影師", "其他娛樂事業人員", "節目助理", "攝影助理", "視聽工程類人員", "主持人", "技術文件╱說明書編譯", "英文翻譯╱口譯人員", "日文翻譯╱口譯人員", "其他翻譯╱口譯人員", "文編╱校對╱文字工作者", "排版人員", "記者╱採編", "其他傳媒相關工作", "醫師", "醫事檢驗師", "藥師", "營養師", "公共衛生醫師", "麻醉醫師", "復建技術師", "治療師", "醫事放射師", "牙醫師", "護理師及護士", "獸醫師", "中醫師", "驗光師", "藥學助理", "其他醫療人員", "呼吸治療師", "職能治療師", "物理治療師", "語言治療師", "專科護理師", "醫院行政管理人員", "照顧服務員", "按摩╱推拿師", "診所助理", "牙醫助理", "放射性設備使用技術員", "醫療設備控制人員", "居家服務督導員", "照顧指導員", "安心服務員", "其他醫療從業人員", "物理相關研究員", "天文相關研究員", "氣象相關研究員", "化學相關研究員", "地質與地球科學研究員", "數學研究員", "統計學研究員", "社會╱人類學研究人員", "哲學╱歷史╱政治相關研究人員", "心理學研究人員", "生物學專業與研究", "應用科學研究員", "研究助理", "其他研究人員", "補習班導師╱管理人員", "教授╱副教授╱助理教授", "助教", "中等學校教師", "國小學校教師", "特殊教育教師", "幼教班老師", "安親班老師", "升學補習班老師", "電腦補習班老師", "語文補習班老師", "珠心算老師", "美術老師", "音樂老師", "其他補習班老師", "其他才藝類老師", "其他類講師", "社工人員", "運動教練", "教保員", "講師", "數理補習班老師", "硬體工程研發主管", "光電工程研發主管", "通訊工程研發主管", "其他工程研發主管", "電機技師╱工程師", "機械工程師", "機構工程師", "機電技師╱工程師", "電子工程師", "零件工程師", "硬體研發工程師", "PCB佈線工程師", "電源工程師", "類比IC設計工程師", "數位IC設計工程師", "半導體工程師", "微機電工程師", "光電工程師", "光學工程師", "電信╱通訊系統工程師", "RF通訊工程師", "IC佈局工程師", "助理工程師", "工程助理", "其他特殊工程師", "電子產品系統工程師", "太陽能技術工程師", "熱傳工程師", "聲學╱噪音工程師", "化工化學工程師", "紡織化學工程師", "特用化學工程師", "材料研發人員", "實驗化驗人員", "食品研發人員", "醫藥研發人員", "生物科技研發人員", "化學工程研發人員", "病理藥理研究人員", "農藝╱畜產研究人員", "醫療器材研發工程師", "生產管理主管", "工廠主管", "工業工程師╱生產線規劃", "生管", "生管助理", "生產技術╱製程工程師", "生產設備工程師", "自動控制工程師", "SMT工程師", "半導體製程工程師", "LCD製程工程師", "半導體設備工程師", "LCD設備工程師", "品管╱品保主管", "品管╱品保工程師", "可靠度工程師", "硬體測試工程師", "測試人員", "IC封裝╱測試工程師", "軟韌體測試工程師", "EMC╱電子安規工程師", "ISO╱品保人員", "品管╱檢驗人員", "勞工安全衛生管理師", "安全╱衛生相關檢驗人員", "環境工程人員 / 工程師", "防火及建築檢驗人員", "公共衛生人員", "廠務", "廠務助理", "勞工安全衛生管理人員", "志願役軍官╱士官╱士兵", "消防專業人員", "消防員", "救生員", "保全人員╱警衛", "保全技術人員", "大樓管理員", "總幹事", "其他保安服務工作", "金融專業主管", "金融研究員", "金融交易員", "金融承銷員", "金融營業員", "金融理財專員", "銀行辦事員", "統計精算人員", "不動產產權審核╱估價師", "保險業務╱經紀人", "融資╱信用業務人員", "催收人員", "核保╱保險內勤人員", "理賠人員", "券商後線人員", "股務人員", "財務或會計主管", "會計師", "財務分析╱財務人員", "主辦會計", "成本會計", "記帳╱出納╱一般會計", "查帳╱審計人員", "稽核人員", "稅務人員", "財務會計助理", "農藝作物栽培工作者", "一般動物飼育工作者", "林木伐運工作者", "水產養殖工作者", "顧問人員", "志工人員", "生命禮儀師", "星象占卜人員", "公家機關相關人員", "藝術品╱珠寶鑑價╱拍賣顧問", "家庭代工", "花藝╱園藝人員", "生鮮人員", "加油員", "派報生╱傳單派送", "清潔工╱資源回收人員", "家事服務人員", "汽車美容人員"];

$(document).ready(function(){
	$( "#job_title" ).autocomplete({
      source: jobTypeList
   	});

	$("#company_name").autocomplete({
    	source: function (request, response) {
	        var request = $.ajax({
			  url: "https://company.g0v.ronny.tw/api/search",
			  data: { q : request['term'] },
			  dataType: "json", 

			}).done(function( res ) {
			 	nameList = new Array(); 
			 	console.log(res.data);
			 	var data = allowData(res.data, '公司狀況', ['核准成立']);
			 	data = allowData(data, '現況', ['核准設立']);
			 	data.forEach(function(item, i) {

		            var name = item['公司名稱'] || item['商業名稱'] || null;
		            var comId = item['統一編號'] || null; 
		            if (name !== null && comId !== null) {
		                nameList.push({"value": name, "company_id": comId});
		            }
		            console.log(name);
	        	});
	        	response(nameList);

			}).fail(function( jqXHR, textStatus ) {
			  	response([]);
			});
    	},
    	minLength: 2,
    	select: function(event, ui){ 
    		$("#company_id").val(ui['item']['company_id']);
    	}
	});


});

//only allow the data with given condition
function allowData(data, field, allowSet){
	var newData = new Array();
	for(var i = 0; i< data.length; i++){
		var d = data[i];
		if(field in d){
			if(allowSet.indexOf(d[field]) >= 0){
				newData.push(d);
			}
		}
		else{
			newData.push(d);
		}
	}
	return newData;
}