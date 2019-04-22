var members = [];
var senate = [];
var house = [];
var statistics = {};
var selectedState = "";
var allStates = "All";
var statesArray = [];
var selectState;


$(document).ready(function() {

  if ($('.mainwrapper').is('#senate_data_page')) {


    $("#loading").show();

    selectState = document.getElementById("selectState");

    // CACHE VERIFICATION. if JSON data is in localstorage with a key value equal to current page url, we do parse this object into our members array, so AJAX CALL is not executed //

    if ((localStorage[$(location).attr('href')]) && (localStorage[$(location).attr('href')] !== null)) {

      members = JSON.parse(localStorage[$(location).attr('href')]);
      console.log("Cache found in local storage!");
      $("#loading").hide();
      populateDropdownStatesSelect();
      $("#filters").show();
      createTableMembers(members, "s");
    } else {
      $.ajax({ // OUR AJAX CALL and LOADING PROGRESS BAR
        xhr: function() {
          var xhr = new window.XMLHttpRequest();
          xhr.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              console.log(percentComplete);
              $('.progress').css({
                width: percentComplete * 100 + '%'
              });
              if (percentComplete === 1) {
                $('.progress').addClass('hide');
              }
            }
          }, false);
          return xhr;
        },
        type: 'GET',
        url: 'https://api.propublica.org/congress/v1/113/senate/members.json',
        headers: {
          'X-API-Key': 'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz'
        },
        success: function(data) {
          members = data.results[0].members;
          var cacheMembers = JSON.stringify(members); // store cache as a string
          localStorage[$(location).attr('href')] = cacheMembers;
          console.log("1 ajax call to propublica website");
          console.log("cache stored in local storage!");
          $("#loading").hide();
          populateDropdownStatesSelect();
          $("#filters").show();
          createTableMembers(members, "s");
        }
      });

    }


    document.getElementById("republicanCheckbox").addEventListener('click', function() {
      createTableMembers(members, "s");
    });
    document.getElementById("democratCheckbox").addEventListener('click', function() {
      createTableMembers(members, "s");
    });
    document.getElementById("independentCheckbox").addEventListener('click', function() {
      createTableMembers(members, "s");
    });
    document.getElementById("selectState").addEventListener('change', function() {
      createTableMembers(members, "s");
    });
  }
  if ($('.mainwrapper').is('#house_data_page')) {

    $("#loading").show();
    selectState = document.getElementById("selectState");

    // CACHE VERIFICATION. if JSON data is in localstorage with a key value equal to current page url, we do parse this object into our members array, so AJAX CALL is not executed //

    if ((localStorage[$(location).attr('href')]) && (localStorage[$(location).attr('href')] !== null)) {
      members = JSON.parse(localStorage[$(location).attr('href')]);
      console.log("Cache found in local storage!");
      $("#loading").hide();
      populateDropdownStatesSelect();
      $("#filters").show();
      createTableMembers(members, "h");
    } else {
      $.ajax({ // OUR AJAX CALL and LOADING PROGRESS BAR
        xhr: function() {
          var xhr = new window.XMLHttpRequest();
          xhr.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              console.log(percentComplete);
              $('.progress').css({
                width: percentComplete * 100 + '%'
              });
              if (percentComplete === 1) {
                $('.progress').addClass('hide');
              }
            }
          }, false);
          return xhr;
        },
        type: 'GET',
        url: 'https://api.propublica.org/congress/v1/113/house/members.json',
        headers: {
          'X-API-Key': 'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz'
        },
        success: function(data) {
          members = data.results[0].members;
          var cacheMembers = JSON.stringify(members); // store cache as a string
          localStorage[$(location).attr('href')] = cacheMembers;
          console.log("1 AJAX CALL SENT to PROPUBLICA API");
          console.log("CACHE stored in local storage!");
          $("#loading").hide();
          populateDropdownStatesSelect();
          $("#filters").show();
          createTableMembers(members, "h");
        }
      });

    }

    document.getElementById("republicanCheckbox").addEventListener('click', function() {
      createTableMembers(members, "h");
    });
    document.getElementById("democratCheckbox").addEventListener('click', function() {
      createTableMembers(members, "h");
    });
    document.getElementById("independentCheckbox").addEventListener('click', function() {
      createTableMembers(members, "h");
    });
    document.getElementById("selectState").addEventListener('change', function() {
      createTableMembers(members, "h");
    });
  }
  if ($('.mainwrapper').is('#senate_attendance_page, #senate_loyalty_page')) {

    $("#loading").show();

    // CACHE VERIFICATION. if JSON data is in localstorage with a key value equal to current page url, we do parse this object into our members array, so AJAX CALL is not executed //

    if ((localStorage[$(location).attr('href')]) && (localStorage[$(location).attr('href')] !== null)) {
      senate = JSON.parse(localStorage[$(location).attr('href')]);
      console.log("Cache found in local storage!");
      $("#loading").hide();
      getStatistics();
      fillTablesWithMustache();
    } else {
      $.ajax({ // OUR AJAX CALL and LOADING PROGRESS BAR
        xhr: function() {
          var xhr = new window.XMLHttpRequest();
          xhr.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              console.log(percentComplete);
              $('.progress').css({
                width: percentComplete * 100 + '%'
              });
              if (percentComplete === 1) {
                $('.progress').addClass('hide');
              }
            }
          }, false);
          return xhr;
        },
        type: 'GET',
        url: 'https://api.propublica.org/congress/v1/113/senate/members.json',
        headers: {
          'X-API-Key': 'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz'
        },
        success: function(data) {
          senate = data.results[0].members;
          var cacheMembers = JSON.stringify(senate); // store cache as a string
          localStorage[$(location).attr('href')] = cacheMembers;
          console.log("1 AJAX CALL SENT to PROPUBLICA API");
          console.log("CACHE stored in local storage!");
          $("#loading").hide();
          getStatistics();
          fillTablesWithMustache();
        }
      });
    }
  }
  if ($('.mainwrapper').is('#house_attendance_page, #house_loyalty_page')) {

    $("#loading").show();

    // CACHE VERIFICATION. if JSON data is in localstorage with a key value equal to current page url, we do parse this object into our members array, so AJAX CALL is not executed //

    if ((localStorage[$(location).attr('href')]) && (localStorage[$(location).attr('href')] !== null)) {
      house = JSON.parse(localStorage[$(location).attr('href')]);
      console.log("Cache found in local storage!");
      $("#loading").hide();
      getStatistics();
      fillTablesWithMustache();
    } else {
      $.ajax({ // OUR AJAX CALL and LOADING PROGRESS BAR
        xhr: function() {
          var xhr = new window.XMLHttpRequest();
          xhr.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              console.log(percentComplete);
              $('.progress').css({
                width: percentComplete * 100 + '%'
              });
              if (percentComplete === 1) {
                $('.progress').addClass('hide');
              }
            }
          }, false);
          return xhr;
        },
        type: 'GET',
        url: 'https://api.propublica.org/congress/v1/113/house/members.json',
        headers: {
          'X-API-Key': 'iv8LMc9T9sQKOc0EfDC1NLtQU68pFsF6O6W3NPJz'
        },
        success: function(data) {
          house = data.results[0].members;
          var cacheMembers = JSON.stringify(house); // store cache as a string
          localStorage[$(location).attr('href')] = cacheMembers;
          console.log("1 AJAX CALL SENT to PROPUBLICA API");
          console.log("CACHE stored in local storage!");
          $("#loading").hide();
          getStatistics();
          fillTablesWithMustache();
        }
      });

    }



  }
});

