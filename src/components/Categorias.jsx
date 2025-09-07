function Categorias({ categoria }) {
    return (
      <div className="rounded-2xl border border-gray-500">
        <div className="p-2">
          <h3 className="text-gray-500 text-lg mb-1 ">{categoria.nome}</h3>
        </div>
      </div>
    );
  }
  export default Categorias;