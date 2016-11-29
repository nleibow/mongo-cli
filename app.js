var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var nameOrEdit = prompt("Type the name and press enter to display a restaurant or type edit to edit a restaurant");
	if (nameOrEdit == "name"){
		var allChoice = prompt("Type the name and press enter to display a restaurant");
			collection.find({"name": allChoice}).toArray(function(err, doc){
				console.log(doc);
		});}
	else if(nameOrEdit == "edit"){
		editName = prompt("type the name of restaurant you want to change");
			collection.find({"name": allChoice}).toArray(function(err, doc){
				console.log(doc);});

		editKey = prompt("type the key you want to change");
		editValue = prompt("type the vale you want to change");
		editObject = {editKey: editValue}
		collection.update({"name": editName},{ $set: editObject});
	}		
});