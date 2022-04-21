import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
                            <td>
                                <Link to={"/event/"+event.id} className="row-link">{event.title}</Link>
                            </td>
                            <td className="hideMobile">
                                <Link to={"/event/"+event.id} className="row-link" tabIndex="-1">{event.location}</Link>
                            </td>
                            <td className="hideMobile">
                                <Link to={"/event/"+event.id} className="row-link" tabIndex="-1">{moment(event.start).format("YYYY-MM-DD")}</Link>
                            </td>
                            <td className="showMobile">
                                <Link to={"/event/"+event.id} className="row-link" tabIndex="-1">{moment(event.start).format("YY-MM-DD")}</Link>
                            </td>
                            <td>
                                <Link to={"/event/"+event.id} className="row-link" tabIndex="-1">{event.notes}</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            
        </>
    )
}

export default Events