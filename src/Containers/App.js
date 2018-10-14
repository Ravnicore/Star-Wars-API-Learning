import React from 'react';
import Header from '../Components/Header';
import CardPeopleList from '../Components/CardPeopleList';
import CardVehiclesList from '../Components/CardVehiclesList';
import SearchBoxPeople from '../Components/SearchBoxPeople';
import SearchBoxVehicles from '../Components/SearchBoxVehicles';
// import radioFilterButtons from '../Components/radioFilterButtons';
import { Button } from 'reactstrap';
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
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state.rSelected = 1;
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
    let removeVehicleCards = document.querySelector(".vehiclesCardsContainer");
     this.setState({ searchFieldPeople: event.target.value })
     if (event.target.value !== null){
      console.log(event.target.value);
        if (removeVehicleCards.style.display !== "none" && event.target.value !== "" ){
          removeVehicleCards.style.display = "none";
        }
        if (removeVehicleCards.style.display === "none" && event.target.value === "") {
          removeVehicleCards.style.display = "block";
        }
     }
   }


   onSearchVehiclesChange = (event) =>{
    let removePeopleCards = document.querySelector(".PeopleCardsContainer");
     this.setState({ searchFieldVehicles: event.target.value });
     if (event.target.value !== null){
      console.log(event.target.value);
        if (removePeopleCards.style.display !== "none" && event.target.value !== "" ){
          removePeopleCards.style.display = "none";
        }
        if (removePeopleCards.style.display === "none" && event.target.value === "") {
          removePeopleCards.style.display = "block";
        }
     }
   }

   onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
    let removeVehicleCards = document.querySelector(".vehiclesCardsContainer");
    let removePeopleCards = document.querySelector(".PeopleCardsContainer");
    if (rSelected === 1){
      removePeopleCards.style.display = "block";
      removeVehicleCards.style.display = "block";
    }else if (rSelected === 2) {
      removePeopleCards.style.display = "block";
      removeVehicleCards.style.display = "none";
    }else if (rSelected === 3){
      removePeopleCards.style.display = "none";
      removeVehicleCards.style.display = "block";
    }
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
          <div className='flex flex-column w-100 filterAndCards'>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-column w-70'>
                <div className='flex flex-row outline'>
                  <h2 className="sectionTitles w-100">Filter Area</h2>
                </div>
                <div className='flex flex-column filterAllTextArea'>
                  <div  className='flex flex-row'>
                    <div className='flex flex-column w-50 filterByCardNameCol'>
                      <div className='flex flex-row justify-center'>
                        <h4>Filter By Card Name</h4>
                      </div>
                      <div className='flex flex-column'>
                        <div className='flex flex-row justify-center filterTextBox'>
                        <div class="flex flex-wrap">                      
                          <div className='flex flex-column w-50 tr'>
                            <div><p>Person's Name:</p></div>
                          </div>
                          <div className='flex flex-column w-50 rl'>
                            <div><SearchBoxPeople searchPeopleChange={this.onSearchPeopleChange}/></div>
                          </div>
                        </div>  
                        </div>
                        <div className='flex flex-row justify-center filterTextBox'>
                          <div className='flex flex-column w-50 tr'>
                            <p>Vehicle's Name:</p>
                          </div>
                          <div className='flex flex-column w-50 rl'>
                            <SearchBoxVehicles searchVehiclesChange={this.onSearchVehiclesChange}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-column w-50 filterByCardTypeCol'>
                      <div className='flex flex-row justify-center'>
                        <h4>Select Card Type</h4>
                      </div>
                      <div className='flex flex-column w-100'>
                        <div className='flex flex-row justify-center'>
                          <div>
                            <p><span className='filterRadioText'>All The Cards</span><Button className='filterRadioButtons' color="danger" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}></Button></p>
                          </div>
                        </div>
                        <div className='flex flex-row justify-center'>  
                          <div>
                            <p><span className='filterRadioText'>People Cards</span><Button className='filterRadioButtons' color="danger" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}></Button></p>
                          </div>
                        </div>
                        <div className='flex flex-row justify-center'>
                          <div>
                            <p><span className='filterRadioText'>Vehicle Cards</span><Button className='filterRadioButtons' color="danger" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}></Button></p>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>                  
                </div>  
              </div>
            </div>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-column w-90'>
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
          <div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
