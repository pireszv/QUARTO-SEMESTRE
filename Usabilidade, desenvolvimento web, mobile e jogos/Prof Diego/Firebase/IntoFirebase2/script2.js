import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAja3o0u6d6cDNaKuI4iu4wV8AaSOrc30o",
    authDomain: "intofirebase-9b7c1.firebaseapp.com",
    projectId: "intofirebase-9b7c1",
    storageBucket: "intofirebase-9b7c1.appspot.com",
    messagingSenderId: "1020575597171",
    appId: "1:1020575597171:web:6f31dc91f9fbbdc40de006"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notify = document.querySelector('.notify');

// Adicionando dados na base de dados Firebase
async function addData() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const celular = document.querySelector('#celular').value;
    const rg = document.querySelector('#rg').value;
    const pai = document.querySelector('#pai').value;
    const mae = document.querySelector('#mae').value;
    const cpf = document.querySelector('#cpf').value;
    const nascimento = document.querySelector('#nascimento').value;
    const profissao = document.querySelector('#profissao').value;
    const escolaridade = document.querySelector('select').value; 


    try {
        // Adiciona todos os dados ao Firestore
        const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            phone,
            celular,
            rg,
            pai,
            mae,
            cpf,
            nascimento,
            profissao,
            escolaridade
        });
        
        notify.innerHTML = "Usuário cadastrado com sucesso!";
        
        // Limpa os campos do formulário
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#phone').value = "";
        document.querySelector('#celular').value = "";
        document.querySelector('#rg').value = "";
        document.querySelector('#pai').value = "";
        document.querySelector('#mae').value = "";
        document.querySelector('#cpf').value = "";
        document.querySelector('#nascimento').value = "";
        document.querySelector('#profissao').value = "";
        document.querySelector('select').value = "";

        // Mensagem de sucesso que desaparece após 3 segundos
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
        
        // Chama a função para atualizar a tabela com os dados
        GetData();
    } catch (error) {
        console.log(error);
    }
}

// Evento de click no botão cadastrar
const addBtn = document.querySelector('#add_Data');
addBtn.addEventListener('click', addData);

// Buscar dados no Firestore
async function GetData() {
    try {
        const getDataQuery = await getDocs(collection(db, "users"));
        let html = "";
        getDataQuery.forEach((doc) => {
            const data = doc.data();
            html += `
            <tr>
                <td>${doc.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>
                    <button class="del_btn" onclick="confirmDelete('${doc.id}')">Excluir</button>
                    <button class="up_btn" onclick="updateData('${doc.id}')">Atualizar</button>
                </td>
            </tr>
            `;
        });
        document.querySelector('tbody').innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}

// Função de confirmação antes de deletar
window.confirmDelete = async function (id) {
    const confirmation = confirm("Você realmente deseja remover este item?");
    if (confirmation) {
        await deleteData(id);
    }
};

// Evento de excluir usuário da base de dados
async function deleteData(id) {
    try {
        await deleteDoc(doc(db, "users", id));
        notify.innerHTML = "Usuário excluído com sucesso!";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
        GetData();
    } catch (err) {
        console.log(err);
    }
}

// Atualizar dados
window.updateData = async function (id) {
    try {
        const docSnapShot = await getDoc(doc(db, "users", id));
        const currentUser = docSnapShot.data();
        document.querySelector('#name').value = currentUser.name;
        document.querySelector('#email').value = currentUser.email;
        document.querySelector('#phone').value = currentUser.phone;
        document.querySelector('#celular').value = currentUser.celular;
        document.querySelector('#rg').value = currentUser.rg;
        document.querySelector('#pai').value = currentUser.pai;
        document.querySelector('#mae').value = currentUser.mae;
        document.querySelector('#cpf').value = currentUser.cpf;
        document.querySelector('#nascimento').value = currentUser.nascimento;
        document.querySelector('#profissao').value = currentUser.profissao;
        document.querySelector('select').value = currentUser.escolaridade;

        const updateDataBtn = document.querySelector('#update_data');
        updateDataBtn.classList.add('show');
        addBtn.classList.add('hide');

        updateDataBtn.onclick = async function () {
            const newName = document.querySelector('#name').value;
            const newEmail = document.querySelector('#email').value;
            const newPhone = document.querySelector('#phone').value;
            const newCelular = document.querySelector('#celular').value;
            const newRg = document.querySelector('#rg').value;
            const newPai = document.querySelector('#pai').value;
            const newMae = document.querySelector('#mae').value;
            const newCpf = document.querySelector('#cpf').value;
            const newNascimento = document.querySelector('#nascimento').value;
            const newProfissao = document.querySelector('#profissao').value;
            const newEscolaridade = document.querySelector('select').value;

            await updateDoc(doc(db, "users", id), {
                name: newName,
                email: newEmail,
                phone: newPhone,
                celular: newCelular,
                rg: newRg,
                pai: newPai,
                mae: newMae,
                cpf: newCpf,
                nascimento: newNascimento,
                profissao: newProfissao,
                escolaridade: newEscolaridade
            });
            notify.innerHTML = "Usuário atualizado com sucesso!";
            clearForm();
            GetData();
            updateDataBtn.classList.remove('show');
            addBtn.classList.remove('hide');
        };
    } catch (err) {
        console.log(err);
    }
};

// Limpa o formulário após atualização ou adição
function clearForm() {
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#phone').value = "";
    document.querySelector('#celular').value = "";
    document.querySelector('#rg').value = "";
    document.querySelector('#pai').value = "";
    document.querySelector('#mae').value = "";
    document.querySelector('#cpf').value = "";
    document.querySelector('#nascimento').value = "";
    document.querySelector('#profissao').value = "";
    document.querySelector('select').value = "";
}

// Inicializa a busca dos dados ao carregar a página
GetData();