import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../App.css'

class WeedStrain extends Component {
  constructor(){
    super()
    this.state= {
      mood:[],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('strainapi.evanbusse.com/fQNwJJ8/strains/data/effects/STRAIN_ID')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        mood: result
      });
    });



  }
  render() {
    const {  isLoaded, mood, effect, type } = this.state;
     if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div>
        <div>
        <h1>Top MLB Crime: Gun</h1>
        </div>
        <ul className="list">
          {mood.map(mod => (
          <li id={0}>
            mood:{mood.effect}

          <br />
          </li>

          ))}
        </ul>
        </div>
      );
    }
  }
}
export default WeedStrain;
