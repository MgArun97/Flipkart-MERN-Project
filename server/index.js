import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid';


import  {Connection} from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';


const app = express();



app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

const PORT=8000;

Connection();

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
});



export let paytmMerchantkey = 'bKMfNxPPf_QdZppa';
export let paytmParams = {};
// paytmParams['MID'] ='DIY12386817555501617',
// paytmParams['WEBSITE'] =  'DIYtestingweb',
// paytmParams['CHANNEL_ID'] = 'WEB',
// paytmParams['INDUSTRY_TYPE_ID'] = 'Retail',
// paytmParams['ORDER_ID'] = uuid(),
// paytmParams['CUST_ID'] =' unzVbW56349744191124',
// paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
// paytmParams['EMAIL'] = 'mgarun@gmail.com'
// paytmParams['MOBILE_NO'] = '1234567852'



DefaultData();

