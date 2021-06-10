var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max=0;
var max_item;
for (const i of arr1) {
    var cur_val=(arr1.filter(item => item == i).length);
    if(cur_val>max)
    {
        max=cur_val;
        max_item=i;
    }
}
console.log(max);
console.log(max_item);