
/* The function should return the names of those entries whose date is the current date. The names should be separated by a comma.

For example, here's an array of three entries and assume the date now is 2021-01-21.

[{ name: "Johny" , date: "2021-01-21T02:53:42+05:30" }, { name: "Sugar" , date: "2021-01-22T02:53:42+05:30" }, { name: "Sun" , date: "2021-01-21T03:53:42+05:30" }]

The function should return: ``` Johny,Sun ```. Please note that the names are separated by a comma without space.
*/



function todaysEntries(entries) {
	let now = new Date();
	let today = todaysEntries.prototype.today;
	if (today==undefined) today = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
	// let date = dt=>dt.split("T")[0]; //DATE IS IN ISO  String format
	// let res = entries.filter((item)=>date(item.date)===today).map((item)=>item.name);
	let res = entries.filter(item=>item.date.includes(today)).map(item=>item.name);
	return res.join(",");
}
// todaysEntries.prototype.today  = "2021-01-21"; //Prototyping functions cool in es6
todaysEntries([
	{ name: "Johnny", date: "2021-01-21T02:53:42+05:30" },
	{ name: "Sugar", date: "2021-01-22T02:53:42+05:30" },
	{ name: "Sun", date: "2021-01-21T03:53:42+05:30" }
  ]);

module.exports = todaysEntries;
