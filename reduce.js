Reduce = function(arr,accumulator,fun,thisarg) {
    var indArr;
    for(indArr in arr) {
        if(typeof arr[indArr] !== 'function'){
            accumulator=fun.apply(thisarg,[accumulator,arr[indArr]]);
        }
    }
    return accumulator;
}

var arr = [2,3,4,5];
var accumulator=0;
var ans = Reduce(
    arr,
    accumulator,
    function(accumulator,element){
        return accumulator+element;
    }
);
console.log(ans);