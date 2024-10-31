/* eslint-disable react/prop-types */
import s from "./Contact.module.css";
import Modal from "../Modal/Modal";
import ModalDelete from "../ModalDelete/ModalDelete";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const Contact = ({ contact }) => {
  return (
    <>
      <p className={s.text}>
        ім&apos;я: <br />
        {contact.name}
      </p>
      <p className={s.text}>
        номер: <br />
        {contact.number}
      </p>
      <div className="flex">
        <button
          className="border-transparent bg-transparent text-slate-100 px-2 m-auto btn py-2 rounded-md"
          onClick={() => document.getElementById(contact.id).showModal()}
        >
          <FiEdit className="w-6 h-6 stroke-black" />
        </button>
        <button
          className="border-transparent btn bg-transparent text-slate-100 px-2 m-auto  py-2 rounded-md"
          onClick={() =>
            document.getElementById(`delete-${contact.id}`).showModal()
          }
        >
          <RiDeleteBin5Line className="w-6 h-6 fill-red-900" />
        </button>
        <Modal contact={contact} />
        <ModalDelete contact={contact} />
      </div>
    </>
  );
};

export default Contact;

//
