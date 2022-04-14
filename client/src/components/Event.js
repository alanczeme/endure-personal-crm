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

    // console.log(event);
    // console.log(moment(event.end, "yyyy-MM-DDTHH:mm").format("yyyy-MM-DDTHH:mm"));


    return (
        <div className="form-group row">
            <div>Details</div>
            <form>
                <div className="row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Title</label>
                    <input id="name" type="text" className="col-sm-8 col-form-input" defaultValue={event.title} placeholder="Enter Event Name" />
                </div>
                <div className="row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <textarea id="description" type="description" className="col-sm-8 col-form-input" defaultValue={event.description} />
                </div>
                <div>
                    <label htmlFor="start" className="col-sm-2 col-form-label">Start:</label>
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
                    <label htmlFor="end" className="col-sm-2 col-form-label">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        name="end"
                        // defaultValue={moment().add(1,'hours').format("YYYY-MM-DDTHH:mm")}
                        // defaultValue={event.end}
                        defaultValue={moment(event.end, "yyyy-MM-DDTHH:mm").format("yyyy-MM-DDTHH:mm")}
                        >
                    </input>
                </div>
                <div className="row">
                    <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                    <textarea id="notes" className="col-sm-8 col-form-input" defaultValue={event.notes} />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" className = "btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Event