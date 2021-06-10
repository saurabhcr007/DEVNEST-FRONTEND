function first(input,n){
    var d1 = input;
    if(n===undefined)
    {
        return(d1[0])
    }
    else if (n<0) {
        return([])
    }
    else{
        return(input.splice(0,n))
    }
}    
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
