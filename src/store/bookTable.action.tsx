import {ADD_BOOKING} from "./bookTable.type";

export const addBooking: AddBookingProps = (booking) => ({
	type: ADD_BOOKING,
	booking: booking,
})

