const express = require("express");
// const bodyParser = require("body-parser"); // depreciated
const notifier = require("node-notifier");
const App = express();
const PORT = process.env.PORT || 9000;

App.use(express.json());

App.get("/health", (req, res) => res.status(200).send());
App.post("/notify", (req, res) => {
    notify(req.body, reply => res.send(reply))
});
App.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

const notify = ({title, message}, callback) => {
    notifier.notify(
        {
            title: title || "No title given",
            message: message || "No message given",
            sound: true,
            wait: true,
            reply: true,
            closeLabel: "Completed?",
            timeout: 15
        },
        (err, response, reply) => {
            callback(reply);
        }
    );
};