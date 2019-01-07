const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
    res.send('Welcome to API');
});
app.get('/sale', (req, res) => {
    let testdata = fs.readFileSync('data/sale.json');
    let data = JSON.parse(testdata);
    res.send(data);
});
app.post('/sale', (req, res) => {
    fs.readFile('./data/sale.json', 'utf-8', (err, data) => {
        if (err) throw err;

        let Data = JSON.parse(data);
        // let VehicleType = Data;
        Data.SalesOrder.push({
            "ID" : req.body.id,
           "Stock Location" : req.body.Stockloc,
           "Party Name" : req.body.PartyNM,
           "Order Booked By" : req.body.OrderBookedBy,
           "PO Number" : req.body.PONum,
           "Delievery Date" : req.body.DelDate,
           "Way Bill Number" : req.body.WayBillNo,
           "Discount Percent" : req.body.DiscountPer,
           "On Header" :req.body.OnHeader,
           "Trans Date" : req.body.TransDate,
           "Bill Date" : req.body.BillDate,
           "City" :req.body.City,
           "Sort By" : req.body.SortBy,
           "Packed By" : req.body.PackedBy,
           "Transporter" : req.body.Transporter,
           "Reference" : req.body.Reference,
           "Discount Amount" : req.body.DiscountAmount,
           "On Row" : req.body.OnRow,
           "Ref Doc No" : req.body.RefDocNo,
           "Bill Number" : req.body.BillNo,
           "Packed Date" : req.body.PackedDate,
           "Lr No" : req.body.LrNo,
           "Lr Date" : req.body.LrDate,
           "Case" : req.body.Case,
           "Forwarding" : req.body.Forwarding, 
        });

        fs.writeFile('./data/sale.json', JSON.stringify(Data), 'utf-8', function (err) {
            if (err) throw err;
        });
    });
});
app.listen(16557, () => {
    console.log('Example app listening on port 16557');
});
