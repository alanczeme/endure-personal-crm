import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Events() {
    const [events, setEvents] = useState([]);

    async function fetchEvents() {
        await axios.get("/events")
        .then((r) => {
            setEvents(r.data)
        });
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    console.log(events);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Tags</th>
                        <th>Event Date</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.location}</td>
                            <td>{event.tags}</td>
                            <td>{event.start}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </>
    )
}

export default Events