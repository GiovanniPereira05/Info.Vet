import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            {/* <img src="" alt="" /> */}
            <span>Info.vet</span>
          </div>

          <ul className="flex items-center gap-5 font-medium">
            <li><a href="#"> <Link to={"/registros"}>Registros</Link></a></li>
            <li><a href="#"> <Link to={"/datasets"}>Datasets</Link></a></li>
            <li><a href="#">Planos</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Documentação</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <form className="flex items-center border rounded-full px-3 py-1">

            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent"
            />
          </form>

          <button className="px-4 py-1">
            <Link to={"/login"}>
              Entrar
            </Link>
          </button>

          <button className="px-4 py-1 rounded-full bg-black text-white font-semibold">
            <Link to={"/cadastro"}>
              Cadastrar
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
