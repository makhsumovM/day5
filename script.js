//task 1
/*function flip(num){
return num ==1 ? 0: num==0? 1 : num;
}
console.log(flip(1));
console.log(flip(0));*/

//task 2
/*function equation(a,b){
let x = b/a;
return x;
}
console.log(equation(4,5));
*/

//task 4
/*function  largestSwap(num){
    let swap = '';
    let cnt = 0;
for(let i=num; i>0; i= Math.floor(i/10)){
    cnt = i%10;
    swap += cnt;
    
}

return num < swap ? true : false;
}
console.log(largestSwap(72));*/

//task 5
/*function isPow(num){
 for(i=num; i>0; i= i/2){
    if(i%2!=0)
        {
        return false;
    }
    return true;
 }
}
console.log(isPow(16));
console.log(isPow(9));*/

//task 6
/*function isPrime(num){

    for (let i =2 ; i<num; i++){
        if(num % i==0){
            return false;
        }

    }
    return true;
}
function isPalindromePrime(num){
    let cnt= '';
    for(let i = num; i>0; i= Math.floor(i/10)){
        
        cnt += i%10;
    }
    return cnt == num && isPrime(num);
}
console.log(isPalindromePrime(131));
console.log(isPalindromePrime(121));*/



//task 7
/*function isPow(num){
    for (let i =num ; i>0; i=i/2){
        if( i%2!=0){
            return false;
        }
        return true;
    }
}
console.log(isPow(9));
console.log(isPow(16));*/

//task8 nafahmidm 
/*function sumOfPrime(num1,num2){
    let sum = num1 + num2;
    for (let i = 2; i<sum; i++){
        if (sum%i==0){
            return false;
        }
        return true;
    }
    
}
console.log(sumOfPrime(5.7));
console.log(sumOfPrime(2.9));*/

// task 9 fibonachi 

//task 10
/*function calculateExponent(num1 ,num2){
    return Math.pow(num1,num2);
}
console.log(calculateExponent(5,5));
console.log(calculateExponent(10,10));*/
 
//task 11
/*function largestSwap(num){
    let swap ='';
    let cnt =0;
    for(let i = num ; i>0; i=Math.floor(i/10)){
    
        cnt = i%10;
        swap += cnt;
    }
    return num < swap ? false : true ;
}
console.log(largestSwap(27));
console.log(largestSwap(43));
*/


//task 12
/*function isPrime(num){
    for(let i = 2; i < num ; i++){
        if(num%i==0){
            return false;
        }
        
    }
    return true;
}
function primeInRange(num1,num2){
    for (let i = num1; i <= num2; i++){
        if(isPrime(i)){
            return true;
        }
    }
    return false;
}
console.log(primeInRange(10,15));
console.log(primeInRange(62,66));*/

//task 13 ne ponel

//task 14 ne ponel
/*function solveForExp(num1, num2){
    let cnt = 0;
    for (let i = num1; i<=num2; i++){
        i = num1**num1;
        cnt++;
    }
    return cnt;
}
console.log(solveForExp(4,1024));*/



//task 15

/*function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }
    let f = 1;
    for (let i= 2;  i<=num; i++){
        f=f*i;
    }
    return f;
}
console.log(factorial(5));*/

/*function sumOfNumbers(n){
    let rakam = '';
    let cnt = 0;
    for (let i = n; i>0; i=Math.floor(i/10)){
        rakam = Number(rakam)+i%10;
    }
    return rakam;
}
console.log(sumOfNumbers(12345));*/


//task 15 
/*function nTablesPlusOne(num){
    for(let i = num; i<=num*10; i=i+num){
        console.log(i+1)
    }
    return console.log('')
}
console.log(nTablesPlusOne(7))*/


//task 16
/*function isPalindromePrime(n){
    let pal = '';
    for(let i = n; i>0; i= Math.floor(i/10)){
        pal +=i%10;
    }
    return n==pal?true:false;
}
console.log(isPalindromePrime(121));
console.log(isPalindromePrime(131));*/
