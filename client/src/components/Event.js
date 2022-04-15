import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Event() {
    const { id } = useParams();

    // Fetch "event" from the client-side route id to pre-fill defaultValue data in form
    const [event, setEvent] = useState({
        start: moment(),
        end: moment(),
    });
    // const [updatedEvent, setUpdatedEvent] = useState({
    //     title: event.title
    // });

    async function fetchEvents() {
        await axios.get(`/events/${id}`)
        .then((r) => {
            setEvent(r.data)
        });
    }

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
            [name]: target.type === 'datetime-local' ? value.slice(0, -1) : value
        });
    }

    // function updateEvent(updatedEvent) {
    //     axios.patch({
    //         url: `/events/${id}`,
    //         data: {
    //             event: updatedEvent
    //         }
    //     })
    //     .then((r) => {
    //         setEvent(r.data)
    //     });
    // }

    // console.log(event);
    // console.log(moment(event.end, "yyyy-MM-DDTHH:mm").format("yyyy-MM-DDTHH:mm"));


    return (
        <div className="form-group row">
            <div>Details</div>
            <form>
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
                    <input id="location" name="location" type="text" className="col-sm-8 col-form-input" defaultValue={event.location} placeholder="Enter Location and/or Address"
                        value={event.location}
                        onChange={handleInputChange} />
                </div>
                <div className="row">
                    <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                    <textarea id="notes" name="notes" className="col-sm-8 col-form-input" defaultValue={event.notes} value={event.notes} onChange={handleInputChange} />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Event