//////////// CREATES A DROPDOWN SELECT WITH OPTIONS TAKEN FROM AN ARRAY OF STATES EXTRACTED FROM JSON DATA

function populateDropdownStatesSelect() {
  for (var i = 0; i < members.length; i++) {
    if (!statesArray.includes(members[i].state)) {
      statesArray.push(members[i].state);
    }
  }
  statesArray.sort();
  var firstOption = "<option value='All'>--  All States --</option>";
  selectState.insertAdjacentHTML("beforeend", firstOption);
  for (var i = 0; i < statesArray.length; i++) {
    var newStateOption = "<option value='" + statesArray[i] + "'>" + statesArray[i] + "</option>";
    selectState.insertAdjacentHTML("beforeend", newStateOption);
  }
  $('.selectpicker').selectpicker('refresh');
}

/////////// CREATES MAIN TABLE FOR SENATE AND HOUSE PAGES. JSON DATA (array of members) passed as a parameter. (generated array of results is cross-filtered according to 3 checkboxes and 1 dropdown select value) ---> data rendered directly to output html eg: createTableMembers(members, s) or (members, h).

function createTableMembers(members, x) {

  selectedState = document.getElementById("selectState").value;

  var tableElement, tableHeaders, table, newTbody;
  if (x == "s") {
    tableElement = document.getElementById("senate_data");
    while (tableElement.firstChild) {
      tableElement.firstChild.remove();
    }
    table = document.getElementById("senate_data");
    tableHeaders = "<thead><tr><th>Senator</th><th>Party Affiliation</th><th>State</th><th>Years in Office</th><th>% Votes w/ Party</th></tr></thead>";
    table.insertAdjacentHTML("beforeend", tableHeaders);
    newTbody = document.createElement("tbody");
    table.insertAdjacentElement("beforeend", newTbody);
  }
  if (x == "h") {
    tableElement = document.getElementById("house_data");
    while (tableElement.firstChild) {
      tableElement.firstChild.remove();
    }
    table = document.getElementById("house_data");
    tableHeaders = "<thead><tr><th>Congressman</th><th>Party Affiliation</th><th>State</th><th>Years in Office</th><th>% Votes w/ Party</th></tr></thead>";
    table.insertAdjacentHTML("beforeend", tableHeaders);
    newTbody = document.createElement("tbody");
    table.insertAdjacentElement("beforeend", newTbody);
  }
  var memberUrl;
  var fullName;
  var fullNameLinkTd;
  var party;
  var state;
  var seniority;
  var votePercentage;
  var memberState;
  var filteredArray = [];
  for (var i = 0; i < members.length; i++) {
    memberState = members[i].state;
    if (((memberState == selectedState) || (selectedState == allStates)) && (document.getElementById("republicanCheckbox").checked === true)) {
      if (members[i].party == "R") {
        filteredArray.push(members[i]);
      }
    }
    if (((memberState == selectedState) || (selectedState == allStates)) && (document.getElementById("democratCheckbox").checked === true)) {
      if (members[i].party == "D") {
        filteredArray.push(members[i]);
      }
    }
    if (((memberState == selectedState) || (selectedState == allStates)) && (document.getElementById("independentCheckbox").checked === true)) {
      if (members[i].party == "I") {
        filteredArray.push(members[i]);
      }
    }
  }
  filteredArray.sort(function(a, b) {
    return a.last_name.localeCompare(b.last_name);
  });
  for (var i = 0; i < filteredArray.length; i++) {
    var newTr = document.createElement("tr");
    newTbody.insertAdjacentElement("beforeend", newTr);
    if (filteredArray[i].middle_name === null) {
      filteredArray[i].middle_name = "";
    }
    fullName = filteredArray[i].last_name + ", " + filteredArray[i].first_name + " " + filteredArray[i].middle_name;
    memberUrl = "<a class='iframe_colorbox' target='_blank' href=" + filteredArray[i].url + ">" + fullName + "</a>";
    fullNameLinkTd = "<td>" + memberUrl + "</td>";
    newTr.insertAdjacentHTML("beforeend", fullNameLinkTd);
    party = "<td>" + filteredArray[i].party + "</td>";
    newTr.insertAdjacentHTML("beforeend", party);
    state = "<td>" + filteredArray[i].state + "</td>";
    newTr.insertAdjacentHTML("beforeend", state);
    seniority = "<td>" + filteredArray[i].seniority + "</td>";
    newTr.insertAdjacentHTML("beforeend", seniority);
    votePercentage = "<td>" + filteredArray[i].votes_with_party_pct + " %" + "</td>";
    newTr.insertAdjacentHTML("beforeend", votePercentage);
  }

  var noResultsWarning = document.getElementById("noResultsWarning");
  if (filteredArray.length > 0) {
    noResultsWarning.style.display = "none";
  }
  if (filteredArray.length === 0) {
    noResultsWarning.style.display = "block";
  }

  if (x == "s") {
    $(".iframe_colorbox").colorbox({
      iframe: true,
      width: "80%",
      height: "70%",
      opacity: 0.5

    });
    if ($.fn.dataTable.isDataTable('#senate_data')) {
      table = $('#senate_data').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true
      });
    } else {
      table = $('#senate_data').DataTable({
        paging: false,
        fixedHeader: true
      });
    }
  }
  if (x == "h") {
    if ($.fn.dataTable.isDataTable('#house_data')) {
      table = $('#house_data').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true
      });
    } else {
      table = $('#house_data').DataTable({
        paging: false,
        fixedHeader: true
      });
    }
  }

}

