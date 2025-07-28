const rollBtn = document.getElementById("roll-btn");
const res = document.getElementById("dice-result");

rollBtn.addEventListener("click", () => {
    const roll = Math.floor(Math.random()*6) + 1;
    res.textContent = `You rolled: ${roll} 🎲`;
    console.log(`Rolled a: ${roll}`);
});


