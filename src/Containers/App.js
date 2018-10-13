import React from 'react';
import Header from '../Components/Header';
import CardPeopleList from '../Components/CardPeopleList';
import CardVehiclesList from '../Components/CardVehiclesList';
import SearchBoxPeople from '../Components/SearchBoxPeople';
import SearchBoxVehicles from '../Components/SearchBoxVehicles';
import Scroll from '../Components/Scroll';
import './App.css';
import '../Components/Header';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchFieldPeople: '',
      person: '',
      numberOfPeople: '',
      vehicles: [],
      searchFieldVehicles: '',
      vehicle: '',
      numberOfVehicles: ''
    }
  }

  async componentDidMount() {
       // ---PEOPLE---
       try {
        const response1 = await fetch('https://swapi.co/api/people/?format=json');
        const peopleParent = await response1.json();
        if(response1.status !==200){
          throw new Error("Not 200 response1 from fetch request. ")
        } else {
          this.setState({numberOfPeople: peopleParent.count})
        }
        let peopleArray = this.state.people.slice();
        let counterPeople = 0; //This is used in case one fetch does not work in the array
        for (let i=1; i<this.state.numberOfPeople; i++){
          counterPeople++; //always add one here. start at 0 and we like starting our counter at 1
          const response1 = await fetch(`https://swapi.co/api/people/${i}/?format=json`);
          const peopleChild = await response1.json();
          if(response1.status !==200){
            counterPeople--; //subtract 1 since add one everytime and this element does not fetch exist
          } else {
            peopleArray[counterPeople] = peopleChild;
          }
        }
        this.setState({people: peopleArray});
        console.log(this.state.people);
       }catch (err){
         console.log('Could not find star wars people list: ', err);
       }
// ---VEHICLES---
       try {
        const response2 = await fetch('https://swapi.co/api/vehicles/?format=json');
        const vehiclesParent = await response2.json();
        if(response2.status !==200){
          throw new Error("Not 200 response2 from fetch request. ")
        } else {
          this.setState({numberOfVehicles: vehiclesParent.count})
        }
        let vehiclesArray = this.state.vehicles.slice();
        let counterVehicles = 0; //This is used in case one fetch does not work in the array
        for (let i=1; i<this.state.numberOfVehicles; i++){
          counterVehicles++; //always add one here. start at 0 and we like starting our counter at 1
          const response2 = await fetch(`https://swapi.co/api/vehicles/${i}/?format=json`);
          const vehiclesChild = await response2.json();
          if(response2.status !==200){
            counterVehicles--; //subtract 1 since add one everytime and this element does not fetch exist
          } else {
            vehiclesArray[counterVehicles] = vehiclesChild;
          }
        }
        this.setState({vehicles: vehiclesArray});
        console.log(this.state.vehicles);
       }catch (err){
         console.log('Could not find star wars vehicle list: ', err);
       }
  }

   onSearchPeopleChange = (event) =>{
     this.setState({ searchFieldPeople: event.target.value })
   }
   onSearchVehiclesChange = (event) =>{
     this.setState({ searchFieldVehicles: event.target.value })
   }

  render() {
    const { people, searchFieldPeople, vehicles, searchFieldVehicles } = this.state;
    const filteredPeople = people.filter(person=>{
      return person.name.toLowerCase().includes(searchFieldPeople.toLowerCase());
    })
    const filteredVehicles = vehicles.filter(vehicle=>{
      return vehicle.name.toLowerCase().includes(searchFieldVehicles.toLowerCase());
    })
    return !people.length ?  <h1 className='loadingHeader'>Loading</h1> : //if there are no cards
    (
      <div className='WholeAppLayout'>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="flex flex-column App">
          <Header />
          <div className='flex flex-row justify-around filterAndCards'>
            <div className='flex flex-column w-20'>
              <div className='flex flex-row outline'>
                <h2 className="sectionTitles w-100">Filter Area</h2>
              </div>
              <div className='flex flex-row items-center justify-center filterTextBox'>
                <p>Person's Name:</p>
                <SearchBoxPeople searchPeopleChange={this.onSearchPeopleChange}/>
              </div>
              <div className='flex flex-row items-center justify-center filterTextBox'>
                <p>Vehicle's Name:</p>
                <SearchBoxVehicles searchVehiclesChange={this.onSearchVehiclesChange}/>
              </div>
            </div>
            <div className='flex flex-column w-70'>
              <div className='flex flex-row outline'>
                <h2 className="sectionTitles w-100">Cards Area</h2>
              </div>
              <div className='flex flex-row'>
                <div className='fullCardList w-100'>
                  <Scroll>
                    <CardPeopleList  people={ filteredPeople } />
                    <CardVehiclesList  vehicles={ filteredVehicles } />
                  </Scroll>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}


export default App;
