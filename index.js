
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

//实际场景中的应用是维护封装 对象当中的某些变量和方法，虽然这看起来更清晰，但明显的缺点是无法引用私有方法。
//这可能会带来单元测试的挑战。同样，公共行为也是不可覆盖的

var Exposer = (function() {
    var privateVariable = 10;
  
    var privateMethod = function() {
      console.log('Inside a private method!');
      privateVariable++;
    }
  
    var methodToExpose = function() {
      console.log('This is a method I want to expose!');
    }
  
    var otherMethodIWantToExpose = function() {
      privateMethod();
    }
  
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
  })();
  
  Exposer.first();        // Output: This is a method I want to expose!
  Exposer.second();       // Output: Inside a private method!
  Exposer.methodToExpose; // undefined


//原型模式

var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype = function() {
  
    var go = function() {
      // Rotate wheels
    };
  
    var stop = function() {
      // Apply brake pads
    };
  
    return {
      pressBrakePedal: stop,
      pressGasPedal: go
    }
  
  }();
