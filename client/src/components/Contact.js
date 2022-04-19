import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Contact() {
    const { id } = useParams();

    const [contact, setContact] = useState({
        first_name: '',
        last_name: '',
        address: '',
        birthday: '',
        latest_event: ''
    });

    async function fetchContact() {
        await axios.get(`/api/contacts/${id}`)
        .then((r) => {
            setContact(r.data)
        });
    }

    // Fetch "contact" from the client-side route id to pre-fill default value data in form
    useEffect(() => {
        fetchContact();
    }, []);

    // Function needed for a date format that the HTML form can use (i.e. remove the final Z, while updating timezone).
    function convertDateToIso (d) { 
        // shift datetime d -4 hours (-4GMT) (to ET time zone)
        const shift = d.getTime() - 4 * 60 * 60 * 1000; 
        // split the datetime, so that ."000Z" is the second element in the array, then grab the first element.
        const time = new Date(shift).toISOString().split('.')[0];
        return time;
    }

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

    console.log(contact);

    return (
        <div className="form-group row">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
                    <input id="firstname" name="firstname" type="text" className="col-sm-8 col-form-input" placeholder="Enter First Name" 
                        value={contact.first_name}
                        onChange={handleInputChange} 
                        />
                </div>
                <div className="row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
                    <input id="lastname" name="lastname" type="text" className="col-sm-8 col-form-input" placeholder="Enter Last Name" 
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
                        type="text"
                        id="latestEvent"
                        name="latestEvent"
                        value={contact.latest_event}
                        readOnly />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Contact