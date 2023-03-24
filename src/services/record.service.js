const Record = require('../models/record.model')

module.exports = {
    addARecord: async (recordInfo) => {
        let record = new Record(recordInfo);
        await record.save();
        return {
            code: 200,
            message: recordInfo
        }
    },
    getAllRecord: async (query) => {
        let result = null;
        if (query){
            result = await Record.find().skip(query.offset).limit(query.limit);
        }else{
            result = await Record.find();
        }
        return {
            code: 200,
            message: result
        }
    }
}