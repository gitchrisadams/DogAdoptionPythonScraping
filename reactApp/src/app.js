class AnimalsAdoptMainApp extends React.Component {
  render() {
    const title = 'Python Animal Adoption Scraper';
    const subtitle = 'Scraping aint scrapping';
    const btnText = 'What should I do?';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action btnText={btnText} />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.btnText}</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (

      <div>
      {
        this.props.options.map((option, index) => <Option key={index} optionText={option} />)
      }
      </div>

    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return(
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<AnimalsAdoptMainApp />, document.getElementById('app'));












