const { Schema, model } = require('mongoose');

// Email validation found here https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        // Email validation found here https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Add frienCount by getting friend list length
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
  

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
