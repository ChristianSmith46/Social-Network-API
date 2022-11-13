const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return new Date(date).toLocaleString();
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Add reactionCount by getting reactions list length
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
