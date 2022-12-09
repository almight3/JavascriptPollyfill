Array.prototype.reducePolyFill = function(cb,initialValue){
    let accumlate =  initialValue;
    for(let i = 0;i<this.length ; i++){
        accumlate = cb(accumlate,this[i])
    }
    return accumlate
}

console.log([1,23,445,66].reducePolyFill((accumlate,element)=>{
    return accumlate + element
},10))