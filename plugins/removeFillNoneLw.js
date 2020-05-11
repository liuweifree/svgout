'use strict';

exports.type = 'perItem';

exports.active = false;

exports.description = 'remove fill none attributes (disabled by default)';


/**
 * remove fill none attributes
 *
 * @param {Object} item current iteration item
 *
 * @author liuwei
 */
exports.fn = function(item) {
    if(item.isElem('path')){
    	if(!item.hasAttr('fill')){
        	return false;
    	}else{
            var color = item.attr('fill');
            if(color.value == 'none'){
                return false;
            }
	}
    }
};
