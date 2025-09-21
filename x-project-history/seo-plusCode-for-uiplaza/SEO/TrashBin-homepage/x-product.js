<section id="products" className="py-24 container mx-auto px-6 max-w-7xl">
  <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 tracking-wide">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {products.map((product) => (
      <div
        key={product.id}
        className={`rounded-lg shadow-md p-8 bg-white border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105`}
      >
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.name}</h3>
        <p className="mb-6 text-gray-600 leading-relaxed">{product.description}</p>
        <p className="text-lg font-bold mb-6 text-gray-900">{product.price}</p>
        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors">
          Purchase
        </button>
      </div>
    ))}
  </div>
</section>
