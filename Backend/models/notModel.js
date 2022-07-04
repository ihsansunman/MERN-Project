const mongoose=require('mongoose')

const notSchema=mongoose.Schema({
    kullanici:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Kullanici'
    },
    baslik:{
        type: String,
        required: [true,'Lütfen not başlığı giriniz']
    },
    aciklama :{
        type: String,
        required: [true,'Lütfen not açıklaması giriniz']
    },
    oncelik:{
        type:Number
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Not', notSchema)