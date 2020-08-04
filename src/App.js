import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';


class App extends Component{
constructor(){
   super();


   this.state = {
     monsters: [],
     searchFeild: ''
   };
   

  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }


  handleChange = e => {
    this.setState({ searchFeild: e.target.value})
  }

  render(){
  const { monsters,searchFeild } = this.state;
  
  const filteredMonsters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase())
  );

   return(
    <div className="App">
      <h1>Monsters</h1>
    <SearchBox placeholder="Search Monsters" 
    handleChange ={this.handleChange }
    />

      <Cardlist monsters ={filteredMonsters} ></Cardlist>
     
     </div>

   );    

  }
}

export default App;
