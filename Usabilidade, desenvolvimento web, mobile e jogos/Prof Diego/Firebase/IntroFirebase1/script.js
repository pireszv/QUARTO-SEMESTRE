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

    try {
        const docRef = await addDoc(collection(db, "users"), { name, email });
        notify.innerHTML = "Data Added";
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        setTimeout(() => {
            notify.innerHTML = "";
        }, 3000);
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
        notify.innerHTML = "Data Deleted";
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
        const updateDataBtn = document.querySelector('#update_data');
        updateDataBtn.classList.add('show');
        addBtn.classList.add('hide');
        
        updateDataBtn.addEventListener("click", async function () {
            const newName = document.querySelector('#name').value;
            const newEmail = document.querySelector('#email').value;
            if (newName && newEmail) {
                await updateDoc(doc(db, "users", id), {
                    name: newName,
                    email: newEmail
                });
                notify.innerHTML = "Data Updated";
                GetData();
                updateDataBtn.classList.remove('show');
                addBtn.classList.remove('hide');
                document.querySelector('#name').value = "";
                document.querySelector('#email').value = "";
                setTimeout(() => {
                    notify.innerHTML = "";
                }, 3000);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

GetData();
s