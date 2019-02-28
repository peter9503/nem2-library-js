/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.12
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UInt64DTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UInt64DTO'));
  } else {
    // Browser globals (root is window)
    if (!root.CatapultRestApiReference) {
      root.CatapultRestApiReference = {};
    }
    root.CatapultRestApiReference.AliasDTO = factory(root.CatapultRestApiReference.ApiClient, root.CatapultRestApiReference.UInt64DTO);
  }
}(this, function(ApiClient, UInt64DTO) {
  'use strict';




  /**
   * The AliasDTO model module.
   * @module model/AliasDTO
   * @version 1.0.12
   */

  /**
   * Constructs a new <code>AliasDTO</code>.
   * @alias module:model/AliasDTO
   * @class
   * @param type {Number} 
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;


  };

  /**
   * Constructs a <code>AliasDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AliasDTO} obj Optional instance to populate.
   * @return {module:model/AliasDTO} The populated <code>AliasDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Number');
      }
      if (data.hasOwnProperty('mosaicId')) {
        obj['mosaicId'] = UInt64DTO.constructFromObject(data['mosaicId']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/UInt64DTO} mosaicId
   */
  exports.prototype['mosaicId'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));

