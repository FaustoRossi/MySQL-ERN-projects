import mysql from "mysql";

export const db = mysql.createConnection({
	host: "us-cdbr-east-06.cleardb.net",
	user: "b4dfdb90dd74c2",
	password: "292e5522",
	database: "heroku_31e0c43a4b544b9",
});

db.on("error", function (err) {
	console.log("[mysql error]", err);
});

//mysql://b4dfdb90dd74c2:292e5522@us-cdbr-east-06.cleardb.net/heroku_31e0c43a4b544b9?reconnect=true