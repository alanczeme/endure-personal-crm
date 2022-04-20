import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    async function fetchContacts() {
        await axios.get("/api/contacts")
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
                    {/* <th>👤</th> */}
                    <th>Full Name</th>
                    <th className="hideMobile">Address 📍</th>
                    <th>Birthday 🎂</th>
                    <th>Latest Event Date 🗓️</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contact.id}>
                        <td><a href={"/contact/"+contact.id} className="row-link">{contact.first_name} {contact.last_name}</a></td>
                        <td className="hideMobile"><a href={"/contact/"+contact.id} className="row-link" tabIndex="-1">{contact.address}</a></td>
                        <td><a href={"/contact/"+contact.id} className="row-link" tabIndex="-1">{contact.birthday}</a></td>
                        <td className="hideMobile"><a href={"/contact/"+contact.id} className="row-link" tabIndex="-1">{moment(contact.events[0].start.split('T')[0]).format("YYYY-MM-DD")}</a></td>
                        <td className="showMobile"><a href={"/contact/"+contact.id} className="row-link" tabIndex="-1">{moment(contact.events[0].start.split('T')[0]).format("YY-MM-DD")}</a></td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Contacts