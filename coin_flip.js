const flipBtn = document.getElementById("flip-btn");
const res = document.getElementById("coin-result");

flipBtn.addEventListener("click", () => {
    const rand = Math.floor(Math.random()*2);
    const outcome = rand === 0 ? "Heads 🪙" : "Tails 🪙";
    res.textContent = `Result: ${outcome}`;
    console.log(`Landed on: ${outcome}`);
});


