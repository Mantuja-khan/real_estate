const crypto = require('crypto');
const axios = require('axios');

const sha512 = (data) => crypto.createHash('sha512').update(data).digest('hex');

const EASEBUZZ_KEY = 'DHXA8WLRV3';
const EASEBUZZ_SALT = 'O5GTSZOD9O';
const txnid = '69b23af3d1c1d45d5b4e1545';
const amount = '21000';

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

const postData = new URLSearchParams();
postData.append('key', EASEBUZZ_KEY);
postData.append('merchant_key', EASEBUZZ_KEY);
postData.append('txnid', txnid);

postData.append('amount', amount);
postData.append('productinfo', productinfo);
postData.append('firstname', firstname);
postData.append('email', email);
postData.append('phone', phone);
postData.append('surl', surl);
postData.append('furl', furl);
postData.append('hash', hash);
postData.append('address1', 'Sector 45');
postData.append('address2', '');
postData.append('city', 'Gurgaon');
postData.append('state', 'Haryana');
postData.append('country', 'India');
postData.append('zipcode', '120001');
for (let i = 1; i <= 10; i++) postData.append(`udf${i}`, '');


(async () => {
    try {
        const initiateUrl = 'https://pay.easebuzz.in/payment/initiateLink';

        const response = await axios.post(initiateUrl, postData.toString(), {
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
