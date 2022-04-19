import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

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

    async function fetchEvents() {
        await axios.get(`/api/events/${id}`)
        .then((r) => {
            setEvent(r.data)
        });
    }

    // Fetch "event" from the client-side route id to pre-fill default value data in form
    useEffect(() => {
        fetchEvents();
    }, []);

    function convertDateToIso (d) { 
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

        setEvent({
            ...event,
            [name]: target.type === 'datetime-local' ? value.slice(0, -1) : value
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

    return (
        <div className="form-group row">
            <div>Details</div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <input id="title" name="title" type="text" className="col-sm-8 col-form-input" placeholder="Enter Event Name" 
                        value={event.title}
                        onChange={handleInputChange} 
                        />
                </div>
                <div className="row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <textarea id="description" name="description" type="description" className="col-sm-8 col-form-input" 
                        value={event.description} 
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="start" className="col-sm-2 col-form-label">Start:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        name="start"
                        value={convertDateToIso(new Date(event.start))}
                        onChange={handleInputChange} />
                </div>
                <span> to </span>
                <div>
                    <label htmlFor="end" className="col-sm-2 col-form-label">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        name="end"
                        value={convertDateToIso(new Date(event.end))}
                        onChange={handleInputChange} />
                </div>
                <div className="row">
                    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                    <input id="location" name="location" type="text" className="col-sm-8 col-form-input" placeholder="Enter Location and/or Address"
                        value={event.location}
                        onChange={handleInputChange} />
                </div>
                <div className="row">
                    <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                    <textarea id="notes" name="notes" className="col-sm-8 col-form-input" value={event.notes} onChange={handleInputChange} />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Event