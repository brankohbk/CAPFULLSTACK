function llenarTabla(datos) {
  const miembros = datos.results[0].members; //APUNTO AL ARRAY members DENTRO DE results DEL JSON.

  // USANDO TEMPLATE STRINGS Y ARROW FUNCTIONS.

  const markup = //INICIALIZO LA VARIABLE QUE CONTENDRÁ EL STRING HTML DEL ROW.
    ` 
      ${miembros.map(miembro => //POR CADA miembro EN EL ARRAY miembros GENERO UN ROW CON LA INFORMACION DE ESE MIEMBRO ESPECIFICO.
        `<tr>
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


// OTRA FORMA DE LLENAR LA TABLA

// var str = ``; // DECLARO E INICIALIZO LA CADENA str QUE SE VA A USAR PARA EL innerHTML.
// for (let index = 0; index < miembros.length; index++) {
//   const miembro = miembros[index];
//   str += `<tr>
//     <td><a href="${miembro.url}">${miembro.first_name} ${miembro.middle_name || ''} ${miembro.last_name}</a></td>
//     <td>${miembro.party}</td>
//     <td>${miembro.state}</td>
//     <td>${miembro.seniority}</td>
//     <td>${miembro.votes_with_party_pct} &percnt;</td>
//     </tr>
//     `;


// }

// document.getElementById("table-rows").innerHTML = str;
    }

function llenarDropdownEstados(datos){
  const miembros = datos.results[0].members;
  let estados = miembros.map(miembro => miembro.state);
  return estados;

}