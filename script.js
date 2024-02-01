function findPlayer() {
  
  let playerNumber = document.getElementById('playerNumber').value;
  console.log(playerNumber);
  
  fetch('players.json')
    .then(response => response.json())
    .then(data => {
            // Filter players with jersey_number playerNumber
            let player = data.filter(player => player.player_number == '15');

            // Do something with the filtered players
            player.forEach(playerx => {
                console.log(playerx.player_name);
            });            
        document.getElementById('playerName').textContent = player.player_name;
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
