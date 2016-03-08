
module.exports = function(RED) {
	var alasql = require('alasql');


	function AlasqlNodeIn(n) {
		RED.nodes.createNode(this,n);

		node.on("input", function(msg) {
			if(typeof msg.topic !== 'string'){
				return node.error("msg.topic needs to be a SQL query string",msg);
			}

			var bind = Array.isArray(msg.payload) ? msg.payload : [msg.payload];

			alasql.promise(msg.topic, bind)
				.then(function(res){
					msg.payload = res;
					node.send(msg);
				}).catch(function(err){
					node.error(err,msg);
				});
		});
			
	}
	RED.nodes.registerType("alasql",AlasqlNodeIn);
}
