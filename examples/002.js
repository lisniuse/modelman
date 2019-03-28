const modelman = require('../dist/umd/modelman');
const mongoose = require('mongoose');

//Create a new model
let m = new modelman.Model({
  name: 'domain',
  displayName: '域名配置'
});

//Define the fields of the model.
m.assign({
  protocol: { n: '协议', type: 'String', f: true, t: true, r: true }, //协议
  host: { n: '域名', type: 'String', f: true, t: true, r: true }, //域名
  port: { n: '端口', type: 'Number', f: true, t: true, r: true }, //端口
  desc: { n: '描述', type: 'String', f: true, t: true, r: false } //描述
});

//Set a value.
m.setData({ 
  protocol: 'http',
  host: 'www.jscms.top',
  port: '8080'
});

console.log(m.validator.all());
