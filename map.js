Array.prototype.map1 = function(fun, thisarg) {
    thisarg = thisarg||null;
    var result=[];
    var indArr;
    var arr=this;
    for(indArr in arr) {
        if(typeof arr[indArr] !== 'function') {
            var temp=fun.apply(thisarg,[arr,indArr]);
            result.push(temp);
        }
    }
    return result;
}

var student=[
    {name: 'id1'},
    {name: 'id2'},
    {name: 'id3'},
    {name: 'id4'},
    {name: 'id5'}
];
/*
finalResult=map1.apply(
    student,
    [
        function(arr,element){
            return arr[element].name;
        },
    ]
)*/
finalResult=student.map1(function(arr,element){
    return arr[element].name;
});
console.log(finalResult);