import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
      <div className='bg-neutral-600 flex gap-x-4 p-5 justify-between  reletive'>
          <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu/>}
          
</div>
  )
}

export default AppBar