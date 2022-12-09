Array.prototype.filterPoly = function(callbackFn){
      let output = [];
      this.forEach((element,index)=>{
        if(callbackFn(element,index,this)){
             output.push(element)
        }
      })
      return output
}

console.log([1,10,15,2,3,45,50].filter(e=>e===50))
