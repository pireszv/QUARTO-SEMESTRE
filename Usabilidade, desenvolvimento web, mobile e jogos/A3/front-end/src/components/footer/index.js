import './style.css'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }  
    return (
        <footer>

        <div className="paginas_plataforma">
          <h1>Doe+</h1>
          <ul>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/')}>Página Inicial</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/politica-privacidade')}>Política de Privacidade</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/termos')}>Termos de Uso</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/faq')}>FAQ</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/blog')}>Blog</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/forum')}>Fórum</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/fale-conosco')}>Fale Conosco</button></li>
          </ul>
        </div>
      
        <div className="paginas_voluntariado">
          <h1>Voluntariado</h1>
          <ul>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/acoes')}>Ações</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/ongs')}>ONGs</button></li>
            <li className="footer_nav_item"><button className='footer_nav_link_footer' onClick={() => navigateTo('/pontos-coleta')}>Pontos de Coleta</button></li>
          </ul>
        </div>
      
        <div className="paginas_redes_sociais">
          <h1>Siga a Doe+</h1>
          <ul>
            <li className="footer_nav_item"><a href="https://www.whatsapp.com/" className="footer_nav_link_footer">WhatsApp</a></li>
            <li className="footer_nav_item"><a href="https://www.instagram.com" className="footer_nav_link_footer">Instagram</a></li>
            <li className="footer_nav_item"><a href="https://www.facebook.com" className="footer_nav_link_footer">Facebook</a></li>
          </ul>
        </div>
      
        <div className="paginas_ODS">
          <h1>ODS</h1>
          <ul>
            <li className="footer_nav_item"><a href="https://brasil.un.org/pt-br/sdgs" className="footer_nav_link_footer">Objetivos de Desenvolvimento Sustentável</a></li>
          </ul>
        </div>

      </footer>
    );
}

export default Footer