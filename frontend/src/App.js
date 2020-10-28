import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
// import Cow from './Cow.js';
// import $ from 'jquery';
import CowList from './CowList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      cow: {
        name: 'Cow Name',
        description: 'cow description'
      },
      newCow: {
        name: '',
        description: ''
      }
    }

    // this binding
    this.getAllNames = this.getAllNames.bind(this);
    this.addACow = this.addACow.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // component did mount
  componentDidMount () {
    this.getAllNames();
  }

  // METHODS

  // get all names
  getAllNames () {
    Axios.get('/api/getAllNames')
      .then(res => {
        console.log("getAllNames response: ", res);
        this.setState({cows: res.data}, () => {
          // console.log("State: ", this.state);
          console.log('Retrieved all cow names');
        })
      })
      .catch(err => {
        console.error(err);
      })
  };

  // add a new cow
  addACow (event) {
    event.preventDefault();
    Axios.post('api/postCow', {
      name: event.name,
      description: event.description
    })
      .then(res => {
        console.log('New cow posted');
        this.getAllNames();
      })
      .catch(err => {
        console.error(err);
      })
  };

  // handle new cow input
  handleInput (event) {
    event.preventDefault();
    var cowName = event.target.name;
    var cowDescription = event.target.description;
    this.setState({name: cowName, description: cowDescription});
    console.log("New cow: ", cowName + ' - ' + cowDescription);
  }

  render() {
    return (
      <div className="App">
        <h1>Cow List</h1>
        {/* <Cow cow={this.state.cow}/> */}
        <CowList cows={this.state.cows}/>
        <form>
          <input
            placeholder='Enter a cow name'
            name='name'
            onChange={this.handleInput}
            value={this.state.newCow.name}
          ></input>
          <br></br>
          <input
            placeholder='Enter a description'
            name='description'
            onChange={this.handleInput}
            value={this.state.newCow.description}
          ></input>
          <br></br>
          <button
            type='submit'
            onSubmit={this.addACow}
          >Submit</button>
        </form>
        <div>
          {/* <p>{this.state.cows}</p> */}
        </div>
      </div>
    )
  };
}

export default App;
