import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://www.contactsplus.com/wp-content/uploads/2021/10/Address-Book-Maintenance-4-Tips-and-How-Tos-scaled-e1633102016640-1024x640.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link to='/contacts' className="border-transparent hover:bg-red-700 bg-red-900 text-slate-100 px-20 py-3 rounded-md">Get Started</Link>
    </div>
  </div>
</div>
  )
}

export default HomePage