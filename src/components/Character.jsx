function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h4>{character.name}</h4>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
