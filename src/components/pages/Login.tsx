import React, { FunctionComponent } from "react";
import useForm from "../../hooks/useForm";
import "./../auth/login.css";

const Login: FunctionComponent = () => {
  const loginInitial = {
    login_email: "",
    login_password: "",
  };

  const registerInitial = {
    register_email: "",
    name: "",
    register_password: "",
    confirm: "",
  };

  const [loginValues, handleLoginInput] = useForm(loginInitial);
  const [registerValues, handleRegisterInput] = useForm(registerInitial);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form>
            <div className="form-group">
              <input
                name="login_email"
                type="text"
                className="form-control"
                placeholder="Correo"
                value={loginValues.login_email}
                onChange={handleLoginInput}
              />
            </div>
            <div className="form-group">
              <input
                name="login_password"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={loginValues.login_password}
                onChange={handleLoginInput}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form>
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={registerValues.name}
                onChange={handleRegisterInput}
              />
            </div>
            <div className="form-group">
              <input
                name="register_email"
                type="email"
                className="form-control"
                placeholder="Correo"
                value={registerValues.register_email}
                onChange={handleRegisterInput}
              />
            </div>
            <div className="form-group">
              <input
                name="register_password"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={registerValues.register_password}
                onChange={handleRegisterInput}
              />
            </div>

            <div className="form-group">
              <input
                name="confirm"
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                value={registerValues.confirm}
                onChange={handleRegisterInput}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
