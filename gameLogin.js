function addUser(){
    player1_name=document.getElementById("player1NameInput").value;
    player2_name=document.getElementById("player2NameInput").value;

    localStorage.setItem("Player1Name",player1_name);
    localStorage.setItem("Player2Name",player2_name);

    window.location="gamePage.html";

}