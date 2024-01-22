import React, { useState } from 'react'
import {  Navigate, useRoutes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';


// this is pages

// this variable is for starting url
//this variable is for nadi local development 
// export const startUrl = `/nadipms/`;

//this variable is for local development 
export const startUrl = `/`;

// this variable for testing server
// export const startUrl = `/nadi/testing/`;

// this variable is for live server
// export const startUrl = `/nadi/web/`;

function Routes() {
   const auth = localStorage.getItem('Implementauth');
   const [successOpen, setsuccessOpen] = useState(false);
   const [successMessage, setsuccessMessage] = useState('');
   const [successStatus, setsuccessStatus] = useState(false);
   const [successColor, setsuccessColor] = useState(false);


    return useRoutes([
      {
      path: startUrl,
      element: <HomePage />
      },
      {
        path: 'home',
        element: <Navigate to={startUrl} />
        },
    ])
}

export default Routes;