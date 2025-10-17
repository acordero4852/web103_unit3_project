const getEvents = async () => {
    try {
        const response = await fetch('/api/events')
        return await response.json();
    }
    catch (error) {
        throw error
    }
}

const getEventsById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`)
        return await response.json();
    } catch (error) {
        throw error
    }
}

export default {
    getEvents,
    getEventsById
}
