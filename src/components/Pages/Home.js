import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Carousel from '../layouts/Carousel';
import img from '../../assests/abc.jpeg';
import imge from '../../assests/images.jpg';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="primary" href="Home">
          NoQueue Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    flexGrow: 1,
  },
 
  paper: {
    margin: theme.spacing(0,0),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: blue[100],
  },
  form: {
    width: '60%',
    height: '100%',
    marginTop: theme.spacing(0),
    backgroundColor: blue[500],
    color: blue[50],
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      
      <Grid item xs={12} component={Paper} square>
        <div className={classes.paper}>
          <Carousel/>
        <Box mt={10}></Box>

        <section className="pb-20 bg-blue-200 ">
              <div className=" mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className=" pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-purple-500 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                        <i class="fa fa-heartbeat" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Your Health is Our Priority</h6>
                        <p className="mt-2 mb-4 text-grey-900">
                        NoQueue facilitates an effective and convenient way to channel your doctor and reach your doctor just on time avoiding unnecessary expoesure to crowds.
                        </p>
                      </div>
                      <a href="services" className='text-gray-500'>
                      <button  className="bg-purple-900 hover:bg-blue-800 text-xs text-white font-bold py-2 px-4 rounded" onClick="services" type="submit">Our Services           
                      </button>
                      </a>
                    </div>
                  </div>
                  
    
                  <div className="w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-pink-300 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i class="fa fa-user-md" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Welcome to Our Service
                        </h6>
                        <p className="mt-2 mb-4 text-gray-900">
                        NoQueue is an application designed focusing on medical centers to provide an easy-to-use solution to avoid unnecessary overcrowding.
                        </p>
                      </div>
                      <a href ='about'>
                      <button  className="bg-pink-600 hover:bg-blue-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">About Us
                      </button>
                      </a>
                    </div>
                  </div>
    
                  <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-green-300 w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-8 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-edit"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Best Doctors and Equipments
                        </h6>
                        <p className="mt-2 mb-4 text-gray-900">
                          Best doctors with best equipments supply their efficient service to serve you. Make your appointment at the nearest location where you can reach easily.
                        </p>
                      </div>
                      <a href="appointmentmaking" className='text-gray-500'>
                      <button  className="bg-green-700 hover:bg-blue-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">Make Appointment
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-20 bg-white w-full">
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px", transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
    
              <div className=" mx-auto px-4">
                <div className="items-center flex flex-wrap">
                  
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      className="max-w-full col-6 rounded-lg mx-auto bg-white"
                      src={img}
                      style={{ maxWidth: "600px" }}
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12 text-center">
                      <div className="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300">
                      <i class="fas fa-heartbeat fa-2x"></i>
                      </div>
                      <h3 className="text-3xl font-semibold text-blue-400 text-center">
                        What We Do 
                      </h3>

                      <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        What we provide for your health
                      </p>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 mr-3">
                              <i class="far fa-hospital fa-2x"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blue-600">
                                Choose the best easy-to reach medical center
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 mr-3">
                              <i class="fas fa-notes-medical fa-2x"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blue-600">Make your appointment to meet the best doctors</h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 mr-3">
                              <i class="far fa-bell fa-2x"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blue-600">Notification service to inform you the time to reach</h4>
                            </div>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-500 mr-3">
                              <i class="fas fa-user-md fa-2x"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blue-600">Meet your doctor just on time</h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-20 pb-48 w-full bg-white">
              <div className=" mx-auto px-4 bg-white">
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-3xl font-semibold text-blue-400">
                    Meet Our Team
                    </h2>
                    <p className="text-lg leading-relaxed m-4 text-gray-600">
                     Join with our team to know more information
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={imge}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-semibold text-blue-500">
                          Rajapaksha RTM
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Web Developer
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>
                          <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>
                          <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={imge}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-semibold text-blue-500">
                        Kumarasinghe WKH
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          Marketing Specialist
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-google"></i>
                          </button>
                          <button
                            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={imge}
                       className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-semibold text-blue-500">
                       Tennakoon TMGK
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          UI Designer
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-google"></i>
                          </button>
                          <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>
                          <button
                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-instagram"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={imge}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-semibold text-blue-500">
                          Siribaddana KT
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          App Developer
                        </p>
                        <div className="mt-6">
                          <button
                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </button>
                          <button
                            className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-google"></i>
                          </button>
                          <button
                            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>
                          <button
                            className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-instagram"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
</Grid> 
    )
}
