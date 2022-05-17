const btn = document.querySelector('#down')

window.onscroll = () =>{
    if (scrollY >= 450){
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.onclick = () =>{
    scroll ({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}