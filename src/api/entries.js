import user from "./user";

export const getAllEntries = () => {
    console.log(user.getId());
    return fetch('/entries', {
        headers: {
            userId: user.getId()
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => {
            // TODO: handle catch
        })
}

export const postEntry = (entry) => {
    return fetch('/entries/add',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: entry.content,
            prompt: entry.prompt,
            _userId: user.getId()
        })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {

    });
}

export const putEntry = (entry) => {
    return fetch(`/entries/update/${entry._id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: entry.content,
            prompt: entry.prompt
        })
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
       
    })
}
export const deleteEntry = (entry) => {
    return fetch(`/entries/delete/${entry._id}`, {
        method: 'DELETE'
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
