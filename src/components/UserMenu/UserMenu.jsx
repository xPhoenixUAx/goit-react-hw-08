import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  return (
    <div className="flex w-full justify-between">
      <p className="text-slate-200 text-2xl ">Привіт {user.name}</p>
      <button
        className="text-slate-100 hover:text-red-600 text-xl font-bold"
        onClick={() => dispatch(logout())}
      >
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;
