/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<2) return n
    let mod=1000000007;
    let a=0,b=0,r=1;
    for(let i=2;i<=n;i++){
        a=b;
        b=r;
        r=(a+b)%mod
    }
    return r
};