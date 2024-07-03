let footerLower = document.querySelector(".footerLower")
let menuBarButton = document.querySelector(".menuBar")
let navigationSlider = document.querySelector(".navigation")
let button = document.querySelectorAll("#Button")
let display = document.querySelector(".display")
let i = false

footerLower.innerHTML="<p style='color:white;margin:0;'>copyright &copy;:<a href='https://eninja-in.github.io/PortFolio/'>eNinja-In 2024</a></p>"
display.innerHTML = `<h1>Welcome</h1><p>Liquer Managemant Systerm<p><span><bold>Developer : </bold>eNinja-In</span>`

menuBarButton.onclick = () => {
    if(i==false){
        navigationSlider.style = "left:0px;";
        i = true;    
    }
    else{
        navigationSlider.style = "left:-350px";
        i = false;
    }

}
button.forEach((key) => {
    key.onclick = () => {
        display.innerHTML = `<h1>Welcome</h2><p>ERROR : Not DataBase Found</p>`
    }
})