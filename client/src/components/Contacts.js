import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';

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
        <Table>
            <thead>
                <tr>
                    <th>👤</th>
                    <th>Full Name</th>
                    <th className="hideMobile">Address 📍</th>
                    <th>Tags 🏷️</th>
                    <th>Last Event Date 🗓️</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contact.id}>
                        <td>{contact.avatar}</td>
                        <td>{contact.first_name} {contact.last_name}</td>
                        <td className="hideMobile">{contact.address}</td>
                        <td className="hideMobile">{contact.tags}</td>
                        <td className="hideMobile">{moment(contact.events.start).format("YYYY-MM-DD")}</td>
                        <td className="showMobile">{moment(contact.events.start).format("YY-MM-DD")}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Contacts