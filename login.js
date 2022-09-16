//check prime num.. 

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
let N=

let a;
    let b;
    for(let i=0; i<=N-1; i++){
        a=str[i];
    }
    for(let i=N-1; i>=0; i--){
        b=str[i];
    }
    if(a==b){
        console.log("Yes");
    }else{
        console.log("No");
    }
    