let app = new Vue({
    el: '#app',
    data: {
        members: [],
        selectedParties: ['D', 'I', 'R'],
        selectedState: '',
        states: [],
        abbs: abbreviations,
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

    })
    .catch(err => { `Couldn't retrieve info. please, check this error: ${err}` });