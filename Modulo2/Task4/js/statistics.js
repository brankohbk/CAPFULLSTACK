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
  "house_most_loyal": [],
  "senate_least_engaged": [],
  "house_least_engaged": [],
  "senate_most_engaged": [],
  "house_most_engaged": []

};

var chamber = typeof houseData !== 'undefined' ? "house" : typeof senateData !== 'undefined' ? "senate" : "";

// ===============================
// LLENO LAS TABLAS.
function renderTables() {
  allStatistics(members); //Calcula todas las estadisticas solicitadas.
  renderPartyVotes(statistics, 'partyVotesTable'); //Llena la tabla de datos generales.

  //Consulta qué tabla existe en el documento actual y en base a la respuesta ejecuta las funciones de render de "Loyalty" o "Attendance".
  let table = document.getElementById('mostEngagedTable') || document.getElementById('mostLoyalTable');

  if (table.id === 'mostEngagedTable') {
    render('attendance', statistics[chamber + "_most_engaged"], "mostEngagedTable");
    render('attendance', statistics[chamber + "_least_engaged"], "leastEngagedTable");
  } else if (table.id === 'mostLoyalTable') {
    render('loyalty', statistics[chamber + "_most_loyal"], "mostLoyalTable");
    render('loyalty', statistics[chamber + "_least_loyal"], "leastLoyalTable");
  }
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

  loyalty(array, chamber, "least");
  loyalty(array, chamber, "most");
  attendance(array, chamber, "least");
  attendance(array, chamber, "most");

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


function loyalty(data, chamber, mostOrleast) {
  let sorted = data.sort((x, y) => { return x.votes_with_party_pct - y.votes_with_party_pct; }); //Se ordenan los datos por porcentaje de votos.
  let retrievePercentage = 10;
  let order = "";
  let aux = [];
  let membersToDisplay = Math.round((sorted.length) * retrievePercentage / 100); //Se busca el indice del miembro de acuerdo al porcentaje solicitado por el enunciado.
  let option = mostOrleast;
  if (option === "most") {
    order = "most_"
    let limit = sorted.length - membersToDisplay;
    let limitVotesPercent = sorted[limit].votes_with_party_pct; //guardo el valor del porcentaje de votos del miembro de referencia.
    aux = sorted.filter(member => member.votes_with_party_pct >= limitVotesPercent); //busco en todo el array los miembros que tengan MAYOR o igual porcentaje de votos.
    aux.sort((x, y) => { return y.votes_with_party_pct - x.votes_with_party_pct; }); //Ordeno de mayor a menor por porcentaje de votos.
  } else if (option === "least") {
    order = "least_"
    let limit = membersToDisplay - 1; // Como el array empieza en 0, tengo que restar 1 posición al limite.
    let limitVotesPercent = sorted[limit].votes_with_party_pct; //guardo el valor del porcentaje de votos del miembro de referencia.
    aux = sorted.filter(member => member.votes_with_party_pct <= limitVotesPercent); //busco en todo el array los miembros que tengan MAYOR o igual porcentaje de votos.
  }
  let chamberName = chamber === "senate" ? "senate_" : "house_"; //se declara en base al JSON que se está evaluando.
  statistics[chamberName + order + "loyal"] = aux; //guardo el array como valor del atributo del objeto "statistics" de acuerdo a la cámara que está evaluando.
}



function attendance(data, chamber, mostOrleast) {
  let sorted = data.sort((x, y) => { return x.missed_votes - y.missed_votes; }); //Se ordenan los datos por porcentaje de votos.
  let retrievePercentage = 10;
  let order = "";
  let aux = [];
  let membersToDisplay = Math.round((sorted.length) * retrievePercentage / 100); //Se busca el indice del miembro de acuerdo al porcentaje solicitado por el enunciado.
  let option = mostOrleast;
  if (option === "least") {
    order = "least_"
    let limit = sorted.length - membersToDisplay;
    let limitVotesPercent = sorted[limit].missed_votes; //guardo el valor del porcentaje de votos del miembro de referencia.
    aux = sorted.filter(member => member.missed_votes >= limitVotesPercent); //busco en todo el array los miembros que tengan MAYOR o igual porcentaje de votos.
    aux.sort((x, y) => { return y.missed_votes - x.missed_votes; }); //Ordeno de mayor a menor por porcentaje de votos.
  } else if (option === "most") {
    order = "most_"
    let limit = membersToDisplay - 1; // Como el array empieza en 0, tengo que restar 1 posición al limite.
    let limitVotesPercent = sorted[limit].missed_votes; //guardo el valor del porcentaje de votos del miembro de referencia.
    aux = sorted.filter(member => member.missed_votes <= limitVotesPercent); //busco en todo el array los miembros que tengan MAYOR o igual porcentaje de votos.
  }
  let chamberName = chamber === "senate" ? "senate_" : "house_"; //se declara en base al JSON que se está evaluando.
  statistics[chamberName + order + "engaged"] = aux; //guardo el array como valor del atributo del objeto "statistics" de acuerdo a la cámara que está evaluando.
}



function render(statisticsType, data, htmlElement) {
  let statistics = statisticsType;
  if (statistics === 'attendance') {

    markup = `
    ${data.map(miembro =>
      `<tr>
          <td><a href="${miembro.url}" target=_blank >${miembro.last_name}, ${miembro.first_name} ${miembro.middle_name || ''}</a></td>
          <td>${ miembro.missed_votes } / ${miembro.total_votes}</td>
          <td>${miembro.missed_votes_pct} &percnt;</td>
          </tr>`
          ).join('')}
  `;
  } else if(statistics === 'loyalty'){
    
      markup = `
            ${data.map(miembro =>
              `<tr>
                  <td><a href="${miembro.url}" target=_blank >${miembro.last_name}, ${miembro.first_name} ${miembro.middle_name || ''}</a></td>
                  <td>${(miembro.total_votes * miembro.votes_with_party_pct / 100).toFixed(0)} / ${miembro.total_votes  /*Del TOTAL de votos, calcula cuántos fueron a su partido.*/}</td>
                  <td>${miembro.votes_with_party_pct.toFixed(2)} &percnt;</td>
                  </tr>`
                  ).join('')}
          `;
  }
      
     if (htmlElement !== 'null') {
          
       document.getElementById(htmlElement).innerHTML = markup;
     }
    }