/////////// GET THE NUMBER OF REPRESENTATIVES OF EACH PARTY/CHAMBER AND CALCULATES THE GLOBAL VOTED WITH PARTY PERCENTAGE FOR EACH PARTY/CHAMBER ---> DATA STORED IN 'statistics' OBJECT (eg: getNumberOfReps_GlobalVotedWithPartyPerc(senate, R);)

function getNumberOfReps_GlobalVotedWithPartyPerc(chamber, party) {
  var count = [];
  var chamberName = "";
  var partyName = "";

  if (chamber == senate) {
    chamberName = "senate_";
  }
  if (chamber == house) {
    chamberName = "house_";
  }
  if (party == "R") {
    partyName = "R";
  }
  if (party == "D") {
    partyName = "D";
  }
  if (party == "I") {
    partyName = "I";
  }
  for (var i = 0; i < chamber.length; i++) {
    if (chamber[i].party == party) {
      count.push(chamber[i]);
    }
  }
  statistics[chamberName + partyName] = count.length;
  var sum = 0;
  var votedWithParty;
  if (statistics[chamberName + partyName] === 0) {
    statistics[chamberName + partyName + "_votedWithPartyPerc"] = 0;
  } else {
    for (var i = 0; i < count.length; i++) {
      votedWithParty = count[i].votes_with_party_pct;
      Number(votedWithParty);
      sum += votedWithParty;
    }
    var average = sum / count.length;
    statistics[chamberName + partyName + "_votedWithPartyPerc"] = Number(average.toFixed(2));
  }
}

