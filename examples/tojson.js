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
  desc: { n: '描述', type: 'String', f: true, t: true, r: false }, //描述
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
});

//Set a value.
m.setData({ 
  protocol: 'http',
  host: 'www.jscms.top',
  port: '8080',
  desc: '描述',
  createTime: 1234567890,
  updateTime: 1234567890
});

console.log(m.to.json());
//m.reset({formField: true});
//console.log(m.to.json({formField: true}));
