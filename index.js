var Class = function(properties){

    function constructor(){

        if(properties.hasOwnProperty('initialize')){

            properties.initialize.apply(this, arguments);

        }

    }

    return constructor;

}

module.exports = Class;