var statistics = {
  "number_of_democrats": 0,
  "number_of_independents": 0,
  "number_of_republicans": 0,
  "total": 0,
  "votes_with_party_democrats": 0,
  "votes_with_party_independents": 0,
  "votes_with_party_republicans": 0
};

function renderTables() {
  allStatistics(members);
  renderPartyVotes(statistics, 'partyVotesTable');
}

// ===============================
// CUENTO LA CANTIDAD DE MIEMBROS POR PARTIDO
function count() {
  statistics.number_of_democrats = democrats.length;
  statistics.number_of_independents = independents.length;
  statistics.number_of_republicans = republicans.length;
  statistics.total = democrats.length + independents.length + republicans.length;
}

// ===============================
// CALCULAR VOTOS CON EL PARTIDO.
function votesParty(array) {
  let average = array.reduce(function(acum, value) {
    return (acum + value.votes_with_party_pct);
  }, 0) / array.length;
  average ? average : average = 0;
  return average.toFixed(2);
}

// ===============================
// FUNCIONES DE ESTADISTICAS.
function allStatistics(array) {
  //Genero las listas de miembros de cada partido. 
  democrats = array.filter(member => member.party === "D");
  independents = array.filter(member => member.party === "I");
  republicans = array.filter(member => member.party === "R");

  count();
  statistics.votes_with_party_democrats = votesParty(democrats);
  statistics.votes_with_party_independents = votesParty(independents);
  statistics.votes_with_party_republicans = votesParty(republicans);

  leastLoyal(array);
}

function renderPartyVotes(data, htmlElement) {
  let markup = ``;
  markup += `<tr>
  <td>Republican</td>
  <td>${data.number_of_republicans}</td>
  <td>${data.votes_with_party_republicans} &percnt;</td>
</tr>
<tr>
  <td>Democrat</td>
  <td>${data.number_of_democrats}</td>
  <td>${data.votes_with_party_democrats} &percnt;</td>
</tr>
<tr>
  <td>Independent</td>
  <td>${data.number_of_independents}</td>
  <td>${data.votes_with_party_independents} &percnt;</td>
</tr>`;
  if (htmlElement !== 'null') {
    document.getElementById(htmlElement).innerHTML = markup;
  };
}

function leastLoyal(data) {

  let sorted = data.sort((x, y) => { return x.votes_with_party_pct - y.votes_with_party_pct; });
  let leastLoyalLimit = (sorted.length) / .10;
  // console.log(sorted.length);
  // return sorted;

}