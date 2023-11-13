//1º PRECISO importar o arquivo de modulo
const User = require('../models/User')

module.exports = class AuthController{
    static login(require, response){
        //render -> diretório do projeto - nomeArquivo
        //redirect -> Mandar para uma ROTA - /
        return response.render('auth/login')
    }
    static register(require, response){
        return response.render('auth/register');
    }

    static async registerPost(request, response){
        const { name, email, password } = request.body

        const register = await User.create({ name, email, password });

        try{
            if(register) {
                return response.redirect("/register");
            }
        }catch(error) {
            console.error(error);
        }
    }
}