function sum(a , b){
    return a + b;
}
function sumwithmsg(clbk , msg){

    const result = clbk(20 , 30)
    const fresult = "hi" + msg + " your add is = " + result;
    console.log(fresult);

}

sumwithmsg(sum , "Mr. Deepak");