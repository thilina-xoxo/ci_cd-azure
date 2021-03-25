import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../../actions/businessprofile'
import {withRouter} from 'react-router-dom'

const defaultImageSrc = '/img/image_placeholder.png';


const CreateProfile = ({profile:{profile,loading},createProfile,history}) => {
  
  const [formData,setFormData] = useState({
    BusinessType: '',
    Name: '',
    TotalCrowd: '',
    CurrentCrowd: '',
    PostalCode: '',
    PhoneNumber: '',
    Email: '',
    Summary: '',
   ImageName: '',
  ImageSrc: defaultImageSrc,
  ImageFile: null,
  });

  const {
    BusinessType,
    Name,
    TotalCrowd,
    CurrentCrowd,
    PostalCode,
    PhoneNumber,
    Email,
    Summary,
    ImageName,
    ImageSrc,
    ImageFile,
  } = formData;

  const onChange =e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
const onSubmit=(e)=>{
  e.preventDefault()
  createProfile(formData,history)
}

 // show preview image
  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setFormData({
          ...formData,
          ImageFile: imageFile,
          ImageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setFormData({
        ...formData,
        ImageFile: null,
        ImageSrc: defaultImageSrc,
      });
    }
  };
  //reset Form
  const resetForm = () => {
    setFormData(formData);
    document.getElementById('image-uploader').value = null;
    //setErrors({});
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
          onSubmit={e=>onSubmit(e)}
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
                id='BusinessName'
                name='Name'
                value={Name}
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
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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

          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full'>
              <div class='bg-white rounded shadow border p-6 w-64'>
                <img src={formData.ImageSrc} />
                <div>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={showPreview}
                    id='image-uploader'
                  />
                </div>
              </div>

              <p className='text-gray-600 text-xs italic'>
                Upload your business card image
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


CreateProfile.propTypes = {
  createProfile:PropTypes.func.isRequired,
}


const mapStateToProps=state=>({
   
  profile:state.profile
  })


    export default connect(mapStateToProps,{createProfile}) (withRouter(CreateProfile))
