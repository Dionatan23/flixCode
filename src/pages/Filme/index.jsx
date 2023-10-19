import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./filme.css";

function FilmePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "0bbf380ed018e74f6cb1d0819cd147fd",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("filme não encontrado");
          navigate("/", { replace: true });
        });
    }
    loadFilmes();

    return () => {
      console.log("componente foi desmontado");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@flixcode");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
    if (hasFilme){
      toast.warn("Filme já está salvo!")
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@flixcode", JSON.stringify(filmesSalvos));
    toast.success("Filme adicionado com sucesso!")
  }

  if (loading) {
    return <h2 className="info-filme">Carregando detalhes do filme...</h2>;
  }

  return (
    <div className="container-detalhes-filme" key={filme.id}>
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Ver
          </a>
        </button>
      </div>
    </div>
  );
}

export default FilmePage;
