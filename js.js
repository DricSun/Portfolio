const burger = document.getElementById('burger');
const burgerContent = document.getElementById('burgerContent')

burger.addEventListener('click', ()=>{
    if(burgerContent.style.display == "none"){
        burgerContent.style.display = "flex"
    }else{
        burgerContent.style.display = "none"
    }
})


