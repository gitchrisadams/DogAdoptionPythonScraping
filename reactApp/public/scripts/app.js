'use strict';

var app = {
  title: 'Python Animal Adoption Scraper',
  subtitle: 'Scraping aint scapping...'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    'Location: Providence, RI'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
