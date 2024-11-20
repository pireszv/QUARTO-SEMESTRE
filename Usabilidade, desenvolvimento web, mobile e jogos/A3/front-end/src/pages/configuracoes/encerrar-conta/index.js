import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function EncerrarConta() {

    return <div>
        <Header/>
        <section className="seccao">

            <div className="a">

                <ItensConfiguracoes/>

                <div className="encerrar-conta">

                    <h1 className="titulo_pagina_configuracoes">ENCERRAR CONTA</h1>

                    <h4 className='info'> Se você encerrar sua conta, terá a inscrição cancelada em todos os trabalhos voluntários e perderá acesso à sua conta e todos os dados associados a ela para sempre, mesmo se você criar uma nova conta usando o mesmo endereço de e-mail no futuro. </h4>

                    <button className="botao_encerrar_conta" type="button">Encerrar Conta</button>
                    
                </div>

            </div>

        </section>
        <Footer/>
    </div>;
}

export default EncerrarConta