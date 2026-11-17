// https://github.com/muthukrishs2001/RGB-Generator.git

function generateColor() {

    let rgbColor = document.getElementById("color");
    let overallBack = document.getElementById("overallBack");

    let R = Math.floor(Math.random()*256),
        G = Math.floor(Math.random()*256),
        B = Math.floor(Math.random()*256);

    rgbColor.innerText = `RGB(${R}, ${G}, ${B})`;
    return overallBack.style.backgroundColor = `rgb(${R},${G},${B})`

}

function resetColor() {

    let rgbColor = document.getElementById("color");
    let overallBack = document.getElementById("overallBack");

    rgbColor.innerText = `RGB(${0}, ${0}, ${0})`;
    return overallBack.style.backgroundColor = `rgb(${255}, ${255}, ${255})`

}