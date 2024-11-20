import './style.css'
import logo from './img/logo.png'
import menu_white_36dp from './img/menu_white_36dp.svg'
import close_white_36dp from './img/close_white_36dp.svg'
import { useNavigate } from "react-router-dom";

function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src={menu_white_36dp};
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src={close_white_36dp};
    }
}

function Header() {
    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }
    return (
        <header>

        <nav className="nav_bar">

            <div className="logo_nome_projeto">
                <img alt="LOGOPROJETO" className="logo" src={logo}/>
                <h1 className="nome_projeto">Doe+</h1>
            </div>

            <div className="nav_list">
                <ul>
                    <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/')}>PAǴINA INICIAL</button></li>
                    <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/acoes')}>AÇÕES</button></li>
                    <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/ongs')}>ONGS</button></li>
                    <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/pontos-coleta')}>PONTOS DE COLETA</button></li>
                </ul>
            </div>

            <div className="botoes_header">

            <div className="login_button">
                <button className="button_header" onClick={() => navigateTo('/login/login')}>Login</button>
            </div>

            <div className="configuracoes_button">
                <button className="button_header_configuracoes" onClick={() => navigateTo('/configuracoes/perfil')}>Configurações</button>
            </div>

            </div>

            <div className="mobile_menu_icon">
                <button onClick={() => menuShow()}>
                    <img alt="HAMBURGUER" src={menu_white_36dp}/>
                </button>
            </div>

    
        </nav>

        <div className="mobile_menu">

            <ul>
                <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/')}>PÁGINA INICIAL</button></li>
                <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/acoes')}>AÇÕES</button></li>
                <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/ongs')}>ONGS</button></li>
                <li className="nav_item_header"><button className="nav_link_header" onClick={() => navigateTo('/pontos-coleta')}>PONTOS DE COLETA</button></li>
            </ul>

            <div className="botoes_header">

            <div className="login_button">
                <button className="button_header" onClick={() => navigateTo('/login/login')}>Login</button>
            </div>

            <div className="configuracoes_button">
                <button className="button_header_configuracoes" onClick={() => navigateTo('/configuracoes/perfil')}>Configurações</button>
            </div>

            </div>

        </div>

    </header>
    );
}

export default Header