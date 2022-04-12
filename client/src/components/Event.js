import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Event() {
    let { slug, id } = useParams();

    const [event, setEvent] = useState([]);

    async function fetchEvents() {
        await axios.get("/events/",{id})
        .then((r) => {
            setEvent(r.data)
        });
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    console.log(event);
    console.log(slug, id);


    return (
    <div>Single Event {slug} {id}</div>
    )
}

export default Event