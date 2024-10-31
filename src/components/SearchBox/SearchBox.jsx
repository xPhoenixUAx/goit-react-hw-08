import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <label className="form-control w-full max-w-xs m-auto">
        <span className="text-slate-200 font-bold mb-4">Пошук</span>
        <input
          type="text"
          placeholder="введіть ім'я"
          className="input input-bordered text-black w-full max-w-xs"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
