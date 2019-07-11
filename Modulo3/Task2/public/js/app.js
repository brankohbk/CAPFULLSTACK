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
        "date": "2019-07-03",
        "teamA": "U5",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      },
      {
        "date": "2019-07-03",
        "teamA": "U5",
        "teamB": "U6",
        "location": "Howard A Yeager",
        "time": "1:00 p.m."
      },
    ],
    locations: {
      "AJ Katzenmaier": {
        "map": "https://www.google.com/maps?ll=41.900292,-87.62905&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=24+W+Walton+St+Chicago,+IL+60610+USA",
        "address": "24 W. Walton St., Chicago, IL 60610",
        "embeded": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23757.23410997335!2d-87.62905!3d41.900292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2sar!4v1562798048490!5m2!1sen!2sar",
      },
      "Greenbay": {
        "map": "https://maps.google.com/maps?ll=41.913802,-87.637839&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=1734%20N%20Orleans%20St%20Chicago%2C%20IL%2060614%20USA",
        "address": "1734 N. Orleans St., Chicago, IL 60614",
        "embeded": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23752.207178859142!2d-87.637839!3d41.913802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1562797694973!5m2!1sen!2sar",
      },
      "Howard A Yeager": {
        "map": "https://www.google.com/maps/place/2245+N+Southport+Ave,+Chicago,+IL+60614,+USA/@41.923265,-87.662926,14z/data=!4m5!3m4!1s0x880fd2e37f9b8d2d:0x62ad8b907dd755d6!8m2!3d41.9232646!4d-87.6629259?hl=en-US",
        "address": "2245 N. Southport Ave., Chicago, IL 60614",
        "embeded": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458455746!3d41.92326457921871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1562797784947!5m2!1sen!2sar",

      },
      "Marjorie P Hart": {
        "map": "https://maps.google.com/maps?ll=41.929578,-87.645898&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=2625%20N%20Orchard%20St%20Chicago%2C%20IL%2060614%20USA",
        "address": "2625 N. Orchard St., Chicago, IL 60614",
        "embeded": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23746.33542120715!2d-87.645898!3d41.929578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1562797843970!5m2!1sen!2sar",

      },
      "North": {
        "map": "https://maps.google.com/maps?ll=41.907062,-87.646275&z=16&t=m&hl=en-US&gl=US&mapclient=embed",
        "address": "1409 N. Ogden Ave., Chicago, IL 60610",
        "embeded": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.337799844479!2d-87.64837162030375!3d41.90709647932166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610!5e0!3m2!1sen!2sus!4v1562797920037!5m2!1sen!2sus",

      },
      "South": {
        "map": "https://maps.google.com/maps?ll=41.919777,-87.651367&z=14&t=m&hl=en-US&gl=AR&mapclient=embed&q=2101%20N%20Fremont%20St%20Chicago%2C%20IL%2060614%20USA",
        "address": "2101 N. Fremont St., Chicago, IL 60614",
        "embeded": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23749.983522029845!2d-87.651367!3d41.919777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2sar!4v1562797953368!5m2!1sen!2sar",

      },
    },
    titles: {
      "home": "",
      "filtered": "All matches for:",
      "categoryOptions": {
        "teams": 'Please select your TEAM',
        "stadiums": 'Please select a STADIUM',
        "dates": 'Please select a DATE'
      },
    },
    title: "",
    filter: '',
    actualCategory: '',
    filteredMatches: [],
    categoryData: '',
    selectedStadium: "",
    showDiv: 'home',
    infoContainerClasslist: 'col-12 justify-content-center',
    history: [],
  },
  methods: {
    selectCategory: function(selection) {
      // carga el array "categoryData" con la propiedad computada teams||dates||stadiums .
      this.categoryData = this[selection];
      // Carga la seleccion realizada en actualCategory para ser utilizada, cuando se ingrese en teams||dates||stadiums.
      this.actualCategory = selection;
      // Muestra la seccion donde se verán todos los elementos de teams||dates||stadiums.
      this.showSection("categoryOptions");
    },
    showSection: function(section) {
      this.showDiv = section;
      // si la seccion seleccionada es "categoryOptions", muestra el titulo correspondiente a la categoria seleccionada.
      section === "categoryOptions" ?
        this.title = this.titles[section][this.actualCategory] :
        this.title = this.titles[section];
      // si la ultima seccion visitada no es la misma a la que se está accediendo, agrega la seccion al historial.
      if (this.history[this.history.length - 1] != section) {
        this.history.push(section);
      }
    },
    goBack: function() {
      // si el historial tiene más de 1 seccion visitada, elimina la actual y va a la anterior.
      if (this.history.length > 1) {
        this.selectedStadium = "";
        this.history.pop();
        var ultimoindice = this.history.length - 1;
        var section = this.history[ultimoindice];
        this.showSection(section);
      } else {
        // si el historial tiene 1 elemento o menos, por defecto carga "home".
        this.history.pop();
        this.showSection("home");
      }
    },
    globalFilter: function(value) {
      // si no se le pasa ningun parametro, muestra todos los partidos.
      if (typeof(value) === 'undefined') {
        this.filteredMatches = this.matches;
        this.title = "ALL matches";
        this.filter = '';
      } else {
        this.filteredMatches = this.matches.filter(
          // por cada partido ->
          match => {
            // por cada key en el partido ->
            for (const key in match) {
              // evalúa si el valor de la key es igual al filtro pasado por parametro.
              if (match[key] === value) {
                return true;
              }
            }
          }
        );
        this.filter = value;
      }
      this.showSection("filtered");
    },
    selectStadium: function(selection) {
      this.selectedStadium = selection;
    }
  },
  computed: {
    // Los equipos son extraídos de todos los partidos y pasados a un array con valores únicos.
    teams: function() {
      let aux = this.matches.map(match => match.teamA || match.teamB);
      let teams = [...new Set(aux)].sort();
      return teams;
    },
    // Los nombres de los estadios son extraídos de todos los partidos y pasados a un array con valores únicos.
    stadiums: function() {
      let aux = this.matches.map(match => match.location);
      let stadiums = [...new Set(aux)].sort();
      return stadiums;
    },
    // Las fechas donde en que se juegan los partidos son extraídas de todos los partidos y pasados a un array con valores únicos.
    dates: function() {
      let aux = this.matches.map(match => match.date);
      let dates = [...new Set(aux)].sort();
      return dates;
    },
    // Averigua la fecha actual.
    today: function() {
      var day = new Date();
      var dd = String(day.getDate()).padStart(2, '0');
      var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = day.getFullYear();
      day = yyyy + '-' + mm + '-' + dd;
      return day;
    },
    // Filtra todos los partidos de la fecha actual.
    todayMatches: function() {
      return this.matches.filter(match => match.date === this.today);
    }
  }
});