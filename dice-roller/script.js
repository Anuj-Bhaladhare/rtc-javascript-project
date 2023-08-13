const diceImages = document.querySelector("#dice-image");
const getButton = document.querySelector("button");
let min = 1;
let max = 6;

// ================= FIRST LOGIC ==========================
getButton.addEventListener("click", () => {
    let random = Math.floor(Math.random() * (max - min)) + min;
    diceImages.src = `./image/${random}.png`;
})

// ================= SECOND LOGIC ===========================
// getButton.addEventListener("click", () => {
//     let random = Math.floor(Math.random() * (max - min)) + min;
//     if(random == 1 ){
//         diceImages.src = `./image/1.png`;
//     }
//     else if(random == 2 ){
//         diceImages.src = `./image/2.png`;
//     }
//     else if(random == 3 ){
//         diceImages.src = `./image/3.png`;
//     }
//     else if(random == 4 ){
//         diceImages.src = `./image/4.png`;
//     }
//     else if(random == 5 ){
//         diceImages.src = `./image/5.png`;
//     }
//     else{
//         diceImages.src = `./image/6.png`;
//     }
// });