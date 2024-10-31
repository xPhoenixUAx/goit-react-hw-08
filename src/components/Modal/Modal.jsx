/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/contacts/operations";

const Modal = ({ contact }) => {
  const initialValues = { name: contact.name, number: contact.number };
  const dispatch = useDispatch();
  const id = contact.id;
  const onSubmit = async (values, options) => {
    await dispatch(
      patchContact({ id, name: values.name, number: values.number })
    );
    options.formReset();
  };
  return (
    <div>
      <dialog id={contact.id} className="modal">
        <div className="modal-box bg-neutral-600">
          <div className="">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="w-80 flex-col flex gap-5 m-auto ">
                <label className="form-control w-full max-w-xs">
                  <span className="text-slate-200 font-bold mb-4">
                    Змінити ім&apos;я
                  </span>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter contact name"
                    className="input input-bordered text-black w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <span className="text-slate-200 font-bold mb-4">
                    Змінити номер
                  </span>
                  <Field
                    type="tel"
                    name="number"
                    placeholder="Enter contact phone number"
                    className="input input-bordered text-black w-full max-w-xs"
                  />
                </label>
                <button
                  className=" border-transparent bg-red-900 text-slate-100 hover:bg-red-700 px-20 m-auto  py-3 rounded-md"
                  type="submit"
                >
                  Редагувати контакт
                </button>
              </Form>
            </Formik>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Закрити</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
