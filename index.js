var Class = function(properties){

    function constructor(){

        if(properties.hasOwnProperty('initialize')){
            properties.initialize.apply(this, arguments);
        }

    }

    for(var i in properties){

        if(i !== 'initialize' && properties.hasOwnProperty(i)){
            constructor.prototype[i] = properties[i];
        }
    }

    return constructor;

}

module.exports = Class;