import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <button
        btn
        btn-primary
        btn-sm
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
      >
        Page {props.page - 1}
      </button>

      <p>Page: {props.page}</p>

      <button
        btn
        btn-primary
        btn-sm
        onClick={() => props.setPage(props.page + 1)}
        disabled={props.page === 42}
      >
        Page {props.page + 1}
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + page
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          characters.map((character) => {
            return (
              <div className="col-md-3" key={character.id}>
                <Character character={character} />
              </div>
            );
          })
        )}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
