import React,{useState,Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentPhoto,imageUpload} from '../../../actions/photo'
import {setAlert} from '../../../actions/alert'
import {withRouter, Link} from 'react-router-dom'



 const FilesUploadComponent=({setAlert,photo:{photo,loading},history,getCurrentPhoto,imageUpload})=>  {

    const [profileImg, setProfileImg] = useState(null)
useEffect(() => {
   getCurrentPhoto()
 
    // eslint-disable-next-line
}, [loading,getCurrentPhoto])


const onChange=e=>{
  
setProfileImg(e.target.files[0])

}

const onClickHandler = () => {
    if(profileImg){
    const data = new FormData() 
    data.append('file', profileImg)
   imageUpload(data,history,true)
}else{
setAlert('No Image Selected','danger', <i className="material-icons">report</i>)
}
}
    return (

       
            <div className="container">
            
                <div className="row">
                
                        <div className="form-group">
                            <input type="file" onChange={e=>onChange(e)}/>
                        </div>
                        <div className="form-group">
                            <button onClick={onClickHandler} className="btn btn-primary" type="submit">Upload</button>
                        </div>
                  
                </div>

        
            </div>  
        )
    
        }

        FilesUploadComponent.propTypes = {
           
            getCurrentPhoto:PropTypes.func.isRequired,
            imageUpload:PropTypes.func.isRequired,
           photo:PropTypes.object.isRequired,
           setAlert:PropTypes.func.isRequired,

            }
            
            const mapStateToProps=state=>({
               
               photo:state.photo
                })
            
            export default connect(mapStateToProps,{setAlert,getCurrentPhoto,imageUpload}) (withRouter(FilesUploadComponent))