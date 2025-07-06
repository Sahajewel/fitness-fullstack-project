import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="flex flex-col min-h-screen justify-center w-10/12 items-center">
      <h1 className="text-4xl font-bold mb-2">Oops!</h1>
      <p className="text-4xl font-bold mb-2">404 Page not found</p>
      <p className="text-4xl font-bold mb-2">{error.statusText || error.message}</p>
     <Link to="/"> <button className="btn mt-2">Back to Home</button> </Link>
    </div>
  )
}
