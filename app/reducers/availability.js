import Moment from 'moment';

const initialMoment = Moment().startOf('day');

const initialState = {
  selectedDate: initialMoment,
  isChangingWeek: false,
};

const availability = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_DATE':
      return Object.assign({}, state, {
        selectedDate: action.date,
        isChangingWeek: false,
      });
    case 'START_WEEK_CHANGE':
      return Object.assign({}, state, {
        isChangingWeek: true,
      });
    default:
      return state;
  }
};

export default availability;
