// Sample data for the 16-person tournament bracket
const tournamentData = [
    { round: 1, match: 1, teamA: "Person 1", teamB: "Person 2", winner: "Person 1" },
    // Add the remaining matches for Round 1 here
];

document.addEventListener("DOMContentLoaded", function () {
    const tournamentBracket = document.querySelector(".tournament-bracket");

    tournamentData.forEach((matchData) => {
        const roundDiv = tournamentBracket.querySelector(`.round:nth-child(${matchData.round})`);
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");

        const teamADiv = document.createElement("div");
        teamADiv.classList.add("team");
        teamADiv.textContent = matchData.teamA;

        const teamBDiv = document.createElement("div");
        teamBDiv.classList.add("team");
        teamBDiv.textContent = matchData.teamB;

        if (matchData.winner === matchData.teamA) {
            teamADiv.classList.add("winner");
        } else if (matchData.winner === matchData.teamB) {
            teamBDiv.classList.add("winner");
        }

        matchDiv.appendChild(teamADiv);
        matchDiv.appendChild(teamBDiv);
        roundDiv.appendChild(matchDiv);
    });
});