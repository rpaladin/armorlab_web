let fs = require('fs');

let writeHtml = function(fileName, body = '') {
	let header = fs.readFileSync('header.html', 'utf8');
	let footer = fs.readFileSync('footer.html', 'utf8');
	let html = fs.readFileSync(fileName, 'utf8');
	fs.writeFileSync('../' + fileName, header + html + body + footer);
}

writeHtml('index.html');
writeHtml('news.html');
writeHtml('community.html');
writeHtml('download.html');
writeHtml('notes.html');
writeHtml('howto.html');
