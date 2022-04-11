import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    async function fetchContacts() {
        await axios.get("/contacts")
        .then((r) => {
            setContacts(r.data)
        });
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    console.log(contacts);

    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Tags</th>
                    <th>Last Event Date</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contact.id}>
                        <td>{contact.first_name} {contact.last_name}</td>
                        <td>{contact.address}</td>
                        <td>{contact.tags}</td>
                        <td>{contact.events.start}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Contacts