document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playerNumber').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action
            findPlayer(); // Call your function
        }
    });

    team8BDropdown.addEventListener('change', function() {
        show8B();
    });

    team9Dropdown.addEventListener('change', function() {
        show9();
    });


    fetch('team_8B_data_website.json')
        .then(response => response.json())
        .then(data => {
            initializeDropdown8B(data);
        });

    fetch('team_9_data_website.json')
        .then(response => response.json())
        .then(data => {
            initializeDropdown9(data);
        });

});

function initializeDropdown8B(data) {
    let teamDropdown = document.getElementById('team8BDropdown');
    //let teams = new Set(data.map(player => player.team_name));
    let teams = data.map(item => item.team);
    //console.log(teams);
    // allow null option
    let option = document.createElement('option');
    option.value = '8B';
    option.textContent = '8B';
    teamDropdown.appendChild(option);

    teams.forEach(team => {
        let option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamDropdown.appendChild(option);
    });
}

function initializeDropdown9(data) {
    let teamDropdown = document.getElementById('team9Dropdown');
    let teams = data.map(item => item.team);
    // allow null option
    let option = document.createElement('option');
    option.value = '9';
    option.textContent = '9';
    teamDropdown.appendChild(option);

    teams.forEach(team => {
        let option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamDropdown.appendChild(option);
    });
}

function show8B() {
    let teamName8B = document.getElementById('team8BDropdown').value;
    console.log(teamName8B);
    fetch("team_8B_data_website.json")
        .then(response => response.json())
        .then(data => {
            let players_info = data.filter(player => player.team == teamName8B);
            
        mystr = "team skill level: " + players_info[0].team_skill + '\n';
        mystr = mystr + players_info[0].info;
        document.getElementById("playerInfo").value = mystr;
        document.getElementById('team9Dropdown').value = '9';
        document.getElementById('playerNumber').value = '';
        });
}

function show9() {
    let teamName9 = document.getElementById('team9Dropdown').value;
    console.log(teamName9);
    fetch("team_9_data_website.json")
        .then(response => response.json())
        .then(data => {
            // Filter players with jersey_number playerNumber
            let players_info = data.filter(player => player.team == teamName9);
        mystr = "team skill level: " + players_info[0].team_skill + '\n';
        mystr = mystr + players_info[0].info;
        document.getElementById("playerInfo").value = mystr;
        document.getElementById('team8BDropdown').value = '8B';
        document.getElementById('playerNumber').value = '';
        });
}
 
function findPlayer() {
    //document.getElementById('myTextarea').value = "Line one of the text.\nLine two of the text.";
    document.getElementById("playerInfo").value = ''

    //let teamName8B = document.getElementById('team8BDropdown').value;
    //let teamName9 = document.getElementById('team9Dropdown').value;
    let playerNumber = Number(document.getElementById('playerNumber').value);
    //console.log(teamName8B);
    //console.log(teamName9);
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
