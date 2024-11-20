import './style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CriarConta() {
    const navigate = useNavigate();
    //formulario
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    //API cidade e estado
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        async function fetchEstados() {
            const request = await fetch(urlUF);
            const response = await request.json();
            setEstados(response);
        }
        fetchEstados();
    }, []);

    function handleEstadoChange(event) {
        const siglaEstado = event.target.value;
        setEstado(siglaEstado);
        setCidade('');
    }

    useEffect(() => {
        if (estado) {
            const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;
            async function fetchCidades() {
                const request = await fetch(urlCidades);
                const response = await request.json();
                setCidades(response);
            }
            fetchCidades();
        }
    }, [estado]);

    const handleConfirmarSenhaChange = (event) => {
        const valor = event.target.value;
        setConfirmarSenha(valor);

        // Verifica se as senhas coincidem
        if (valor && valor !== senha) {
            setErroSenha('As senhas não coincidem');
        } else {
            setErroSenha('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Impede o envio se as senhas não coincidirem
        if (erroSenha) {
            alert('Por favor, corrija os erros antes de continuar.');
            return;
        }

        const dados = {
            nome_completo: nomeCompleto,
            cpf,
            estado,
            cidade,
            email,
            senha,
        };

        try {
            const response = await fetch('http://localhost/api/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (response.ok) {
                navigate('/login/verificar-conta'); // Redireciona após sucesso
            } else {
                const resultado = await response.json();
                alert(resultado.message || 'Erro ao criar usuário.');
            }
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    return (
        <div>
            <Header />

            <section className='container1'>
                <form className="formulario_criar_conta" onSubmit={handleSubmit}>
                    <label htmlFor="nomeCompleto">Nome Completo:</label>
                    <input
                        type="text"
                        id="nomeCompleto"
                        value={nomeCompleto}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                        required
                    />

                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />

                    <label htmlFor="estado">Estado:</label>
                    <select id="estado" value={estado} onChange={handleEstadoChange} required>
                        <option value="">Selecione um estado</option>
                        {estados.map((uf) => (
                            <option key={uf.id} value={uf.sigla}>
                                {uf.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="cidade">Cidade:</label>
                    <select id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required>
                        <option value="">Selecione uma cidade</option>
                        {cidades.map((cidade) => (
                            <option key={cidade.id} value={cidade.nome}>
                                {cidade.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="confirmarSenha"
                        value={confirmarSenha}
                        onChange={handleConfirmarSenhaChange}
                        required
                    />
                    {erroSenha && <p style={{ color: 'red' }}>{erroSenha}</p>}

                    <button className="botao_criar_conta" type="submit">
                        Criar Conta
                    </button>
                </form>
            </section>

            <Footer />
        </div>
    );
}

export default CriarConta;
