function Card({ title, image, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
