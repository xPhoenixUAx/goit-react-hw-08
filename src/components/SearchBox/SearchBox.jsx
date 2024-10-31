
import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filters/slice"
import s from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  return (
    <div className={s.container}>
      <label className="form-control w-full max-w-xs m-auto">
    <span className="text-slate-200 font-bold mb-4">Search contact</span>
        <input
          type="text"
          placeholder="Enter contact name" 
          className="input input-bordered text-black w-full max-w-xs"
          onChange={(e => dispatch(changeFilter(e.target.value)))} />
</label>
    </div>
  )
}

export default SearchBox