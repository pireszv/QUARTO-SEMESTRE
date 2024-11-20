import './style.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ListasOngs from '../../components/listas-ongs';
import { useState, useEffect } from 'react';

function ONGS() {
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState("");
    const [cidadeSelecionada, setCidadeSelecionada] = useState("");
    const [causa, setCausa] = useState("");
    const [fotoONG, setFotoONG] = useState(null);

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
        setEstadoSelecionado(siglaEstado);
        setCidadeSelecionada("");
    }

    useEffect(() => {
        if (estadoSelecionado) {
            const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`;
            async function fetchCidades() {
                const request = await fetch(urlCidades);
                const response = await request.json();
                setCidades(response);
            }
            fetchCidades();
        }
    }, [estadoSelecionado]);

    function handleCidadeChange(event) {
        setCidadeSelecionada(event.target.value);
    }

    function handleFotoChange(event) {
        setFotoONG(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const dadosONG = {
            nomeONG: event.target.nomeONG.value,
            estado: estadoSelecionado,
            cidade: cidadeSelecionada,
            causa,
            fotoONG,
        };

        console.log("Dados da ONG cadastrada:", dadosONG);

        // Exibir mensagem de sucesso
        alert("ONG cadastrada com sucesso!");
    }

    return (
        <div>
            <Header />
            <ListasOngs />
            <Footer />
        </div>
    );
}

export default ONGS;
