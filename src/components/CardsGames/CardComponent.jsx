/* eslint-disable react/prop-types */

function CardComponent({ image, title, description }) {
  return (
    
    <a href="" className="game-card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </a>
  );
}

export default CardComponent;