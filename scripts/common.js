function addListener(element,e,fn){
    if(element.addEventListener){
        element.addEventListener(e,fn,false);
    }else{
        element.attachEvent(e,fn);
    }
}
