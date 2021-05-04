import { initialState } from "./store";

const Reducer = (
	storeState: typeof initialState,
	action: { type: string; payload?: any }
) => {
	switch (action.type) {
		case "PLAYER_PICK":
			return { ...storeState, playerPick: action.payload };
		case "BOT_PICK":
			return { ...storeState, botPick: action.payload };
		case "WIN_OR_LOSE":
			return {
				...storeState,
				score: action.payload.score,
				win: action.payload.win,
			};
		case "PLAY_AGAIN":
			return { ...storeState, playerPick: "", botPick: "", win: "" };
		case "RETREIVE_SCORE":
			return { ...storeState, score: action.payload };
		default:
			return storeState;
	}
};

export default Reducer;
