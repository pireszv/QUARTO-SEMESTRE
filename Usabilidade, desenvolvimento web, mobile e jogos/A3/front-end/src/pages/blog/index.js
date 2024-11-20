import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import IMAGEN from './img/em_contrucao.png'

function Blog() {

    return <div>
        <Header/>
        <section>
            <h2 className='titulo...'>Blog</h2>
            <img src={IMAGEN} alt="Em construção" />
        </section>
        <Footer/>
    </div>;
}

export default Blog