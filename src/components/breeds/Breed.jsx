import noImage from './noImageAvailable.png';

const Breed = ({
  name,
  description,
  imageUrl,
  origin,
  weight,
  lifespan,
  temperament,
}) => {
  return (
    <div className="card">
      <img
        className="card-img-top image-thumbnail"
        alt={name}
        src={imageUrl || noImage} />

      <div className="card-body">
        <h2 className="card-title">
          {name}
          </h2>
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

export default Breed;