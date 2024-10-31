import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"


const ModalDelete = ({contact}) => {
    const dispatch = useDispatch()
    
  return (
      <div>
<dialog id={`delete-${contact.id}`} className="modal">
  <div className="modal-box bg-neutral-600">
        <p className="py-4">Are you shure want delete: {contact.name}</p>
    <div className="modal-action">
    <form method="dialog">
              <button className="border-transparent bg-red-900 hover:bg-red-700 text-slate-100 px-20 mr-20  py-4 rounded-md" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        <button className="btn ">Close</button>
      </form>
    </div>
  </div>
    </dialog>

    </div>
  )
}

export default ModalDelete