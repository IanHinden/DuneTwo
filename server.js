const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/posts/", require("./routes/postsRoute"));

app.use(
    express.static(path.join(__dirname, "./frontend/build"))
);
