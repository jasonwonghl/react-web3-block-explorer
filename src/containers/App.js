import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Blocks from './Blocks';
import BlockInfo from './BlockInfo';
import Transactions from './Transactions';
import TransactionInfo from './TransactionInfo';

const App = () => (
	<div>
		<table>
			<tr>
				<td><Blocks /></td>
			</tr>
		</table>
		<table>
			<tr>
				<td><Route path="/:block" component={BlockInfo} /></td>
				<td><Route path="/:block/transactions" component={Transactions} /></td>
				<td><Route path="/:block/transactions/:transaction" component={TransactionInfo} /></td>
			</tr>
		</table>
	</div>
)

export default (withRouter(App));