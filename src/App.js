import React, { Component } from 'react';
import _ from 'lodash';
import { randomPhoneNumbers, randomPhoneInitial} from './helpers/randomNumbersGenerator'
import './App.css';
import NavBar from './components/NavBar'
import NumbersTable from './components/NumbersTable'
import SubNav from './components/SubNav'

class App extends Component {
  constructor (args) {
    super(args)
    this.state = {
      phoneNumbers: [],
      minNum: 0,
      maxNUm: 0,
      sortOrder: 'desc'
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

 sortNumbers = ()  => {
  const {phoneNumbers, sortOrder} = this.state;
    this.setState({
      phoneNumbers:sortOrder === 'ascending' ? phoneNumbers.reverse() : _.sortBy(phoneNumbers) ,
      sortOrder: sortOrder === 'asc' ? 'desc' : 'asc',
    })
  }


  render() {
    const { phoneNumbers } = this.state
    const data = phoneNumbers.map(phoneNumber =>({number:`07${randomPhoneInitial(2,5)}${phoneNumber}`}))

    return (
      <div>
        <NavBar generateNumbers={this.generateNumbers} data={data}></NavBar>
        <SubNav></SubNav>
        <NumbersTable 
          phoneNumbers={this.state.phoneNumbers}
          sortOrder={this.state.sortOrder}
          sortNumbers={this.sortNumbers}
        >
        </NumbersTable>
      </div>
    );
  }
}

export default App;
