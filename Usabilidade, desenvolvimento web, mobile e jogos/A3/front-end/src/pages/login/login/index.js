import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()
    function navigateTo(destination) {
        navigate(destination)
    }

    return <div>

        <Header />

        <section className="container">

                <form className="formulario_login" action="#">

                    <h1>Faça seu login</h1>
                    <div className="email-senha">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email-login" required />
                    </div>
                    <div className="email-senha">
                        <label for="pass-login">Senha:</label>
                        <input type="password" id="pass" name="password" minlength="8" required />
                    </div>
                    <button className="botao_login">Entrar</button>

                    <div className="recall-forget">
                        <ul>
                            <li className="link_login"><button className="botao_link" onClick={() => navigateTo('/login/esqueceu-senha')}>Esqueceu a senha?</button></li>
                        </ul>
                    </div>

                    <ul>
                        <li className="link_login"><button className="botao_link" onClick={() => navigateTo('/login/criar-conta')}>Ainda sem conta?  Clique aqui!</button></li>
                    </ul>

                </form>

        </section>

        <Footer />

    </div>;
}

export default Login