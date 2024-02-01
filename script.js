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
  
  fetch("players.json")
    .then(response => response.json())
    .then(data => {
            // Filter players with jersey_number playerNumber
            let player = data.filter(player => player.player_number == playerNumber);

            // Do something with the filtered players
            player.forEach(playerx => {
                console.log(playerx.player_name);
            });
        console.log(`Player Name: ${player.player_name}, Team Name: ${player.team_name}`);

        if (player.length == 0) {document.getElementById('playerName1').textContent = 'No players found';}
        if (player.length > 0) {document.getElementById("playerName1").textContent = `${player[0].player_name} ${player[0].team_name}`;}
        if (player.length > 1) {document.getElementById("playerName2").textContent = `${player[1].player_name} ${player[1].team_name}`;}
        if (player.length > 2) {document.getElementById("playerName3").textContent = `${player[2].player_name} ${player[2].team_name}`;}
        if (player.length > 3) {document.getElementById("playerName4").textContent = `${player[3].player_name} ${player[3].team_name}`;}
        if (player.length > 4) {document.getElementById("playerName4").textContent = `${player[4].player_name} ${player[4].team_name}`;}
      
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
