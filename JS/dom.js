function result(){
    //take user input and display in h2 heading
    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;

    //valid age for vote casting 
    if(inputData>=18){
        alert("valid Data");
    }
    else{
        alert("Not Valid");
    }

    let changeColor=document.getElementById('text');
    changeColor.style.color="brown";

    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="beige";
}

let para=document.getElementById("paratext");
function changetextColor(){
    para.style.backgroundColor="#"+ Math.floor(Math.random() * 167772)
}
para.addEventListener('mouseover', changetextColor);