///////// GET THE 10% MOST/LEAST LOYAL MEMBERS/CHAMBER. EG: getLoyal(senate, most); ----> DATA STORED IN 'statistics' object

function getLoyal(chamber, mostOrleast) {
  var chamberName = "";
  if (chamber == senate) {
    chamberName = "senate_";
  }
  if (chamber == house) {
    chamberName = "house_";
  }
  var percVotedWithParty = [];
  var numberTotalMembers = chamber.length;
  var numOfAddedMembers = 0;
  var generatedArray = [];
  var percentageToRetrieve = 10;
  var percentageFilled = 0;
  var numberOfMembersToRetrieve = Math.round((chamber.length) * percentageToRetrieve / 100);
  for (var i = 0; i < chamber.length; i++) {
    percVotedWithParty.push(chamber[i].votes_with_party_pct);
  }
  if (mostOrleast == "least") {
    percVotedWithParty.sort(function(a, b) {
      return a - b;
    });
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].votes_with_party_pct <= percVotedWithParty[numberOfMembersToRetrieve - 1]) && (percentageFilled <= percentageToRetrieve)) {
        numOfAddedMembers++;
        generatedArray.push(chamber[i]);
        percentageFilled = (numOfAddedMembers / numberTotalMembers) * 100;
      }
    }
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].votes_with_party_pct == percVotedWithParty[numberOfMembersToRetrieve - 1]) && (!generatedArray.includes(chamber[i]))) {
        generatedArray.push(chamber[i]);
      }
    }
    generatedArray.sort(function(a, b) {
      return a.votes_with_party_pct - b.votes_with_party_pct;
    });
    statistics[chamberName + "least_loyal"] = generatedArray;
  }
  if (mostOrleast == "most") {
    percVotedWithParty.sort(function(a, b) {
      return b - a;
    });
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].votes_with_party_pct >= percVotedWithParty[numberOfMembersToRetrieve - 1]) && (percentageFilled <= percentageToRetrieve)) {
        numOfAddedMembers++;
        generatedArray.push(chamber[i]);
        percentageFilled = (numOfAddedMembers / numberTotalMembers) * 100;
      }
    }
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].votes_with_party_pct == percVotedWithParty[numberOfMembersToRetrieve - 1]) && (!generatedArray.includes(chamber[i]))) {
        generatedArray.push(chamber[i]);
      }
    }
    generatedArray.sort(function(a, b) {
      return b.votes_with_party_pct - a.votes_with_party_pct;
    });
    statistics[chamberName + "most_loyal"] = generatedArray;
  }
}

