/**
	Double backslash for Windows paths
	@param path {string} String with path 
	@return {string} Modified path
	@example
		\Program Files\Mysoft => \\Program Files\\Mysoft
*/
function doubleb(path) {
	return path.replace(/\\/g,'\\\\')
}


module.exports = function(RED) {
	var alasql = require('alasql');

	function AlaFileNodeOut(config) {
		RED.nodes.createNode(this,config);
        var node = this;
        node.filename = config.filename;
        node.format = config.format;
        node.columns = config.columns;
        node.headers = config.headers;
		node.on("input", function(msg) {
			var sql = 'SELECT '+this.columns
					+' INTO '+this.format+'("'+doubleb(this.filename)
					+'",{headers:'+this.headers+'}) FROM ?';
			console.log(sql);
			var bind = Array.isArray(msg.payload) ? [msg.payload] : [[msg.payload]];
			alasql.promise(sql, bind)
				.then(function(res){
					msg.payload = res;
					node.send(msg);
				}).catch(function(err){
					node.error(err,msg);
				});
		});
			
	}
	RED.nodes.registerType("ala-file out",AlaFileNodeOut);
}
