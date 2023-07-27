// Sample data for the 16-person tournament bracket
const tournamentData = [
    { match: "Match 1", teamA: "Team A1", teamB: "Team A2", winner: "Team A1" },
    // Add the remaining matches here
];

document.addEventListener("DOMContentLoaded", function () {
    const tournamentBracket = document.querySelector(".tournament-bracket");

    tournamentData.forEach((matchData) => {
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
        tournamentBracket.appendChild(matchDiv);
    });
});