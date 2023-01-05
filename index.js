const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
var requestOptions = {
	method: "GET",
	headers: {
		"x-rapidapi-key": "2eeafea8379edba2af77907f4010b282",
		"x-rapidapi-host": "v3.football.api-sports.io",
	},
	redirect: "follow",
};
app.use(
	cors({
		Credentials: true,
		origin: ["http://localhost:3000"],
	})
);
app.listen(port);

/********************************TOPSCORERS******************************/
let dataTSPL;
let dataTSBL;
let dataTSCL;
let dataTSLL;
const fetchDataTSPL = async () => {
	const r = await fetch(
		`https://v3.football.api-sports.io/players/topscorers?league=39&season=2022`,
		requestOptions
	);
	dataTSPL = await r.json();
};
const fetchDataTSCL = async () => {
	const r = await fetch(
		`https://v3.football.api-sports.io/players/topscorers?league=2&season=2022`,
		requestOptions
	);
	dataTSCL = await r.json();
};
const fetchDataTSBL = async () => {
	const r = await fetch(
		`https://v3.football.api-sports.io/players/topscorers?league=78&season=2022`,
		requestOptions
	);
	dataTSBL = await r.json();
};
const fetchDataTSLL = async () => {
	const r = await fetch(
		`https://v3.football.api-sports.io/players/topscorers?league=140&season=2022`,
		requestOptions
	);
	dataTSLL = await r.json();
};
fetchDataTSPL();
fetchDataTSCL();
fetchDataTSBL();
fetchDataTSLL();
app.get("/topsc/39", async (req, res) => {
	res.json(dataTSPL);
});
app.get("/topsc/2", async (req, res) => {
	res.json(dataTSCL);
});
app.get("/topsc/140", async (req, res) => {
	res.json(dataTSLL);
});
app.get("/topsc/78", async (req, res) => {
	res.json(dataTSBL);
});

