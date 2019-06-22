let nysl = new Vue({
  el: '#app',
  data: {
    matches: [{
        "date": "1/9/2019",
        "teams": ['U1', 'U4'],
        "location": "AJ Katzenmaier",
        "time": "9:30 a.m."
      },
      {
        "date": "1/9/2019",
        "teams": ['U3', 'U2'],
        "location": "Greenbay",
        "time": "1:00 p.m."
      },
      {
        "date": "8/9/2019",
        "teams": ['U5', 'U6'],
        "location": "Howard A Yeager",
        "time": "9:30 a.m."
      },
      {
        "date": "8/9/2019",
        "teams": ['U6', 'U1'],
        "location": "Marjorie P Hart",
        "time": "1:00 p.m."
      },
      {
        "date": "15/9/2019",
        "teams": ['U2', 'U4'],
        "location": "North",
        "time": "9:30 a.m."
      },
      {
        "date": "15/9/2019",
        "teams": ['U3', 'U5'],
        "location": "AJ Katzenmaier",
        "time": "1:00 p.m."
      },
      {
        "date": "22/9/2019",
        "teams": ['U1', 'U3'],
        "location": "South",
        "time": "9:30 a.m."
      },
      {
        "date": "22/9/2019",
        "teams": ['U2', 'U6'],
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      },
      {
        "date": "29/9/2019",
        "teams": ['U4', 'U5'],
        "location": "Greenbay",
        "time": "9:30 a.m."
      },
      {
        "date": "6/10/2019",
        "teams": ['U2', 'U5'],
        "location": "Marjorie P Hart",
        "time": "9:30 a.m."
      },
      {
        "date": "6/10/2019",
        "teams": ['U1', 'U6'],
        "location": "South",
        "time": "1:00 p.m."
      },
      {
        "date": "13/10/2019",
        "teams": ['U3', 'U4'],
        "location": "Howard A Yeager",
        "time": "9:30 a.m."
      },
      {
        "date": "13/10/2019",
        "teams": ['U5', 'U1'],
        "location": "Greenbay",
        "time": "1:00 p.m."
      },
      {
        "date": "20/10/2019",
        "teams": ['U6', 'U3'],
        "location": "North",
        "time": "9:30 a.m."
      },
      {
        "date": "20/10/2019",
        "teams": ['U2', 'U4'],
        "location": "Marjorie P Hart",
        "time": "1:00 p.m."
      },
      {
        "date": "27/10/2019",
        "teams": ['U3', 'U1'],
        "location": "AJ Katzenmaier",
        "time": "9:30 a.m."
      },
      {
        "date": "27/10/2019",
        "teams": ['U5', 'U6'],
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      }
    ],
    title: 'Please select your team',
    filteredMatches: [],
    infoContainerClasslist: 'col-12 justify-content-center',
  },
  methods: {
    hideShowDivs: function(shown) {
      let infoContainers = Array.from(document.getElementsByClassName('infoContainer'));
      infoContainers.map(element => element.classList.remove('d-flex'));
      infoContainers.map(element => element.classList.add('d-none'));
      document.getElementById(shown).classList.remove('d-none');
      document.getElementById(shown).classList.add('d-flex');
    },
    showTeams: function() {
      this.hideShowDivs("teams");
      this.title = 'Please select your team';
    },
    teamFilter: function(team) {
      this.filteredMatches = this.matches.filter(match => (match.teams[0] === team || match.teams[1] === team));
      this.hideShowDivs("filtered");
      this.title = "Matches for team " + team;
    },
    dateFilter: function(date) {
      this.filteredMatches = this.matches.filter(match => date === match.date);
      this.hideShowDivs("filtered");
      this.title = "Matches scheduled on " + date;
    },
    locationFilter: function(location) {

      this.filteredMatches = this.matches.filter(match => location === match.location);
      this.hideShowDivs("filtered");
      this.title = "Matches played on " + location + " stadium";

    },

    globalFilter: function(attribute, param) {

      this.filteredMatches = this.matches.filter(

      );

      this.hideShowDivs("filtered");
      console.log(this.filteredMatches);

    },

  },
  computed: {
    teams: function() {
      let aux = this.matches.map(match => match.teams[0] && match.teams[1]);
      let teams = [...new Set(aux)].sort();
      return teams;
    },

  }

});