const form= document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Username= document.querySelector("#inpu")
    const name=Username.value;
    const phno= document.querySelector("#inpup")
    const phone=phno.value;
    const message= document.querySelector("#inpux")
    const msg=message.value;
    if(isNaN(phone) || (phone+ '').length!=10){
        alert("PLEASE ENTER A VALID NO")
    }
    else{

        alert("THANKS FOR CONTACTING")
    }
    Username.value="";
    phno.value="";
    message.value="";
})