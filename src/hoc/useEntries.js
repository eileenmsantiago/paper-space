import React, {useEffect, useState} from 'react';
import {getAllEntries} from '../api/entries';

const useEntries = (from, to, sort) => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getAllEntries({from, to, sort}).then(res => {
            setEntries(res);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    return entries;
};

export default useEntries;