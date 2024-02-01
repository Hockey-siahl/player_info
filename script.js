function findPlayer() {

 let playerNumber = document.getElementById('playerNumber').value;

    document.getElementById('playerName').textContent = playerNumber;
    document.getElementById('playerName').textContent = '10';

    import data from './players.json' assert { type: 'json' };
    //console.log(data); 

    //fetch('players.json')
    //    .then(response => response.json())
    //    .then(data => {
    //        let player = data.find(p.player_number:  == playerNumber);
    //        document.getElementById('playerName').textContent = player ? player.player_name : "Player not found";
    //    });
}


  
