import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from "url"

const port = process.env.PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var userIsAuthorised = false;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home", {title:"Home"});
});

app.get("/about", (req, res) => {
	res.render("about", {title:"About us"});
});

app.get("/contact", (req, res) => {
	res.render("contact", {title:"Contact us"});
});

app.post("/", (req, res) => {
	const date = req.body.date;
	const time = req.body.time;

	res.render("countdown", {title: "Count Down", date: date, time: time});
});

app.listen(port, () => {
	console.log(`server stated at port ${port}.`);
});