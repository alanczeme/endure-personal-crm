import React from 'react'
import { useState, useEffect } from "react";

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/events")
            .then((r) => r.json())
            .then((data) => setEvents(data));
    }, []);

    console.log(events);

    return (
        <>
            {events.map(event =>
                <div key={event.id}>
                    <li>{event.title}</li>
                </div>
            )}
        </>
    )
}

export default Events