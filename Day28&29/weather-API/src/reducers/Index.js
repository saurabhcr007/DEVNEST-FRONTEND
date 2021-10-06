import { combineReducers } from "redux";
import PlaceDataReducer from './PlaceDataReducer';
import PlaceReducer from './PlaceReducer';
import ThemeReducer from './ThemeReducer';

const rootReducer = combineReducers({
    place: PlaceReducer,
    placeData: PlaceDataReducer,
    theme: ThemeReducer
})

export default rootReducer;