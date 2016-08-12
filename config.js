
/*         Methods         */

function MongoDBUrl() {
    var result = process.env.MONGOLAB_URI;
    if (result == null) {
		return "mongodb://heroku_g52p2nw7:i3d3vtlqre7iggvmdnft7sl9ik@ds029655.mlab.com:29655/heroku_g52p2nw7";
    }
}


/*         Exports         */

exports.MongoDBUrl = MongoDBUrl;