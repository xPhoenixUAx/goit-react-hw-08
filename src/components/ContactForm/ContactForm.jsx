import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";
import toast from "react-hot-toast";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    if (!values.name || !values.number) {
      return toast("Please fill the fields", {
        icon: "🟡",
        position: "bottom-left",
      });
    }
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="w-80 flex-col flex gap-5 m-auto pb-20">
          <label className="form-control w-full max-w-xs">
            <span className="text-slate-200 font-bold mb-4">Ім&apos;я</span>
            <Field
              type="text"
              name="name"
              placeholder="введіть ім'я"
              className="input input-bordered text-black w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <span className="text-slate-200 font-bold mb-4">
              Номер телефону
            </span>
            <Field
              type="tel"
              name="number"
              placeholder="введіть номер телефону"
              className="input input-bordered text-black w-full max-w-xs"
            />
          </label>
          <button
            className="border-transparent hover:bg-red-700 bg-red-900 text-slate-100 px-20 m-auto  py-3 rounded-md"
            type="submit"
          >
            Додати
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
