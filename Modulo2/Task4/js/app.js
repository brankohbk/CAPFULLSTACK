let app = new Vue({
  el: '#membersFilter',
  data: {
    members: [],
    selectedParties: ['D', 'I', 'R'],
    selectedState: '',
    states: [],
    abbs: [],
    actualState: 'All States',
    selectedState: 'All States',

  },
  methods: {
    partyFilter: function(member) {
      if (this.selectedParties.includes(member.party)) {
        return true;
      }
    },
    partySelect: function() {
      this.selectedParties = Array.from(document.querySelectorAll('input[name=party]:checked')).map(selected => selected.value.toUpperCase());
    },
    stateFilter: function(member) {
      if (this.selectedState === 'All States') {
        return true;
      } else if (member.state === this.selectedState) {
        return true;
      }
    },
    selectState: function(select) {
      this.selectedState = select.abbreviation;
      this.actualState = select.name;
    },


  },
  computed: {
    emptyParties: function() {
      if (this.selectedParties.length === 0) {
        return 'highlight';
      }
    }
  }

});

let statistics = new Vue({
  el: '#statisticsApp',
  data: {
    'democrats': [],
    'republicans': [],
    'independents': [],
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
  },
  methods: {
    partyVotes: function(miembro) {
      return (miembro.total_votes * miembro.votes_with_party_pct / 100).toFixed(0);
    }

  },
  computed: {

  }


});



const promiseModifiers = { headers: { 'X-API-Key': '9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz' } };

let dataPromise = fetch(promiseURL, promiseModifiers);
dataPromise
  .then(response => response.json())
  .then(myJson => {
    app.members = myJson.results[0].members;
    // Filtra los estados del JSON para armar el dropdown.
    let estados = app.members.map(miembro => miembro.state);
    app.states = [...new Set(estados)].sort();
    allStatistics(app.members);

  })
  .catch(err => { `Couldn't retrieve info. please, check this error: ${err}` });




// ===============================
// CUENTO LA CANTIDAD DE MIEMBROS POR PARTIDO
function count() {
  statistics.number_of_democrats = statistics.democrats.length;
  statistics.number_of_independents = statistics.independents.length;
  statistics.number_of_republicans = statistics.republicans.length;
  statistics.total = statistics.democrats.length + statistics.independents.length + statistics.republicans.length;
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
  statistics.democrats = array.filter(member => member.party === "D");
  statistics.independents = array.filter(member => member.party === "I");
  statistics.republicans = array.filter(member => member.party === "R");

  count();
  statistics.votes_with_party_democrats = votesParty(statistics.democrats);
  statistics.votes_with_party_independents = votesParty(statistics.independents);
  statistics.votes_with_party_republicans = votesParty(statistics.republicans);

  loyalty(array, chamber, "least");
  loyalty(array, chamber, "most");
  attendance(array, chamber, "least");
  attendance(array, chamber, "most");

}


let options;

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