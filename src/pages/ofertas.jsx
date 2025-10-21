import datos from "../data/ofertas.json";
import "./ofertas.css"
function Ofertas() {
  return (
    <div className="bg-pink-50 py-16">
      
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-pink-600 mt-20" >
             ...!Las mejores OFERTAS para ti!..
          </h1>
        </div> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {datos.ofertas.map((ofertas) => (
            <div
              key={ofertas.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img
                src={ofertas.imgUrl}
                alt={ofertas.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {ofertas.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Descripción:</span>{" "}
                  {ofertas.description}
                </p>
                 <p className="text-gray-600 text-sm">
                  <span className="font-semibold"></span>{" "}
                  {ofertas.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ofertas;
