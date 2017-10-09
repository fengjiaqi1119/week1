/**
 * Created by Administrator on 2017/10/9.
 */
var arr=[5,8,6,1,2,5,8];
var result=[];
for(var i in arr){
    if(result.indexOf(arr[i])==-1){
        result.push(arr[i]);
    }
}
console.log(result);