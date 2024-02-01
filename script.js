document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playerNumber').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            findPlayer(); // Call your function
        }
    });
});

function findPlayer() {
  
  let playerNumber = Number(document.getElementById('playerNumber').value);
  console.log(playerNumber);
  
  fetch("player_data_website.json")
    .then(response => response.json())
    .then(data => {
            // Filter players with jersey_number playerNumber
            let player = data.filter(player => player.jersey_number == playerNumber);

        console.log(`Player Name: ${player.info}`);

        if (player.length == 0) {document.getElementById('playerName1').textContent = 'No players found';}
        if (player.length > 0) {document.getElementById("playerName1").textContent = player[0].info;}
        if (player.length > 1) {document.getElementById("playerName2").textContent = player[1].info;}
        if (player.length > 2) {document.getElementById("playerName3").textContent = player[2].info;}
        if (player.length > 3) {document.getElementById("playerName4").textContent = player[3].info;}
        if (player.length > 4) {document.getElementById("playerName5").textContent = player[4].info;}
        if (player.length > 5) {document.getElementById("playerName6").textContent = player[5].info;}
        if (player.length > 6) {document.getElementById("playerName7").textContent = player[6].info;}
        if (player.length > 7) {document.getElementById("playerName8").textContent = player[7].info;}
        if (player.length > 8) {document.getElementById("playerName9").textContent = player[8].info;}
        if (player.length > 9) {document.getElementById("playerName10").textContent = player[9].info;}
        if (player.length > 10) {document.getElementById("playerName11").textContent = player[10].info;}
        if (player.length > 11) {document.getElementById("playerName12").textContent = player[11].info;}
        if (player.length > 12) {document.getElementById("playerName13").textContent = player[12].info;}
        if (player.length > 13) {document.getElementById("playerName14").textContent = player[13].info;}
        if (player.length > 14) {document.getElementById("playerName15").textContent = player[14].info;}
        if (player.length > 15) {document.getElementById("playerName16").textContent = player[15].info;}
      
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
