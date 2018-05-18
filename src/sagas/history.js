import { createLink } from 'redux-saga-router/react';
import { createBrowserHistory } from 'redux-saga-router';

export const history = createBrowserHistory();
export const Link = createLink(history);
