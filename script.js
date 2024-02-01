function findPlayer() {
  
  let playerNumber = document.getElementById('playerNumber').value;

  fetch('players.json')
    .then(response => response.json())
    .then(data => {
            // Filter players with jersey_number playerNumber
            let player = data.filter(player => player.player_number == playerNumber);

            // Do something with the filtered players
            console.log(player);
            document.getElementById('playerName').textContent = player.player_name;
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
