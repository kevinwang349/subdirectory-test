document.addEventListener('DOMContentLoaded', init);

function init() {
    const queryString = window.location.search;
    const p = document.createElement('p');
    p.innerHTML = queryString;
    document.body.appendChild(p);
    //const urlParams = new URLSearchParams(queryString);
}
