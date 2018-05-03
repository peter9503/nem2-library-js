/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import TransactionRoutesApi from '../src/api/TransactionRoutesApi';
import deadline from '../src/transactions/Deadline';
import uint64 from '../src/coders/uint64';
import TransactionStatusListener from '../src/listeners/TransactionStatusListener';
import ConfirmedTransactionsListener from '../src/listeners/ConfirmedTransactionsListener';
import UnconfirmedTransactionsListener from '../src/listeners/UnconfirmedTransactionsListener';
import SecretLockTransaction from '../src/transactions/SecretLockTransaction';
import { sha3_512 } from 'js-sha3';
import CONF from './conf/conf';


describe('SecretLockTransaction E2E', () => {
	const keyPair = {
		publicKey: '846b4439154579a5903b1459c9cf69cb8153f6d0110a7a0ed61de29ae4810bf2',
		privateKey: '239cce2c5d2b83a70dc91afef0ce325fc9947faa87c8b18473092ce6a745945a'
	};

	it('should announce the transaction to the network successfully', done => {
		const account = 'SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC';

		new TransactionStatusListener(CONF.DOMAIN, CONF.PORT).given(account, res => {
			console.log(res);
			done();
		});

		new ConfirmedTransactionsListener(CONF.DOMAIN, CONF.PORT).given(account, res => {
			console.log(res);
			done();
		});

		new UnconfirmedTransactionsListener(CONF.DOMAIN, CONF.PORT).addedToAccount(account, res => {
			console.log(res);
			done();
		});

		const random = nacl.randomBytes(10);
		const hash = sha3_512.create();
		hash.update(random);
		const secretLockTransaction = {
			deadline: deadline(),
			mosaicId: [3646934825, 3576016193],
			mosaicAmount: uint64.fromUint(10000000),
			duration: uint64.fromUint(100),
			hashAlgorithm: 0,
			secret: hash.hex(),
			recipient: 'SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM'
		};
		const verifiableTransaction = new SecretLockTransaction.Builder()
			.addDeadline(secretLockTransaction.deadline)
			.addMosaicId(secretLockTransaction.mosaicId)
			.addMosaicAmount(secretLockTransaction.mosaicAmount)
			.addDuration(secretLockTransaction.duration)
			.addHashAlgorithm(secretLockTransaction.hashAlgorithm)
			.addSecret(secretLockTransaction.secret)
			.addRecipient(secretLockTransaction.recipient)
			.build();

		const payload = verifiableTransaction.signTransaction(keyPair);
		console.log('PAYLOAD', payload);
		const transactionRoutesAPI = new TransactionRoutesApi(CONF.SERVER);
		setTimeout(() => {
			transactionRoutesAPI
				.announceTransaction(payload)
				.then(x => {
					console.log('announce', x);
				})
				.catch(err => {
					console.log('error', err);
				});
		}, 1000);
	});
});
