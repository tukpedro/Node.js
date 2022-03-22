const express = require('express');

const server = express();

server.use(express.json());

server.use(checkRequest);

const courses = [
	{
		id: 0,
		courseName: 'Python',
		duration: '3 meses',
		level: 'iniciante',
	},
	{
		id: 1,
		courseName: 'Python',
		duration: '5 meses',
		level: 'intermediario',
	},
	{
		id: 2,
		courseName: 'Node.js',
		duration: '3 meses',
		level: 'iniciante',
	},
	{
		id: 3,
		courseName: 'Node.js',
		duration: '3 meses',
		level: 'intermediario',
	},
	{
		id: 4,
		courseName: 'Node.js',
		duration: '4 meses',
		level: 'avancado',
	},
];

server.get('/courses', (req, res) => {
	res.json(courses);
});

server.get('/courses/:id', validateRequest, (req, res) => {
	const { id } = req.params;

	res.json(courses[id]);
});

server.post('/courses', (req, res) => {
	const { courseName, duration, level } = req.body;

	const course = {
		id: courses.length,
		courseName,
		duration,
		level,
	};

	courses.push(course);

	res.json(courses);
});

server.put('/courses/:id', (req, res) => {
	const id = Number(req.params.id);
	const { courseName, duration, level } = req.body;

	courses[id] = {
		id,
		courseName,
		duration,
		level,
	};

	res.json(courses[id]);
});

server.delete('/courses/:id', (req, res) => {
	const id = Number(req.params.id);

	courses.splice(id, 1);

	res.json(courses);
});

function checkRequest(req, res, next) {
	console.log(`${req.method} ${req.url}`);

	return next();
}

function validateRequest(req, res, next) {
	const course = courses[Number(req.params.id)];

	if (!course) return res.status(400).json({ error: 'Invalid course' });

	else return next();
}
server.listen(3000);
