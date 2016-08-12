
/*        Libraries        */

var mongoose    = require('mongoose');
var bluebird    = require('bluebird');
bluebird.promisifyAll(mongoose);


/*        Variables        */

// Collection name is in plural.
var collectionDefiningName  = 'User'; 
var Schema = new mongoose.Schema({
    // Account 
    username: { type: String, required: true },
    email: { type: String },
    //phone: { type: String },

    // Profile
    firstName: { type: String },
    lastName:  { type: String },
    gender: { type: String }
    birthDate: { type: Date },
    hideBirthDate: { type: Boolean },
    profileImage: { type: String },

    // Our information
    registerDate: { type: Date, default: Date.Now },
});
var model = new mongoose.Model(collectionDefiningName, Schema);


/*         Methods         */

function getId(userLogin) {
    return model.find(
        { login: userLogin },
        '_id'
    ).execAsync();
}

function getUsername(userId) {
    return model.find(
        { _id: userId },
        'username'
    ).execAsync();
}

function getSettings(userId) {
    return model.findById(
        { userId }
    ).execAsync();
}

function getSettings(userId, settings) {
    return model.findById(
        { userId },
        settings
    ).execAsync();
}

function setSettings(userId, userChanges) {
    return model.findByIdAndUpdate(
        { userId },
        userChanges
    ).execAsync();
}

function create(username) {
    var user = new model(
        { username: username }
    );
    return user.saveAsync();
}


/*         Exports         */

module.exports = {
    model: model,
    getUserId: getId,
    getUserSettings: getSettings,
    setUserSettings: setSettings
};
