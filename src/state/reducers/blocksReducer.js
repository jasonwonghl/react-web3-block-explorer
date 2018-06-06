import {
	GET_LAST_BLOCKS,
	SELECT_BLOCK,
	NEXT_PAGE,
	PREVIOUS_PAGE,
	ADD_BLOCK
} from '../actions/blockActions';

const initialState = { blocksArr: [], selectedBlock: null, page: 1}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_BLOCKS:
			return {
				...state,
				blocksArr: [...action.payload, ...state.blocksArr]
			}

		case SELECT_BLOCK:
			return {
				...state,
				selectedBlock: action.payload
			}

		case ADD_BLOCK:
			return {
				...state,
				blocksArr: [...state.blockArr, action.payload]
			}

		case NEXT_PAGE:
			return {
				...state,
				page: state.page + 1
			}

		case PREVIOUS_PAGE:
			return {
				...state,
				page: state.page -1
			}

		default:
			return state;
	}
};
