document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playerNumber').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            findPlayer(); // Call your function
        }
    });
});

function findPlayer() {

    document.getElementById("playerInfo").textContent = ''
  
  let playerNumber = Number(document.getElementById('playerNumber').value);
  //console.log(playerNumber);
  
  fetch("player_data_website.json")
    .then(response => response.json())
    .then(data => {
            // Filter players with jersey_number playerNumber
            let player = data.filter(player => player.jersey_number == playerNumber);

        console.log(`Player Name: ${player.info}`);

        mystr = ""
        if (player.length == 0) {mystr = 'No players found';}
        for myplayer in player {mystr = mystr + player[0].info + '\n';}
        document.getElementById("playerInfo").textContent = mystr
              
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
