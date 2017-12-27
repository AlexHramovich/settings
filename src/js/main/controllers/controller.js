import axios from 'axios';
import { List, Map } from 'immutable';

const parseTables = tables => (
    tables.map(table => (
        Map({
            id: table.id,
            name: table.name,
            items: List(table.items),
        })
    ))
);

export const getTables = () => (
    axios
        .get('http://localhost:3000/tables')
        .then(result => List(parseTables(result.data)))
);
