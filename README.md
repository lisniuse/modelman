# modelman

modelman（模型侠）是一个模型类库，可以帮助你轻松的在各种数据格式之间进行转换。比如把modelman的模型转化为mongoose的模型，或者把modelman的模型转化为前端表单模型。

[![NPM version](https://badge.fury.io/js/modelman.svg)](http://badge.fury.io/js/modelman)

[![npm](https://nodei.co/npm/modelman.png)](https://www.npmjs.com/package/modelman)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.0 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install modelman
```

## Importing

```javascript
// Using Node.js `require()`
const modelman = require('modelman');

// Using ES6 imports
import modelman from 'modelman';
```

## ModelmanTypes

Modelman兼容大部分的 [mongoose 的数据类型](https://mongoosejs.com/docs/schematypes.html)。Modelman目前支持的数据类型如下：

类型名称 | 描述
---|---
Array | 普通数组对象
Boolean | 布尔值
Buffer | Buffer对象
ChinaId | 中国身份证号类型
Date | 日期对象
Email | 邮箱类型
Float | 浮点数
Map | Map对象
Mixed | 混合类型，可以放任意类型数据
Number | 普通数字
Object | 普通对象
ObjectId | ObjectId, mongodb的唯一id类型
Password | [ispro.password 类型](https://github.com/lisniuse/is-pro#ispasswordvalue-any)
String | 普通字符串
Timestamp | 时间戳类型
Url | 网址类型
Username | [ispro.username 类型](https://github.com/lisniuse/is-pro#isusernamevalue-any)

## API

调用 | 说明
---|---
myModel.assign(fields: object): void | 为这个模型定义字段以及字段的类型。
myModel.setData(object: object): myModel  | 为某个字段设置值，可以传入一个对象设置多个值。
myModel.to.json(): JSON | 转化为键值对的json对象。
myModel.to.mongoose(): JSON | 转化为mongoose的model的数据格式。
myModel.validator.all(): JSON  | 校验全部的数据，并返回校验失败的字段名和字段显示名。
myModel.validator.part(): JSON  | 只校验有效值的数据，并返回校验失败的字段名和字段显示名。

## 一个例子

```javascript
const modelman = require('modelman');

//创建一个新的modelman的模型
let m = new modelman.Model({
  name: 'article',
  displayName: '文章'
});

//为这个模型定义字段以及字段的类型。
m.assign({
  serialNumber: { n: '文章序号', type: 'Number' }, //文章序号
  categoryId: { n: '所属分类对象', type: 'ObjectId', ref: 'Category' }, //所属分类对象
  userId: { n: '所属用户id', type: 'ObjectId', ref: 'User' }, //所属用户id
  type: { n: '文章类型', type: 'Number', r: true }, //文章类型
  title: { n: '文章标题', type: 'String', r: true }, //文章标题
  keywords: { n: '文章关键字', type: 'Array', r: true }, //文章关键字
  description: { n: '文章摘要', type: 'String', min: 10, max: 200, r: true }, //文章摘要
  poster: { n: '文章封面', type: 'Url', r: true }, //poster
  mdContent: { n: '文章markdown内容', type: 'Stirng', r: true }, //文章markdown内容
  htContent: { n: '文章markdown内容', type: 'String', r: true, f: false }, //文章html内容
  topType: { n: '置顶方式', type: 'Number', d: 0, r: true }, //置顶方式 0、无置顶 1、主要置顶 2、次要置顶
  likeCount: { n: '点赞数量', type: 'Number', d: 0, f: false }, //点赞数量
  commentCount: { n: '评论数量', type: 'Number', d: 0, f: false }, //评论数量
  visNumber: { n: '浏览数量', type: 'Number', d: 0, f: false }, //评论数量
  createTime: { n: '创建时间', type: 'Timestamp', t: true, f: false }, //创建时间
  updateTime: { n: '更新时间', type: 'Timestamp', t: true, f: false } //更新时间
});

//为某个字段设置值，可以传入一个对象设置多个值。
m.setData({ title: '这是一篇文章！' });

//转化为键值对的json对象。
let json = m.to.json();

//转化为mongoose的model的数据格式。
let mongooseModel = m.to.mongoose();

console.log('\n=> 输出json格式 : \n')
console.log(JSON.stringify(json, null, 2));
console.log('\n=> 输出mongoose的模型 : \n')
console.log(mongooseModel);
console.log('\n=> 校验数据，并返回校验失败的字段名和字段显示名: \n')
console.log(m.validator.all());
```

## 前端例子

结合vue使用modelman的模型自动渲染表单组件。

github地址：[https://github.com/lisniuse/vue-modelman-example](https://github.com/lisniuse/vue-modelman-example)

## assign方法参数说明

assign方法接受一个对象作为参数，这个对象中值的参数说明如下：

参数名 | 说明
---|---
``type`` | modelman的数据类型，可以用modelman.type[type]来赋值type，也可以直接使用类型的字符串形式，比如'String'。
``n`` 或者 ``name`` | 表示字段的显示名称，可以是中文也可以是英文，比如它可以表示表单的label。
``r`` 或者 ``required`` | 表示是否是必填项目。
``f`` 或者 ``formField`` | 表示是否是前端的表单的字段类型，比如某条数据的创建时间（createTime）就不属于表单字段类型。
``t`` 或者 ``tableField`` | 表示是否是前端的列表或者表格需要展示的字段类型。
``d`` 或者 `default` 或者 ``defaultValue`` | 表示该字段的默认值。
``min`` | 在number中用于表示最小值限制，在字符串中用于表示最小字符串长度限制。 
``max`` | 在number中用于表示最大值限制，在字符串中用于表示最大字符串长度限制。
``ref`` | 主要是mongoose的使用类型，表示关联。

## 待完成

一、目前只支持的mongoose的模型的转化，还有很多数据库的模型未被支持：

- Sqlite
- PostgreSQL
- Oracle
- MySQL
- SQL Server

二、对前端表单的更完整的校验支持。

## 其他

欢迎贡献代码！
