a.PRINT ODD NUMBERS IN Array
var array=[1,2,3,4,5,6,7,8,9,];
anonymous  :  function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  }(array);

  b.Convert all the strings to title caps in a string array
anonymous : 
var str="my name is ayesha";
function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}(str)

c.Sum of all numbers in an array
Anonymous:
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}(a);


d.Return all the prime numbers in an array
Anonymous Function:
                 

let n=34;
function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
      console.log(i);
      }
   }
}
(n);



e.Return all the palindromes in an array

Anonymous Function :  function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }(arr,n)

    f.Return median of two sorted arrays of the same size.
Anonymous:
function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
};


g.Remove duplicates from an array

anonymous :
var array=[1,1,2,3,4,5];
function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 (array);

 h.Rotate an array by k times
 anonymous :
 function (a, n, k)
 {
     k = k % n;
   
     for (let i = 0; i < n; i++) {
         if (i < k) {
   
            
             console.log(a[n + i - k] + " ");
         }
         else {
   
             
             console.log((a[i - k]) + " ");
         }
     }
    
 }
   let Array = [1, 2, 3, 4, 5];
 let N = Array.length;
 let K = 2;
 (Array, N, K);



 A)Print odd numbers in an array
 anonymous  :  function(array){
                   for(var i = 0 ; i< array.length ; i++){
                         if(array[i]%2!=0){
                            console.log(array[i])
                         } 
                    }
                 }
 IIFE :       (function(array){
              for(var i = 0 ; i< array.length ; i++){
                         if(array[i]%2!=0){
                            console.log(array[i])
                         } 
                    }
              })([1,2,3,4])
              
 Arrow Function    oddNumbers = (array) => {
                    for(var i = 0 ; i< array.length ; i++){
                         if(array[i]%2!=0){
                            console.log(array[i])
                         } 
                    }
                         }
                         
    B)Convert all the strings to title caps in a string array
    
  anonymous :   function (str) {
                     str = str.toLowerCase().split(' ');
                     for (var i = 0; i < str.length; i++) {
                       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                     } 
                     return str.join(' ');
                   }
 IIFE : (function (str) {
                     str = str.toLowerCase().split(' ');
                     for (var i = 0; i < str.length; i++) {
                       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                     } 
                     return str.join(' ');
                   })("MUDRA IS MY NAME");
  Arrow Function : titleCase = (str) => {
                     str = str.toLowerCase().split(' ');
                     for (var i = 0; i < str.length; i++) {
                       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                     } 
                     return str.join(' ');
                   }            
 C)Sum of all numbers in an array 
 anonymous  :  function(array){
                   var sum = 0;
                   for(var i = 0 ; i< array.length ; i++){
                      sum = sum + array[i];
                    }
                    return sum;
                 }
 IIFE :       (function(array){
              var sum = 0;
                   for(var i = 0 ; i< array.length ; i++){
                      sum = sum + array[i];
                    }
                    return sum;
              })([1,2,3,4])
 Arrow:       sum = (array)=>{
              var sum = 0;
                   for(var i = 0 ; i< array.length ; i++){
                      sum = sum + array[i];
                    }
                    return sum;
                    }
 D)Return all the prime numbers in an array
     Anonymous Function:
                  function(numArray){
                       numArray = numArray.filter((number) => {
                         for (var i = 2; i <= Math.sqrt(number); i++) {
                           if (number % i === 0) return false;
                         }
                         return true;
                       });
                       console.log(numArray);
                   }
    IIFE 
                    (  
                    function(numArray){
                       numArray = numArray.filter((number) => {
                         for (var i = 2; i <= Math.sqrt(number); i++) {
                           if (number % i === 0) return false;
                         }
                         return true;
                       });
                       console.log(numArray);
                   })([1,2,3,4])
     Arrow Function :
     
        primeNumber = (numArray) => {
                       numArray = numArray.filter((number) => {
                         for (var i = 2; i <= Math.sqrt(number); i++) {
                           if (number % i === 0) return false;
                         }
                         return true;
                       });
                       console.log(numArray);
                   }
                   
 E)  Return all the palindromes in an array
 
 function isPalindrome(N)
     {
         let str = "" + N;
         let len = str.length;
         for (let i = 0; i < parseInt(len / 2, 10); i++)
         {
             if (str[i] != str[len - 1 - i ])
                 return false;
         }
         return true;
     }
     
   Anonymous Function :  function (arr, n)
     {
        
         for (let i = 0; i < n; i++)
         {
             let ans = isPalindrome(arr[i]);
             if (ans == false)
                 return false;
         }
         return true;
     }
     
     IIFE : 
 
               (  function (arr, n)
         {
            
             for (let i = 0; i < n; i++)
             {
                 let ans = isPalindrome(arr[i]);
                 if (ans == false)
                     return false;
             }
             return true;
         })([1,2,3] , 3)
 
 Arrow : 
 Palindrome = (arr, n) =>
     {
    
         for (let i = 0; i < n; i++)
         {
             let ans = isPalindrome(arr[i]);
             if (ans == false)
                 return false;
         }
         return true;
     }
 F.Return median of two sorted arrays of same size
 G.Remove duplicates from an Array
 Anonymous Function : function(array){
                         let dup = [...new Set(array)];
                         console.log(dup);
                       }
 IIFE :                (function(array){
                         let dup = [...new Set(array)];
                         console.log(dup);
                        })([1,1,2,3,4])
                        
 
 H.Rotate an array by K times
 
 function reverse(array , li , ri){
  while(li < ri){
       int temp = a[li];
       a[li]= a[ri];
       a[ri] = temp;
       
       li++;
       ri--;
     }
 }
 Anonymous function : function(array , k){
                           k = k % a.length;
                             if(k < 0){
                               k += a.length;
                             }
 
                             reverse(a, 0, a.length - k - 1);
                             reverse(a, a.length - k, a.length - 1);
                             reverse(a, 0, a.length - 1);

    }
                           
    IIFE :   (function(array , k){
                           k = k % a.length;
                             if(k < 0){
                               k += a.length;
                             }
 
                             reverse(a, 0, a.length - k - 1);
                             reverse(a, a.length - k, a.length - 1);
                             reverse(a, 0, a.length - 1);
                           })([1,2,3,4] , 2)
                           

 