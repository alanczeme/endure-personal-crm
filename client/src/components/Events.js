import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';

function Events() {
    const [events, setEvents] = useState([]);

    async function fetchEvents() {
        await axios.get("/api/events")
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
                        {/* <th>Tags 🏷️</th> */}
                        <th>Event Date 🗓️</th>
                        <th>Notes 📝</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td className="hideMobile"><a href={"/event/"+event.id} className="row-link">{event.location}</a></td>
                            {/* <td className="hideMobile"><a href={"/event/"+event.id} className="row-link" tabIndex="-1">{event.tags}</a></td> */}
                            <td className="hideMobile"><a href={"/event/"+event.id} className="row-link" tabIndex="-1">{moment(event.start).format("YYYY-MM-DD")}</a></td>
                            <td className="showMobile"><a href={"/event/"+event.id} className="row-link" tabIndex="-1">{moment(event.start).format("YY-MM-DD")}</a></td>
                            <td><a href={"/event/"+event.id} className="row-link" tabIndex="-1">{event.notes}</a></td>
                        </tr>
                    )}
                </tbody>
            </Table>
            
        </>
    )
}

export default Events