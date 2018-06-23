//改变窗口大小，页面自动刷新
window.onresize=function(){
    location=location;
    window.location.reload();
};
window.onload=function(){
    //获取id元素
    function $(id){
        return document.getElementById(id);
    }
    var wWidth=document.body.scrollWidth;
    var list = $("list");
    list.style.width=(wWidth*4)+"px";
    var aImg=list.getElementsByTagName('img');
    aImg[0].style.width=wWidth+"px";
    var btn=document.querySelectorAll("#btn span");
    //轮播图
    window.timer=setInterval(move,3000);
    function move(){
        for(var i=0;i<aImg.length;i++){
            aImg[i].style.width=wWidth+"px";
        }
        if(parseInt(list.style.left)>-wWidth*aImg.length){
            list.style.left=parseInt(list.style.left)-wWidth+'px';
            list.style.transition='left 1s';
            tog(-Math.round(parseInt(list.style.left)/wWidth));
            if(parseInt(list.style.left)<=-wWidth*aImg.length){
                setTimeout(function(){
                    tog(0);
                    list.style.left='0';
                    list.style.transition='left 0s';
                },1)
            }
        }else{
            list.style.left='0';
            list.style.transition='left 0s';
        }
    }

    for(var i=0;i<btn.length;i++){
        btn[i].style.backgroundColor='#eee';
        btn[i].onclick=function(){
            list.style.left=-wWidth*this.getAttribute('index')+'px';
            tog(this.getAttribute('index'));
            clearInterval(window.timer);
            window.timer=setInterval(move,3000);
        }
    }

    function tog(index){
        if(index>2){
            tog(0);
            return;
        }
        for(var i=0;i<btn.length;i++){
            btn[i].style.backgroundColor='#eee'
        }
        btn[index].style.backgroundColor='#919090';
    }
    list.onmouseover=function(){
        clearInterval(window.timer);
    };
    list.onmouseout=function(){
        window.timer=setInterval(move,3000);
    };

    //登陆页面
    var showLogin=$("showLogin");
    var mask=$("mask");
    var login=$("login");
    //待做：将下列代码简化，加入使用addListner函数
    function show(){
        mask.style.display="block";
        login.style.display="block";
    }
    function hide(){
        login.style.display="none";
        mask.style.display="none";
    }
    showLogin.onclick=show;
    mask.onclick=hide;
    // addListener(showLogin,"onclick",show);
    // addListener(mask,"onclick",hide);
}