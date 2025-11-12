import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ProfileForm } from "./components/example-form";
import Loginform from "./components/login-form";
import InputTest from "./components/input";
function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* <ProfileForm /> */}
      <Loginform />
      <InputTest placeholder={"Enter Name"} value={'hajshj'} id="jkdksa"  />
      <InputTest placeholder={"Enter Email"} />
      <InputTest placeholder={"Enter Password"} />
    </div>
  );
}

export default App;
