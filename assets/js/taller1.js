const openModal2 = () => document.getElementById('modal')
    .classList.add('active')

const closeModal2 = () => {
    clearFields2()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage2 = () => JSON.parse(localStorage.getItem('User_contacto')) ?? []
const setLocalStorage2 = (User_contacto) => localStorage.setItem("User_contacto", JSON.stringify(User_contacto))

// CRUD - crear agregar eliminar y leer
const deleteClient2 = (index) => {
    const User_contacto = readClient2()
    User_contacto.splice(index, 1)
    setLocalStorage2(User_contacto)
}

const updateClient2 = (index, client) => {
    const User_contacto = readClient2()
    User_contacto[index] = client
    setLocalStorage2(User_contacto)
}

const readClient2 = () => getLocalStorage2()

const createClient2 = (client) => {
    const User_contacto = getLocalStorage2()
    User_contacto.push (client)
    setLocalStorage2(User_contacto)
}

const isValidFields2 = () => {
    return document.getElementById('form').reportValidity()
}

//Interazion con la ui

const clearFields2 = () => {
    const fields = document.querySelectorAll('.modal1-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nombre').dataset.index = 'new'
}

const saveClient2 = () => {
    
    if (isValidFields2()) {
        const client = {
            nombre: document.getElementById('nombre').value,
           correo: document.getElementById('correo').value,
            asunto: document.getElementById('asunto').value,
            descripcion: document.getElementById('descripcion').value
        }
        const index = document.getElementById('nombre').dataset.index
        if (index == 'new') {
            createClient2(client)
            updateTable2()
            closeModal2()
        } else {
            updateClient2(index, client)
            updateTable2()
            closeModal2()
        }
    }
}

const createRow2 = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nombre}</td>
        <td>${client.correo}</td>
        <td>${client.asunto}</td>
        <td>${client.descripcion}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Eliminar</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable2 = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable2 = () => {
    const User_contacto = readClient2()
    clearTable2()
    User_contacto.forEach(createRow2)
}

const fillFields2 = (client) => {
    document.getElementById('nombre').value = client.nombre
    document.getElementById('correo').value = client.correo
    document.getElementById('asunto').value = client.asunto
    document.getElementById('descripcion').value = client.descripcion
    document.getElementById('nombre').dataset.index = client.index
}

const editClient2 = (index) => {
    const client = readClient2()[index]
    client.index = index
    fillFields2(client)
    openModal2()
}

const editDelete2 = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient2(index)
        } else {
            const client = readClient2()[index]
            const response = confirm(`¿Quiere eliminar el contacto #${client.nombre}?`)
            if (response) {
                deleteClient2(index)
                updateTable2()
            }
        }
    }
}

updateTable2()

// Eventos
document.getElementById('registro_user')
    .addEventListener('click', openModal2)

document.getElementById('modalClose')
    .addEventListener('click', closeModal2)

document.getElementById('guardar')
    .addEventListener('click', saveClient2)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete2)

document.getElementById('cancelar')
    .addEventListener('click', closeModal2)




