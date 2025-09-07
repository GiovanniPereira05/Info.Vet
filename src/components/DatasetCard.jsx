function DatasetCard({ dataset }) {
    return (
      <div className="flex-shrink-0 w-48 bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={dataset.imagem}
          alt={dataset.nome}
          className="w-full h-32 object-cover"
        />
        <div className="p-2">
          <h3 className="font-bold text-lg mb-1">{dataset.nome}</h3>
          <p className="text-sm text-gray-600">{dataset.descricao}</p>
        </div>
      </div>
    );
  }
  export default DatasetCard;