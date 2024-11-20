import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';
import IMAGE from '../../../img/em_construcao.png'

function Newsletter() {

    return <div>
        <Header/>
        <section className="seccao">

            <div className="a">

                <ItensConfiguracoes/>

                <div className="b">

                    <h1 className="titulo_pagina_configuracoes">NEWSLETTER</h1>
                    <div className="buildingdiv">
                        <div className="img">
                        <img src={IMAGE} alt="Em construção" />
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
        <Footer/>
    </div>;
}

export default Newsletter