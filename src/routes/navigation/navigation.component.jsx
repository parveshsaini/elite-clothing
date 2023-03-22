import { Outlet } from 'react-router-dom'; //allows nesting routes to render acccording to selected pattern
import { Fragment } from 'react'; //useful if we dont wish to render some html element
import { Link } from 'react-router-dom'; //anchor tags in react
import { ReactComponent as EliteLogo} from '../../assets/elite.svg'

import './navigation.styles.scss'

const Navigation = ()=>{
    return (
      <Fragment>
        <div className='navigation'>

          <Link className='logo-container' to='/'>
            <EliteLogo className='logo' />
          </Link>
          
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
              <div>SHOP</div>
            </Link>

            <Link className='nav-link' to='/sign-in'>
              <div>SIGN IN</div>
            </Link>

          </div>
      
        </div>
  
         <Outlet />  {/* Nav bar is persisitent throughout, while other components will come under navbar bcz outlet is placed under navbar */}
  
      </Fragment> //I dont need a wrapping div in this component, hence replace it with <Fragment></Fragment>
    )
  }

  export default Navigation