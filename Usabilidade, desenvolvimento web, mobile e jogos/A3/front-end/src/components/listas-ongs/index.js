import { useNavigate } from 'react-router-dom';

function ListasOngs() {
    const navigate = useNavigate(); // Hook do react-router-dom para navegação

    // Função de navegação ao clicar no botão de "Criar ONG"
    const navigateToCriarONG = () => {
        navigate('/criar-ong'); // Rota que leva à página de criar ONG
    };

    return (
        <div>
            <button
                className="botao_link"
                onClick={navigateToCriarONG}>
                Criar ONG
            </button>
            <section className="listas-ongs-container">
                <h1>Lista de ONGs</h1>
                {/* Aqui você pode exibir a lista de ONGs */}

            </section>
        </div>
    );
}

export default ListasOngs;