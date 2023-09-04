import { combineReducers } from 'redux';

import posts from './posts';
import posts from './auth';


export const reducers = combineReducers({ posts,auth });