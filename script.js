const fulImgBox=document.getElementById("fulImgBox"),
fulImg=document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src=reference;
}

function closeImg(){
    fulImgBox.style.display="none";
}

window.addEventListener('click',e => e.target == fulImgBox && closeImg())