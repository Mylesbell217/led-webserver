const app = require('express')();

const Gpio = require('onoff').Gpio;
const LED = new Gpio(4, 'out');

app.get('/', (req, res) => {
	console.log('working');
});

app.get('/onFor/:millis', (req, res) => {

	LED.writeSync(1);

	setTimeout(() => {
		console.log(`pizza after ${req.params.millis}`);
		LED.writeSync(0);
	}, req.params.millis);
	
});

app.post('/onFor/:millis', (req, res) => {

	LED.writeSync(1);

	setTimeout(() => {
		console.log(`pizza after ${req.params.millis}`);
		LED.writeSync(0);
	}, req.params.millis);
	
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
