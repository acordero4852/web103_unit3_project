import Event from "../components/Event"
import EventsAPI from "../services/EventsAPI"
import { useState, useEffect } from "react"
import '../css/Events.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [displayedEvents, setDisplayedEvents] = useState([])
    const [selectedLocation, setSelectedLocation] = useState("all")

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getEvents()
                setEvents(eventsData)
                setDisplayedEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    const handleFilterChange = (e) => {
        const {value} = e.target
        setSelectedLocation(value)

        if (value === "all") {
            setDisplayedEvents(events)
            return
        }

        setDisplayedEvents(events.filter(ev => ev.location === parseInt(value)))
    }

    return (
        <div className="all-events-main">
            <div className="event-filters">
                <select value={selectedLocation} onChange={handleFilterChange}>
                    <option value="all">See events at . . .</option>
                    <option value={1}>The Echo Lounge &amp; Music Hall</option>
                    <option value={2}>House of Blues</option>
                    <option value={3}>The Pavilion at Toyota Music Factory</option>
                    <option value={4}>American Airlines Center</option>
                </select>
                <button onClick={() => {
                    setSelectedLocation("all")
                    setDisplayedEvents(events)
                }}>Show All Events</button>
            </div>
            <div className="all-events">
                {
                    displayedEvents && displayedEvents.length > 0 && displayedEvents.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Events
