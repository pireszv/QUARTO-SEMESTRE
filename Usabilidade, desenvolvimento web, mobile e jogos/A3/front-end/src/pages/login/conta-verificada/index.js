import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { useNavigate } from "react-router-dom"

function ContaVerificada() {

    const navigate = useNavigate()
    function navigateTo(destination) {  
      navigate(destination)
    }

    return <div>
        
        <Header/>

        <section>

            <h2>Conteúdo aqui</h2>

        </section>

        <Footer/>

    </div>;
}

export default ContaVerificada