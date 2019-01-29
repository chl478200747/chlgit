var exress = require('express');
var URL = require('url');
var mysql = require('mysql');

// 连接数据库
var connection = mysql.createConnection({
    host: '94.191.14.80',
    user: 'root',
    password: 'abc123456',
    database: 'RUNOOB'
});

connection.connect();

module.exports = {
    test: function (req, res, next) {
        res.send('this to test api is useful!');
    },
    getList: function (req, res, next) {
        // SQL语句
        var sql = 'SELECT * FROM runoob_tb1';

        // 解析请求参数
        var params = URL.parse(req.url, true).query;

        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] -', err.message);
                return;
            }

            console.log(params);
            res.send(result);
        })
    }

}
