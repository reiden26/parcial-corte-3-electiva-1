

const openModal1 = () => document.getElementById('modal')
.classList.add('active')

const closeModal1 = () => {
clearFields1()
document.getElementById('modal').classList.remove('active')
}


const getLocalStorage1 = () => JSON.parse(localStorage.getItem('Registro_Mer')) ?? []
const setLocalStorage1 = (Registro_Mer) => localStorage.setItem("Registro_Mer", JSON.stringify(Registro_Mer))

// CRUD - crear agregar eliminar y leer
const deleteClient1 = (index) => {
const Registro_Mer = readClient1()
Registro_Mer.splice(index, 1)
setLocalStorage1(Registro_Mer)
}

const updateClient1 = (index, client) => {
const Registro_Mer = readClient1()
Registro_Mer[index] = client
setLocalStorage1(Registro_Mer)
}

const readClient1 = () => getLocalStorage1()

const createClient1 = (client) => {
const Registro_Mer = getLocalStorage1()
Registro_Mer.push (client)
setLocalStorage1(Registro_Mer)
}

const isValidFields1 = () => {
return document.getElementById('form').reportValidity()
}

//Interazion con la ui

const clearFields1 = () => {
const fields = document.querySelectorAll('.modal1-field')
fields.forEach(field => field.value = "")
document.getElementById('serie').dataset.index = 'new'
}

const saveClient1 = () => {

if (isValidFields1()) {
    const client = {
        serie: document.getElementById('serie').value,
        nombre: document.getElementById('nombre').value,
        tipo: document.getElementById('tipo').value,
        cantidad: document.getElementById('cantidad').value
    }
    const index = document.getElementById('serie').dataset.index
    if (index == 'new') {
        createClient1(client)
        updateTable1()
        closeModal1()
    } else {
        updateClient1(index, client)
        updateTable1()
        closeModal1()
    }
}
}

const createRow1 = (client, index) => {
const newRow = document.createElement('tr')
newRow.innerHTML = `
    <td>${client.serie}</td>
    <td>${client.nombre}</td>
    <td>${client.tipo}</td>
    <td>${client.cantidad}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}" >Eliminar</button>
    </td>
`
document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable1 = () => {
const rows = document.querySelectorAll('#tableClient>tbody tr')
rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable1 = () => {
const Registro_Mer = readClient1()
clearTable1()
Registro_Mer.forEach(createRow1)
}

const fillFields1 = (client) => {
document.getElementById('serie').value = client.serie
document.getElementById('nombre').value = client.nombre
document.getElementById('tipo').value = client.tipo
document.getElementById('cantidad').value = client.cantidad
document.getElementById('serie').dataset.index = client.index
}

const editClient1 = (index) => {
const client = readClient1()[index]
client.index = index
fillFields1(client)
openModal1()
}

const editDelete1 = (event) => {
if (event.target.type == 'button') {

    const [action, index] = event.target.id.split('-')

    if (action == 'edit') {
        editClient1(index)
    } else {
        const client = readClient1()[index]
        const response = confirm(`¿Quiere eliminar el prodcuto #${client.serie}?`)
        if (response) {
            deleteClient1(index)
            updateTable1()
        }
    }
}
}

updateTable1()

// Eventos
document.getElementById('registro_user')
.addEventListener('click', openModal1)

document.getElementById('modalClose')
.addEventListener('click', closeModal1)

document.getElementById('guardar')
.addEventListener('click', saveClient1)

document.querySelector('#tableClient>tbody')
.addEventListener('click', editDelete1)

document.getElementById('cancelar')
.addEventListener('click', closeModal1)




