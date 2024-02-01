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
        if (player.length > 4) {document.getElementById("playerName4").textContent = player[4].info;}
      
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
