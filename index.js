
//-模块设计模式

var Htmlcontent=(function(){
    var item='contents';
    var changecontent=function(){
        console.log('change')
    }
    return {
        changeHtml:function(){
            changecontent();
            console.log('changeorno')
        }
    }

})()
Htmlcontent.changeHtml() //changeorno
Htmlcontent.item //undefined

