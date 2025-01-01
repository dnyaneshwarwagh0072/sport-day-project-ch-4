
// Opening Ceremony
function OpeningCeremony(callback) {
    console.log("The sports day event is starting...");
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    let startInterval = setInterval(() => {
        console.log("Let the games begin!");
        clearInterval(startInterval);
        callback(score);
    }, 1000);
}

// Race 100M
function Race100M(score, callback) {
    setTimeout(() => {
        console.log("100M Race started...");
        let times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10
        };

        let sortedTeams = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedTeams[0]] += 50;
        score[sortedTeams[1]] += 25;
        console.log("Race finished! Times:", times);
        console.log("Scores after 100M Race:", score);
        callback(score);
    }, 3000);
}

// Long Jump
function LongJump(score, callback) {
    setTimeout(() => {
        console.log("Long Jump event started...");
        let teams = ['red', 'blue', 'green', 'yellow'];
        let randomTeam = teams[Math.floor(Math.random() * teams.length)];
        score[randomTeam] += 150;
        console.log("Long Jump finished! Random Team:", randomTeam);
        console.log("Scores after Long Jump:", score);
        callback(score);
    }, 2000);
}

// High Jump
function HighJump(score, callback) {
    setTimeout(() => {
        console.log("High Jump event started...");
        let team = prompt("Which team succeeded in High Jump? (red, blue, green, yellow)");

        if (team && score.hasOwnProperty(team)) {
            score[team] += 100;
            console.log("High Jump finished! Team:", team);
        } else {
            console.log("No valid input provided for High Jump.");
        }
        console.log("Scores after High Jump:", score);
        callback(score);
    }, 1000);
}

// Award Ceremony
function AwardCeremony(score) {
    console.log("Award Ceremony starting...");
    let sortedScores = Object.keys(score).sort((a, b) => score[b] - score[a]);

    console.log(`1st Place: ${sortedScores[0]} with ${score[sortedScores[0]]} points`);
    console.log(`2nd Place: ${sortedScores[1]} with ${score[sortedScores[1]]} points`);
    console.log(`3rd Place: ${sortedScores[2]} with ${score[sortedScores[2]]} points`);
    console.log(`4th Place: ${sortedScores[3]} with ${score[sortedScores[3]]} points`);
}
// Chain of Events

OpeningCeremony(function (score) {
    Race100M(score, function (score) {
        LongJump(score, function (score) {
            HighJump(score, function (score) {
                AwardCeremony(score);
            });
        });
    });
});