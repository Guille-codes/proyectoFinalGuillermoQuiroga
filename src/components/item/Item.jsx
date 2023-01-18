import { Link } from "react-router-dom"

const Item = ({ element }) => {

  return (
    <div className="container mx-auto flex max-w-md m-4 bg-white rounded-md shadow-xl hover:shadow-2xl">
      <div className=" p-3  border-slate-200 rounded-md">
        <img className="flex mx-auto  max-h-96 border-slate-300 rounded-md" src={element.img} alt={element.name} />
        <div className="flex flex-col ">
          <h2 className="my-2 text-2xl font-bold">{element.name}</h2>
          <div>
            <h2 className="text-xl my-2 font-bold text-pink-600">${element.price}</h2>
            <div className="justify-self-end self-center ">
              <Link to={`/itemDetail/${element.id}`}>
                <button className=" mx-auto my-4 justify-self-center px-2  align-middle py-2 text-sm text-pink-600 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-pink-600  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Más detalles
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Item
