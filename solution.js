// 超星网课解决方案
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
// 初始化信息
tips("初始化数据");
var url_getCourses = "https://mooc1-2.chaoxing.com/mycourse/studentstudycourselist?courseId=__COURSEID__&chapterId=__CHAPTERID__&clazzid=__CLASSID__";
var url_ajaxCourses = "https://mooc1-2.chaoxing.com/multimedia/log/__LOG__?otherInfo=__OTHERINFO__&clipTime=__CLIPTIME__&jobid=__JOBID__&rt=0.9&clazzId=__CLASSID__&dtype=Video&duration=__DURATION__&userid=__USERID__&objectId=__OBJECTID__&view=pc&playingTime=__PLAYTIME__&isdrag=3&enc=__ENC__";
var courseMd5 = null;
var courseArray = new Array();
var courseData = null;
var chapterId = null;
var status = 0; // 0空闲 1 繁忙
analyzeCourseInfo(getCourseInfo());
getAllCourses(courseId, chapterId, courseData.clazzId);
tips("请稍等5秒");
setTimeout("start();", 5000);
// 开始运行
function start(){
  analyzeCourseInfo(getCourseInfo());
  // 完成阻止
  if( courseArray.length == 0 ){
    tips("完成刷课！请检查是否有课程遗漏（由网络决定）", red);
    return false;
  }else{
    console.log(courseArray.length);
    var data = courseArray.shift();
    var pattern = /getTeacherAjax\('(.+)','(.+)','(.+)'\);/;
    data = data.match(pattern);
    // console.log(data);
    tips("切换下个课程")
    $("h4#cur" + data[3]).click();
    setTimeout(function(){
      link(getLink(false));
    }, 10000);
  }
}
// 获取链接
function getLink(is_finish = false){
  tips("获取链接中:" + is_finish)
  n = (is_finish === false) ? 0 : courseData.duration;
  var url = url_ajaxCourses;
  url = url.replace("__LOG__", courseData.dtoken);
  url = url.replace("__OTHERINFO__", courseData.otherInfo);
  url = url.replace("__CLIPTIME__", "0_" + courseData.duration);
  url = url.replace("__JOBID__", courseData.jobid);
  url = url.replace("__CLASSID__", courseData.clazzId);
  url = url.replace("__DURATION__", courseData.duration);
  url = url.replace("__USERID__", courseData.userid);
  url = url.replace("__OBJECTID__", courseData.objectId);
  url = url.replace("__PLAYTIME__", n);
  enc = "[" + courseData.clazzId + "][" + courseData.userid + "][" + courseData.jobid + "][" + courseData.objectId + "][" + n * 1000 + "][d_yHJ!$pdA~5][" + courseData.duration * 1000 + "][" + courseData.clipTime + "]";
  // console.log(enc);
  enc = md5(enc);
  url = url.replace("__ENC__", enc);
  // console.log(url);
  return url;
}
// link
function link(url, force=false){
  tips("提交中")
  status = 1;
  $.get(url, function(data){
    tips("状态：" + data['isPassed']);
    status = 0;
    if( data['isPassed'] === true ){
      tips("状态通过", "green")
      start();  // 跳过
    }else if( force === true && data['isPassed'] == false ){
      tips("状态错误，30秒后重试", "red");
      setTimeout(function(){
        link(url, true);
      } ,30000);
    }else if( force === false ){
      tips("30秒后提交", "green");
      // 延迟30秒运行通过
      setTimeout(function(){
        link(getLink(true), true);
      } ,30000);
    }else{
      start();
    }
  });
}
// 获取所有课程
function getAllCourses(courseId, chapterId, clazzId){
  tips("获取所有课程中")
  url_getCourses = url_getCourses.replace("__COURSEID__", courseId);
  url_getCourses = url_getCourses.replace("__CHAPTERID__", chapterId);
  url_getCourses = url_getCourses.replace("__CLASSID__", clazzId);
  // console.log(url_getCourses);
  $.get(url_getCourses, function(data){
    var pattern = /getTeacherAjax\('(.+)','(.+)','(.+)'\);/gum;
    courseArray = data.match(pattern);
  });
}
// 获取课程信息
function getCourseInfo(){
  tips("读取当前课程信息");
  // 读取chapterId
  chapterId = $("input#chapterIdid").val();;
  // 读取课程信息
  var courseInfo = $("iframe").contents().find("iframe").contents().find("object>param[name=flashvars]").val();
  if( typeof(courseInfo) === "undefined" ){
    return false;
  }else{
    return courseInfo;
  }
}
// 解析课程信息
function analyzeCourseInfo(data){
  tips("解析当前课程数据");
  data = decodeURIComponent(data);
  var pattern = /logParam=(\{.+\})/u;
  data = data.match(pattern);
  if( typeof(data) === "undefined"){
    return false;
  }else{
    var _d = JSON.parse(data[1]);
    // console.log(_d);
    courseData = _d;
    return _d;
  }
}
function tips(text, color="blue"){
  console.log("%c【超星网课】" + text, "color:" + color);
}
