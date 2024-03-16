const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
    {
        customerId:  {
            type: Number,
            required: [true, 'Customer should have Id'],
            unique: true,
            maxlength: [6, 'Customer should have 6 characters'],
            minlength: [6, 'Customer should have 6 characters']
        },
        customerName:  {
            type: String,
            required: [true, 'Customer should have name'],
            unique: false,
            trim: true,
            maxlength: [40, 'Customer should have less than or equal to 40 characters'],
            minlength: [2, 'Customer should have more than or equal to 2 characters']
        },
        customerEmail:  {
            type: String,
            required: false,
        },
        loanId: {
            type: Number,
            required: [true, 'Loan should have Id'],
            unique: true,
            maxlength: [6, 'Loan should have 6 numbers'],
            minlength: [6, 'Loan should have 6 numbers']
        },
        loanAmount: {
            type: Number,
            required: [true, 'Loan amount is required'],
            unique: false,
            trim: true,
            max: [1000000, 'Loan amount should be less than or equal to 1000000'],
            min: [1, 'Loan amount should be more than or equal to 1']
        },
        loanIssueDate:{
            type:Date,
            default: Date.now,
            required: [true, 'Issued date is required'],
            autopopulate: true,
        },
        loanStatus:{
            type:String,
            required:false
        },
        paymentId:{
            type: Number,
            required: [true, 'Payment Id is required'],
            unique: true
        },
        paymentAmount: {
            type: Number,
            required: [true, 'Payment amount is required'],
            unique: false,
            trim: true,
            max: [1000000, 'Loan amount should be less than or equal to 1000000'],
            min: [1, 'Loan amount should be more than or equal to 1']
        },
        paymentDate: {
            type:Date,
            required: [true, 'Issued date is required']
        }
});

const customerLoan = mongoose.model('loanDetails', loanSchema);

module.exports = customerLoan;