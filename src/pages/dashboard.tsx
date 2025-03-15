import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";


export function Dashboard({children}: {children: React.ReactNode}) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menu = {
    button: "font-roboto text-[15px] text-[#999] hover:opacity-90 hover:bg-[#7d40e7] hover:text-white opacity-100 border-0 rounded-xl p-2 focus:bg-[#7d40e7] focus:text-white",
  };

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  const clickStyle = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.setProperty("background-color", "#7d40e7");
      element.style.setProperty("color", "#fff");
    }
  }

  return (
    <div className="h-screen bg-white bg-no-repeat bg-origin-padding shadown-md opacity-100">
      <div className="flex items-center justify-between w-screen h-20 top-0 left-0 bg-white bg-no-repeat bg-origin-padding border border-[#ddd]">
        <Link to="/dashboard">
          <img src={logo} alt="FastFeet" className="ml-2.5 w-2xs" />
        </Link>
        <div className="flex items-center justify-between min-w-[50%]">
          
            <Link to="/order" className={`${menu.button}`}>
                ENCOMENDAS
            </Link>
          
            <Link to="/deliveryman" className={`${menu.button}`}>
              ENTREGADORES
            </Link>
          
            <Link to="/recipient" className={`${menu.button}`}>
              DESTINATÁRIOS
            </Link>
          
            <Link to="/issues" className={`${menu.button}`}>
              PROBLEMAS
            </Link>
          
        </div>
        <div className="flex items-center flex-col m-[10px]">
          <p className="text-right tracking-normal font-roboto font-bold text-[15px] leading-[20px] opacity-100 text-[#666]">
            Cleverson Queiroz
          </p>
          <button
            className="flex justify-center items-center cursor-pointer"
            type="button"
            onClick={handleLogOut}
          >
            <p className="font-roboto text-[15px] text-[#de3b3b] hover:opacity-90 hover:bg-[#de3b3b] hover:text-white opacity-100 border-0 rounded-xl p-2">
              sair do sistema
            </p>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        {children}
      </div>
    </div>
  );
}
