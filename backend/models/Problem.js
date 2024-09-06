// const mongoose = require('mongoose');
// // const slugify = require('slugify');

// const problemSchema = new mongoose.Schema({
//     // slug: {
//     //     type: String,
//     //     required: true,
//     //     unique: true
//     // },
//     title: {
//         type: String,
//         required: true
//     },
//     desc: { type: String },
//     input: { type: String },
//     output: { type: String },
//     constraints: { type: String },
//     timelimit: { type: Number, default: 5.0 },
//     statement: { type: String, required: true },
//     createdBy: { type: String, required: true },
//     testcase: [
//         {
//             input: { type: String },
//             output: { type: String },
//             sample: { type: Boolean },
//             explanation: { type: String },
//         }
//     ]
// });

// // Middleware to generate slug before saving the document
// // problemSchema.pre('save', function (next) {
// //     if (!this.slug) {
// //         this.slug = slugify(this.title, { lower: true, strict: true });
// //     }
// //     next();
// // });

// const Problem = mongoose.model('Problem', problemSchema);

// module.exports = Problem;

const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: { type: String },
    input: { type: String },
    output: { type: String },
    constraints: { type: String },
    timelimit: { type: Number, default: 5.0 },
    statement: { type: String, required: true },
    createdBy: { type: String, required: true },
    testcase: [
        {
            input: { type: String },
            output: { type: String },
            sample: { type: Boolean },
            explanation: { type: String },
        },
    ],
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

