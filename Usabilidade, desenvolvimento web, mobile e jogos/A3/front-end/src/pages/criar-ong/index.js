import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';

function CriarONG() {
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState("");
    const [cidadeSelecionada, setCidadeSelecionada] = useState("");

    useEffect(() => {
        const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        async function fetchEstados() {
            const response = await fetch(urlUF);
            const data = await response.json();
            setEstados(data);
        }
        fetchEstados();
    }, []);

    useEffect(() => {
        if (estadoSelecionado) {
            const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`;
            async function fetchCidades() {
                const response = await fetch(urlCidades);
                const data = await response.json();
                setCidades(data);
            }
            fetchCidades();
        }
    }, [estadoSelecionado]);

    function handleEstadoChange(event) {
        const siglaEstado = event.target.value;
        setEstadoSelecionado(siglaEstado);
        setCidadeSelecionada("");
    }

    function handleCidadeChange(event) {
        setCidadeSelecionada(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const dadosONG = {
            nome: event.target.nomeONG.value,
            causa: event.target.causa.value,
            estado: estadoSelecionado,
            cidade: cidadeSelecionada,
            foto: event.target.foto.files[0]?.name || "Sem foto enviada",
        };

        console.log("Dados da ONG:", dadosONG);
        alert("ONG criada com sucesso!");
    }

    return (
        <div>
            <Header />
            <section className="container1">
                <form className="formulario_criar_ong" onSubmit={handleSubmit}>
                    <label htmlFor="nomeONG">Nome da ONG:</label>
                    <input type="text" id="nomeONG" required />

                    <label htmlFor="causa">Causa:</label>
                    <input type="text" id="causa" required />

                    <label htmlFor="estado">Estado:</label>
                    <select id="estado" value={estadoSelecionado} onChange={handleEstadoChange} required>
                        <option value="">Selecione um estado</option>
                        {estados.map((estado) => (
                            <option key={estado.id} value={estado.sigla}>
                                {estado.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="cidade">Cidade:</label>
                    <select id="cidade" value={cidadeSelecionada} onChange={handleCidadeChange} required>
                        <option value="">Selecione uma cidade</option>
                        {cidades.map((cidade) => (
                            <option key={cidade.id} value={cidade.nome}>
                                {cidade.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="foto">Foto da ONG:</label>
                    <input type="file" id="foto" accept="image/*" />

                    <button className="botao_criar_ong" type="submit">Criar ONG</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default CriarONG;
