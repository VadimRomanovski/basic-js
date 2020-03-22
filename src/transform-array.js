module.exports = function transform( arr ) {
    if (!(Array.isArray(arr))) throw new Error();
    if (arr.length == 0) return arr;
    for (let i=0; i<arr.length; i++){
        if(arr[i]=="--discard-next"){
            if(i+1==arr.length){
                arr.splice(i, 1);
                return arr;
            }else{
                arr.splice(i, 2);
                return arr;  
            }
        }else if(arr[i]=="--discard-prev"){
            if(i==0){
                arr.splice(i, 1);
                return arr;
            }else{
                arr.splice(i-1, 2);
                return arr;
            }
        }else if(arr[i]=="--double-next"){
            if(i+1==arr.length){
                arr.splice(i, 1);
                return arr;
            }else{
                arr.splice(i, 1, arr[i+1]);
                return arr;
            }
        }else if(arr[i]=="--double-prev"){
            if(i==0){
                arr.splice(i, 1);
                return arr;
            }else{
                arr.splice(i, 1, arr[i-1]);
                return arr;
            }
        }
    }
  }
