import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const selectedRole = watch('role');

  console.log(selectedRole);

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(register('name'));

  return (
    <div className="text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} type="text" />

        <label>Email</label>
        <input
          {...register('email', { required: 'Email Address is required' })}
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Phone Number</label>
        <input {...register('phoneNumber')} type="number" />

        <label>Password</label>
        <input {...register('phoneNumber')} type="password" />

        <label>Are you a?</label>
        <label>Jobseeker</label>
        <input
          type="radio"
          name="role"
          value="jobseeker"
          {...register('role')}
        />
        <label>Recruiter</label>
        <input
          type="radio"
          name="role"
          value="recruiter"
          {...register('role')}
        />

        {selectedRole === 'jobseeker' && <div>
         <label>Education</label> 
        
          </div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

//step-1 create a function which accepts the data in the params
//step-2 add on submit event to the form and pass the function you hvae cretaed in the hanldeSubmit function
