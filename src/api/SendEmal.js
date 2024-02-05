// pages/api/sendEmails.js

export default async function handler(req, res) {
    // Enable CORS for this API route
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        // Preflight request, respond with 200 OK
        res.status(200).end();
        return;
    }

    // Handle your API logic here
    try {
        const { data, error } = await someAsyncFunction(); // Replace with your actual function
        if (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
