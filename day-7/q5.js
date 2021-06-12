const cylinder = {
    pi : Math.PI,
    r : 10,
    h : 10
};
function value(){
    return (2*cylinder.pi*cylinder.r*cylinder.r*cylinder.h).toFixed(4);
}
console.log(value());