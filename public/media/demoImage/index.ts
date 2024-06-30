const gameImg1 =
  "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const gameImg2 =
  "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const gameImg3 =
  "https://images.pexels.com/photos/1373100/pexels-photo-1373100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const gameImg4 =
  "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  export {gameImg1, gameImg2, gameImg3, gameImg4}

  import React from 'react';

// Define an interface for the game object including theme
export interface Game {
    id: number;
    imgId: string; // Theme image ID
    name: string;
    description: string;
    points: number;
    theme: string;
}

// Array of game images (replace with actual image paths)
const gameImages = [gameImg1, gameImg2, gameImg3, gameImg4];

// Array of themes
const themes = [
    "Adventure",
    "Fantasy",
    "Sci-Fi",
    "Mystery",
    "Horror"
];

// Function to generate a random game name
function getRandomGameName(): string {
    const gameNames = ["Super Adventure", "Galactic Quest", "Mystic Legends", "Eternal Odyssey", "Realm of Magic"];
    return gameNames[Math.floor(Math.random() * gameNames.length)];
}

// Function to generate a random game description
function getRandomGameDescription(): string {
    const gameDescriptions = [
        "Embark on an epic journey through mystical lands.",
        "Explore the galaxy and uncover hidden treasures.",
        "Face off against legendary creatures in a battle for survival.",
        "Master arcane powers and become a true sorcerer.",
        "Build your empire and conquer rival kingdoms."
    ];
    return gameDescriptions[Math.floor(Math.random() * gameDescriptions.length)];
}

// Function to generate a random points value
function getRandomPoints(): number {
    return Math.floor(Math.random() * 1000); // Random points between 0 and 1000
}

// Function to generate a random theme
function getRandomTheme(): string {
    return themes[Math.floor(Math.random() * themes.length)];
}

// Create an array of game objects with themes
export const games: Game[] = [
    { id: 1, imgId: gameImages[0], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 2, imgId: gameImages[1], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 3, imgId: gameImages[2], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 4, imgId: gameImages[3], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 5, imgId: gameImages[0], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 6, imgId: gameImages[1], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 7, imgId: gameImages[2], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 8, imgId: gameImages[3], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 9, imgId: gameImages[0], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() },
    { id: 10, imgId: gameImages[1], name: getRandomGameName(), description: getRandomGameDescription(), points: getRandomPoints(), theme: getRandomTheme() }
];

// GameCard component to render each game card
