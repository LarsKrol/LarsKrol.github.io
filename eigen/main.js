const imgInput = document.querySelector('.img-input');
getPhoto()

const myBtn = document.querySelector('.btn');
myBtn.addEventListener('click', function() {
    // alert('Er is op de button geklikt');

    const link = imgInput.value;
    upimg(link);
});

function upimg(imgLink) {
    let frame = document.querySelector('.frame');
    let img = document.createElement("IMG");
    img.src = imgLink;
    img.className= "picture";
    img.width = "100";
    frame.appendChild(img);
    localStorage.setItem("foto", imgInput.value)
}

function getPhoto (){
    let savedImg = localStorage.getItem("foto");
    let frame = document.querySelector('.frame');
    let img = document.createElement("IMG");
    img.src = savedImg;
    img.className= "picture";
    img.width = "100";
    frame.appendChild(img);
}