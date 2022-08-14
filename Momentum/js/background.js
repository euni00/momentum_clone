const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImages = document.createElement("img");

console.log(bgImages);

bgImages.src = `img/${chosenImage}`;

// console.log(bgimage);

document.body.appendChild(bgImages);