const express = require('express')
const app = express()
const PORT = 8000

const decor = {
	'organic modern': {
		'age': 29,
		'birthName': 'Shéyaa Bin Abraham-Joseph',
		'birthLocation': 'London, England'
	},
	'chance the rapper': {
		'age': 29,
		'birthname': 'Chancelor Bennett',
		'birthLocation': 'Chicago, Illinois'
	},
	'unknown':{
		'age': 0,
		'birthname': 'unknown',
		'birthLocation': 'unknown'
	}
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
	const decorStyle = req.params.name.toLowerCase()
	if(decor[decorStyle]){
		res.json(decor[decorStyle])
	}else{
		res.json(decor['unknown'])
	}
	
})

app.listen(PORT, ()=>{
	console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})