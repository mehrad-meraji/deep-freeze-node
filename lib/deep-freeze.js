/**
 * @module deep-freeze
 * @description Provides function to recursively freeze objects.
 * @version 1.0.2
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

/**
 * @public
 * @function deepFreeze
 * @description Deep freeze object.
 * @param {Object} object - Object to deep freeze.
 * @returns {Object} - Deep frozen object.
 */

function deepFreeze(object) {
    if(object) {
        var property, propertyKey;
        object = Object.freeze(object);
        for (propertyKey in object) {
            if(object.hasOwnProperty(propertyKey)) {
                property = object[propertyKey];
            }
            if ((!(typeof property === "object") || !(property instanceof Object)) || Object.isFrozen(property)) {
                continue;
            }
            deepFreeze(property);
        }
    }
    return object;
}

/**
 * @public
 * @description Expose function to deep freeze object.
 * @param {Object} object - Object to deep freeze.
 * @returns {Object} - Deep frozen object.
 */

module.exports = function(object) {
    return deepFreeze(object);
};