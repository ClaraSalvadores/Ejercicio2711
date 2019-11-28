const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let finalPath = path.join( __dirname, `../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(finalPath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	about: (req, res) => {
		let html = readHTML('about');
		res.send(html);
	},
	music: (req, res) => {
		let html = readHTML('music');
		res.send(html);
	},
	contact: (req, res) => {
		let html = readHTML('contact');
		res.send(html);
	}
	
};

module.exports = controller
//let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
//	return htmlFile;
//}
 
