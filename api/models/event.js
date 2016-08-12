
/*        Libraries        */

var mongoose    = require('mongoose');
var bluebird    = require('bluebird');


/*        Variables        */

// Collection name is in plural.
var collectionDefiningName  = 'Event'; 
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
