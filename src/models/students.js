const mongoose = require('mongoose');
const validator = require('validator');

//--------Schema----------//

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email id already present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },
  phone: {
    type: Number,
    min: 11,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

//--------Schema----------//

//--------Model Colleciton----------//

const Students = new mongoose.model('Student', studentSchema);

//--------Model Collection----------//

//Exporting Model //

module.exports = Students;

//Exporting Model //
