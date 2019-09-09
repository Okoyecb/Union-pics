import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../container/views/homepage/home';

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Homepage} />
        </div>
    </BrowserRouter>
);

