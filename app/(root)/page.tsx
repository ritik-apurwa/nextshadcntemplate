import React from "react";
import Image from "next/image";
import { Game, games } from "@/public/media/demoImage";
// Adjust import based on your types/interfaces

const Page = () => {
  const GameCard: React.FC<{ game: Game }> = ({ game }) => (
    <div className="game-card shadow-custom h-auto max-h-full">
      <div className="relative w-full " style={{ paddingBottom: "100%" }}>
        <Image
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          src={game.imgId}
          alt={`Game ${game.id}`}
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{game.name}</h2>
        <p className="text-sm text-gray-700 mb-4">{game.description}</p>
        <p className="text-sm">Points: {game.points}</p>
        <p className="text-sm">Theme: {game.theme}</p>
      </div>
    </div>
  );

  return (
    <section className="">
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </section>
  );
};

export default Page;
