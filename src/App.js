import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import NumbersTable from './components/NumbersTable'
import { randomPhoneNumbers} from './helpers/randomNumbersGenerator'

class App extends Component {
  constructor (args) {
    super(args)
    this.state = {
      phoneNumbers: [],
      minNum: 0,
      maxNUm: 0,
      sortOrder: 'ascending'
    }
  }

  componentDidMount() {
      randomPhoneNumbers(phoneNumbers=>{
      this.setState({phoneNumbers})
    })

  }

 generateNumbers = ()=>{
   randomPhoneNumbers(phoneNumbers=>{
    this.setState({phoneNumbers})
   })
 }


  render() {
    console.log('state', this.state.minNum)
    return (
      <div>
        <NavBar generateNumbers={this.generateNumbers}></NavBar>
        <NumbersTable phoneNumbers={this.state.phoneNumbers}></NumbersTable>
      </div>
    );
  }
}

export default App;
