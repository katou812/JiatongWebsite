let currentIndex = 0;
const photoElements = document.querySelectorAll(".photo");

function changePhoto(n) {
    currentIndex += n;
    if (currentIndex < 0) {
        currentIndex = photoElements.length - 1;
    } else if (currentIndex >= photoElements.length) {
        currentIndex = 0;
    }
    showPhoto();
}

function showPhoto() {
    photoElements.forEach((photo, index) => {
        if (index === currentIndex) {
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }
    });
}

showPhoto();


