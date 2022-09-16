//check prime num.. 
let num=0;
let count = 0;

    for( let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }if(count>2){
        console.log("No");
    }else{
        console.log("Yes");
    }

   
//check palindrom..


let str="sangeeta";


    let a=0;
    let b=0;

    for(let i=0; i<=str.length-1; i++){
        a=str[i];
    }
    for(let i=str.length-1; i>=0; i--){
        b=str[i];
    }
    if(a==b){
        console.log("Yes");
    }else{
        console.log("No");
    }
    