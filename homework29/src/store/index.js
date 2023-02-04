import { applyMiddleware, createStore } from "redux";
import userReducer from './reducers/userReducer';
import { createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const myLogger = (store) =>{
    return (next) => (action) => {
        console.log('ACTION FIRED:', action);
        next(action);
    }
}


const middleWares = applyMiddleware(
    myLogger,
    thunk,
    createLogger({
        collapsed: true,
        level: 'warn'
    })
)
const store = createStore(userReducer,middleWares );

export default store;