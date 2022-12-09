Array.prototype.mapPolyFill = function (callbackFn){
    const output = []   
    this.forEach((element)=>{
        output.push(callbackFn(element))
    })
    return output
}

console.log([1,2,3,3,4].mapPolyFill((e)=>e*e*16))