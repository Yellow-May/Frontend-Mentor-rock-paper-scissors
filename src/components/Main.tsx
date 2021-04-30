import React from "react";
import Circle from "./resuseables/Circle";
import { AppStore } from "./../store";

const items = ["paper", "scissors", "rock"];

const Main = (props: { desktop: boolean }) => {
	const { storeState, events } = React.useContext(AppStore);

	const [size, setSize] = React.useState(135);

	React.useEffect(() => {
		if (!props.desktop) setSize(110);
		else setSize(135);
	}, [props.desktop]);

	const storeScore = (res: number) =>
		window.localStorage.setItem("rps", JSON.stringify(res));

	React.useEffect(() => {
		if (storeState.playerPick !== "" && storeState.botPick === "")
			setTimeout(() => {
				const randomVal = Math.ceil(Math.random() * 3);
				let pick = "";
				switch (randomVal) {
					case 1:
						pick = "paper";
						break;
					case 2:
						pick = "scissors";
						break;
					case 3:
						pick = "rock";
						break;
					default:
						alert("Math Error");
						break;
				}
				events.botPicked(pick);

				if (pick === storeState.playerPick) {
					events.result({ score: storeState.score, win: "draw" });
					storeScore(storeState.score);
				}
				if (
					(pick === "paper" &&
						storeState.playerPick === "scissors") ||
					(pick === "scissors" && storeState.playerPick === "rock") ||
					(pick === "rock" && storeState.playerPick === "paper")
				) {
					events.result({ score: storeState.score + 1, win: "win" });
					storeScore(storeState.score + 1);
				}
				if (
					(pick === "scissors" &&
						storeState.playerPick === "paper") ||
					(pick === "rock" && storeState.playerPick === "scissors") ||
					(pick === "paper" && storeState.playerPick === "rock")
				) {
					events.result({ score: storeState.score - 1, win: "lose" });
					storeScore(storeState.score - 1);
				}
			}, 2500);
	}, [storeState, events]);

	return (
		<main>
			<div
				className='pick'
				style={{ display: storeState.playerPick === "" ? "" : "none" }}>
				{items.map((item: string) => (
					<Circle
						key={item}
						type={item}
						size={size}
						winner={false}
						blank={false}
						event={events.playerPicked}
					/>
				))}
			</div>

			<div
				className='reveal'
				style={{ display: storeState.playerPick === "" ? "none" : "" }}>
				<div className='side player'>
					<span className='text'>You Picked</span>
					<Circle
						type={storeState.playerPick}
						size={size * 1.75}
						winner={storeState.win === "win" ? true : false}
						blank={false}
					/>
				</div>
				<div
					className='mid'
					style={{
						display: storeState.botPick === "" ? "none" : "",
					}}>
					<span className='text'>You {" " + storeState.win}</span>
					<button
						className='play-btn'
						title='play again'
						onClick={events.playAgain}>
						Play Again
					</button>
				</div>
				<div className='side bot'>
					<span className='text'>The House Picked</span>
					<Circle
						type={storeState.botPick}
						size={size * 1.75}
						winner={storeState.win === "lose" ? true : false}
						blank={storeState.botPick === "" ? true : false}
					/>
				</div>
			</div>
		</main>
	);
};

export default Main;
