import './style.css'
import { useNavigate } from "react-router-dom";

function Card({ img, titulo, localizacao, descricao, acao }) {
    const navigate = useNavigate()
    function navigateTo(destination) {
        navigate(destination)
    }
    return (
        <div className="card">
            <img src={img} alt="imagem da ação" className='cardImg' />
            <h2 className='cardTitulo'>{titulo}</h2>
            <p className='cardLocalizacao'>{localizacao}</p>
            <p className='cardDescricao'>{descricao}</p>
            <button className='cardButton' onClick={() => navigateTo('/acao/&id=' + acao )}>Ir para ação</button>
        </div>
    );
}

export default Card