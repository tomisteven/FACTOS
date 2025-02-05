const Card = ({ card }) => {
  return (
    <div class="card">
      <img src={card.icon} alt="" />
      <p class="heading">{card.title}</p>
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
