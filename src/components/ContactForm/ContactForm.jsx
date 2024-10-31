import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"
import s from './ContactForm.module.css'
import toast from "react-hot-toast"


const ContactForm = () => {
    const initialValues = { name: '', number: '' }
    const dispatch = useDispatch()
    
    const onSubmit = (values, options) => {
      if (!values.name || !values.number) {
        return toast('Please fill the fields', {
          icon: '🟡',
          position: "bottom-left"
        })
      }
      dispatch(addContact(values))
        options.resetForm()
        
    }

  return (
      <div className={s.container}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="w-80 flex-col flex gap-5 m-auto pb-20">
        <label className="form-control w-full max-w-xs">
    <span className="text-slate-200 font-bold mb-4">Contact name</span>
        <Field
          type="text"
          name="name"
          placeholder="Enter contact name" 
          className="input input-bordered text-black w-full max-w-xs"/>
        </label>
                        <label className="form-control w-full max-w-xs">
    <span className="text-slate-200 font-bold mb-4">Contact phone</span>
        <Field
          type="tel"
          name="number"
          placeholder="Enter contact phone number" 
          className="input input-bordered text-black w-full max-w-xs"/>
        </label>
        <button className="border-transparent hover:bg-red-700 bg-red-900 text-slate-100 px-20 m-auto  py-3 rounded-md" type="submit">Add contact</button>
              </Form>
          </Formik>
    </div>
  )
}

export default ContactForm         
                  


