import { createServer } from 'http';
const PORT = process.env.PORT || 8000;



const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Dou'
    },
    {
        id: 3,
        name: 'Bob Smith'
    }
]


const server = createServer((req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {

    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Route not found' }));
        res.end();
    }

});







server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})