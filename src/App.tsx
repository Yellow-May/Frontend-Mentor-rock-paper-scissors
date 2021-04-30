import React from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Main from "./components/Main";
import { AppStore } from "./store";

function App() {
	const { events } = React.useContext(AppStore);

	React.useEffect(
		() => {
			const res = window.localStorage.getItem("rps");
			if (res) {
				const data = JSON.parse(res);
				events.retrieveScore(+data);
			} else {
				window.localStorage.setItem("rps", JSON.stringify(0));
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	const [desktop, setDesktop] = React.useState(
		window.matchMedia("(min-width: 480px)").matches
	);
	const [modalActive, setModalActive] = React.useState(true);
	const closeModal = () => setModalActive(false);

	React.useEffect(
		() =>
			window
				.matchMedia("(min-width: 480px)")
				.addEventListener("change", e => setDesktop(e.matches)),

		[]
	);

	return (
		<>
			<Modal active={modalActive} event={closeModal} />
			<Header />
			<Main desktop={desktop} />
			<button
				className='rules-btn'
				title='rules button'
				onClick={() => setModalActive(true)}>
				Rules
			</button>
		</>
	);
}

export default App;
