import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations"
import { Formik, Form, Field } from "formik"
import { Link } from "react-router-dom"






const LoginForm = () => {
    const dispatch = useDispatch()


  const initialValues = {
    email: '',
    password: '',
  }

  const handleSubmit = (values, options) => {
    if (!values.email || !values.password) {
          return toast('Please fill the all fields', {
          icon: '🟡',
          position: "bottom-left"
        })
    }
    dispatch(login(values))
    options.resetForm()
  }
  return (
    <>
      <div
       className="hero min-h-screen"
       style={{
    backgroundImage: "url(https://www.contactsplus.com/wp-content/uploads/2021/10/Address-Book-Maintenance-4-Tips-and-How-Tos-scaled-e1633102016640-1024x640.jpg)",
  }}>
  <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    <Form className="w-80 flex-col flex gap-5">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <Field name='email' type="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd" />
        </svg>
        <Field name='password' type="password" className="grow" placeholder="Password" />
            </label>
            <button className="border-transparent hover:bg-red-700 bg-red-900 text-slate-100 w-full py-3 rounded-md" type="submit">Sing up</button>
            <p className="text-slate-100 text-xl">If you don`t have an account</p>
            <Link to='/register' className="text-2xl underline text-slate-100 font-bold hover:text-red-900 " type="submit">Register now</Link>
            
    </Form>
  </Formik>
</div>
    </>
  )
}

export default LoginForm