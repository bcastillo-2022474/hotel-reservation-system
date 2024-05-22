import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/rio-janeiro.jpg";
import { useState } from "react";
import { emailRegex, passwordRegex } from "../../../config.js";
function SignupHotel({ onSave }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    lastname: "",
  });

  const [touchedStatus, setTouchedStatus] = useState({
    isEmailTouched: false,
    isPasswordTouched: false,
    isRepeatPasswordTouched: false,
    isNameTouched: false,
    isLastNameTouched: false,
  });
  const validations = {
    isEmailValid: emailRegex.test(form.email),
    isPasswordValid: passwordRegex.test(form.password),
    isPasswordRepeatedValid:
      passwordRegex.test(form.password) &&
      form.password === form.repeatPassword,
    isNameValid: form.name.length > 3,
    isLastNameValid: form.lastname.length > 3,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="h-dvh flex justify-center items-center relative">
      <div className="h-full w-full top-0 absolute"></div>
      <div className="w-full rounded-lg overflow-hidden relative max-w-[350px] md:max-w-[400px] border">
        <div className="z-10 relative w-full h-[80%] flex flex-col gap-10 px-5 py-10">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold">Signup Hotel</h1>
            <p className="text-neutral-300 font-semibold text-center text-sm max-w-[80%]">
              Ingresa tus credenciales en el formulario de abajo
            </p>
          </div>
          <form className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex w-full flex-col gap-1 shrink grow">
                <label className="text-black font-semibold text-lg">
                  Nombre
                </label>
                <input
                  onBlur={() =>
                    setTouchedStatus({
                      ...touchedStatus,
                      isNameTouched: true,
                    })
                  }
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jhon"
                  className="border px-2 py-1 outline-button bg-inherit"
                  type="text"
                />
                {!validations.isNameValid && touchedStatus.isNameTouched && (
                  <span className="text-red-700 text-xs">
                    Name invalid, must be at least 3 characters long
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-1 shrink grow">
                <label className="text-black font-semibold text-lg">
                  Apellido
                </label>
                <input
                  onBlur={() => {
                    setTouchedStatus({
                      ...touchedStatus,
                      isLastNameTouched: true,
                    });
                  }}
                  onChange={(e) =>
                    setForm({ ...form, lastname: e.target.value })
                  }
                  placeholder="Doe"
                  className="border px-2 py-1 outline-button bg-inherit"
                  type="text"
                />
                {!validations.isLastNameValid &&
                  touchedStatus.isLastNameTouched && (
                    <span className="text-red-700 text-xs">
                      Lastname invalid, must be at least 3 characters long
                    </span>
                  )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black font-semibold text-lg">Correo</label>
              <input
                onBlur={() => {
                  setTouchedStatus({
                    ...touchedStatus,
                    isEmailTouched: true,
                  });
                }}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jhondoe@email.com"
                className="border px-2 py-1 outline-button bg-inherit"
                type="text"
              />
              {!validations.isEmailValid && touchedStatus.isEmailTouched && (
                <span className="text-red-700 text-xs">Email invalid</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black font-semibold text-lg">
                Password
              </label>
              <input
                onBlur={() => {
                  setTouchedStatus({
                    ...touchedStatus,
                    isPasswordTouched: true,
                  });
                }}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="your password"
                className="border px-2 py-1 outline-button bg-inherit"
                type="password"
              />
              {!validations.isPasswordValid &&
                touchedStatus.isPasswordTouched && (
                  <span className="text-red-700 text-xs">
                    Password Invalid, must be 8 characters long and have 1
                    Uppercase, 1 Lowercase and 1 Symbol
                  </span>
                )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black font-semibold text-lg">
                Password
              </label>
              <input
                onBlur={() => {
                  setTouchedStatus({
                    ...touchedStatus,
                    isRepeatPasswordTouched: true,
                  });
                }}
                onChange={(e) =>
                  setForm({ ...form, repeatPassword: e.target.value })
                }
                placeholder="your password"
                className="border px-2 py-1 outline-button bg-inherit"
                type="password"
              />
              {!validations.isPasswordRepeatedValid &&
                touchedStatus.isRepeatPasswordTouched && (
                  <span className="text-red-700 text-xs">
                    Passwords not matching, or Password invalid
                  </span>
                )}
            </div>
            <button
              onClick={handleSubmit}
              className="px-3 py-2 bg-black text-white rounded outline-button"
            >
              Siguiente
            </button>
            <Link
              to={"/login"}
              className="text-black hover:underline text-center text-sm outline-none focus:underline focus:text-blue-500"
            >
              Ya tienes con una cuenta? Loggeate aca
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupHotel;
