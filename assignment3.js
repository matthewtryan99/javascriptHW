let ary = [1,5,6,2,8,10,12,16];
let posAry = ary.filter(function(element){
    return (element % 2) == 0;
})

console.log(posAry);