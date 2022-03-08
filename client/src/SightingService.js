const baseURL = 'http://127.0.0.1:5000/api/sightings/'

export const getSightings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postSighting = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteSighting = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

