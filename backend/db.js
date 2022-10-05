import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "blog",
});

db.on("error", function (err) {
	console.log("[mysql error]", err);
});
