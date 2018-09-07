var app = {
  title: 'Python Animal Adoption Scraper',
  subtitle: 'Scraping aint scapping...'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>Location: Providence, RI</p>
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);