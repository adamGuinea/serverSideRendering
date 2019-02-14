import React from 'react';
import App from './App'
import HomePage from './components/pages/HomePage';
import UsersListPage from './components/pages/UsersListPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];



