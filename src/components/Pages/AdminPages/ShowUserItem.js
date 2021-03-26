import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ShowUserItem =({users
}) => {

  const columns=users[0]  && Object.keys(users[0])

    return <div className="bg-gray-900 border border-gray-800 rounded shadow p-5">
  <div className="border-b border-gray-800 p-3">
  <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded p-3 bg-pink-600"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400">All users </h5>
                               
                            </div>
                        </div>
                        </div>
<table className="w-full p-5 text-white" cellSpacing={0} cellPadding={0}>
<thead>
  <tr>
      {users[0] && columns.map((heading) => <th className="text-left text-white px-6">{heading} </th>)}</tr>

</thead>

<tbody className="px-3">
    {users.map(row=> <tr >
        {
            columns.map(column=><td  className="px-3">{row[column]}</td> )
        }
    </tr>)}
</tbody>

    </table>
       

    </div> 
        
      
    
    
}

ShowUserItem.propTypes = {
users:PropTypes.array.isRequired,
auth:PropTypes.object.isRequired,
}

export default ShowUserItem
