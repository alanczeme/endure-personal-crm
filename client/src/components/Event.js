import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Form from 'react-bootstrap/Form';

function Event() {
    const { id } = useParams();

    const [event, setEvent] = useState({
        title: '',
        description: '',
        start: moment(new Date),
        end: moment(new Date),
        location: '',
        notes: ''
    });
    const [isChanged, setIsChanged] = useState(false);

    async function fetchEvents() {
        await axios.get(`/api/events/${id}`)
        .then((r) => {
            setEvent(r.data)
        });
    }

    // Fetch "event" from the client-side route id to pre-fill default value data in form
    useEffect(() => {
        fetchEvents();
    }, [isChanged]);

    function convertDateToIso(d) { 
        // shift datetime d -4 hours (-4GMT) (to ET time zone)
        const shift = d.getTime() - 4 * 60 * 60 * 1000; 
        // split the datetime, so that ".000Z" is the second element in the array, then grab the first element.
        const time = new Date(shift).toISOString().split('.')[0];
        return time;
    }

    function handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // setIsChanged(!isChanged);

        setEvent({
            ...event,
            [name]: target.type === 'datetime-local' ? new Date(value) : value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.patch(`/api/events/${id}`,
            {
                title: event.title,
                description: event.description,
                start: event.start,
                end: event.end,
                location: event.location,
                notes: event.notes
            }
        );
    }

    console.log(event)

    return (
        <div className="contact-form-container">
            <h1>Single Event</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <Form.Control id="title" name="title" type="text" className="col-sm-8 col-form-input" placeholder="Enter Event Name" 
                        value={event.title}
                        onChange={handleInputChange} 
                        />
                </div>
                <div className="">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <Form.Control id="description" name="description" type="description" className="col-sm-8 col-form-input" 
                        value={event.description} 
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="start" className="col-sm-2 col-form-label">Start:</label>
                    <Form.Control
                        type="datetime-local"
                        id="start"
                        name="start"
                        value={convertDateToIso(new Date(event.start))}
                        onChange={handleInputChange} />
                </div>
                <span> to </span>
                <div>
                    <label htmlFor="end" className="col-sm-2 col-form-label">End:</label>
                    <Form.Control
                        type="datetime-local"
                        id="end"
                        name="end"
                        value={convertDateToIso(new Date(event.end))}
                        onChange={handleInputChange} />
                </div>
                <div className="">
                    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                    <Form.Control id="location" name="location" type="text" className="col-sm-8 col-form-input" placeholder="Enter Location and/or Address"
                        value={event.location}
                        onChange={handleInputChange} />
                </div>
                <div className="">
                    <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                    <Form.Text id="notes" name="notes" className="col-sm-8 col-form-input" value={event.notes} onChange={handleInputChange} />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
            </div>
        </div>

    )
}

export default Event