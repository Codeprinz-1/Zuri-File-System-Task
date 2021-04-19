const fs = require('fs');
const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        fs.writeFile('post.json', data, (err) => {
            if (err) throw err
        });
    });

}).on("error", (err) => {
    throw err;
});