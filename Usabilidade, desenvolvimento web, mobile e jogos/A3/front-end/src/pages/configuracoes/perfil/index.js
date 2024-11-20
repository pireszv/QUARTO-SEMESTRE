import './style.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ItensConfiguracoes from '../../../components/itens-configuracoes';

function Perfil() {

    return <div>
    <Header/>
    <section className="seccao">

        <div className="a">

            <ItensConfiguracoes/>

            <div className="formulario_login1">

                <h1 className="titulo_pagina_configuracoes">PERFIL</h1>

                <form className="formulario_perfil" action="#">

                    <label for="nomeCompleto">Nome Completo:</label>
                    <input type="text" id="nomeCompleto" required/>

                    <label for="sobreVoce">Sobre você:</label>
                    <textarea type="text" id="sobreVoce" cols="40" rows="5"></textarea>

                    <label for="telefone">Telefone:</label> 
                    <input type="tel" id="telefone" required placeholder="(xx) xxxxx-xxxx"></input>

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="xxx.xxx.xxx-xx" required></input>

                    <label for="date">Data Nascimento:</label>
                    <input type="date" id="date" required/>

                    <label for="genero">Gênero:</label>
                    <select id="genero" required>
                        <option value="selecioneGenero">Selecione o gênero</option> 
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="prefiroNaoInformar">Prefiro não informar</option>
                    </select>

                    <label for="estado">Estado:</label>
                    <select id="estado" required>
                        <option value="selecioneEstado">Selecione o estado</option> 
                        <option value="ac">Acre</option> 
                        <option value="al">Alagoas</option> 
                        <option value="am">Amazonas</option> 
                        <option value="ap">Amapá</option> 
                        <option value="ba">Bahia</option> 
                        <option value="ce">Ceará</option> 
                        <option value="df">Distrito Federal</option> 
                        <option value="es">Espírito Santo</option> 
                        <option value="go">Goiás</option> 
                        <option value="ma">Maranhão</option> 
                        <option value="mt">Mato Grosso</option> 
                        <option value="ms">Mato Grosso do Sul</option> 
                        <option value="mg">Minas Gerais</option> 
                        <option value="pa">Pará</option> 
                        <option value="pb">Paraíba</option> 
                        <option value="pr">Paraná</option> 
                        <option value="pe">Pernambuco</option> 
                        <option value="pi">Piauí</option> 
                        <option value="rj">Rio de Janeiro</option> 
                        <option value="rn">Rio Grande do Norte</option> 
                        <option value="ro">Rondônia</option> 
                        <option value="rs">Rio Grande do Sul</option> 
                        <option value="rr">Roraima</option> 
                        <option value="sc">Santa Catarina</option> 
                        <option value="se">Sergipe</option> 
                        <option value="sp">São Paulo</option> 
                        <option value="to">Tocantins</option> 
                    </select>

                    <label for="cidade">Cidade:</label>
                    <select id="cidade" required>
                        <option value="selecioneCidade">Selecione a cidade</option> 
                        <option value="xx">xx</option>
                        <option value="yy">yy</option>
                        <option value="zz">zz</option>
                    </select>

                    <label for="profissao">Profissao:</label>
                    <select id="profissao" required>
                        <option value="selecioneProfissao">Selecione a profissão</option> 
                        <option value="xx">xx</option>
                        <option value="yy">yy</option>
                        <option value="zz">zz</option>
                    </select>

                    <label for="causas">Causas:</label>
                    <select id="causas" multiple required>
                        <option value="acoesEmergencias">Ações Emergências</option>
                        <option value="cidadesInteligentes">Cidades inteligentes</option>
                        <option value="combatePobreza">Combate à pobreza</option>
                        <option value="consumoConsciente">Consumo consciente</option>
                        <option value="criancas">Crianças</option>
                        <option value="culturaArte">Cultura e Arte</option>
                        <option value="dependentesQuimicos">Dependentes químicos</option>
                        <option value="direitosHumanos">Direitos Humanos</option>
                        <option value="educacao">Educação</option>
                        <option value="esportes">Esportes</option>
                        <option value="idosos">Idosos</option>
                        <option value="igualdade">Igualdade de gênero</option>
                        <option value="inclusao">Inclusão</option>
                        <option value="meioAmbiente">Meio Ambiente</option>
                        <option value="mulheres">Mulheres</option>
                        <option value="musica">Música</option>
                        <option value="pessoasCancer">Pessoas com câncer</option>
                        <option value="pessoasDeficiencia">Pessoas com deficiência</option>
                        <option value="pessoasDoencasRaras">Pessoas com doenças raras</option>
                        <option value="pessoasSituacaoRua">Pessoas em situação de rua</option>
                        <option value="protecaoAnimal">Proteção animal</option>
                        <option value="refugiados">Refugiados</option>
                        <option value="saude">Saúde</option>
                        <option value="treinamentoProfissional">Treinamento profissional</option>
                        <option value="outros">Outros</option> 
                    </select>

                    <label for="habilidades">Habilidades:</label>
                    <select id="habilidades" multiple required>
                        <option value="agilidade">Agilidade</option>
                        <option value="artes">Artes</option>
                        <option value="comunicacao">Comunicação</option>
                        <option value="cozinha">Cozinha</option>
                        <option value="dancaMusica">Dança/Música</option>
                        <option value="direito">Direito</option>
                        <option value="educacao">Educação</option>
                        <option value="esportes">Esportes</option>
                        <option value="gerenciamento">Gerenciamento</option>
                        <option value="idiomas">Idiomas</option>
                        <option value="organizacao">Organização</option>
                        <option value="saude">Saúde</option>
                        <option value="outros">Outros</option>
                    </select>

                    <label for="idiomas">Idiomas:</label>
                    <select id="idiomas" multiple required>
                        <option value="pt-br">Português (PT-BR)</option>
                        <option value="pt-pt">Português (PT-PT)</option>
                        <option value="en-us">Inglês (EN-US)</option>
                        <option value="en-gb">Inglês (EN-GB)</option>
                        <option value="es">Espanhol (ES)</option>
                        <option value="fr">Francês (FR)</option>
                        <option value="cmn">Mandarim (CMN)</option>
                    </select>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required/>
                    
                    <label for="pass">Senha:</label>
                    <input type="password" id="pass" name="password" minlength="8" required/>

                    <label for="pass">Confirmar Senha:</label>
                    <input type="password" id="pass" name="password" minlength="8" required/>                   

                    <button className="botao_salvar" type="button">Salvar</button>

                </form>
                
            </div>

        </div>

    </section>
    <Footer/>
</div>;
}

export default Perfil