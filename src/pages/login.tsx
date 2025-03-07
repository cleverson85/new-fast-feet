import { FormEvent, useRef } from "react";
import logo from "../assets/images/logo.png";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

interface Form {
  email: string;
  password: string;
}

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const formRef = useRef<Form>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  const signUp = () => {
    navigate("/signup");
  }

  return (
    <div className="h-screen bg-[#7d40e7] flex justify-center items-center">
      <div className="w-[360px] h-[425px] bg-white bg-no-repeat bg-origin-padding shadown-md rounded-sm opacity-100 text-center mx-auto">  
        <div className="flex justify-center items-center mt-[30px]">
          <img src={logo} className="h-[70px] w-[300px]" alt="FastFeet" />
        </div>
        <form className="mt-[40px] ml-[30px] flex items-start flex-col" onSubmit={handleSubmit}>
          <div className="w-[300px] h-[73px] mb-2.5">
            <p className="text-left mb-[5px] tracking-normal text-[12px] opacity-100 text-[#444444] font-roboto font-bold">SEU E-EMAIL</p>
            <input
              className="rounded-[4px] h-[44px] w-full px-[15px] py-[10px] bg-white border border-[#dddddd] opacity-100 placeholder:text-[#999999] placeholder:opacity-100"
              name="email"
              type="email"
              defaultValue={formRef.current.email}
              onChange={(e) => formRef.current.email = e.target.value}
              placeholder="exemplo@email.com"
            />
          </div>
          <div className="w-[300px] h-[73px] mb-2.5">
            <p className="text-left mb-[5px] tracking-normal text-[12px] opacity-100 text-[#444444] font-roboto font-bold">SUA SENHA</p>
            <input
              className="rounded-[4px] h-[44px] w-full px-[15px] py-[10px] bg-white border border-[#dddddd] opacity-100 placeholder:text-[#999999] placeholder:opacity-100"
              name="password"
              type="password"
              defaultValue={formRef.current.password}
              onChange={(e) => formRef.current.password = e.target.value}
              placeholder="**********"
            />
          </div>
          <button className="w-[300px] h-11 mt-3.5 text-[16px] border-0 rounded-[4px] bg-[#7d40e7] text-white transition duration-200 hover:opacity-90 cursor-pointer" 
            type="submit">Entrar no sistema</button>
        </form>
        <button className="font-roboto text-[#7d40e7] hover:opacity-90 hover:underline cursor-pointer mt-4" onClick={signUp}>Cadastre-se</button>
      </div>
    </div>
  );
}
