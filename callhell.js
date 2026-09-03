function test1(cb){
    setTimeout(()=>{
        console.log("test1")
        cb();
    } , 4000)
}

function test2(cb){

    setTimeout(() => {
        setTimeout(()=>{
            
        console.log("test2")
        cb();

        } , 2000)

        
    })
}


test1(()=>{
    test2();
});