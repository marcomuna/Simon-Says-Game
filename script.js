let redbtn = document.querySelector("#red");

redbtn.addEventListener("click",(event)=>{
    console.log(this.event);
    
    console.log("button clicked");    
});