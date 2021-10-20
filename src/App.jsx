import BreedsList from './components/BreedsList';
import BreedForm from './components/BreedForm';
import {
  useState,
  useEffect,
  useCallback
} from 'react';

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((result) => result.json())
      .then((result) => {
        setBreeds(result.map((breed) => {
          return {
            id: breed.id,
            name: breed.name,
            description: breed.description,
            imageUri: breed.image?.url,
            lifespan: breed.life_span,
            origin: breed.origin,
            weight: breed.weight.metric,
            temperament: breed.temperament
          }
        }))
      })
      .catch((error) => console.log(error));
  }, []);

  const saveBreed = useCallback((breed) => {
    const id = breed.name.substring(0, 4);
    const newBreed = {
      id: id,
      ...breed,
    };
    setBreeds((breeds) => breeds.concat(newBreed));
  }, []);

  return (
    <div className="container">
      <BreedsList breeds={breeds} />
      <hr />
      <BreedForm saveBreed={saveBreed} />
    </div>
  );
}

export default App;