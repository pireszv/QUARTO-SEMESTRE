import React from 'react';
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Faq() {
  const perguntas = [
    { pergunta: 'Como posso me cadastrar na plataforma?', resposta: 'Para se cadastrar, basta clicar no botão "Cadastre-se" na página principal e preencher o formulário com seus dados pessoais, como nome, e-mail e senha.' },

    { pergunta: 'Quais informações são necessárias para criar um perfil?', resposta: 'Além dos dados pessoais, você precisará informar suas áreas de interesse, habilidades, disponibilidade de tempo e localização. Essas informações ajudarão a encontrar as oportunidades mais adequadas para você.' },

    { pergunta: 'Como posso buscar por oportunidades de voluntariado? Posso filtrar por área de interesse, localização ou tipo de trabalho?', resposta: 'Utilize a ferramenta de busca da plataforma. Você poderá filtrar as oportunidades por área de interesse (meio ambiente, educação, saúde, etc.), localização (cidade, estado) e tipo de trabalho (online, presencial, curto prazo, longo prazo).' },

    { pergunta: 'Como funciona o processo de seleção para as vagas de voluntariado?', resposta: 'O processo de seleção varia de acordo com a ONG. Algumas podem realizar entrevistas, enquanto outras solicitam apenas o envio de um currículo.' },

    { pergunta: 'A plataforma oferece algum tipo de treinamento ou orientação para os voluntários?', resposta: 'Não, mas muitas ONGs oferecem treinamentos e orientações aos seus voluntários. Você poderá encontrar essas informações na descrição de cada projeto.' },

    { pergunta: 'Quais tipos de projetos as ONGs cadastradas oferecem?', resposta: 'As ONGs cadastradas oferecem uma variedade de projetos, desde atividades de apoio a comunidades carentes até projetos de preservação ambiental.' },

    { pergunta: 'Qual é a duração média dos projetos de voluntariado?', resposta: 'A duração dos projetos varia muito, podendo ser desde um dia até vários meses. Você encontrará essa informação na descrição de cada projeto.' },

    { pergunta: 'É possível realizar voluntariado remoto?', resposta: 'Sim, muitas ONGs oferecem oportunidades de voluntariado remoto. Utilize os filtros de busca para encontrar essas oportunidades.' },

    { pergunta: 'Como posso entrar em contato com a ONG para tirar dúvidas sobre uma oportunidade?', resposta: 'Você encontrará os dados de contato da ONG diretamente na descrição do projeto.' },

    { pergunta: 'Como posso obter um certificado de participação após concluir um projeto?', resposta: 'Ao finalizar um projeto, você poderá solicitar um certificado de participação à ONG.' },
  ];

  return (
    <div className="perguntas-respostas">
      <Header />
      {perguntas.map((item, index) => (
        <div key={index} className="pergunta">
          <h3>{item.pergunta}</h3>
          <p>{item.resposta}</p>
        </div>
      ))}
       <Footer />
    </div>
  );
}

export default Faq