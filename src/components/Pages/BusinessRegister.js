import React, { useState, Fragment } from 'react';

// redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { registerBusiness } from '../../actions/auth';

const CreateProfile = ({ setAlert, registerBusiness }) => {
  // state goes here

  const [formData, setFormData] = useState({
    BusinessType: '',
    BusinessName: '',
    TotalCrowd: '',
    CurrentCrowd: '',
    PostalCode: '',
    PhoneNumber: '',
    Email: '',
    Summary: '',
  });

  const {
    BusinessType,
    BusinessName,
    TotalCrowd,
    CurrentCrowd,
    PostalCode,
    PhoneNumber,
    Email,
    Summary,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      registerBusiness(
        BusinessType,
        BusinessName,
        TotalCrowd,
        CurrentCrowd,
        PostalCode,
        PhoneNumber,
        Email,
        Summary
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className='w-full bg-white rounded  p-8 m-4 '>
        <h1 className='text-2xl xl:text-2xl font-extrabold text-orange-500 text-center '>
          Create Your Profile
        </h1>

        <form
          className='mb-6 mx-3'
          //className={classes.submit}
          onSubmit={(e) => onSubmit(e)}
        >
          <p className='text-red-500 text-xs italic mb-2'>
            **Please fill out all the fields.
          </p>

          <div className='w-full  mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-state'
            >
              Business Type
            </label>
            <div className='relative'>
              <select
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                name='BusinessType'
                value={BusinessType}
                onChange={(e) => onChange(e)}
              >
                <option value='Self'>Self</option>
                <option value='Goverment'>Goverment</option>
                <option value=' Semi Goverment'> Semi Goverment</option>
                <option value='Private'>Private</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full '>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='bname'
              >
                Business Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='bname'
                name='BusinessName'
                value={BusinessName}
                type='text'
                placeholder='Business Name'
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-website'
              >
                Total Crowd
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-totalCrowd'
                type='number'
                name='TotalCrowd'
                value={TotalCrowd}
                onChange={(e) => onChange(e)}
                placeholder='Total Crowd'
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-currentCrowd'
              >
                Current Crowd
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-currentCrowd'
                type='number'
                name='CurrentCrowd'
                value={CurrentCrowd}
                onChange={(e) => onChange(e)}
                placeholder='Total Crowd'
              />
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Postal Code
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='number'
                name='PostalCode'
                value={PostalCode}
                onChange={(e) => onChange(e)}
                placeholder='Postal Code'
              />
              <p className='text-red-500 text-xs italic'>
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Phone Number
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='number'
                name='PhoneNumber'
                value={PhoneNumber}
                onChange={(e) => onChange(e)}
                placeholder='phone'
              />
              <p className='text-red-500 text-xs italic'>
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-location'
              >
                Email
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-location'
                type='email'
                name='Email'
                value={Email}
                onChange={(e) => onChange(e)}
                placeholder='email'
              />
              <p className='text-red-500 text-xs italic'>
                Please fill out this field.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-summary'
              >
                Summary
              </label>
              <textarea
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-summary'
                type='text'
                name='Summary'
                value={Summary}
                onChange={(e) => onChange(e)}
                placeholder='Tell us a little about you'
              />
              <p className='text-gray-600 text-xs italic'>
                Make it more simpler
              </p>
            </div>
          </div>

          <button
            type='submit'
            className='mt-5 w-1/2  font-semibold bg-red-700 text-gray-100 w-full py-4 rounded-sm hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
          >
            <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
            <span className='ml-3'>Submit</span>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.prototype = {
  setAlert: PropTypes.func.isRequired,
  registerBusiness: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerBusiness })(CreateProfile);
