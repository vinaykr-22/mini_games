const resultDisplay = document.getElementById("rps-result");
const buttons = document.querySelectorAll(".rps-buttons .action-btn");

const choices = ["Rock", "Paper", "Scissors"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random()*choices.length)];

        let result = "";

        if (userChoice === computerChoice) {
            result = "It's a Draw! 🤝";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You Win! 🎉";
        } else {
            result = "You Lose! 😢";
        }
        console.log(`Clicked: ${userChoice}`);

        resultDisplay.textContent = `You chose ${userChoice} | Computer chose ${computerChoice} → ${result}`;
    });
});
