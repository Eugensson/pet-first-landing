import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="relative container mx-auto h-full flex flex-col lg:flex-row justify-between items-center gap-y-6">
        <Logo />
        <Nav />
        <button className="btn btn-sign-up capitalize">Sign up</button>
      </div>
    </header>
  );
};
