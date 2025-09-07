import DatasetCard from "./DatasetCard";
import { datasets } from "./data";


function Registros() {
    return (
        <main>
            <div className="flex justify-around items-center">
                <p className="max-w-160 text-4xl">
                    O info.vet é a sua plataforma central para acesso a conjuntos de dados abrangentes e prontos para uso, impulsionando a pesquisa, a inovação e a tomada de decisões na medicina veterinária.
                </p>
                <img src="./src/assets/placeholder635_548.png" alt="" />
            </div>
            <div className="flex flex-col items-center">
        <h2 className="self-start font-bold mb-4">Datasets Populares</h2>
        <div className="flex overflow-x-auto gap-4 py-2 w-full">
          {datasets.map(dataset => (
            <DatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      </div>
    </main>
  );
}
export default Registros;