document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playerNumber').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            findPlayer(); // Call your function
        }
    });
});

function findPlayer() {
    //document.getElementById('myTextarea').value = "Line one of the text.\nLine two of the text.";
    document.getElementById("playerInfo").value = ''
  
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

        //playersWithJersey15.forEach(player => {
        //console.log(`Player Name: ${player.player_name}, Team Name: ${player.team_name}`);

        player.forEach((myplayer) => {
            mystr = mystr + myplayer.info + '\n';
        });
        
        document.getElementById("playerInfo").value = mystr
              
        })
        .catch(error => {
            console.error('Error reading JSON:', error);
        });

}
