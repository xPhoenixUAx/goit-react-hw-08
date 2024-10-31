
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react'
import { refresh } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import { PrivateRoute } from './components/PrivateRoute'
import { RestrictedRoute } from './components/RestrictedRoute'
import Loader from './components/Loader/Loader'

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
const NotFound = lazy(() => import('./pages/NotFound'))



function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])
  
  const isRefreshing = useSelector(selectIsRefreshing)

  return isRefreshing ? (<Loader />) : (
    <Layout>
      <Suspense fallback={<Loader />}>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login'/>} />
        <Route path='/register' element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/contacts'/>} />
        <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
        <Route path='*' element={<NotFound />} />
    </Routes>
        </Suspense>
      </Layout>
  )
}

export default App


