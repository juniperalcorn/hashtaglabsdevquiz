const myImage = document.getElementById("myimage")

function checkImage(element){
    const bounding = element.getBoundingClientRect()
    return (bounding.top >=0 && 
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
}

function alertVisible(){
    if (checkImage(myImage)){
        console.log('visible')
    }
}

let countImage = function() {
    let repeatCount = setInterval(alertVisible, 2000);
}

countImage();