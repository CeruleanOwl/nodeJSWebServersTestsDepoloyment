const https = require("https");
const fs = require("fs");

const url = "https://en.wikipedia.org/wiki/Cher";

const request = https.get(url, (res) => {
  let download = fs.createWriteStream("cher.html");
  console.log("Response Started");
  res.pipe(download);
  res.on("end", () => {
    console.log("Response Finished!");
  });
});

request.end();
