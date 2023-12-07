document.addEventListener('DOMContentLoaded', function() {
    loadContacts();
});

function addContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email) {
        const contact = { name, email, phone };
        let contacts = getContacts();
        contacts.push(contact);
        saveContacts(contacts);
        clearForm();
        loadContacts();
    } else {
        alert('Name and email are required!');
    }
}

function loadContacts() {
    const contacts = getContacts();
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const row = contactList.insertRow();
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
    });
}

function editContact(index) {
    const contacts = getContacts();
    const contact = contacts[index];

    document.getElementById('name').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('phone').value = contact.phone;

    contacts.splice(index, 1); // Remove the contact being edited
    saveContacts(contacts);
    loadContacts();
}

function deleteContact(index) {
    const contacts = getContacts();
    contacts.splice(index, 1);
    saveContacts(contacts);
    loadContacts();
}

function searchContacts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const contacts = getContacts();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue)
    );
    displaySearchResults(filteredContacts);
}

function displaySearchResults(contacts) {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        const row = contactList.insertRow();
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button onclick="editContact(${contacts.indexOf(contact)})">Edit</button>
                <button onclick="deleteContact(${contacts.indexOf(contact)})">Delete</button>
            </td>
        `;
    });
}

function getContacts() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
}

function saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
