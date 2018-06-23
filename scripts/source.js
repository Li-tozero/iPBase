/**
 * Created by libiyun on 2018/6/12.
 */
/*
选项卡切换
 */
window.onload=function(){
    var apt=document.getElementById("apartment");
    var oLi=apt.getElementsByTagName("li");
    var aptSources=document.getElementById("apartSources");
    var aptSource=aptSources.getElementsByTagName("div");
    var myDiv=[];
    var myHeight;

    for(var i=0,len=aptSource.length;i<len;i++){
        if((aptSource[i].className=="apartSource cur")||(aptSource[i].className=="apartSource")){
            myDiv.push(aptSource[i]);
        }
    }
    aptSources.style.height=myDiv[0].offsetHeight+1+"px";
    for(var i=0,len=oLi.length;i<len;i++){
        oLi[i].index=i;
        oLi[i].onclick=function(){
            show(this.index);
        }
    }
    function show(a){
        for(var j=0,len=oLi.length;j<len;j++){
            oLi[j].className="";
            myDiv[j].className="apartSource";
        }
        oLi[a].className="cur";
        myDiv[a].className="apartSource cur";
        aptSources.style.height=myDiv[a].offsetHeight+"px";
    }
}
