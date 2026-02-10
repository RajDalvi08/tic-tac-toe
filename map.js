let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let turn0 = true;
let NewGame = document.querySelector(".NewGame")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")


const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]

boxes.forEach((box) => {
  box.addEventListener("click", () => {
     console.log("box was clicked");
     if (turn0) {
        box.innerText = "0"
        turn0 = false;
     }
     else{
        box.innerText = "X"
        turn0 = true;
     }
     box.disabled = true;
     checkWinner();
  })
 
});
const resetGame = () => {
    turn0 =true;
    enableboxes();
     msg.classList.add("hide");
}

const disableboxes = () => {
   
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableboxes = () => {
   
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
    
    
  }
}

const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS! THE WINNER IS 🎉🎊🎈 ${winner}`
    msg.classList.remove("hide");
    disableboxes();

}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner", posval1);
                showWinner(posval1);
            }
        }

    }
};
NewGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);