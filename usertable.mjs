// import { connect, Schema, model, Mixed } from 'mongoose';
// import env from 'dotenv';
// env.config();

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
/**
ユーザーID:number
ユーザー名:String
パスワード:String
is管理者:boolean
学年:number
学生番号:number
所属部屋:number
 */
connect(process.env.MONGO_URI);

const userSchema = new Schema({
  id:{ type: String, required: true},
  name: { type: String, required: true },
  passward: { type: String, required: true },
  is_admin: { type: Boolean, required: true ,enum:["0","1"]},
  grade: {type: String, required: true, enum:["B1","B2","B3","B4","M1","M2","D1","D2","留学生"]},
  student_number: {type: String, required: true},
  room: {type: Number, required:true, enum: ["612","613","教授室"]}

});
