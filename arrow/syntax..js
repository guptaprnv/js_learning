//don'use it in call,apply,bind function

num = 100;
console.log(this);
function fun() {
  let num = 200;
  return new Promise((resolve,reject) =>{
    
  }
   );
  
}
fun();

obj = {
  num: 10,
  later: function () {
    setTimeout(() => {
      console.log(this);
      num++;
      console.log(this.num);
    }, 100);
  },
};
obj.later();
