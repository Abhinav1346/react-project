import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  password: { type: String },
  role: { type: String, enum: ['jobseeker', 'recruiter'] },
  jobseeker: {
    education: [
      {
        institution: { type: String },
        year: { type: Number },
        degree: { type: String },
      },
    ],
    experience: [
      {
        company: { type: String },
        jobRole: { type: String },
        duration: { type: String },
      },
    ],
    skills : [String] ,
    resume : {type : String}
  },
  recruiter: {
    companyName: { type: String },
    companyWebsite: { type: String },
  },
});

const User = mongoose.model('user' , userSchema)