import React from 'react';

class NewCowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({name: event.target.name, description: event.target.description});
  };

  handleSubmit (event) {
    event.preventDefault();
    console.log('New cow submitted: ', name, description);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Enter a cow name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
        ></input>
        <br></br>
        <input
          placeholder='Enter a description'
          name='description'
          onChange={this.handleChange}
          value={this.state.description}
        ></input>
        <br></br>
        <button
          type='submit'
          onClick={this.addACow}
        >Submit</button>
      </form>
    )
  }
};






export default NewCowForm;