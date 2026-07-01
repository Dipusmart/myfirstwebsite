let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

const resetGame = () => {
    turnO = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `🎉 Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxes.forEach(box => box.disabled = true);
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a,b,c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            showWinner(boxes[a].innerText);
            return;
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
