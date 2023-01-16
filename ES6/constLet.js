function myFunction1(){
    var a = "hello";
    if(true){
        var a = "bye";
        console.log(a); //bye
    }
    console.log(a); //bye
}
function myFunction2(){
    let a = "hello";
    if(true){
        let a = "bye";
        console.log(a); //bye
    }
    console.log(a); //hello
}
myFunction1();
myFunction2();
