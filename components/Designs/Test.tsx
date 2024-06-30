import { games } from "@/public/media/demoImage";
import { FaceIcon } from "@radix-ui/react-icons";

// components/Navbar.tsx
export function Navbar() {
  return (
    <nav className=" max-w-7xl mx-auto  flexr-between py-2 px-4">
      <div>Team Hope</div>
      <div>
        <ul className="flexr-center gap-x-3">
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
        </ul>
      </div>
      <div>
        <FaceIcon />
      </div>
    </nav>
  );
}


export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      {/* Footer content */}
    </footer>
  );
}

export function RightSidebar() {
    return (
        <section className="w-full h-[90%] overflow-y-auto">
        <div className="flex flex-col gap-y-4 p-4">
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
        </div>
      </section>
    );
  }
  
  export const LeftSidebar = () => {
    return (
      <section className="w-full h-[90%] overflow-y-auto">
        <div className="flex flex-col gap-y-4 p-4">
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
          {games.map((game) => (
            <h1 key={game.id}>{game.name}</h1>
          ))}
        </div>
      </section>
    );
  };
