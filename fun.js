// //with return type and parametres
function simple_intrest(principle,rate,time)
{
    let si=(principle*rate*time)/100;
    return si;
}
let result= simple_intrest(1000,3,12);
console.log("simple intrest is:"+ result)

// //with return type without parameters
// function simple_intrest()
// {
//     let principle=1000;
//     let rate=3;
//     let time=20;
//     let si=(principle*rate*time)/100;
//     return si;
// }
// let result=simple_intrest()
// console.log("the simple intrest is:"+result)
// //without return type and with parameters
// function simple_intrest(principle,rate,time)
// {
// let si =(principle*rate*time)/100;
// console.log("simple intrest is:"+si);
// }
// simple_intrest(1000,2,13);
// //without return and parameters
// function simple_intrest()
// {
//     let principle=2000;
//     let rate=3;
//     let time=20;
//     let si=(principle*rate*time)/100;
//     console.log("simple intrest is:"+si);
// }
// simple_intrest();