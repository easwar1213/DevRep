import React, { Component } from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Resource,ListGuesser } from 'react-admin';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;
