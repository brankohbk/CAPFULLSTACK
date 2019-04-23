"use strict"

// ===============================
// SELECCIONO EL ORIGEN DE LOS DATOS EN CRUDO. SI houseData NO ESTÁ DEFINIDO, USA senateData.
var rawData = typeof houseData !== 'undefined' ? houseData : senateData;
var members = rawData.results[0].members; //APUNTO AL ARRAY members DENTRO DE results DEL JSON.

// ===============================
// AÑADO LOS eventListener.
var allCheckboxes = Array.from(document.querySelectorAll('input[name=party]'));
allCheckboxes.forEach(checkbox => checkbox.addEventListener('change', renderComponents));

// ===============================
// GENERA TABLA Y DROPDOWN DE ESTADOS.
function renderComponents() {
  var checkedBoxes = Array.from(document.querySelectorAll('input[name=party]:checked')).map(selected => selected.value.toUpperCase());

  llenarDropdownEstados(members);

  llenarTabla(partyFilter(checkedBoxes, members), "table-rows");

}

// ===============================
// FILTRO POR PARTIDO (checkboxes).

function partyFilter(parties, memberlist) {
  let filtered = [];
  let aux = [];
  parties.forEach(party => {
    aux = memberlist.filter(member => member.party == party);
    filtered.push(...aux);
    // ORDENO LOS FILTRADOS POR APELLIDO.
    filtered.sort(function(a, b) {
      if (a.last_name > b.last_name) {
        return 1;
      }
      if (a.last_name < b.last_name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  })

  return filtered;
}



// ===============================
// LLENO LA TABLA CON INFORMACION.

function llenarTabla(miembros, elementoHTML) {

  //   // USANDO TEMPLATE STRINGS Y ARROW FUNCTIONS.

  const markup = //INICIALIZO LA VARIABLE QUE CONTENDRÁ EL STRING HTML DEL ROW.
    ` 
        ${miembros.map(miembro => //POR CADA miembro EN EL ARRAY miembros GENERO UN ROW CON LA INFORMACION DE ESE MIEMBRO ESPECIFICO.
          `<tr>
          <td><a href="${miembro.url}" target=_blank >${miembro.last_name}, ${miembro.first_name} ${miembro.middle_name || ''}</a></td>
          <td>${miembro.party}</td>
          <td>${miembro.state}</td>
          <td>${miembro.seniority}</td>
          <td>${miembro.votes_with_party_pct} &percnt;</td>
          </tr>`
          ).join('')//ELIMINO LAS COMAS DEL ARRAY DEVUELTO POR EL .map .
        }
    `;
  document.getElementById(elementoHTML).innerHTML = markup; //INSERTO TODOS LOS ROWS EN EL ELEMENTO table-rows.

      }
// ===============================
// LLENO EL DROPDOWN CON LOS ESTADOS.

function llenarDropdownEstados(miembros) {
  let estados = miembros.map(miembro => miembro.state);
  let estadosUnicos = [...new Set(estados)].sort(); // "..."= el resto de los elementos, "new Set()"=es un valor único del array pasado por parametro. 

  const markup =
    ` <button class="dropdown-item" id="stateButton">All States</button>
      ${estadosUnicos.map(estado => 
        `<button class="dropdown-item" id="stateButton" type="button" value="${estado}">${estado}</button>
        `).join('')
      }
  `;
document.getElementById("stateDropdown").innerHTML = markup; 
 
}