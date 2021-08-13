import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';

const epics = combineEpics();

const rootReducer = combineReducers({});

const rootEpic = (action$, store$, dependencies) =>
    epics(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error('Root Epic Error: ', error);
            return source;
        })
);

export { rootEpic, rootReducer };