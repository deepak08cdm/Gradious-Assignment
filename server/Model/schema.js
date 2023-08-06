import mongoose from "mongoose"
const schema = mongoose.Schema({
    patientName:{
        required:true,
        type:String,
        validate:{
            validator: function (v){
                const pattern = /^[_A-z]*((-|\s)*[_A-z])*$/g
                return pattern.test(v)
            },
            message:'invalid name entered'
        }
    },
    phoneNumber:{
        required:true,
        type:Number,
        validate:{
            validator: function (v){
                const pattern = /^[789]\d{9}$/g
                return pattern.test(v)
            },
            message:'invalid phone number entered'
        }
    },
    doctorName:{
        required:true,
        type:String,
        validate:{
            validator: function (v){
                const pattern = /^[_A-z]*((-|\s)*[_A-z])*$/g
                return pattern.test(v)
            },
            message:'invalid doctor name entered'
        }
    },
    gender:{
        required:true,
        type:String,
        enum:['male','female','trans']
    },
    date:{
        required:true,
        type:String
    },
    status:{
        required:true,
        type:String,
        enum:['consult', 'revisit']
    },
    age:{
        required:true,
        type:Number
    },
    time:{
        requireed:true,
        type:String
    }
})


export default mongoose.model('appointment_list',schema)