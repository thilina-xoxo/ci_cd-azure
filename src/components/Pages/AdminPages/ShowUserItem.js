import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ShowUserItem =({auth,user:{
   userID,
   email,
   userName 
}}) => {
    return <div class="  rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
    <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
  <div class="flex justify-center -mt-8">
      <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3"/>		
  </div>
  <div class="text-center px-3 pb-6 pt-2">
      <h3 class="text-black text-sm bold font-sans">{userName}</h3>
      <p class="mt-2 font-sans font-light text-grey-dark">{email}</p>
  </div>
    <div class="flex justify-center pb-3 text-grey-dark">
    
    </div>
</div>
       
        
      
    
    
}

ShowUserItem.propTypes = {
user:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
}

export default ShowUserItem
