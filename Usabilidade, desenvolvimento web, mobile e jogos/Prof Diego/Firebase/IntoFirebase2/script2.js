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
    appId: "1:1020575597171:web:01f65763ab836d860de006"
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

    try {
        await addDoc(collection(db, "users"), { name, email, phone });
        notify.innerHTML = "Usuário cadastrado com sucesso!";
        clearForm();
        GetData();
    } catch (error) {
        console.log(error);
    }
}

// Limpa o formulário
function clearForm() {
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#phone').value = "";
    notify.innerHTML = "";
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
                <td>${data.phone}</td>
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

        const updateDataBtn = document.querySelector('#update_data');
        updateDataBtn.classList.remove('hide');
        addBtn.classList.add('hide');

        updateDataBtn.onclick = async function () {
            const newName = document.querySelector('#name').value;
            const newEmail = document.querySelector('#email').value;
            const newPhone = document.querySelector('#phone').value;
            await updateDoc(doc(db, "users", id), {
                name: newName,
                email: newEmail,
                phone: newPhone
            });
            notify.innerHTML = "Usuário atualizado com sucesso!";
            clearForm();
            GetData();
            updateDataBtn.classList.add('hide');
            addBtn.classList.remove('hide');
        };
    } catch (err) {
        console.log(err);
    }
};

GetData();
