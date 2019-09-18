const express = require('express');
const app = express();
app.get('/many',function (req,res,next) {
    var sk = 'yoursk',addresses = ['北京市', '深圳市', '广州市', '普宁市'];
    ep.after('getLocation',addresses.length,function (locations) {
        res.send(locations);
    });
    addresses.forEach(function (e,i) {
        superagent.get('http://api.map.baidu.com/geocoder/v2/')
            .query({address: e})
            .query({output: 'json'})
            .query({ak: sk})
            .end(function(err, sres) {
                ep.emit('getLocation', {address: e, res: sres.text})
            })
    })
});