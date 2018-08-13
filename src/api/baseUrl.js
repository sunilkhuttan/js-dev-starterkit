export default function getBaseUrl() {
    let apiUrl =  getQueryStringParameterByName('useMockApi') === null ? 'http://localhost:4001/' : 'https://mysterious-dawn-16770.herokuapp.com/';
    return apiUrl;
  }
  
  function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  