/*
 * Copyright 2019 NEM
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
/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlockInfoDTO from '../model/BlockInfoDTO';
import BlockchainScoreDTO from '../model/BlockchainScoreDTO';
import BlockchainStorageInfoDTO from '../model/BlockchainStorageInfoDTO';
import HeightDTO from '../model/HeightDTO';
import MerkleProofInfoDTO from '../model/MerkleProofInfoDTO';

/**
* BlockchainRoutes service.
* @module api/BlockchainRoutesApi
* @version 1.0.12
*/
export default class BlockchainRoutesApi {

    /**
    * Constructs a new BlockchainRoutesApi. 
    * @alias module:api/BlockchainRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get block information
     * Gets a block from the chain that has the given height.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockInfoDTO} and HTTP response
     */
    getBlockByHeightWithHttpInfo(height) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockByHeight");
      }


      let pathParams = {
        'height': height
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get block information
     * Gets a block from the chain that has the given height.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockInfoDTO}
     */
    getBlockByHeight(height) {
      return this.getBlockByHeightWithHttpInfo(height)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get receipts from a block
     * Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    getBlockReceiptsWithHttpInfo(height) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockReceipts");
      }


      let pathParams = {
        'height': height
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];

      return this.apiClient.callApi(
        '/block/{height}/receipts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get receipts from a block
     * Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    getBlockReceipts(height) {
      return this.getBlockReceiptsWithHttpInfo(height)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transactions from a block
     * Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    getBlockTransactionsWithHttpInfo(height, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
      }


      let pathParams = {
        'height': height
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];

      return this.apiClient.callApi(
        '/block/{height}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transactions from a block
     * Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    getBlockTransactions(height, opts) {
      return this.getBlockTransactionsWithHttpInfo(height, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current height of the chain
     * Returns the current height of the block chain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeightDTO} and HTTP response
     */
    getBlockchainHeightWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HeightDTO;

      return this.apiClient.callApi(
        '/chain/height', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the current height of the chain
     * Returns the current height of the block chain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeightDTO}
     */
    getBlockchainHeight() {
      return this.getBlockchainHeightWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the current score of the chain
     * Gets the current score of the block chain. The higher the score, the better the chain. During synchronization, nodes try to get the best block chain in the network. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainScoreDTO} and HTTP response
     */
    getBlockchainScoreWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockchainScoreDTO;

      return this.apiClient.callApi(
        '/chain/score', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the current score of the chain
     * Gets the current score of the block chain. The higher the score, the better the chain. During synchronization, nodes try to get the best block chain in the network. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainScoreDTO}
     */
    getBlockchainScore() {
      return this.getBlockchainScoreWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BlockInfoDTO>} and HTTP response
     */
    getBlocksByHeightWithLimitWithHttpInfo(height, limit) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlocksByHeightWithLimit");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getBlocksByHeightWithLimit");
      }


      let pathParams = {
        'height': height,
        'limit': limit
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BlockInfoDTO];

      return this.apiClient.callApi(
        '/blocks/{height}/limit/{limit}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BlockInfoDTO>}
     */
    getBlocksByHeightWithLimit(height, limit) {
      return this.getBlocksByHeightWithLimitWithHttpInfo(height, limit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the storage information
     * Returns statistical information about the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainStorageInfoDTO} and HTTP response
     */
    getDiagnosticStorageWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockchainStorageInfoDTO;

      return this.apiClient.callApi(
        '/diagnostic/storage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the storage information
     * Returns statistical information about the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainStorageInfoDTO}
     */
    getDiagnosticStorage() {
      return this.getDiagnosticStorageWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */
    getMerkleReceiptsWithHttpInfo(height, hash) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleReceipts");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleReceipts");
      }


      let pathParams = {
        'height': height,
        'hash': hash
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MerkleProofInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}/receipt/{hash}/merkle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */
    getMerkleReceipts(height, hash) {
      return this.getMerkleReceiptsWithHttpInfo(height, hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */
    getMerkleTransactionWithHttpInfo(height, hash) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleTransaction");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleTransaction");
      }


      let pathParams = {
        'height': height,
        'hash': hash
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MerkleProofInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}/transaction/{hash}/merkle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */
    getMerkleTransaction(height, hash) {
      return this.getMerkleTransactionWithHttpInfo(height, hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
