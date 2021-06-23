function foo1(){

}
foo1();

foo1.prototype.show=function(){
    console.log(1);
}
console.log(foo1.prototype);
foo1.prototype.show();

a={
    name:'pranav'
}
b=Object.create(a);
a.age=20;
console.log(b.__proto__);
//b.prototype.show=function(){
//   console.log(this.name);
}