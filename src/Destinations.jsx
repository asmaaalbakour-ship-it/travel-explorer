import { useState } from "react";
import "./Destinations.css";

const destinations = [
  {
    name: "Paris",
    country: "France",
    description: "Discover the Eiffel Tower and the beauty of Paris.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    location: "Eiffel Tower, Paris, France",
  },
  {
    name: "Giza Pyramids",
    country: "Egypt",
    description: "Explore the ancient pyramids and the Great Sphinx.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=800&q=80",
    location: "Giza Pyramids, Egypt",
  },
  {
    name: "Mount Fuji",
    country: "Japan",
    description: "Enjoy the breathtaking views of Japan's famous mountain.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    location: "Mount Fuji, Japan",
  },
  {
    name: "Venice",
    country: "Italy",
    description: "Discover beautiful canals and historic architecture.",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
    location: "Venice, Italy",
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Enjoy white houses and stunning sea views.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    location: "Santorini, Greece",
  },
  {
    name: "Cappadocia",
    country: "Turkey",
    description: "Discover unique rock formations and hot air balloons.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    location: "Cappadocia, Turkey",
  },
];

function Destinations() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("travelDestinationFavorites")) || [];
    } catch {
      return [];
    }
  });
  const [showFavorites, setShowFavorites] = useState(false);

  function toggleFavorite(destinationName) {
    setFavorites((previousFavorites) => {
      const updatedFavorites = previousFavorites.includes(destinationName)
        ? previousFavorites.filter((name) => name !== destinationName)
        : [...previousFavorites, destinationName];

      localStorage.setItem(
        "travelDestinationFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  }

  const filteredDestinations = destinations.filter((destination) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      destination.name.toLowerCase().includes(query) ||
      destination.country.toLowerCase().includes(query);

    const matchesFavorites =
      !showFavorites || favorites.includes(destination.name);

    return matchesSearch && matchesFavorites;
  });

  return (
    <section className="destinations-page">
      <div className="destinations-header">
        <p className="destinations-eyebrow">EXPLORE THE WORLD</p>

        <h2>Popular Destinations</h2>

        <div className="destination-favorite-controls">
          <button
            type="button"
            className={!showFavorites ? "destination-filter active" : "destination-filter"}
            onClick={() => setShowFavorites(false)}
          >
            🌍 All Destinations
          </button>

          <button
            type="button"
            className={showFavorites ? "destination-filter active" : "destination-filter"}
            onClick={() => setShowFavorites(true)}
          >
            ❤️ Favorites ({favorites.length})
          </button>
        </div>

        <p>Find inspiration for your next adventure.</p>

        <input
          className="destination-search"
          type="search"
          placeholder="Search by destination or country..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search destinations"
        />
      </div>

      <div className="destinations-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <img
                src={destination.image}
                alt={destination.name}
                loading="lazy"
              />

              <div className="destination-content">
            
                 <button
                          type="button"
                          className={`destination-heart ${
                       favorites.includes(destination.name) ? "is-favorite" : ""
  }`}
                  onClick={() => toggleFavorite(destination.name)}
                aria-label="Add to favorites"
>
               {favorites.includes(destination.name) ? "❤️" : "🤍"}
          </button>

                <span>📍 {destination.country}</span>

                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    destination.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore on Map ↗
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="no-destinations">
            No destinations found. Try another name or country.
          </p>
        )}
      </div>
    </section>
  );
}

export default Destinations;