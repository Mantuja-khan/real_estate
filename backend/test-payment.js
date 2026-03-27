const crypto = require('crypto');
const axios = require('axios');

const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

const EASEBUZZ_KEY = 'DHXA8WLRV3';
const EASEBUZZ_SALT = 'O5GTSZOD9O';
const txnid = 'TXN_' + Date.now();
const amount = '21000.00';

const productinfo = 'Registration';
const firstname = 'Bhanu Thakur';
const email = 'bhanuthakur4454@gmail.com';
const phone = '8690046488';

const surl = 'https://api.haryanadeendayalplot.org.in/api/payments/easebuzz-response';
const furl = 'https://api.haryanadeendayalplot.org.in/api/payments/easebuzz-response';

const udf1 = '', udf2 = '', udf3 = '', udf4 = '', udf5 = '', udf6 = '', udf7 = '', udf8 = '', udf9 = '', udf10 = '';

// key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
const hashStr = `${EASEBUZZ_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}|${udf6}|${udf7}|${udf8}|${udf9}|${udf10}|${EASEBUZZ_SALT}`;
const hash = sha512(hashStr);

console.log('--- Testing Parameters ---');
console.log('KEY:', EASEBUZZ_KEY);
console.log('TXNID:', txnid);
console.log('HASH STRING:', hashStr);
console.log('HASH:', hash);
(async () => {
    try {
        const initiateUrl = 'https://pay.easebuzz.in/payment/initiateLink';

        const params = new URLSearchParams();
        params.append('key', EASEBUZZ_KEY);
        params.append('txnid', txnid);
        params.append('amount', amount);
        params.append('productinfo', productinfo);
        params.append('firstname', firstname);
        params.append('email', email);
        params.append('phone', phone);
        params.append('surl', surl);
        params.append('furl', furl);
        params.append('hash', hash);
        params.append('address1', 'Sector 45');
        params.append('city', 'Gurgaon');
        params.append('state', 'Haryana');
        params.append('country', 'India');
        params.append('zipcode', '120001');

        for (let i = 1; i <= 10; i++) params.append(`udf${i}`, '');

        const response = await axios.post(initiateUrl, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });
        console.log('--- API Response ---');
        console.log(JSON.stringify(response.data, null, 2));

    } catch (error) {
        console.error('--- API Error ---');
        console.error(error.response ? error.response.data : error.message);
    }
})();

