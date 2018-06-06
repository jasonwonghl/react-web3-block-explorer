import Web3 from 'web3';
import store from '../state/store';
import { WEB3_INITIALISED, INITIAL_BLOCK } from  '../state/actions/web3Actions';

export default () => {
	const web3 = new Web3('wss://mainnet.infura.io/_ws');
	
	store.dispatch({ type: WEB3_INITIALISED, payload: web3 });
	return web3.eth
		.getBlockNumber()
		.then(number => store.dispatch({ type: INITIAL_BLOCK, payload: number }));
};