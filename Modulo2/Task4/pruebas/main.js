var nameUrl = 'https://openexchangerates.org/api/currencies.json';
var rateUrl = 'http://data.fixer.io/api/latest?access_key=378328b68282afc0aaf9511f4e884cbf';

function fetchJson(url, init) {
  return fetch(url, init).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText)
  });
}

function fetchJsonList(urls, init) {
  return Promise.all(urls.map(url => fetchJson(url, init)));
}


fetchJsonList([nameUrl, rateUrl]).then(function(values) {
  app.names = values[0];
  app.rateData = values[1];
}).catch(function(error) {
  alert(error);
});