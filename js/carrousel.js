/* CARROUSEL */
const slide = document.getElementById('slide');
let i = 0; // <- index number
const thumbnails = document.getElementsByClassName("thumbnail");
const slides = [ // <- our pictures array
    "To see or not to see, 97x91cm, oil on canvas, 2022",
    "Propaganda show, 97x87cm , oil on canvas, 2022",
    "Hey Chomsky, I am out, 62x45 cm, oil on canvas, 2022",
    "Freedom Lavender road, 130x100 cm, acrylic on canvas, 2022",
    "Guardian Angel, 210x115 cm, acrylic on canvas, 2022",
    "The kiss of Angels, triptic 305x115 cm, acrylic on canvas, 2021",
    "Morpheus, 100x80 cm, acrylic on canvas, 2021",
    "New Freedom Order, 100x80 cm, acrylic on canvas, 2022",
    "See you, 100x80 cm,  acrylic on canvas, 2021",
    "Meditation Trip, 100x73 cm, acrylic on canvas, 2021",
    "Foodporn, 80x60 cm, acrylic on canvas, 2021",
    "Disconnection, 80x60 cm, acrylic on canvas, 2021",
    "Wanna play, 80x60 cm , acrylic on canvas, 2021",
    "Uniformity, 150x100 cm, acrylic on canvas, 2021",
    "Little Red Riding Hood wolf hunter, 115x75 cm, acrylic on canvas, 2021",
    "Delicacy of democracy, 100x80 cm, acrylic on canvas, 2021",
    "Der Chip Match Frei, 100x70 cm, acrylic on canvas, 2021"
]

function showSlide() { // <- main function to output slide
    if (i >= slides.length) { i = 0 }
    if (i < 0) { i = slides.length - 1 }
    slide.src = "./images/criticart/" + slides[i] + ".jpg";
    slide.alt = slides[i];
    for (t = 0; t < thumbnails.length; t++) {
        thumbnails[t].classList.remove("active");
    }
    thumbnails[i].classList.add("active");
    document.getElementById("caption").innerHTML = slides[i];    
}

function goToSlide(n) { // <- in case we click on a thumbnail
    clearInterval(lauchCarrousel);
    i = Number(n);
    showSlide();
}

function next() { // <- next button
    clearInterval(lauchCarrousel);
    i++;
    showSlide();
}

function prev() { // <- prev button
    clearInterval(lauchCarrousel);
    i--;
    showSlide();
}

function carrousel() {
    showSlide()
    i++;
}

carrousel(); // <- to immediatly skip the html hardcorded 'img'
const lauchCarrousel = setInterval(carrousel, 5000); // <- set interval call to function carrousel each 5 seconds