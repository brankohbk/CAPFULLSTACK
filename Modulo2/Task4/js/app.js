let app = new Vue({
  el: '#app',
  data: {
    members: [],
    filteredMembers: [],
    selectedParties: ['D', 'I', 'R'],
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

    }


  }

});

const promiseModifiers = { headers: { 'X-API-Key': '9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz' } };

let dataPromise = fetch(promiseURL, promiseModifiers);
dataPromise
  .then(response => response.json())
  .then(myJson => {
    app.members = myJson.results[0].members;
    app.filteredMembers = app.members;
    llenarDropdownEstados(app.members, "stateDropdown");
    renderComponents();

  })
  .catch(err => { `Couldn't retrieve info. please, check this error: ${err}` });

function llenarDropdownEstados(miembros, elementoHTML) {
  let estados = miembros.map(miembro => miembro.state);
  let estadosUnicos = [...new Set(estados)].sort(); // "..."= el resto de los elementos, "new Set()"=es un valor único del array pasado por parametro. 
  let fullState = "";
  // SE AGREGÓ DICCIONARIO DE ABREVIACIONES DE LOS ESTADOS.
  let markup = ` <button class="dropdown-item" id="stateButton" onclick="selectState(this.value)" value="All States">All States</button>`;
  estadosUnicos.forEach(estado => {
    fullState = abbreviations.filter(element => element.abbreviation == estado).map(element => element.name);
    markup += `<button class="dropdown-item" id="stateButton" type="button" onclick="selectState(this.value)" value="${estado},${fullState}">${fullState}</button>`
  });
  if (document.getElementById(elementoHTML) !== null) {
    document.getElementById(elementoHTML).innerHTML = markup; //DIBUJA EL dropdown
  }
}

var ddmenu = document.querySelector('#stateDropdown');
var state = "";
var actualState = "All States";

function selectState(select) {
  let str = select.split(',');
  app.selectedState = str[0] || "";
  actualState = str[1] || "All States";
  renderComponents();
}

function renderComponents() {

  if (document.getElementById("state") !== null) {
    //ESCRIBE EL NOMBRE DEL ESTADO SELECCIONADO EN EL div CORRESPONDIENTE.
    document.getElementById("state").innerHTML = actualState;
  }
  if (ddmenu !== null) {
    ddmenu.classList.remove('show');
  }
}