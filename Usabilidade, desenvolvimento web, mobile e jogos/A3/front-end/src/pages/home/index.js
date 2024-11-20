import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/card'

function Home() {

    return <div>
        <Header/>
        <h2 className='titulo-pagina-inicial'>Veja algumas de nossas ações</h2>
        <section className='todos-cards'>
        <Card img='https://agenciach.com.br/wp-content/uploads/2024/08/Agrovale-Dia-Nacional-do-Voluntariado-2.jpg' titulo='Ajudar velinhos' localizacao='Belo Horizonte - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='1'/>
        <Card img='https://www.tudojaexiste.com.br/wp-content/uploads/2023/12/Voluntariado-e-acao-social-como-fazer-a-diferenca-neste-final-de-ano.jpg' titulo='Distribuir livros' localizacao='Contagem - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='2'/>
        <Card img='https://conteudo.sesc-rs.com.br/wp-content/uploads/2021/08/Voluntariado-Acao-Social-Amor-Fazer-o-Bem-iStock-1265552575.jpg' titulo='Sopão' localizacao='Nova Lima - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='3'/>
        <Card img='https://ideiasustentavel.com.br/wp-content/uploads/2019/07/voluntario.jpg' titulo='Levar cobertores' localizacao='Betim - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='4'/>
        <Card img='https://voluntariadoempresarial.com.br/wp-content/uploads/2018/11/iStock-697438336-730x410.jpg' titulo='Aula de Capoeira' localizacao='Ibirité - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='5'/>
        <Card img='https://blog.atados.com.br/wp-content/uploads/2022/03/voluntariado-corporativo-empresa-curriculo.jpg' titulo='Educação Financeira' localizacao='Online' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='6'/>
        <Card img='https://agenciach.com.br/wp-content/uploads/2024/08/Agrovale-Dia-Nacional-do-Voluntariado-2.jpg' titulo='Ajudar velinhos' localizacao='Belo Horizonte - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='7'/>
        <Card img='https://www.tudojaexiste.com.br/wp-content/uploads/2023/12/Voluntariado-e-acao-social-como-fazer-a-diferenca-neste-final-de-ano.jpg' titulo='Distribuir livros' localizacao='Contagem - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='8'/>
        <Card img='https://conteudo.sesc-rs.com.br/wp-content/uploads/2021/08/Voluntariado-Acao-Social-Amor-Fazer-o-Bem-iStock-1265552575.jpg' titulo='Sopão' localizacao='Nova Lima - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='9'/>
        <Card img='https://ideiasustentavel.com.br/wp-content/uploads/2019/07/voluntario.jpg' titulo='Levar cobertores' localizacao='Betim - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='10'/>
        <Card img='https://voluntariadoempresarial.com.br/wp-content/uploads/2018/11/iStock-697438336-730x410.jpg' titulo='Aula de Capoeira' localizacao='Ibirité - MG' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='11'/>
        <Card img='https://blog.atados.com.br/wp-content/uploads/2022/03/voluntariado-corporativo-empresa-curriculo.jpg' titulo='Educação Financeira' localizacao='Online' descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' acao='12'/>
        </section>
        <h2 className='titulo-pagina-inicial'>Ajude também de outras formas</h2>
        <iframe src="https://www.google.com/maps/d/embed?mid=1JLf6NCf3CeGewnfDyh86Tu527H5T7P4&ehbc=2E312F" width="1800" height="500"></iframe>
        <Footer/>
    </div>;
}

export default Home