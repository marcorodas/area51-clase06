export class Usuario{
  correo: string
}

export class UsuariosService {

  private loggedUser: Usuario
  private userList = [
    { correo: "marco.rodas@gmail.com", contrasena: "admin" },
    { correo: "xtian.amir@gmail.com", contrasena: "thecat" },
    { correo: "marco.ardp.ims@gmail.com", contrasena: "12345" },
    { correo: "marco.rodas@as-supportpe.com", contrasena: "area51" },
    { correo: "marco.rodas@pucp.pe", contrasena: "skynet" }
  ];

  doLogin(usuario) {
    for (let user of this.userList) {
      if (
        usuario.correo.trim() == user.correo &&
        usuario.contrasena == user.contrasena
      ) {
        this.loggedUser = new Usuario()
        this.loggedUser.correo = usuario.correo
      }
    }
  }

  logginSuccess():boolean{
    return this.loggedUser != null
  }

  logout(){
    this.loggedUser = null
  }

  getLoggedUserMail():string{
    return this.loggedUser.correo
  }
}
