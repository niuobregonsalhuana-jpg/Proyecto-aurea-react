import datos from "../data/productos.json";
import "./Productos.css";

function Productos() {
  return (
    <div className="bg-pink-50 py-16">
      
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
       
        <div className="text-center mb-12 margin_produtos">
          <h1 className="text-4xl font-extrabold text-pink-600">
             Los Mejores Productos de Aurea para ti 
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Descubre los productos más populares de nuestra colección
          </p>
        </div> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {datos.productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <img
                src={producto.imgUrl}
                alt={producto.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {producto.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Descripción:</span>{" "}
                  {producto.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productos;
