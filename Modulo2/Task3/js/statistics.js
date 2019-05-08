var statistics = {
  "number_of_democrats": 0,
  "number_of_independents": 0,
  "number_of_republicans": 0,
  "total": 0,
  "votes_with_party_democrats": 0,
  "votes_with_party_independents": 0,
  "votes_with_party_republicans": 0,
  "senate_least_loyal": [],
  "house_least_loyal": [],
  "senate_most_loyal": [],
  "house_most_loyal": []


};

var chamber = typeof houseData !== 'undefined' ? "house" : typeof senateData !== 'undefined' ? "senate" : "";

function renderTables() {
  allStatistics(members);
  renderPartyVotes(statistics, 'partyVotesTable');
  renderLoyal(statistics.senate_least_loyal, "leastLoyalTable");
  renderLoyal(statistics.senate_most_loyal, "mostLoyalTable");
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

  leastLoyal(array, chamber);
  mostLoyal(array, chamber);



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

function leastLoyal(data, chamber) {
  let chamberName = chamber === "senate" ? "senate_" : "house_"; //se declara en la linea 17 en base al JSON que se está evaluando.
  let sorted = data.sort((x, y) => { return x.votes_with_party_pct - y.votes_with_party_pct; }); //Se ordenan los datos por porcentaje de votos.
  let retrievePercentage = 10;
  let limit = Math.round((sorted.length) * retrievePercentage / 100); //Se busca el indice del miembro de acuerdo al porcentaje solicitado por ell enunciado.
  let limitVotesPercent = sorted[limit].votes_with_party_pct; //guardo el valor del porcentaje de votos del miembro de referencia.
  let aux = sorted.filter(member => member.votes_with_party_pct <= limitVotesPercent); //busco en todo el array los miembros que tengan menor o igual porcentaje de votos.
  statistics[chamberName + "least_loyal"] = aux; //guardo el array como valor del atributo del objeto "statistics" de acuerdo a la cámara que está evaluando.
  return aux;
}

function renderLoyal(data, htmlElement) {
  markup = `
    ${data.map(miembro =>
      `<tr>
          <td><a href="${miembro.url}" target=_blank >${miembro.last_name}, ${miembro.first_name} ${miembro.middle_name || ''}</a></td>
          <td>${(miembro.total_votes * miembro.votes_with_party_pct / 100).toFixed(0) /*Del TOTAL de votos, calcula cuántos fueron a su partido.*/}</td>
          <td>${miembro.votes_with_party_pct} &percnt;</td>
          </tr>`
          ).join('')}
  `;
  
  if (htmlElement !== 'null') {
    document.getElementById(htmlElement).innerHTML = markup;
  };
}

function mostLoyal(data, chamber) {
  let chamberName = chamber === "senate" ? "senate_" : "house_"; //se declara en la linea 17 en base al JSON que se está evaluando.
  let sorted = data.sort((x, y) => { return y.votes_with_party_pct - x.votes_with_party_pct; }); //Se ordenan los datos por porcentaje de votos.
  let retrievePercentage = 10;
  let limit = Math.round((sorted.length) * retrievePercentage / 100); //Se busca el indice del miembro de acuerdo al porcentaje solicitado por ell enunciado.
  let limitVotesPercent = sorted[limit].votes_with_party_pct; //guardo el valor del porcentaje de votos del miembro de referencia.
  let aux = sorted.filter(member => member.votes_with_party_pct >= limitVotesPercent); //busco en todo el array los miembros que tengan MAYOR o igual porcentaje de votos.
  statistics[chamberName + "most_loyal"] = aux; //guardo el array como valor del atributo del objeto "statistics" de acuerdo a la cámara que está evaluando.
  return aux;
}