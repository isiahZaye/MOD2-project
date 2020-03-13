import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../App.css'

class NBA extends Component {
  constructor(){
    super()
    this.state= {
      players:[],
      isLoaded: false
    }
  }


  componentDidMount() {
    fetch('https://www.balldontlie.io/api/v1/players')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        isLoaded: true,
        players: result
      });
    });



  }
  render() {
    const {  isLoaded, players,} = this.state;
     if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (

        <div>
        <div>
        <h1>NBA players</h1>
        </div>
          <ul className="list">
          {players.map((crime,i) => (
          <li key={players}>

            <br />
          </li>

          ))}
        </ul>
        </div>
      );
    }
  }
}
export default NBA;
