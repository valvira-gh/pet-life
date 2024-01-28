
export default function handler(req, res) {
    const { id } = req.query; // Get Pet's ID from the route of params

    // Handle GET, POST, PUT, DELETE requests here....
    switch (req.method) {
        case 'GET':
            // Get pet data from db
            break;
        case 'POST':
            // Add new pet to db
            break;
            // so on...
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed!`);
    }
}