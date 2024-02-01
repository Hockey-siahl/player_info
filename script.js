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
        document.getElementById('playerName').textContent = player[0].player_name;
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
