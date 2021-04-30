import React from "react";
import Reducer from "./Reducer";

export const initialState = {
	score: 0,
	playerPick: "",
	botPick: "",
	win: "",
};

export const AppStore = React.createContext(
	{} as {
		storeState: typeof initialState;
		events: any;
	}
);

export const AppProvider: React.FC = ({ children }) => {
	const [storeState, dispatch] = React.useReducer(Reducer, initialState);

	const playerPicked = (payload: string) =>
		dispatch({ type: "PLAYER_PICK", payload });
	const botPicked = (payload: string) =>
		dispatch({ type: "BOT_PICK", payload });
	const result = (payload: { score: number; win: string }) =>
		dispatch({ type: "WIN_OR_LOSE", payload });
	const playAgain = () => dispatch({ type: "PLAY_AGAIN" });
	const retrieveScore = (payload: number) =>
		dispatch({ type: "RETREIVE_SCORE", payload });
	const events = {
		playerPicked,
		botPicked,
		result,
		playAgain,
		retrieveScore,
	};

	return (
		<AppStore.Provider value={{ storeState, events }}>
			{children}
		</AppStore.Provider>
	);
};
