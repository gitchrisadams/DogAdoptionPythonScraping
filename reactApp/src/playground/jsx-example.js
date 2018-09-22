const app = {
  title: 'Python Animal Adoption Scraper',
  subtitle: 'Scraping aint scrapping...',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  // Grab the element value.
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

// Generate random numbers based of length of array of added items.
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const removeAllItems = (e) => {
  app.options = [];
  renderApp();
};

const renderApp  = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={removeAllItems}>Remove All items</button>

      <ol>
        {
          app.options.map( (option, count) => {
            return <li key={count}>{option}</li>
          })
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();