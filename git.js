const form= document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.scroll({
        top: 500,
        left: 100,
        behavior: "smooth",
      });
    const Username= document.querySelector("#inp")
    const url="https://api.github.com/users/"
    const name=Username.value;
    const Input=url+name;
    const result=document.querySelector(".partition");
    const icon=document.querySelector(".avatar");
    async function res(){
        const response= await fetch(Input);
        const data=await response.json();
        result.innerHTML=`<span>Username:${data.name}</span>
        <span>location:${data.location}</span>
        <span>public repos:${data.public_repos}</span>
        <span>followers:${data.followers}</span>
        <span>following:${data.following}</span>
        <button><a href="${data.html_url}" target="_blank">Click</a></button>`
        icon.innerHTML=`<img src="${data.avatar_url}" alt="icon">`
        
    }
    res();
})