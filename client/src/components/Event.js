import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Event() {
    const { id } = useParams();

    const [event, setEvent] = useState([]);

    async function fetchEvents() {
        await axios.get(`/events/${id}`)
        .then((r) => {
            setEvent(r.data)
        });
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    console.log(event);
    console.log(moment().format("YYYY-MM-DDThh:mm a"));

    return (
        <>
            <div>Details</div>
            <form>
                <div>
                    <label htmlFor="name">Title</label>
                    <input id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input id="description" type="description" />
                </div>
                <div>
                    <label htmlFor="start">Start:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        name="start"
                        defaultValue={moment().format("yyyy-MM-DDTHH:mm")}
                        // min="2018-01-01"
                        // max="2018-12-31"
                        >
                    </input>
                </div>
                <span> to </span>
                <div>
                    <label htmlFor="end">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        name="end"
                        // defaultValue={moment().add(1,'hours').format("YYYY-MM-DDTHH:mm")}
                        defaultValue={event.end}
                        // min="2018-01-01"
                        // max="2018-12-31"
                        >
                    </input>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default Event