import { useCallback, useState } from 'react';
import Breed from './Breed';
import BreedForm from './BreedForm';
import BREEDS_DATA from '../../api/mock_data';

export default function BreedsList() {
  const [breeds, setBreeds] = useState(BREEDS_DATA);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const selectBreed = useCallback((e) => {
    setSelectedBreed(breeds.find(b => b.id === e.target.value));
  }, [breeds]);

  const saveBreed = useCallback((breed) => {
    const id = breed.name.substring(0, 4);
    const newBreed = {
      id: id,
      ...breed,
    };
    setBreeds((breeds) => breeds.concat(newBreed));
  }, []);

  return (
    <>
      <h1>Cat Breeds</h1>
      <div>
        <p>
          Select a breed: <select onChange={selectBreed}>
            <option value="">--select a breed--</option>
            {breeds
              .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
              .map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
          </select>
        </p>
      </div>

      {selectedBreed && <Breed key={selectedBreed.id} {...selectedBreed} />}

      <hr />

      <BreedForm saveBreed={saveBreed} />
    </>
  )
}
