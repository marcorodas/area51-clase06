export class UsuariosService {
  loggedUserMail: string;
  userList = [
    { correo: "marco.rodas@gmail.com", contrasena: "admin" },
    { correo: "xtian.amir@gmail.com", contrasena: "thecat" },
    { correo: "marco.ardp.ims@gmail.com", contrasena: "12345" },
    { correo: "marco.rodas@as-supportpe.com", contrasena: "area51" },
    { correo: "marco.rodas@pucp.pe", contrasena: "skynet" }
  ];

  loginSuccess(usuario) {
    for (let user of this.userList) {
      if (
        usuario.correo.trim() == user.correo &&
        usuario.contrasena == user.contrasena
      ) {
        this.loggedUserMail = user.correo;
        return true;
      }
    }
    return false;
  }
}
