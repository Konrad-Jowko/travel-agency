/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_TAGS = createActionName('CHANGE_TAGS');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeTags = payload => ({ payload, type: CHANGE_TAGS });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };

    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };

    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          to: action.payload,
          from: statePart.duration.from,
        },
      };

    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          to: statePart.duration.to,
          from: action.payload,
        },
      };

    default:
      return statePart;
  }
}
