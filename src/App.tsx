import React from 'react';
import './App.css';
import BookingForm from "./components/BookingForm";
import {BookingList} from './components/BookingList';

const App = () => {
	return (
		<div className="App">
			<h1>Booking System</h1>
			<BookingForm/>
			<BookingList/>
		</div>
	)
}

export default App;
