const form= document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Username= document.querySelector("#inp")
    const name=Username.value;
    const phno= document.querySelector("#inpup")
    const phone=phno.value;
    const message= document.querySelector("#inpux")
    const msg=message.value;
console.log(name,phone,msg);
})