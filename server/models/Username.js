const { Schema, model } = require('mongoose');
const { Username } = require('.');
const bcrypt = require('bcrypt');

const usernameSchema = new Schema({
    name: {
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
  

const Username = model('Username', usernameSchema);

module.exports = Username;
