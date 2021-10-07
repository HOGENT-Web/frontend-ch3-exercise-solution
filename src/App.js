import BreedsList from './components/BreedsList';
import BreedForm from './components/BreedForm';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [breeds, setBreeds] = useState([]);
  useEffect (()=>{
    fetch('https://api.thecatapi.com/v1/breeds')
    .then((result) => result.json())
    .then((result) => {
      setBreeds(result.map((breed) => {
        return {id:breed.id,
          name:breed.name,
          description:breed.description,
          imageUri: breed.image?.url,
          lifespan:breed.life_span,
          origin:breed.origin,
          weight:breed.weight.metric,
          temperament:breed.temperament}}
        ))
      })
    .catch((error) => console.log(error));
  },[]);
console.log(breeds)
const saveBreed = ({name, description, imageUri})=>{
    const id= name.substring(0,4);
    
    console.log(id)
    const newBreed ={ id:id, name, description, imageUri, lifespan:"", origin:"", weight:"", temperament:""}
    console.log(newBreed);
    const newBreeds = [newBreed, ...breeds];
    setBreeds(newBreeds);
}

  return (
  <div className="container">

    <BreedsList breeds={breeds}/>
    <hr/>
    <BreedForm saveBreed={saveBreed}/>
  </div>)
}

export default App;
