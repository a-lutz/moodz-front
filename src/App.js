import React, { Component } from 'react';
import Rating from './components/common/Rating';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    rate_pro: 2,
    rate_perso: 1
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="" />
          <h1 className="App-title">We manage people</h1>
        </header>
        <p className="App-intro">
          Welcome to Moodz
        </p>
        <Rating
          rates={['🌞', '🌤', '🌦', '🌨', '🌩']}
          value={this.state.rate_pro}
          clickRate={this.clickRate('rate_pro')}>
        </Rating>

        <Rating
          rates={[0, 1, 2, 3, 4]}
          value={this.state.rate_perso}
          clickRate={this.clickRate('rate_perso')}>
        </Rating>
      </div>
    );
  }

  clickRate = rating => rate => {
    this.setState({[rating]: rate});
  }
}

export default App;
