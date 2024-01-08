let bars = document.querySelector(".bars");
let x = document.querySelector(".x");
let div_bars = document.querySelector(".div_bars");
let c1_h2 = document.querySelector(".c1_h2");
let Ball = document.querySelector(".Ball");
let hr1 = document.querySelector(".hr1");
let hr2 = document.querySelector(".hr2");
let hr3 = document.querySelector(".hr3");
let image1 = document.querySelector(".image1");
let img_p = document.querySelector(".img_p");
let info = document.querySelectorAll(".info");
let who = document.querySelectorAll(".who");
let arr_down = document.querySelector(".arr_down");
let div_bars_items = document.querySelector(".div_bars_items");
let text_c1 = "Welcome to our website!We are thrilled to have you join our family. Feel free to reach out to us anytime. Our team is ready to assist you and listen to your inquiries and suggestions.Let' work together in integrating newcomers into our community. We believe in the importance of collaboration and that we are all one. We appreciate your contribution and assistance in achieving our shared vision.Share"
bars.onclick = function(){
    div_bars.style.transform = "translate(0)";
}
x.onclick = function(){
    div_bars.style.transform = "translate(-2000px)";
}





let index_1 = 1;

function Write_c1(){
    let write_content_C1 = text_c1.slice(0,index_1);
    
    c1_h2.innerHTML = write_content_C1
    index_1 ++;
}

setInterval(Write_c1,100)



let text_Ball = 1;

function Ball_func(){
    Ball.innerHTML = `${text_Ball} M`;
    if (text_Ball === 9){
        clearInterval(inter_one);
    }else{
        text_Ball++
    }
}




window.addEventListener('scroll', function() {
    if (window.scrollY >= 300) {
        hr1.classList.add("w-1/2")
    }
    if (window.scrollY >= 1200) {
        hr2.classList.add("w-1/2")
    }
    if (window.scrollY >= 1500) {
        hr3.classList.add("w-1/2")
    }
});

let each_1 =  who.forEach(ele => {

    ele.addEventListener("click" , function(){
        scroll({
            top:666.6666870117188,
            behavior: "smooth"
        })
    })

});
let each_2 =  info.forEach(ele => {

    ele.addEventListener("click" , function(){
        scroll({
            top:1325.3333740234375,
            behavior: "smooth"
        })
    })

});

let inter_one = setInterval(Ball_func,500)

window.addEventListener("scroll" , function(){
    if(window.scrollY > 300){
        arr_down.style.display = "block";
    }
    else if(window.scrollY < 300){
        arr_down.style.display = "none";
    }
})


arr_down.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
})



window.onscroll =  function(){
setTimeout(scr,700)
}

function scr(){
    image1.style.transform = 'translate(0)'
    img_p.style.transform = 'translate(0)'
}