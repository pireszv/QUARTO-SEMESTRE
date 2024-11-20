import './style.css'
import { useNavigate } from "react-router-dom";

function ItensConfiguracoes() {
    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }  
    return (
        <section className="itens_configuracoes">
          <ul>
            <li className="configuracoes_nav_item"><button className='configuracoes_nav_link' onClick={() => navigateTo('/configuracoes/perfil')}>PERFIL</button></li>
            <li className="configuracoes_nav_item"><button className='configuracoes_nav_link' onClick={() => navigateTo('/configuracoes/favoritos')}>FAVORITOS</button></li>
            <li className="configuracoes_nav_item"><button className='configuracoes_nav_link' onClick={() => navigateTo('/configuracoes/certificados')}>CERTIFICADOS</button></li>
            <li className="configuracoes_nav_item"><button className='configuracoes_nav_link' onClick={() => navigateTo('/configuracoes/newsletter')}>NEWSLETTER</button></li>
            <li className="configuracoes_nav_item"><button className='configuracoes_nav_link' onClick={() => navigateTo('/configuracoes/encerrar-conta')}>ENCERRAR CONTA</button></li>
          </ul>
      </section>
    );
}

export default ItensConfiguracoes