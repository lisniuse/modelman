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
  title: { n: '文章标题', type: 'String', f: true, t: true, r: true, p: '文章的标题。' }, //文章标题
  categoryId: { n: '所属分类', type: 'ObjectId', f: true, t: true, ref: 'Category', extra: {displayField: 'name', comType: 'select', options: 'categories'}}, //所属分类对象
  userId: { n: '发布用户', type: 'ObjectId', f: false, t: true, ref: 'User', extra: {displayField: 'nickname'}}, //发布用户
  type: { n: '文章类型', type: 'Number', f: true, r: true, extra: {comType: 'select', options: '1:单封面文章,2:多封面文章'}}, //文章类型：1.单封面文章 2.多封面文章
  topType: { n: '置顶方式', type: 'Number', f: true, r: true, d: 0, extra: {comType: 'select', options: '0:无置顶,1:主要置顶,2:次要置顶'}}, //置顶方式 0、无置顶 1、主要置顶 2、次要置顶
  keywords: { n: '文章关键字', type: 'Array', f: true, r: true, d: [], extra: {comType: 'tagInput'}}, //文章关键字
  description: { n: '文章摘要', type: 'String', f: true, r: true, p: '文章的摘要，用于元信息或页面头部渲染。', min: 10, max: 200, extra: {comType: 'textarea'}}, //文章摘要
  poster: { n: '文章封面', type: 'String', f: true, r: true, p: '图片的网址。' }, //文章封面
  mdContent: { n: 'markdown', type: 'String', f: true, t: false, r: true, extra: {comType: 'markdown'}}, //文章markdown内容
  htContent: { n: 'html', type: 'String', f: false, t: false, r: false }, //文章html内容
  likeCount: { n: '点赞数量', type: 'Number', f: false, d: 0 }, //点赞数量
  commentCount: { n: '评论数量', type: 'Number', f: false, d: 0 }, //评论数量
  visNumber: { n: '浏览数量', type: 'Number', f: false, d: 0 }, //评论数量
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
});

//Set a value.
m.setData({ 
  title: 'title',
  categoryId: {
    alias: "default",
    articleCount: 1,
    createTime: 1546300800000,
    description: "默认分类",
    keywords: "默认分类",
    name: "默认分类",
    order: 0,
    title: "默认分类",
    updateTime: 1546300800000,
    __v: 0,
    _id: "5c9791a22ef9cff7d524a126",
  }
});

// to json.
let json = m.to.json();
let displayJson = m.to.displayJson();
console.log(json);
console.log(displayJson);
