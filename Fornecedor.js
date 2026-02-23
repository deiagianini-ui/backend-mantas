import mongoose from 'mongoose';
export default mongoose.model('Fornecedor', new mongoose.Schema({nome:String,tipo:String,url:String,seletorPreco:String}));