const newman = require("newman");
require("dotenv").config();
newman.run(
  {
    collection: `https://api.postman.com/collections/9682968-19420a29-26eb-4610-bf2a-1f1ff49e59d6?access_key=${process.env.accessKey}`,
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete");
  }
);