import Two from './Two'

const test=(num)=>{
    console.log("test函数哈哈"+num);
}
test(Two.y);

@isTestable(true)
class MyClass { }

function isTestable(value) {
   return function decorator(target) {
      target.isTestable = value;
   }
}

const delay=new Promise(resolve=>console.log("new Promise()"));
function* helloWorldGenerator() {

   yield console.log('hello');
 
   yield console.log('world');;
 
   return console.log('ending');
 
 }
 
 
 var hw = helloWorldGenerator();
 hw.next();
 hw.next();
 hw.next();