import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';

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
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th className="hideMobile">Location 📍</th>
                        <th>Event Date 🗓️</th>
                        <th>Tags 🏷️</th>
                        <th>Notes 📝</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td className="hideMobile">{event.location}</td>
                            <td className="hideMobile">{event.tags}</td>
                            <td className="hideMobile">{moment(event.start).format("YYYY-MM-DD")}</td>
                            <td className="showMobile">{moment(event.start).format("YY-MM-DD")}</td>
                            <td>{event.notes}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            
        </>
    )
}

export default Events