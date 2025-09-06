function Login() {
    return (
      <main className="min-h-screen flex flex-col items-center bg-gray-100 ">
         <div className="bg-white m-auto shadow-lg rounded-2xl p-8 pb-0 w-full max-w-md border border-gray-300">
          <div className="mb-25 mt-10">
          <h1 className="text-center">Trocar pra imagem dps</h1>
        </div>
        
        <div>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="login">Login</label>
              <input type="text" name="login" id="login" placeholder="Entre com seu usuário ou email"
              className="border border-gray-300 rounded-lg p-1.5"/>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" placeholder="Entre com sua senha" 
              className="border border-gray-300 rounded-lg p-1.5"/>
            </div>
  
            <div className="flex justify-center m-10 mt-25 mb-5">
              <input type="submit" value="Entrar" 
              className="bg-black text-white rounded-2xl w-3xs p-4 "
              />
            </div>
  
            <div className="flex justify-center">
              <a href="#" className="text-gray-500 underline">Esqueceu sua senha?</a>
            </div>
          </form>
        </div>
        </div>
      </main>
    );
  }
  
  export default Login;
  