let nysl = new Vue({
  el: '#app',
  data: {
    matches: [{
        "date": "2019-09-01",
        "teamA": "U1",
        "teamB": "U4",
        "location": "AJ Katzenmaier",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-09-01",
        "teamA": "U3",
        "teamB": "U2",
        "location": "Greenbay",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-09-08",
        "teamA": "U5",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-09-08",
        "teamA": "U6",
        "teamB": "U1",
        "location": "Marjorie P Hart",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-09-15",
        "teamA": "U2",
        "teamB": "U4",
        "location": "North",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-09-15",
        "teamA": "U3",
        "teamB": "U5",
        "location": "AJ Katzenmaier",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-09-22",
        "teamA": "U1",
        "teamB": "U3",
        "location": "South",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-09-22",
        "teamA": "U2",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-09-29",
        "teamA": "U4",
        "teamB": "U5",
        "location": "Greenbay",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-10-06",
        "teamA": "U2",
        "teamB": "U5",
        "location": "Marjorie P Hart",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-10-06",
        "teamA": "U1",
        "teamB": "U6",
        "location": "South",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-10-13",
        "teamA": "U3",
        "teamB": "U4",
        "location": "Howard A Yeager",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-10-13",
        "teamA": "U5",
        "teamB": "U1",
        "location": "Greenbay",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-10-20",
        "teamA": "U6",
        "teamB": "U3",
        "location": "North",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-10-20",
        "teamA": "U2",
        "teamB": "U4",
        "location": "Marjorie P Hart",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-10-27",
        "teamA": "U3",
        "teamB": "U1",
        "location": "AJ Katzenmaier",
        "time": "9:30 a.m."
      },
      {
        "date": "2019-10-27",
        "teamA": "U5",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      }
    ],
    title: 'Please select your team',
    filteredMatches: [],
  },
  methods: {
    teamFilter: function(team) {
      this.filteredMatches = this.matches.filter(match => (match.teamA === team || match.teamB === team));
      let infoContainers = Array.from(document.getElementsByClassName('infoContainer'));
      infoContainers.map(element => element.classList.remove('d-flex'));
      infoContainers.map(element => element.classList.add('d-none'));
      document.getElementById('teamFiltered').classList.remove('d-none');
      document.getElementById('teamFiltered').classList.add('d-flex');
    },
    homeScreen: function() {
      let infoContainers = Array.from(document.getElementsByClassName('infoContainer'));
      infoContainers.map(element => element.classList.remove('d-flex'));
      infoContainers.map(element => element.classList.add('d-none'));
      document.getElementById('teams').classList.remove('d-none');
      document.getElementById('teams').classList.add('d-flex');
    }

  },
  computed: {
    teams: function() {
      let aux = this.matches.map(match => match.teamA);
      let teams = [...new Set(aux)].sort();
      return teams;
    },

  }

});