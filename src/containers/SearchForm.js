import React, {Component} from 'react';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form'

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
      <Form submitEvent={this.showResults}>
        <Input changed={(event) => this.inputChangedHandler(event)}/>
        <Button text='Search'/>
      </Form>
    )
  }
};

export default SearchForm;