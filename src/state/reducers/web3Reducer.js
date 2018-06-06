import { WEB3_INITIALISED, INITIAL_BLOCK } from '../actions/web3Actions';

const initialState = {
	web3Instance: null,
	initialBlock: undefined
}

export default (state = initialState, action) => {
	switch (action.type) {
		case WEB3_INITIALISED:
			return {
				...state,
				web3Instance: action.payload
			};

		case INITIAL_BLOCK:
			return {
				...state,
				initialBlock: action.payload
			};

		default:
			return state;
	}
}