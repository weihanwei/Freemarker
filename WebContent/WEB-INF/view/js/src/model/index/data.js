function getShareUrl(){$.ajax({url:common.getBaseUrl()+"redIndex/getShareUrl.do",type:"post",dataType:"json",error:function(a){},success:function(a){alert(a.SHARE_TITLE),"1"==a.status&&(ShareJson.title=a.SHARE_TITLE,ShareJson.link="http://www.zhg3.com/P/repeat/index.action?toUrl="+a.SHARE_URL,ShareJson.imgUrl=a.SHARE_IMG,ShareJson.desc=a.SHARE_CONT,ZHData.set("getShareUrl",a))}})}this.ShareJson={},define(function(require){getShareUrl()}),!function(){var DependenceTable=[{fieldName:"getShareUrl",fieldType:"json",fieldFnc:"GetShareUrl",fieldTime:36e3}],ZHData=function(){return this.deadline=18e4,this.callback_param=[],this.callback_index=0,this.init(),this};ZHData.prototype={init:function(){},getTime:function(){return(new Date).getTime()},callback:function(a){this.get(this.callback_param[a].field,this.callback_param[a].callback)},get:function(field,callback){var self=this,time=sys.getCookie(field+"_time"),data=sys.getCookie(field),time2=self.getFieldTime(field),deadline=self.deadline,now=(new Date).getTime();if(null!=time2&&(deadline=1e3*time2),""==time||now-time>deadline)return this.callback_param.push({field:field,callback:callback}),void self.getfieldFnc(field,function(fncName){try{eval(fncName+"("+self.callback_index+")")}catch(error){}finally{self.callback_index++}});var type=self.isDefaultJson(field);1==type?"function"==typeof callback&&callback(JSON.parse(data)):"function"==typeof callback&&callback(data)},set:function(a,b,c){var d=this;sys.setCookie(a+"_time",(new Date).getTime());var e=d.isDefaultJson(a);1==e?(sys.setCookie(a+"_type","json"),sys.setCookie(a,JSON.stringify(b))):(sys.setCookie(a+"_type","string"),sys.setCookie(a,b)),"function"==typeof c&&c()},remove:function(a){sys.removeStorage(a),sys.removeStorage(a+"_time"),sys.removeStorage(a+"_type")},getfieldFnc:function(a,b){for(var c=0;c<DependenceTable.length;c++)a==DependenceTable[c].fieldName&&"function"==typeof b&&b(DependenceTable[c].fieldFnc)},isDefaultJson:function(a){for(var b=!1,c=0;c<DependenceTable.length;c++)a==DependenceTable[c].fieldName&&"json"==DependenceTable[c].fieldType&&(b=!0);return b},isJson:function(a){var b="object"==typeof a&&"[object object]"==Object.prototype.toString.call(a).toLowerCase()&&!a.length;return b},getFieldTime:function(a){for(var b=null,c=0;c<DependenceTable.length;c++)a==DependenceTable[c].fieldName&&void 0!=typeof DependenceTable[c].fieldTime&&(b=DependenceTable[c].fieldTime);return b},clearData:function(a){for(var b=0;b<DependenceTable.length;b++)this.remove(DependenceTable[b].fieldName),b==DependenceTable.length-1&&"function"==typeof a&&a()}},window.ZHData=new ZHData}();