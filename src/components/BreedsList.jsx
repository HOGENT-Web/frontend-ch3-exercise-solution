import { useCallback, useState } from 'react';
import noImage from './noImageAvailable.png';

const Breed = ({
  name,
  description,
  imageUri = noImage,
  origin,
  weight,
  lifespan,
  temperament,
}) => {
  return (
    <div className="card">
      <img className="card-img-top image-thumbnail" alt={name} src={imageUri} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          {description}<br />
          <b>origin:</b> {origin}<br />
          <b>weight:</b> {weight} kg<br />
          <b>lifespan:</b> {lifespan} years<br />
          <b>temperament:</b> {temperament}</p>
      </div>
    </div>
  );
}

export default function BreedsList({ breeds }) {
  const [selectedBreed, setSelectedBreed] = useState();
  const selectBreed = useCallback((e) => {
    setSelectedBreed(breeds.find(b => b.id === e.target.value));
  }, [breeds]);
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
    </>
  )
}
