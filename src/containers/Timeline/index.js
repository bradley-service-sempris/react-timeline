import * as TimelineEpics from './epic';
import * as timelineActions from './actions';
import * as timelineActionTypes from './actionTypes';
import { timelineReducer } from './reducer';

const timelineEpics = Object.values({ ...TimelineEpics });

export { timelineActions, timelineActionTypes, timelineEpics, timelineReducer };
