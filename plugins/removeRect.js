'use strict';

exports.type = 'perItem';

exports.active = false;

exports.description = 'remove react (disabled by default)';


/**
 * remove fill none attributes
 *
 * @param {Object} item current iteration item
 *
 * @author liuwei
 */
exports.fn = function(item) {
    if(item.isElem('rect')){
            return false;
    }
};
