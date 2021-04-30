import React from "react";
import rulesImg from "./../images/image-rules.svg";
import closeIcon from "./../images/icon-close.svg";

const Modal = (props: { active: boolean; event: () => void }) => {
	return (
		<div className='modal' style={{ display: props.active ? "" : "none" }}>
			<div className='modal-rules'>
				<div className='head'>
					<h1>Rules</h1>
					<button
						className='close-btn'
						title='close button'
						onClick={props.event}>
						<img src={closeIcon} alt='close' />
					</button>
				</div>

				<img src={rulesImg} alt='rules' className='rules' />
			</div>
		</div>
	);
};

export default Modal;
