import React from "react";

const Circle = (props: {
	type: string;
	size: number;
	winner: boolean;
	blank: boolean;
	event?: (payload: string) => void;
}) => {
	return (
		<div
			className={`circle ${props.type} ${props.blank ? "blank" : ""}`}
			style={{
				height: props.size,
				width: props.size,
				zIndex: props.winner ? "unset" : 1,
			}}>
			{props.winner &&
				[3, 2, 1].map(e => (
					<span
						key={e}
						style={{
							width: props.size + e * 110,
							height: props.size + e * 110,
							opacity: e / 30,
							zIndex: e * -1,
						}}></span>
				))}
			<button
				title={props.type}
				onClick={() => props.event && props.event(props.type)}
				className='btn-play'
				style={{
					borderWidth: props.size / 10,
				}}></button>
		</div>
	);
};

export default Circle;
