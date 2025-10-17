const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations')
        return await response.json();
    } catch (error) {
        throw error
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}`)
        return await response.json();
    } catch (error) {
        throw error
    }
}

export default {
    getAllLocations,
    getLocationById
}
