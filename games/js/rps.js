function play(user) {
  let outcomes = ["rock", "paper", "scissors"];
  let computer = outcomes[Math.floor(Math.random() * 3)];
  document.querySelector("#user").innerHTML = user;
  document.querySelector("#computer").innerHTML = computer;


  // user can win if, user is paper
  if (user == computer)
    document.querySelector("#status").innerHTML = "Draw";
  else if (user == "rock" && computer == "paper" || user == "scissors" && computer == "rock" || user == "paper" && computer == "scissors")
    document.querySelector("#status").innerHTML = "Computer won";
  else if (user == "paper" && computer == "rock" || user == "rock" && computer == "scissors" || user == "scissors" && computer == "paper")
    document.querySelector("#status").innerHTML = "User won";
}