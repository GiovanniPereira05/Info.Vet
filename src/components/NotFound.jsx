import { Link } from "react-router-dom";

function NotFound() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-6">
          O link que você tentou acessar não existe ou foi removida.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
    
          <Link to={"/registros"}> Voltar para a Home </Link>
        </a>
      </main>
    );
  }
  
  export default NotFound;
  