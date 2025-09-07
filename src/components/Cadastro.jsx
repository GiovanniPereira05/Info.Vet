function Cadastro() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 ">
       <div className="bg-white m-auto shadow-lg rounded-2xl p-8 pb-0 w-full max-w-md border border-gray-300">
        <div className="mb-25 mt-10">
        <h1 className="text-center">Trocar pra imagem dps</h1>
      </div>
      
      <div>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Login</label>
            <input type="email" name="email" id="email" placeholder="Escreva seu email"
            className="border border-gray-300 rounded-lg p-1.5"/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="Escreva sua senha" 
            className="border border-gray-300 rounded-lg p-1.5"/>
          </div>

          <div className="flex justify-center m-10 mt-25 mb-5">
            <input type="submit" value="Cadastrar" 
            className="bg-black text-white rounded-2xl w-3xs p-4 "
            />
          </div>
        </form>
      </div>
      </div>
    </main>
  );
  }
  
  export default Cadastro;
  