
import { Button } from "@heroui/react";
import { ThemeSwitch } from "./Components/ThemeButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center-safe">

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px sm:items-start">
        <h1>Hello world</h1>
         <ThemeSwitch><Button>Add me</Button></ThemeSwitch>
      </main>
     
    </div>
  );
}