import "./burbujas.css";

const Burbujas = () => {
  const burbujas = 90;

  return (
    <>
      {Array(burbujas)
        .fill()
        .map((_, i) => (
          <div class="circle-container">
            <div class="circle"></div>
          </div>
        ))}
    </>
  );
};

export default Burbujas;
