import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Contact() {
    const { id } = useParams();

    const [contact, setContact] = useState({
        first_name: '',
        last_name: '',
        address: '',
        birthday: '',
        latest_event: ''
    });
    const [latestContactEvent, setLatestContactEvent] = useState("")

    async function fetchContact() {
        const fetchedContact = await axios.get(`/api/contacts/${id}`)
        setContact(fetchedContact.data);
        setLatestContactEvent(fetchedContact.data.events[0].start);
    }

    // Fetch "contact" from the client-side route id to pre-fill default value data in form
    useEffect(() => {
        fetchContact();
    }, []);

    function handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setContact({
            ...contact,
            [name]: target.type === 'datetime-local' ? value.slice(0, -1) : value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.patch(`/api/contacts/${id}`,
            {
                first_name: contact.first_name,
                last_name: contact.last_name,
                address: contact.address,
                birthday: contact.birthday
            }
        );
    }

    /* Why does this work:
        // console.log(latestContactEvent.start);
    While this doesn't?
        // console.log(contact.events[0].start);    */

    // console.log(latestEvent);
    // console.log(latestContactEvent.split('T')[0]);

    return (
        <div className="form-group row">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
                    <input id="firstname" name="first_name" type="text" className="col-sm-8 col-form-input" placeholder="Enter First Name" 
                        value={contact.first_name}
                        onChange={handleInputChange} 
                        />
                </div>
                <div className="row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
                    <input id="lastname" name="last_name" type="text" className="col-sm-8 col-form-input" placeholder="Enter Last Name" 
                        value={contact.last_name}
                        onChange={handleInputChange} 
                        />
                </div>
                <div className="row">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <input id="address" name="address" type="text" className="col-sm-8 col-form-input" placeholder="Enter Location and/or Address"
                        value={contact.address} 
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={contact.birthday}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="latestEvent" className="col-sm-2 col-form-label">Latest Event</label>
                    <input
                        type="date"
                        id="latestEvent"
                        name="latestEvent"
                        value={latestContactEvent.split('T')[0]}
                        disabled={true} />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Contact