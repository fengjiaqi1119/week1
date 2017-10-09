/**
 * Created by Administrator on 2017/10/9.
 */
var arr=[5,8,6,1,2,5,8];
function quchong(array){
    var result=[];
    for(var i=0;i<array.length;i++){
        if(result.indexOf(array[i])==-1){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(quchong(arr));