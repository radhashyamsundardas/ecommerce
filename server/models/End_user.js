const { Schema, model } = require('mongoose');
const { End_user } = require('.');
const bcrypt = require('bcrypt');


const end_userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true
    },
    telephone_number: {
      type: Number, 
      require: true
    },
    user_name: {
      type: String,
      unique: true,
      require: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],  
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: ['Carts, Orders']
      }
    ]
  }
);

end_userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 20;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  

const End_user = model('End_user', end_userSchema);

module.exports = End_user;
