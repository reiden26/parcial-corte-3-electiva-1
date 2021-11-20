const openModal3 = () => document.getElementById('modal')
    .classList.add('active')

const closeModal3 = () => {
    clearFields3()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage3 = () => JSON.parse(localStorage.getItem('User_registro')) ?? []
const setLocalStorage3 = (User_registro) => localStorage.setItem("User_registro", JSON.stringify(User_registro))

// CRUD - crear agregar eliminar y leer
const deleteClient3 = (index) => {
    const User_registro = readClient3()
    User_registro.splice(index, 1)
    setLocalStorage3(User_registro)
}

const updateClient3 = (index, client) => {
    const User_registro = readClient3()
    User_registro[index] = client
    setLocalStorage3(User_registro)
}

const readClient3 = () => getLocalStorage3()

const createClient3 = (client) => {
    const User_registro = getLocalStorage3()
    User_registro.push (client)
    setLocalStorage3(User_registro)
}

const isValidFields3 = () => {
    return document.getElementById('form').reportValidity()
}

//Interazion con la ui

const clearFields3 = () => {
    const fields = document.querySelectorAll('.modal1-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nombre').dataset.index = 'new'
}

const saveClient3 = () => {
    
    if (isValidFields3()) {
        const client = {
            nombre: document.getElementById('nombre').value,
           usuario: document.getElementById('usuario').value,
            correo: document.getElementById('correo').value,
           contra: document.getElementById('contra').value
        }
        const index = document.getElementById('nombre').dataset.index
        if (index == 'new') {
            createClient3(client)
            updateTable3()
            closeModal3()
        } else {
            updateClient3(index, client)
            updateTable3()
            closeModal3()
        }
    }
}

const createRow3 = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nombre}</td>
        <td>${client.usuario}</td>
        <td>${client.correo}</td>
        <td>${client.contra}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Eliminar</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable3 = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable3 = () => {
    const User_registro = readClient3()
    clearTable3()
    User_registro.forEach(createRow3)
}

const fillFields3 = (client) => {
    document.getElementById('nombre').value = client.nombre
    document.getElementById('usuario').value = client.usuario
    document.getElementById('correo').value = client.correo
    document.getElementById('contra').value = client.contra
    document.getElementById('nombre').dataset.index = client.index
}

const editClient3 = (index) => {
    const client = readClient3()[index]
    client.index = index
    fillFields3(client)
    openModal3()
}

const editDelete3 = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient3(index)
        } else {
            const client = readClient3()[index]
            const response = confirm(`¿Quiere eliminar el usuario #${client.nombre}?`)
            if (response) {
                deleteClient3(index)
                updateTable3()
            }
        }
    }
}

updateTable3()

// Eventos
document.getElementById('registro_user')
    .addEventListener('click', openModal3)

document.getElementById('modalClose')
    .addEventListener('click', closeModal3)

document.getElementById('guardar')
    .addEventListener('click', saveClient3)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete3)

document.getElementById('cancelar')
    .addEventListener('click', closeModal3)




