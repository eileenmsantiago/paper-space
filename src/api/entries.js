import user from "./user";

export const getAllEntries = ({from, to}) => {

    let url = '/entries';
    if(from || to) {
        console.log(from, to);
        url += '?';
        if(from) {
            url += `from=${from}`;
        }
        if(to) {
            url += `${from ? '&' : ''}to=${to}`;
        }
    }

    return fetch(url, {
        headers: {
            userId: user.getId()
        }
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => {
            console.error(err);
            return err;
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
        console.error(err);
        return err;
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
        console.error(err);
        return err;
    })
}
export const deleteEntry = (entry) => {
    return fetch(`/entries/delete/${entry._id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => {
        console.error(err);
        return err;
    })
}

export const getEntry = (id) => {
    return fetch(`/entries/${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => {
            console.error(err);
            return err;
        })
}
