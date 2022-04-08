import React from 'react'
import { useState, useEffect } from "react";

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("/contacts")
            .then((r) => r.json())
            .then((data) => setContacts(data));
    }, []);

    console.log(contacts);

    return (
        <table>
            <tr>
                <th>Full Name</th>
            </tr>
            {contacts.map(contact =>
                <tr key={contact.id}>
                    <td>{contact.first_name} {contact.last_name}</td>
                </tr>
            )}
        </table>
    )
}

export default Contacts