//////// GET THE 10% MOST/LEAST ENGAGED MEMBERS/CHAMBER. EG: getEngaged(house, least); ----> DATA STORED IN 'statistics' object

function getEngaged(chamber, mostOrleast) {
  var chamberName = "";
  if (chamber == senate) {
    chamberName = "senate_";
  }
  if (chamber == house) {
    chamberName = "house_";
  }
  var missedVotesPerc = [];
  var numberTotalMembers = chamber.length;
  var numOfAddedMembers = 0;
  var generatedArray = [];
  var percentageToRetrieve = 10;
  var percentageFilled = 0;
  var numberOfMembersToRetrieve = Math.round((chamber.length) * percentageToRetrieve / 100);
  for (var i = 0; i < chamber.length; i++) {
    missedVotesPerc.push(chamber[i].missed_votes_pct);
  }
  if (mostOrleast == "most") {
    missedVotesPerc.sort(function(a, b) {
      return a - b;
    });
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].missed_votes_pct <= missedVotesPerc[numberOfMembersToRetrieve - 1]) && (percentageFilled <= percentageToRetrieve)) {
        numOfAddedMembers++;
        generatedArray.push(chamber[i]);
        percentageFilled = (numOfAddedMembers / numberTotalMembers) * 100;
      }
    }
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].missed_votes_pct == missedVotesPerc[numberOfMembersToRetrieve - 1]) && (!generatedArray.includes(chamber[i]))) {
        generatedArray.push(chamber[i]);
      }
    }
    generatedArray.sort(function(a, b) {
      return a.missed_votes_pct - b.missed_votes_pct;
    });
    statistics[chamberName + "most_engaged"] = generatedArray;
  }
  if (mostOrleast == "least") {
    missedVotesPerc.sort(function(a, b) {
      return b - a;
    });
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].missed_votes_pct >= missedVotesPerc[numberOfMembersToRetrieve - 1]) && (percentageFilled <= percentageToRetrieve)) {
        numOfAddedMembers++;
        generatedArray.push(chamber[i]);
        percentageFilled = (numOfAddedMembers / numberTotalMembers) * 100;
      }
    }
    for (var i = 0; i < chamber.length; i++) {
      if ((chamber[i].missed_votes_pct == missedVotesPerc[numberOfMembersToRetrieve - 1]) && (!generatedArray.includes(chamber[i]))) {
        generatedArray.push(chamber[i]);
      }
    }
    generatedArray.sort(function(a, b) {
      return b.missed_votes_pct - a.missed_votes_pct;
    });
    statistics[chamberName + "least_engaged"] = generatedArray;
  }
}

//// GET STATISTICS AND PUTS DATA INTO 'statistics' OBJECT

