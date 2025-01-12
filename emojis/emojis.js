const emojis = [
    { text: "🤑 I would like to have a lot of money", color: "yellow" },
    { text: "😘 to help all the people I love", color: "pink" },
    { text: "and be able to buy everything you want", color: "pink" },
    { text: "🗺️ and travel the world", color: "yellow" },
    { text: "😻", color: "blue" },
    { text: "life would be wonderful", color: "pink" },
    { text: "I'm sure I'll get it", color: "yellow" },
    { text: "💫 you just have to wish it", color: "blue" },
    { text: "💪 with a lot of faith", color: "pink" },
    { text: "👷‍♀️ and work hard", color: "yellow" },
    { text: "Every day", color: "blue" },
    { text: "🏆 😄 🙂", color: "pink" },
    { text: "👣 step by step", color: "yellow" },
    { text: "😍 and enjoy the road", color: "blue" },
];
const gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
}
let currentIndex = 0;
function showNextEmoji() {
    if (currentIndex < emojis.length) {
        const cells = document.querySelectorAll(".cell");
        const emoji = emojis[currentIndex];
        cells[currentIndex].textContent = emoji.text;
        cells[currentIndex].classList.add(emoji.color);
        cells[currentIndex].style.opacity = 1; 
        currentIndex++;
    } else {
        clearInterval(animationInterval); 
    }
}
const animationInterval = setInterval(showNextEmoji, 1500); 
