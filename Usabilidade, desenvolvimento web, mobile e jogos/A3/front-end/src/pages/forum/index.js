import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

import IMAGE from '../../img/em_construcao.png'

function Forum() {

    return <div>
        <Header/>
        <section>
            <h2 className='titulo...'>Forum</h2>    
            <img src={IMAGE} alt="Em construção" />
            
        </section>
        <Footer/>
    </div>;
}

export default Forum