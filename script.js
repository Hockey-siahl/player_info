document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playerNumber').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            findPlayer(); // Call your function
        }
    });

    fetch('team_8B_data_website.json')
        .then(response => response.json())
        .then(data => {
            initializeDropdown8B(data);
        });

    //fetch('team_9_data_website.json')
    //    .then(response => response.json())
    //    .then(data => {
    //        initializeDropdown9(data);
    //    });

});

function initializeDropdown8B(data) {
    let teamDropdown = document.getElementById('team8BDropdown');
    //let teams = new Set(data.map(player => player.team_name));
    let teams = new Set(data.team)
    console.log(teams);
    teams.forEach(team => {
        let option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamDropdown.appendChild(option);
    });
}


function findPlayer() {
    //document.getElementById('myTextarea').value = "Line one of the text.\nLine two of the text.";
    document.getElementById("playerInfo").value = ''

    let teamName = document.getElementById('team8BDropdown').value;
    console.log(teamName);
  
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
