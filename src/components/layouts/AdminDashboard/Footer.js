import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import Link from '@material-ui/core/Link';
import React, { Component } from 'react'



class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={12} sm={4}>
            <div vocab="http://schema.org/" typeof="Organization">
              <span property="name">About Us</span>
              <div style={{fontSize:'14px'}} property="address" typeof="PostalAddress">
               Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit. Modi, cupiditate illo repudiandae cum at eveniet recusandae ullam dolorem impedit reiciendis ratione voluptatem explicabo officiis eius dolorum deleniti, rerum accusamus fugiat?
              </div>
            
            </div>
          </Grid>
          
          <Grid className={classes.flexContainer} item xs={4}>
     
         
            <Grid style={{marginLeft:'20px', alignItems:'center'}}  >
            <Link to=":https://www.facebook.com" target="blank" className='white-text'>
              <i className='fa fa-facebook fa-2x px-1'  style={{color:'#4267B2',marginRight:'10px'}}></i>
            </Link>
            <Link to="https://www.twitter.com" target="blank" className='white-text'>
              <i className='fa fa-twitter fa-2x px-1'  style={{color:'#00acee', marginRight:'10px'}}></i>
            </Link>
            <Link to="https://www.linkdin.com" target="blank" className='white-text'>
              <i className='fa fa-linkedin fa-2x px-1'  style={{color:'#0e76a8',marginRight:'10px'}} ></i>
            </Link>
            <Link to="https://www.googleplus.com" target="blank" className='white-text'>
              <i className='fa fa-google-plus fa-2x px-1'  style={{color:'#db4a39',marginRight:'10px'}}></i>
            </Link>
         
            </Grid>
              
              
             
          
           
              
            
          </Grid>


          
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
              <li>
                <Link
                  prefetch={true}
                  as="/contact"
                  href="#"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/ferpa"
                  href="#"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/directions-and-attractions"
                  href="#"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Directions
                  </a>
                </Link>
              </li>
              <li>
               
  
              </li>
              <li>
                <Link
                  prefetch={true}
                  as="/consumer-information"
                  href="#"
                >
                  <a className={classes.white} style={{ fontWeight: 400 }}>
                    Consumer Information
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={'span'}
          >
            © {currentYear} NoQueue
          </Typography>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: 30,
    backgroundColor: '#303f9f',
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: '#1a237e',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: '#fff',
    backgroundColor: '#ec407a',
    border: '2px #fff solid',
    boxShadow: 'none',
    margin: '8px'
  },
  white: {
    color: '#fff'
  },
  flexContainer: {
    display: 'flex-end'
  }
})

export default withStyles(styles)(Footer)







