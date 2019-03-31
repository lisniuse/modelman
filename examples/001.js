const modelman = require('../dist/umd/modelman');
const mongoose = require('mongoose');

//Create a new model
let m = new modelman.Model({
  name: 'article',
  displayName: '文章'
});

//Define the fields of the model.
m.assign({
  numberId: { n: '文章序号', type: 'Number', f: false, t: true }, //文章序号
  title: { n: '文章标题', type: 'String', f: true, t: true, r: true }, //文章标题
  categoryId: { n: '所属分类', type: 'ObjectId', f: false, t: true, ref: 'Category', extra: {displayField: 'name'}}, //所属分类对象
  userId: { n: '发布用户', type: 'ObjectId', f: false, t: true, ref: 'User', extra: {displayField: 'nickname'}}, //发布用户
  type: { n: '文章类型', type: 'Number', f: true, r: true, extra: {options: '1:单封面文章,2:多封面文章'}}, //文章类型：1.单封面文章 2.多封面文章
  keywords: { n: '文章关键字', type: 'Array', f: true, r: true, d: [] }, //文章关键字
  description: { n: '文章摘要', type: 'String', f: true, r: true, min: 10, max: 200 }, //文章摘要
  poster: { n: '文章封面', type: 'Url', f: true, r: true }, //文章封面
  mdContent: { n: '文章markdown内容', type: 'String', f: true, r: true }, //文章markdown内容
  htContent: { n: '文章markdown内容', type: 'String', f: false, r: true }, //文章html内容
  topType: { n: '置顶方式', type: 'Number', f: true, r: true, d: 0, extra: {options: '0:无置顶,1:主要置顶,2:次要置顶'}}, //置顶方式 0、无置顶 1、主要置顶 2、次要置顶
  likeCount: { n: '点赞数量', type: 'Number', f: false, d: 0 }, //点赞数量
  commentCount: { n: '评论数量', type: 'Number', f: false, d: 0 }, //评论数量
  visNumber: { n: '浏览数量', type: 'Number', f: false, d: 0 }, //评论数量
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
});

//Set a value.
m.setData({ 
  title: 'title',
  topType: -1
});

// to json.
let json = m.to.json();
// to Mongoose's Model
let mongooseModel = m.to.mongoose(mongoose.Types);
console.log('\n=> json : \n')
console.log(JSON.stringify(json, null, 2));
console.log('\n=> Mongoose\'s Model : \n')
console.log(mongooseModel);
console.log('\n=> Will return a list of validation errors: \n')
console.log(m.validator.all());
