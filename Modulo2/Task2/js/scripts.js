// AÑADO LOS eventListener.

var allCheckboxes = Array.from(document.querySelectorAll('input[name=party]'));
allCheckboxes.map(checkbox => checkbox.addEventListener('change', partyFilter));

// ===============================
// LLENO LA TABLA CON INFORMACION.

function llenarTabla(datos) {
  const miembros = datos.results[0].members; //APUNTO AL ARRAY members DENTRO DE results DEL JSON.

  // USANDO TEMPLATE STRINGS Y ARROW FUNCTIONS.

  const markup = //INICIALIZO LA VARIABLE QUE CONTENDRÁ EL STRING HTML DEL ROW.
    ` 
      ${miembros.map(miembro => //POR CADA miembro EN EL ARRAY miembros GENERO UN ROW CON LA INFORMACION DE ESE MIEMBRO ESPECIFICO.
        `<tr class="party${miembro.party.toUpperCase()} state${miembro.state.toUpperCase()}">
        <td><a href="${miembro.url}" target=_blank >${miembro.first_name} ${miembro.middle_name || ''} ${miembro.last_name}</a></td>
        <td>${miembro.party}</td>
        <td>${miembro.state}</td>
        <td>${miembro.seniority}</td>
        <td>${miembro.votes_with_party_pct} &percnt;</td>
        </tr>`
        ).join('')//ELIMINO LAS COMAS DEL ARRAY DEVUELTO POR EL .map .
      }
  `;
document.getElementById("table-rows").innerHTML = markup; //INSERTO TODOS LOS ROWS EN EL ELEMENTO table-rows.

    }

// ===============================
// LLENO EL DROPDOWN CON LOS ESTADOS.

function llenarDropdownEstados(datos){
  const miembros = datos.results[0].members;
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

// ===============================
// FILTRO POR ESTADO (checkboxes).

function partyFilter() {  

  let checkedBoxes = Array.from(document.querySelectorAll('input[name=party]:checked')).map(selected => selected.value);
  let rows = Array.from(document.getElementById('table-rows').querySelectorAll('tr'));
  rows.map(row => Array.from(row.classList).includes("partyDisplayNone")? row.classList.toggle("partyDisplayNone") : row.classList.remove("partyDisplayNone") ); //probando condicionales

}