import React from 'react';
import SearchBoxPeople from '../Components/SearchBoxPeople';
//import CardPeople from '../Components/CardPeople';
import CardPeopleList from '../Components/CardPeopleList';
import './App.css';
import '../Components/Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchFieldPeople: '',
      person: '',
      numberOfPeople: ''
    }
  }

  async componentDidMount() {
       try {
        const response = await fetch('https://swapi.co/api/people/?format=json');
        const peopleParent = await response.json();
        if(response.status !==200){
          throw new Error("Not 200 response from fetch request. ")
        } else {
          this.setState({numberOfPeople: peopleParent.count})
          console.log(this.state.numberOfPeople);          
        }

        let peopleArray = this.state.people.slice();
        let counterPeople = 0; //This is used in case one fetch does not work in the array
        for (let i=1; i<this.state.numberOfPeople; i++){
          counterPeople++; //always add one here. start at 0 and we like starting our counter at 1
          const response = await fetch(`https://swapi.co/api/people/${i}/?format=json`);
          const peopleChild = await response.json();
          if(response.status !==200){
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
  }

   onSearchPeopleChange = (event) =>{
     this.setState({ searchFieldPeople: event.target.value })
   }

  render() {
    const { people, searchFieldPeople } = this.state;
    const filteredPeople = people.filter(person=>{
      return person.name.toLowerCase().includes(searchFieldPeople.toLowerCase());
    })
    return (
      <div className="flex flex-column App">
        <div className='flex flex-row justify-center'>
          <h1 className='SW1'>STAR WARS</h1>
        </div>
        <div className='flex flex-row justify-around filterAndCards'>
          <div className='flex flex-column w-20'>
            <div className='flex flex-row outline'>
              <h2 className="sectionTitles">Filter Area</h2>
            </div>
            <div className='flex flex-row'>
              <h3>Name</h3>
              <SearchBoxPeople searchPeopleChange={this.onSearchPeopleChange}/>
            </div>
          </div>
          <div className='flex flex-column w-70'>
            <div className='flex flex-row outline'>
              <h2 className="sectionTitles w-100">Cards Area</h2>
            </div>
            <div className='flex flex-row'>
              <div className='fullCardList w-100'>
                <CardPeopleList  people={ filteredPeople } />
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}


export default App;
