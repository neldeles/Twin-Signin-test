import "./App.css";
import tw from "twin.macro";
import SigninForm from "./components/Signin";

function App() {
  return (
    <div tw="flex flex-col h-screen justify-center items-center bg-gray-100">
      <SigninForm />
    </div>
  );
}

export default App;
