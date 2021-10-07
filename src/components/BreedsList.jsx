import {useState} from 'react';

const Breed = ({name, description, imageUri, origin, weight,lifespan, temperament})=> {

 return   (<div id="breedData" className="card">
 <img className="card-img-top image-thumbnail breedImage" id="breedImage" alt={name} src={imageUri}/>
 <div className="card-body">
   <h2 className="card-title" id="breedName">{name}</h2>
   <p className="card-text" id="breedDescription">{description}<br/>origin: {origin}<br/>weight: {weight} kg<br/>lifespan: {lifespan} years<br/>temperament: {temperament}</p>
 </div>
</div> )
}

export default function BreedsList({breeds}) {   
  const [selectedBreed, setSelectedBreed] = useState(0);
  const selectBreed = (e) => {
    setSelectedBreed (breeds.find(b=>b.id === e.target.value));
  }
    return (
        <>
        <h1>Cat Breeds</h1>
        <div>
          <p>
            Select a breed: <select id="breedList" onChange={selectBreed}>
              <option key="0" value="">--select a breed--</option>
              {breeds.sort((a,b) => a.name < b.name).map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
            </select>
          </p>
        </div>   
        {selectedBreed!==0 &&  <Breed key={selectedBreed.id} {...selectedBreed} />}
        </>
    )
}
