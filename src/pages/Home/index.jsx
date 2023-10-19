import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
// https://api.themoviedb.org/3/movie/now_playing?api_key=0bbf380ed018e74f6cb1d0819cd147fd&language=pt-BR

function HomePage() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "0bbf380ed018e74f6cb1d0819cd147fd",
          language: "pt-BR",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results);
      setLoading(false)
    }
    loadFilmes();
  }, []);

  if(loading){
    return (
        <div className="loading">
            <h2>Carregando filmes...</h2>
        </div>
    )
  }

  return (
    <div className="container-lista-filme">
      <div className="lista-filme">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Ver mais informações</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
