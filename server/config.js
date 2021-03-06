DEBUG = true;

exports.db_client = 'pg';
exports.db_url = process.env.DATABASE_URL || 'postgresql://localhost/muchado';
exports.DEBUG = DEBUG;

exports.debug = function() {
	if (DEBUG) {
		console.log("[debug] ", arguments);
	}
}

exports.warn = function() {
	console.log("[warn] ", arguments);
}

exports.error = function() {
	console.log("[error] ", arguments);
}