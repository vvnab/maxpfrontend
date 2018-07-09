import { combineReducers } from 'redux';

import news from "../pages/News/reducer";
import login from "../pages/Login/reducer";
import profile from "../pages/Profile/reducer";

const app = combineReducers({
    news,
    login,
    profile
});

export default app;