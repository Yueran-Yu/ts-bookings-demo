interface BookingProps {
	id: string
	name: string
	numberOfContact: string
	numberOfPeople: number
	dateTime: string
}

interface BookingItem {
	item:BookingProps
}
type BookingFactory = {
	name: string
	numberOfContact: string
	numberOfPeople: number
	dateTime: string
}

interface AddBookingProps {
	(booking: BookingProps): IActionA
}

type  IAction = {
	type: string
	booking: BookingProps
}


interface StateProps {
	bookings: BookingProps[]
}

interface ReducerProps {
	(state: typeof initialState, action: IAction): StateProps
}

interface ProviderProps {
	children: React.ReactNode
}

interface ContextProps {
	state: StateProps
	dispatch: React.Dispatch<IAction>
}