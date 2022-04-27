/* LOADING SPINNER */
const page = document.getElementById('container');
const main = document.querySelector('main');
const loadingSpinner = document.createElement("div");
loadingSpinner.classList.add('loadingSpinner');
loadingSpinner.innerHTML = `<div class="lds-lines"><div></div><div></div><div></div></div>`;
page.appendChild(loadingSpinner); // <- add the loading spinner element to our 'html'

setTimeout(() => {
    loadingSpinner.remove(); // <- removes the loading spinner from 'html'
    main.style.animation = "fadein 2500ms linear"; // <- animation
    main.style.opacity = "1";
}, 3500) // <- await 3.5 seconds (starting from loading)

/* IMG VIEWER */
const imgViewer = document.querySelector('.img-viewer');
let slideshow, f, k; // <- init variables for keyboard event listener navigation purpose

function view(folder, name, i) { // <- main img-viewer function
    const img = `<img class="current" src="../images/${folder}/${name}.jpg" alt="${name}.jpg">`;
    const closeBtn = `<button class="close" onclick="closeViewer()"><i class="fas fa-times"></i></button>`;
    const prevBtn = `<button class="prev" onclick="prev('${folder}', ${i})"><i class="fa fa-angle-left"></i></button>`;
    const nextBtn = `<button class="next" onclick="next('${folder}', ${i})"><i class="fa fa-angle-right""></i></button>`;
    imgViewer.innerHTML = img + closeBtn + nextBtn + prevBtn;
    document.querySelector('body').style.overflow = "hidden";
    imgViewer.style.display = "flex";
    slideshow = true;
    k = i;
    f = folder;
}

const imgArray = []; // <- init our img Array
const images = document.querySelectorAll(".img-container > div > img"); // <- select our images from the DOM
images.forEach(image => {
    imgArray.push(image.alt.split(".jpg")[0]); // <- we use the 'alt' 'html' attribute to get our image name
});

function closeViewer() { // <- close img-viewer
    slideshow = false;
    imgViewer.style.display = "none";
    document.querySelector('body').style.overflow = "auto";
}
function prev(folder, i) { // <- go to previous img
    i--;
    if (i < 0) {
        i = imgArray.length - 1;
    }
    view(folder, imgArray[i], i);
}
function next(folder, i) { // <- go to next img
    i++;
    if (i >= imgArray.length) {
        i = 0;
    }
    view(folder, imgArray[i], i);
}

document.querySelector('body').addEventListener("keydown", (e) => { // <- keyboard arrows img-viewer navigation
    if (slideshow) { // <- fires only if slideshow is 'on'
        switch (e.key) {
            case "ArrowRight":
                next(f, k);
                break;
            case "ArrowLeft":
                prev(f, k);
                break;
            default:
                break;
        }
    }
    return
})

/* TOGGLES OPACITY TO THE 'backToTop button' */
addEventListener('scroll', () => {
    if (scrollY > 200) {
        backToTopBtn.style.opacity = "1";
    } else {
        backToTopBtn.style.opacity = "0";
    }
})