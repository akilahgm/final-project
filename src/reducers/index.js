import { combineReducers } from 'redux';
import course1 from './course1Reducer';
import course2 from './course2Reducer';
import course3 from './course3Reducer';
import externalLinks from './externalLinksReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  course1,
  course2,
  course3,
  externalLinks
});

export default rootReducer;
