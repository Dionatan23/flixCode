import { Link } from "react-router-dom";
import './erro.css';

function Erro() {
    return (
        <div>
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to="/">Voltar ao Inicio</Link>
        </div>
    )
}

export default Erro;