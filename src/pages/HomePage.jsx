import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?t=st=1730383660~exp=1730387260~hmac=6985daa432287799622ef0c0ee55e10cae4b05f3fe16405e436045f42b151214&w=1380)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">Щоб продовжити</p>
          <Link
            to="/contacts"
            className="border-transparent hover:bg-red-700 bg-red-900 text-slate-100 px-20 py-3 rounded-md"
          >
            натисніть сюди
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
