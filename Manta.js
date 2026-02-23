import mongoose from 'mongoose';
export default mongoose.model('Manta', new mongoose.Schema({modelo:String,marca:String,descricao:String}));