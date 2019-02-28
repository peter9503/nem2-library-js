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
import UInt64DTO from './UInt64DTO';





/**
* The NamespaceNameDTO model module.
* @module model/NamespaceNameDTO
* @version 1.0.12
*/
export default class NamespaceNameDTO {
    /**
    * Constructs a new <code>NamespaceNameDTO</code>.
    * @alias module:model/NamespaceNameDTO
    * @class
    * @param namespaceId {module:model/UInt64DTO} 
    * @param name {String} 
    */

    constructor(namespaceId, name) {
        

        
        

        this['namespaceId'] = namespaceId;this['name'] = name;

        
    }

    /**
    * Constructs a <code>NamespaceNameDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceNameDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceNameDTO} The populated <code>NamespaceNameDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NamespaceNameDTO();

            
            
            

            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = UInt64DTO.constructFromObject(data['parentId']);
            }
            if (data.hasOwnProperty('namespaceId')) {
                obj['namespaceId'] = UInt64DTO.constructFromObject(data['namespaceId']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} parentId
    */
    parentId = undefined;
    /**
    * @member {module:model/UInt64DTO} namespaceId
    */
    namespaceId = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


