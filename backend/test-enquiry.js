const axios = require('axios');

async function testEnquiry() {
    try {
        const response = await axios.post('http://localhost:7002/api/inquiries/enquire', {
            name: 'Test User',
            phone: '9876543210',
            message: 'This is a test message from verification script.'
        });
        console.log('Success:', response.status, response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testEnquiry();
