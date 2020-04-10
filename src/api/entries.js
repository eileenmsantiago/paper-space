
export const getAllEntries = () => {
    return fetch('/entries')
        .then(res => res.json())
        .then(res => res)
        .catch(err => {
            // TODO: handle catch
        })
}

export const postEntry = (entry) => {
    return fetch('/entries/add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: entry.content,
                mood: entry.mood,
                prompt: entry.prompt
            })
        })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
        // TODO: handle catch
    })
}

export const putEntry = (entry) => {
    return fetch(`/entries/update/${entry._id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: entry.content,
            mood: entry.mood,
            prompt: entry.prompt
        })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
        // TODO: handle catch
    })
}

export const getEntry = (id) => {
    return fetch(`/entries/${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => {
            // TODO: handle catch
        })
}