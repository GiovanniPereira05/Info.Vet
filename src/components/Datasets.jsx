import Categorias from "./Categorias";
import DatasetCard from "./DatasetCard";
import { datasets, categorias } from "./data";

function Datasets() {
  return (
    <main className="flex flex-col m-auto">
      <div className="flex flex-col m-auto">
        <div>
          <h1 className="font-bold text-4xl mb-5 mt-5">Datasets</h1>
          <p>Explore os principais datasets do Brasil na área veterinária</p>

          <div className="flex overflow-x-auto gap-4 mb-5 mt-5">
            {categorias.map(categoria => (
              <Categorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-4xl">Em destaque</h2>
          <p>Datasets em destaque no momento</p>
          <div className="flex overflow-x-auto gap-4 py-2 w-full">
            {datasets.map(dataset => (
              <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold">No Brasil</h2>
          <p>Os principais datasets no Brasil</p>
          <div className="flex overflow-x-auto gap-4 py-2 w-full">
            {datasets.map(dataset => (
              <DatasetCard key={dataset.id + "-brasil"} dataset={dataset} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Datasets;
