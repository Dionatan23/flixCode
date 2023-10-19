import "./favoritos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { toast } from "react-toastify";


function FavoritosPage() {
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@flixcode")
        setFilme(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id) {
        let filtroFilme = filme.filter((filme) => {
            return filme.id !== id;
        })

        setFilme(filtroFilme)
        localStorage.setItem('@flixcode', JSON.stringify(filtroFilme))
        toast.success("Filme removido dos favoritos!");
    }

    return (
        <div className="meus-filmes">
            <h1>Meus Favoritos</h1>
            {filme.length === 0 && <span>Você não tem filmes salvos!</span>}
            <ul>
                {filme.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>

                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => {excluirFilme(filme.id)}}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FavoritosPage;