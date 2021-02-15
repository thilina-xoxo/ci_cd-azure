import React from 'react'

function Footer() {
    return (
      
      
        <div className='footer bottom-auto'>
              <div className="flex flex-wrap justify-center bg-blue-600 p-6">
      <div className="flex flex-wrap mb-4 w-full">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <h2 className="text-md py-4">About Us</h2>
          <p className='text-sm text-white'> NoQueue is an application designed focusing on medical centers to provide an easy to use solution to avoid unnecessary exposure to crowds in waiting rooms. 
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 md:pl-32">
          <h3 className=" text-md py-3">Links</h3>
          <ul className='text-xs'>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
          <h3 className="text-md py-3">Links</h3>
          <ul className='text-xs'>
          <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
            <li><a className='hover:text-white' href="#!">Link</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <h3 className="text-sm py-2">Subscribe</h3>
          <form action="#">
            <div className="mb-4">
              <input className="bg-gray-200  text-xs appearance-none border-2 border-gray-200 rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Email"/>
            </div>
            <button  className="bg-pink-600 hover:bg-red-800 text-xs text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>

    <div className="bg-blue-900 p-2 pl-6">
      <p className="bottom text-xs ">&copy; {new Date().getFullYear()} Copyright: <a href="Hasitha Kumarasinghe" className='text-gray-500'>NoQueue</a></p>
    </div>

    </div>
    )
}

export default Footer








