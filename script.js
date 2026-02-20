


const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
    reveals.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight-100){
            el.classList.add("active");
        }
    });
});




const text="Innovating Through Technology";
let i=0;
function typing(){
    if(i<text.length){
        document.querySelector(".typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,80);
    }
}
typing();