function getStatistics() {
  var R = "R";
  var D = "D";
  var I = "I";
  var most = "most";
  var least = "least";
  getNumberOfReps_GlobalVotedWithPartyPerc(senate, R);
  getNumberOfReps_GlobalVotedWithPartyPerc(senate, D);
  getNumberOfReps_GlobalVotedWithPartyPerc(senate, I);
  getNumberOfReps_GlobalVotedWithPartyPerc(house, R);
  getNumberOfReps_GlobalVotedWithPartyPerc(house, D);
  getNumberOfReps_GlobalVotedWithPartyPerc(house, I);
  getLoyal(senate, most);
  getLoyal(senate, least);
  getLoyal(house, most);
  getLoyal(house, least);
  getEngaged(senate, most);
  getEngaged(senate, least);
  getEngaged(house, most);
  getEngaged(house, least);
  statistics.total_senate_reps = senate.length;
  statistics.total_house_reps = house.length;
  statistics.total_voted_with_party_senate_average = Number(((statistics.senate_D_votedWithPartyPerc + statistics.senate_R_votedWithPartyPerc + statistics.senate_I_votedWithPartyPerc) / 3).toFixed(2));
  statistics.total_voted_with_party_house_average = Number(((statistics.house_D_votedWithPartyPerc + statistics.house_R_votedWithPartyPerc) / 2).toFixed(2));
}

////// FILL TABLES WITH MUSTACHE TEMPLATES. DATA TAGS TAKEN FROM 'statistics' OBJECT (which is declared as a global variable)

