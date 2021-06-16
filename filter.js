Filter=function(arr,fun,criteria,thisarg) {
    thisarg=thisarg||null;
    var arrInd;
    var result=[];
    for(arrInd in arr) {
        if(typeof arr[arrInd] !== 'function'){
            var ans=fun.apply(thisarg,[arr[arrInd],criteria]);
            if(ans !== undefined){
                result.push(ans);
            }
        }
    }
    return result;
};
var student=[
    {
        name: 'id1',
        gender: 'male'
    },
    {
        name: 'id2',
        gender: 'female'
    },
    {
        name: 'id3',
        gender: 'female'
    },
    {
        name: 'id4',
        gender: 'male'
    },
    {
        name: 'id5',
        gender: 'male'
    }
];
var result = Filter(
    student,
    function(element, compare ) {
        if(element.gender === compare) {
            return element.name;
        }
        else {
            return undefined;
        }
    },
    'male'
);
console.log(result);