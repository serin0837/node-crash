const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);
//Hostname(dose not get port)like port:5000
console.log(myUrl.hostname);

//Serialized query(after ?)
console.log(myUrl.search);

//params object(after ? object representing the query parameters of the URL)
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
