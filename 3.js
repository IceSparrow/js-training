function sumArray(someArray){
if (Array.isArray(someArray)){
    const result = someArray.reduce ((sum, num) => {
          return sum + num
},0);
    console.log (result)
}
}

sumArray ([1,1,1])

