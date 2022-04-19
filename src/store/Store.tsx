import React, {createContext, FC, useContext, useReducer} from 'react';
import {bookTableReducer, initialState} from "./bookTable.reducer";


const Store = createContext<ContextProps>({
	state: {bookings: []},
	dispatch: () => {}
})
Store.displayName = 'Store';

export const useStore = () => useContext(Store)

export const StoreProvider: FC<ProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(bookTableReducer, initialState)

	return (
		<Store.Provider value={{state, dispatch}}>
			{children}
		</Store.Provider>
	)
}

