
module.exports = function(RED) {
	var alasql = require('alasql');

	function AlasqlExcelNodeIn(config) {
		RED.nodes.createNode(this,config);
        var node = this;
        node.filename = config.filename;
		node.on("input", function(msg) {
			var sql = 'SELECT * INTO XLSX("'+this.filename+'") FROM ?';
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
	RED.nodes.registerType("excel in",AlasqlExcelNodeIn);
}
