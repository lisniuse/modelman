const modelman = require('../dist/umd/modelman');

let m = new modelman.Model({
  name: 'users',
  displayName: '用户'
});

m.setFields({
  email: { n: '邮箱', type: modelman.type.Email }, //邮箱
  idno: { n: '身份证号', type: modelman.type.ChinaId }, //身份证号
  username: { n: '用户名', type: modelman.type.Username, r: true }, //用户名
  password: { n: '密码', type: modelman.type.Password, r: true }, //密码
  location: { n: '地点', type: modelman.type.String, r: false }, //地点
  power: { n: '权限', type: modelman.type.ArrayString }, //权限
  score: { n: '积分', type: modelman.type.Number, min: 10, max: 20 }, //积分
  active: { type: modelman.type.Boolean }, //激活状态
  createTime: { n: '创建时间', type: modelman.type.Timestamp, t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: modelman.type.Timestamp, t: true, f: false } //更新时间
});

let json = m.to.json();
let mongooseModel = m.to.mongoose();

let res = m.set({ email: '17560235@qq.com' }).validator.all();

console.log(json);

console.log(res);
