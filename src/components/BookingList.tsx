import React from 'react';
import {useStore} from '../store/Store';

export const BookingList = () => {
	const {state} = useStore()
	const {bookings} = state


	const Booking = ({item}: BookingItem) => (
		<>
			<div key={item.id}>
				<div>
					<b>Guest name:</b> {item.name}
				</div>
				<div>
					<b>Number of Contact:</b> {item.numberOfContact}
				</div>
				<div>
					<b>Number of Guests:</b> {item.numberOfPeople}
				</div>
				<div>
					<b>Date and Time:</b> {new Date(item.dateTime).toString()}
				</div>
				<hr/>
			</div>
		</>
	)

	return (
		<>
			<h2>Bookings List</h2>
			{ bookings && bookings.length > 0 ?
				bookings.map((booking: BookingProps) => (
					<Booking key={booking.id} item={booking}/>
				)) : ""
			}
		</>
	)
}