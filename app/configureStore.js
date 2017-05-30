/**
 * Created by Murkrow on 4/23/2017.
 */
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default configureStore = () => {
    return createStore(
        rootReducer,
        undefined,
        compose(
            applyMiddleware(
                thunk,
            )
        )
    );

};