function fillTablesWithMustache() {

  if ($('div:first').is('#senate_attendance_page')) {
    // mustache for senate at a glance
    var tempSenateGlance = "<h3 class='title_tables well' style='text-align:right;'>Senate at a glance</h3><table id='table_s_glance' class='table table-hover'><thead><th>Party</th><th>Nº of Reps</th><th>% Voted w/ Party</th></thead><tbody><tr><td>Democrats</td><td>{{senate_D}}</td><td>{{senate_D_votedWithPartyPerc}}</td></tr><tr><td>Republicans</td><td>{{senate_R}}</td><td>{{senate_R_votedWithPartyPerc}}</td></tr><tr><td>Independents</td><td>{{senate_I}}</td><td>{{senate_I_votedWithPartyPerc}}</td></tr><tr><td>Total</td><td>{{total_senate_reps}}</td><td>{{total_voted_with_party_senate_average}}</td></tr></tbody></table>";

    var tableSenateAtAGlance = Mustache.render(tempSenateGlance, statistics);
    $('#table_senate_glance').html(tableSenateAtAGlance);


    // MUSTACHE FOR SENATE LEAST ENGAGED TABLE

    var tempSenateLeast = "<h3 class='title_tables well'>Least Engaged (Bottom 10% Attendance)</h3><table id='table_s_least_engaged' class='table table-hover'><thead><th>Name</th><th>Nº of Missed Votes</th><th>% Missed</th></thead><tbody>{{#senate_least_engaged}}<tr><td><a class='iframe_colorbox' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{missed_votes}}</td><td>{{missed_votes_pct}}</td></tr>{{/senate_least_engaged}}</tbody></table>";

    var tableSenateLeast = Mustache.render(tempSenateLeast, statistics);
    $('#table_senate_least').html(tableSenateLeast);
    if ($.fn.dataTable.isDataTable('#table_s_least_engaged')) {
      table = $('#table_s_least_engaged').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    } else {
      table = $('#table_s_least_engaged').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    }

    // MUSTACHE FOR SENATE MOST ENGAGED TABLE

    var tempSenateMost = "<h3 class='title_tables well'>Most Engaged (Top 10% Attendance)</h3><table id='table_s_most_engaged' class='table table-hover'><thead><th>Name</th><th>Nº of Missed Votes</th><th>% Missed</th></thead><tbody>{{#senate_most_engaged}}<tr><td><a class='iframe_colorbox' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{missed_votes}}</td><td>{{missed_votes_pct}}</td></tr>{{/senate_most_engaged}}</tbody></table>";

    var tableSenateMost = Mustache.render(tempSenateMost, statistics);
    $('#table_senate_most').html(tableSenateMost);
    if ($.fn.dataTable.isDataTable('#table_s_most_engaged')) {
      table = $('#table_s_most_engaged').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    } else {
      table = $('#table_s_most_engaged').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    }

    $(".iframe_colorbox").colorbox({
      iframe: true,
      width: "80%",
      height: "70%",
      opacity: 0.5

    });

  }

  if ($('div:first').is('#senate_loyalty_page')) {

    // mustache for senate at a glance
    var tempSenateGlance = "<h3 class='title_tables well' style='text-align:right;'>Senate at a glance</h3><table id='table_s_glance' class='table table-hover'><thead><th>Party</th><th>Nº of Reps</th><th>% Voted w/ Party</th></thead><tbody><tr><td>Democrats</td><td>{{senate_D}}</td><td>{{senate_D_votedWithPartyPerc}}</td></tr><tr><td>Republicans</td><td>{{senate_R}}</td><td>{{senate_R_votedWithPartyPerc}}</td></tr><tr><td>Independents</td><td>{{senate_I}}</td><td>{{senate_I_votedWithPartyPerc}}</td></tr><tr><td>Total</td><td>{{total_senate_reps}}</td><td>{{total_voted_with_party_senate_average}}</td></tr></tbody></table>";

    var tableSenateAtAGlance = Mustache.render(tempSenateGlance, statistics);
    $('#table_senate_glance').html(tableSenateAtAGlance);

    // MUSTACHE FOR SENATE LEAST LOYAL TABLE

    var tempSenateLeastLoyal = "<h3 class='title_tables well'>Least Loyal (Bottom 10% of Party)</h3><table id='table_s_least_loyal' class='table table-hover'><thead><th>Name</th><th>Nº of Party Votes</th><th>% Party Votes</th></thead><tbody>{{#senate_least_loyal}}<tr><td><a class='iframe_colorbox' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{total_votes}}</td><td>{{votes_with_party_pct}}</td></tr>{{/senate_least_loyal}}</tbody></table>";

    var tableSenateLeastLoyal = Mustache.render(tempSenateLeastLoyal, statistics);
    $('#senate_least_loyal').html(tableSenateLeastLoyal);
    if ($.fn.dataTable.isDataTable('#table_s_least_loyal')) {
      table = $('#table_s_least_loyal').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    } else {
      table = $('#table_s_least_loyal').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    }

    // MUSTACHE FOR SENATE MOST LOYAL TABLE

    var tempSenateMostLoyal = "<h3 class='title_tables well'>Most Loyal (Top 10% of Party)</h3><table id='table_s_most_loyal' class='table table-hover'><thead><th>Name</th><th>Nº of Party Votes</th><th>% Party Votes</th></thead><tbody>{{#senate_most_loyal}}<tr><td><a class='iframe_colorbox' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{total_votes}}</td><td>{{votes_with_party_pct}}</td></tr>{{/senate_most_loyal}}</tbody></table>";

    var tableSenateMostLoyal = Mustache.render(tempSenateMostLoyal, statistics);
    $('#senate_most_loyal').html(tableSenateMostLoyal);
    if ($.fn.dataTable.isDataTable('#table_s_most_loyal')) {
      table = $('#table_s_most_loyal').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    } else {
      table = $('#table_s_most_loyal').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    }

    $(".iframe_colorbox").colorbox({
      iframe: true,
      width: "80%",
      height: "70%",
      opacity: 0.5

    });

  }

  if ($('div:first').is('#house_attendance_page')) {

    // MUSTACHE FOR HOUSE AT A GLANCE TABLE

    var tempHouseGlance = "<h3 class='title_tables well' style='text-align:right;'>House at a glance</h3><table class='table table-hover'><thead><th>Party</th><th>Nº of Reps</th><th>% Voted w/ Party</th></thead><tbody><tr><td>Democrats</td><td>{{house_D}}</td><td>{{house_D_votedWithPartyPerc}}</td></tr><tr><td>Republicans</td><td>{{house_R}}</td><td>{{house_R_votedWithPartyPerc}}</td></tr><tr><td>Total</td><td>{{total_house_reps}}</td><td>{{total_voted_with_party_house_average}}</td></tr></tbody></table>";

    var tableHouseAtAGlance = Mustache.to_html(tempHouseGlance, statistics);
    $('#table_house_glance').html(tableHouseAtAGlance);

    // MUSTACHE FOR HOUSE LEAST ENGAGED TABLE (template in html file)

    var template = $('#tempHouseLeast').html();
    var tableHouseLeast = Mustache.render(template, statistics);
    $('#table_house_least').html(tableHouseLeast);
    if ($.fn.dataTable.isDataTable('#table_h_least_engaged')) {
      table = $('#table_h_least_engaged').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    } else {
      table = $('#table_h_least_engaged').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    }

    // MUSTACHE FOR HOUSE MOST ENGAGED TABLE (template in html file)

    template = $('#tempHouseMost').html();
    var tableHouseMost = Mustache.render(template, statistics);
    $('#table_house_most').html(tableHouseMost);
    if ($.fn.dataTable.isDataTable('#table_h_most_engaged')) {
      table = $('#table_h_most_engaged').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    } else {
      table = $('#table_h_most_engaged').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    }

  }

  if ($('div:first').is('#house_loyalty_page')) {

    // MUSTACHE FOR HOUSE AT A GLANCE TABLE

    var tempHouseGlance = "<h3 class='title_tables well' style='text-align:right;'>House at a glance</h3><table class='table table-hover'><thead><th>Party</th><th>Nº of Reps</th><th>% Voted w/ Party</th></thead><tbody><tr><td>Democrats</td><td>{{house_D}}</td><td>{{house_D_votedWithPartyPerc}}</td></tr><tr><td>Republicans</td><td>{{house_R}}</td><td>{{house_R_votedWithPartyPerc}}</td></tr><tr><td>Total</td><td>{{total_house_reps}}</td><td>{{total_voted_with_party_house_average}}</td></tr></tbody></table>";

    var tableHouseAtAGlance = Mustache.to_html(tempHouseGlance, statistics);
    $('#table_house_glance').html(tableHouseAtAGlance);


    // MUSTACHE FOR HOUSE LEAST LOYAL TABLE

    var tempHouseLeastLoyal = "<h3 class='title_tables well'>Least Loyal (Bottom 10% of Party)</h3><table id='table_h_least_loyal' class='table table-hover'><thead><th>Name</th><th>Nº of Party Votes</th><th>% Party Votes</th></thead><tbody>{{#house_least_loyal}}<tr><td><a target='_blank' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{total_votes}}</td><td>{{votes_with_party_pct}}</td></tr>{{/house_least_loyal}}</tbody></table>";

    var tableHouseLeastLoyal = Mustache.render(tempHouseLeastLoyal, statistics);
    $('#table_house_least_loyal').html(tableHouseLeastLoyal);
    if ($.fn.dataTable.isDataTable('#table_h_least_loyal')) {
      table = $('#table_h_least_loyal').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    } else {
      table = $('#table_h_least_loyal').DataTable({
        paging: false,
        rowReorder: true,
        fixedHeader: true,
        "order": [
          [2, "asc"]
        ]
      });
    }

    // MUSTACHE FOR HOUSE MOST LOYAL TABLE

    var tempHouseMostLoyal = "<h3 class='title_tables well'>Most Loyal (Top 10% of Party)</h3><table id='table_h_most_loyal' class='table table-hover'><thead><th>Name</th><th>Nº of Party Votes</th><th>% Party Votes</th></thead><tbody>{{#house_most_loyal}}<tr><td><a target='_blank' href='{{url}}'>{{last_name}}, {{first_name}}</a></td><td>{{total_votes}}</td><td>{{votes_with_party_pct}}</td></tr>{{/house_most_loyal}}</tbody></table>";

    var tableHouseMostLoyal = Mustache.render(tempHouseMostLoyal, statistics);
    $('#table_house_most_loyal').html(tableHouseMostLoyal);
    if ($.fn.dataTable.isDataTable('#table_h_most_loyal')) {
      table = $('#table_h_most_loyal').DataTable({
        destroy: true,
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    } else {
      table = $('#table_h_most_loyal').DataTable({
        paging: false,
        fixedHeader: true,
        "order": [
          [2, "desc"]
        ]
      });
    }
  }
}