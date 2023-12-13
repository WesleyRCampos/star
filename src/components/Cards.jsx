
const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <div className="card" key={character.name}>
          <div className="card-body">
            <h5 className="card-title"> {character.name}</h5>
            
            <p className="card-text">Altura: {character.height}</p>
            <p className="card-text">Peso: {character.mass}</p>
            <p className="card-text">Cor: {character.skin_color}</p>
            <p className="card-text">Cabelos: {character.hair_color}</p>
            <p className="card-text">Olhos: {character.eye_color}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards
