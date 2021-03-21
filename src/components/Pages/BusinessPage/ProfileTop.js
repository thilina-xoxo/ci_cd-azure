import React from 'react'
import PropTypes from 'prop-types'
import img from '../../../assests/NewLanka.jpg'

const ProfileTop =({profile: {
    name,
    email,
    phoneNumber,
    postalCode,
    logo,
    imageFile,
    summary
}}) => {
    return (
<div className='container-around'>
        <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
         
        </div>

        <div className=" mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full col-6 rounded-lg "
                src={img}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className=" max-w-full col-6 rounded-lg">
                  <img>{logo}</img>
                </div>
                <h3 className="text-3xl font-semibold">
                  {name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                 {summary}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="far fa-envelope"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          {email}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="fas fa-phone"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">{phoneNumber}</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                        <i class="fas fa-search-location"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">{postalCode}</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
    )
}

ProfileTop.propTypes = {
profile: PropTypes.object.isRequired
}

export default ProfileTop