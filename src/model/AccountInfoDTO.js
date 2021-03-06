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


import ApiClient from '../ApiClient';
import AccountDTO from './AccountDTO';
import AccountMetaDTO from './AccountMetaDTO';





/**
* The AccountInfoDTO model module.
* @module model/AccountInfoDTO
* @version 1.0.12
*/
export default class AccountInfoDTO {
    /**
    * Constructs a new <code>AccountInfoDTO</code>.
    * @alias module:model/AccountInfoDTO
    * @class
    * @param meta {module:model/AccountMetaDTO} 
    * @param account {module:model/AccountDTO} 
    */

    constructor(meta, account) {
        

        
        

        this['meta'] = meta;this['account'] = account;

        
    }

    /**
    * Constructs a <code>AccountInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountInfoDTO} obj Optional instance to populate.
    * @return {module:model/AccountInfoDTO} The populated <code>AccountInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountInfoDTO();

            
            
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AccountMetaDTO.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = AccountDTO.constructFromObject(data['account']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AccountMetaDTO} meta
    */
    meta = undefined;
    /**
    * @member {module:model/AccountDTO} account
    */
    account = undefined;








}


