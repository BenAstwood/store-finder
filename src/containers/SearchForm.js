import React, {Component} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class SearchForm extends Component {

  state = {
    inputValue: ''
  }

  showResults = (event) => {
    event.preventDefault();
    this
      .props
      .updateOnSubmit(this.state.inputValue);

  }

  inputChangedHandler = (event) => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.showResults}>
        <Input changed={(event) => this.inputChangedHandler(event)}/>
        <Button text='Search'/>
      </form>
    )
  }
};

export default SearchForm;