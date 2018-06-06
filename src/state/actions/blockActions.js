import _ from 'lodash';

export const GET_LAST_BLOCKS = 'GET_BLOCKS';
export const SELECT_BLOCK = 'SELECT_BLOCK';
export const ADD_BLOCK = 'ADD_BLOCK';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const BLOCKS_PER_PAGE = 10;

// Fetch blocks
export const getLastBlocks = (amount = BLOCKS_PER_PAGE) => (
	dispatch, 
	getState
) => {
	const state = getState();
	const { eth } = state.web3web3Instance;
	const blocksFetched = state.blocks.blocksArr.length;
	const initialBlockNumber = state.web3.initialBlock;
	
	Promise.all(
		_.times(amount, i => eth.getBlock(initialBlockNumber - blocksFetched - i))
	).then(blocks => {
		dispatch({
			type: GET_LAST_BLOCKS,
			payload: blocks.reverse()
		});
	});
};

// Dispatch action on every new block from network
export const listenToNewBlocks = () => (dispatch, getState) => {
	const { eth } = getState().web3.web3web3Instance;

	eth
		.subscribe('newBlockHeaders', error =>{
			if (error) console.log(`Subscription error: ${error}`);
		})
		.on('data', block => {
			dispatch({ type: ADD_BLOCK, payload: block });
		});
};

// Pagination actions
export const nextPage = () => ({ type: NEXT_PAGE });

export const previousPage = () => ({ type: PREVIOUS_PAGE });

// Dispatch action to fetch a single block
export const getBlock = blockNumber => (dispatch, getState) => {
	const { eth } = getState().web3.web3web3Instance;

	eth.getBlock(blockNumber)
		.then(block => {
			dispatch({
				type: SELECT_BLOCK,
				payload: block
			})
		})
}