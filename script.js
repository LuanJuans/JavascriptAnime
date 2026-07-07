function upDate(previewPic){

    console.log("Event Triggered");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo(){

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}
