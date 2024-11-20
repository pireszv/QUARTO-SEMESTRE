import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

function FaleConosco() {

    return <div>
        
        <Header/>

        <section className='fale_conosco'>

        <form className="formulario_criar_conta" action="#">

            <label for="nomeCompleto">Nome Completo:</label>
            <input type="text" id="nomeCompleto" required/>

            <label for="email">E-mail:</label>
            <input type="email" id="email" required/>

            <label for="assunto">Assunto:</label>
            <input type="text" id="assunto" required/>

       
            <label for="mensagem">Sua mensagem:</label>
            <textarea type="text" id="mensagem" required></textarea>    

            <button className="botao_enviar_contato" type="button">Enviar Mensagem</button>

        </form>

        </section>

        <Footer/>

    </div>;
}

export default FaleConosco