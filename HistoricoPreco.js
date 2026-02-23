import mongoose from 'mongoose';
export default mongoose.model('HistoricoPreco', new mongoose.Schema({modelo:String,fornecedor:String,preco:Number,data:{type:Date,default:Date.now}}));