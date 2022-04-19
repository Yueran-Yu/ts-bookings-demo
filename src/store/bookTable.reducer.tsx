import {ADD_BOOKING} from "./bookTable.type";

export const initialState = {
	bookings: [] as BookingProps[]
}
export type State = typeof initialState

export const bookTableReducer: ReducerProps = (state: State, action: IAction): StateProps => {
	switch (action.type) {
		case ADD_BOOKING: {
			return {
				...state,
				bookings: state.bookings.concat(action.booking)
			}
		}
		default:
			return state
	}
}

