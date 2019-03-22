const modelman = require('../dist/umd/modelman');

let m = new modelman.Model({
  name: 'users',
  displayName: '用户'
});

m.assign({
  serialNumber: { n: '文章序号', type: 'Number' }, //文章序号
  categoryId: { n: '所属分类对象', type: 'ObjectId', ref: 'Category' }, //所属分类对象
  userId: { n: '所属用户id', type: 'ObjectId', ref: 'User' }, //所属用户id
  type: { n: '文章类型', type: 'Number', r: true }, //文章类型
  title: { n: '文章标题', type: 'String', r: true }, //文章标题
  keywords: { n: '文章关键字', type: 'Array', r: true }, //文章关键字
  description: { n: '文章摘要', type: 'String', min: 10, max: 200, r: true }, //文章摘要
  poster: { n: '文章封面', type: 'Url', r: true }, //poster
  mdContent: { n: '文章markdown内容', type: 'Url', r: true }, //文章markdown内容
  htContent: { n: '文章markdown内容', type: 'Url', r: true, f: false }, //文章html内容
  topType: { n: '置顶方式', type: 'Number', d: 0, r: true }, //置顶方式 0、无置顶 1、主要置顶 2、次要置顶
  likeCount: { n: '点赞数量', type: 'Number', d: 0, f: false }, //点赞数量
  commentCount: { n: '评论数量', type: 'Number', d: 0, f: false }, //评论数量
  visNumber: { n: '浏览数量', type: 'Number', d: 0, f: false }, //评论数量
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
});

let json = m.to.json();
let res = m.setData({ email: '17560235@qq.com' });
let mongooseModel = m.to.mongoose();
// console.log(json);

// console.log(res);

console.log(mongooseModel);