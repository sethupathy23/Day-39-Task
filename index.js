const fs = require("fs");

const timestamp = Date.now();

const data = {
  timestamp: timestamp,
};
const jsonData = JSON.stringify(data);
fs.writeFile("./filepath.js", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File has been saved with the current stamp:");
});

const date = new Date();
// const data1 = {
//   Date: Date,
// };
const jsonData1 = JSON.stringify(date);
fs.writeFile("./Datefile.js", jsonData1, "utf8", (err) => {
  if (err) {
    console.log("Error Has been Written:", err);
    return;
  }
  console.log(`Date:${date.toDateString()}`);
});
