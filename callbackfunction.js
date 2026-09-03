function sum(a , b){
    return a + b;
}
function sumwithmsg(clbk , msg){

    const result = clbk(20 , 30)
    const fresult = "hi" + msg + " your add is = " + result;
    console.log(fresult);

}

sumwithmsg(sum , "Mr. Deepak");




function multiplication(c , d){
    return c *  d;
}

function multiwithmessage(func , message){
    const mul = func(70 ,  56)
    const first = "hi " + message + " your multiplication is = " + mul;
    console.log(first);
}

multiwithmessage(multiplication ,  "arjun")





function calculate( e ,  f , callback){
    let result = e * f;
    callback(result);
}

function display(val){
    console.log("result " + val);

}

calculate( 40 , 60 , display)