
/*        Libraries        */

var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt');
var bluebird    = require('bluebird');
bluebird.promisifyAll(mongoose);


/*        Variables        */

// Collection name is in plural.
var collectionDefiningName  = 'UserPassword'; 
var Schema = new mongoose.Schema({
    // Account 
    username: { type: String, required: true },
    password: { type: String, required: true },
});
var model = new mongoose.Model(collectionDefiningName, Schema);


/*         Methods         */

function create(username, password) {
    var hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(/* hidden */));
    var userPassword = new model(
        {
            username: username, 
            password: hashedPassword
        }
    );
    return userPassword.saveAsync();
}


/*         Exports         */

bluebird.promisifyAll(mongoose);

module.exports = {
    model: model,
    createUserPassword: create
};
