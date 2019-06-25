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
      },
      {
        "date": "2019-06-23",
        "teamA": "U5",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      }
    ],
    locations: [{
        "stadium": "AJ Katzenmaier",
        "gmap": "https://www.google.com/maps?ll=41.900292,-87.62905&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=24+W+Walton+St+Chicago,+IL+60610+USA"
      },
      {
        "stadium": "Greenbay",
        "gmap": "https://maps.google.com/maps?ll=41.913802,-87.637839&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=1734%20N%20Orleans%20St%20Chicago%2C%20IL%2060614%20USA"
      },
      {
        "stadium": "Howard A Yeager",
        "gmap": "https://www.google.com/maps/place/2245+N+Southport+Ave,+Chicago,+IL+60614,+USA/@41.923265,-87.662926,14z/data=!4m5!3m4!1s0x880fd2e37f9b8d2d:0x62ad8b907dd755d6!8m2!3d41.9232646!4d-87.6629259?hl=en-US"
      },
      {
        "stadium": "Marjorie P Hart",
        "gmap": "https://maps.google.com/maps?ll=41.929578,-87.645898&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=2625%20N%20Orchard%20St%20Chicago%2C%20IL%2060614%20USA"
      },
      {
        "stadium": "North",
        "gmap": "https://maps.google.com/maps?ll=41.907062,-87.646275&z=16&t=m&hl=en-US&gl=US&mapclient=embed"
      },
      {
        "stadium": "South",
        "gmap": "https://maps.google.com/maps?ll=41.919777,-87.651367&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=2101%20N%20Fremont%20St%20Chicago%2C%20IL%2060614%20USA"
      }
    ],
    title: 'Please select your team',
    filter: '',
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
      this.filter = '';
    },

    globalFilter: function(value) {
      if (typeof(value) === 'undefined') {
        this.filteredMatches = this.matches;
      } else {

        this.filteredMatches = this.matches.filter(
          match => {
            for (const key in match) {
              if (match[key] === value) {
                return true;
              }
            }
          }
        );
      }
      this.title = "Filtered by";
      this.filter = value;
      this.hideShowDivs("filtered");
    },

  },
  computed: {
    teams: function() {
      let aux = this.matches.map(match => match.teamA || match.teamB);
      let teams = [...new Set(aux)].sort();
      return teams;
    },

  }

});