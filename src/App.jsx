import { useEffect, useState } from "react";
import "./App.css";
import Destinations from "./Destinations";
const countryImages = {
  France:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",

  Egypt:
    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=600&q=80",

  Italy:
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80",

  Japan:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",

  Greece:
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",

  "United States":
    "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=600&q=80",

  "United Kingdom": 
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",

  Turkey:
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
    
  Spain:
    "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80",

  Germany:
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",

  Switzerland:
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",

  Thailand:
    "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",

  Indonesia:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",

  Morocco:
    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80",

  Brazil:
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80",

  Australia:
    "https://images.unsplash.com/photo-1506973035872-a4f7b8c4e6b2?auto=format&fit=crop&w=600&q=80",

  Netherlands:
    "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",

  Canada:
    "https://images.unsplash.com/photo-1503614472-8c93d56cd8b7?auto=format&fit=crop&w=600&q=80",

  India:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",

  "United Arab Emirates":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",

};

const fallbackImages = {
  Africa:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80",

  Asia:
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=600&q=80",

  Europe:
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",

  Americas:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",

  Oceania:
    "https://images.unsplash.com/photo-1506973035872-a4f7b8c4e6b2?auto=format&fit=crop&w=600&q=80",

  default:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
};

const countryAttractions = {
  France: ["برج إيفل", "متحف اللوفر", "قصر فرساي"],
  Egypt: ["أهرامات الجيزة", "أبو الهول", "معبد الكرنك"],
  Italy: ["الكولوسيوم", "برج بيزا", "قنوات البندقية"],
  Japan: ["جبل فوجي", "طوكيو", "معبد كيوميزو"],
  Greece: ["أثينا", "سانتوريني", "الأكروبوليس"],
  "United States": [
    "تمثال الحرية",
    "جراند كانيون",
    "سنترال بارك",
  ],
  "United Kingdom": [
    "برج لندن",
    "قصر باكنغهام",
    "عين لندن",
  ],
  Turkey: [
    "آيا صوفيا",
    "كابادوكيا",
    "المسجد الأزرق",
  ],
};
function App() {
                
 const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
const [search, setSearch] = useState(() => {
  return localStorage.getItem("travelSearch") || "";
});

const [continent, setContinent] = useState(() => {
  return localStorage.getItem("travelContinent") || "All";
});
  const [activePage, setActivePage] = useState("explore");
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("travelDarkMode") === "true";
});
  const translations = {
  en: {
    tagline: "Discover your next destination",
    eyebrow: "	{t.eyebrow}",
    heroTitle: "Explore the world,",
    heroSubtitle: "one country at a time.",
    description:
      "Discover amazing destinations, explore new cultures, and find inspiration for your next adventure.",
    search: "Search for a country...",
    adventure: "{t.adventure}",
    explore: "Explore destinations",
    favorites: "Your Favorite Destinations",
    exploreButton: "Explore",
    favoritesButton: "Favorites",
    allRegions: "All regions",
    capital: "Capital",
    population: "Population",
    noResults: "	{t.noResults}",
    loading: "{t.loading}",
    footer: "Travel Explorer · Discover the world, your way.",
  },
  ar: {
    tagline: "اكتشفي وجهتك القادمة",
    eyebrow: "العالم بين يديك",
    heroTitle: "اكتشفي العالم،",
    heroSubtitle: "دولةً تلو الأخرى.",
    description:
      "اكتشفي وجهات مذهلة وثقافات جديدة، واستلهمي أفكارًا لرحلتك القادمة.",
    search: "ابحثي عن دولة...",
    adventure: "مغامرتك القادمة",
    explore: "اكتشفي الوجهات",
    favorites: "وجهاتي المفضلة",
    exploreButton: "استكشاف",
    favoritesButton: "المفضلة",
    allRegions: "كل المناطق",
    capital: "العاصمة",
    population: "عدد السكان",
    noResults: "لم نعثر على دول. جرّبي بحثًا آخر.",
    loading: "جارٍ تحميل الوجهات...",
    footer: "مستكشف السفر · اكتشفي العالم بطريقتك.",
  },
};

const t = translations[language];
useEffect(() => {
  localStorage.setItem("travelDarkMode", String(darkMode));
}, [darkMode]);
const [selectedCountry, setSelectedCountry] = useState(null);
const [extraDetails, setExtraDetails] = useState(null);
useEffect(() => {
  if (!selectedCountry) return;

  let cancelled = false;

  async function loadDetails() {
    setExtraDetails({ loading: true });

    try {
      const response = await fetch(
      `https://countries.dev/alpha/${selectedCountry.cca3}`
      );
      
useEffect(() => {
  localStorage.setItem("travelSearch", search);
}, [search]);

useEffect(() => {
  localStorage.setItem("travelContinent", continent);
}, [continent]);


      if (!response.ok) {
        throw new Error("Failed to load country details");
      }

      const data = await response.json();

      if (!cancelled) {
       setExtraDetails(
                  Array.isArray(data) ? data[0] : data || {}
);
      }
    } catch (error) {
      console.error("Error loading extra details:", error);

      if (!cancelled) {
        setExtraDetails({});
      }
    }
  }

  loadDetails();

  return () => {
    cancelled = true;
  };
}, [selectedCountry]);
const [favorites, setFavorites] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("travelFavorites")) || [];
  } catch {
    return [];
  }
});
  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

const response = await fetch(
  "https://countries.dev/countries?fields=name,capital,region,population,alpha2Code,alpha3Code,flag"
);

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await response.json();
        console.log("Countries data:", data);

        if (!Array.isArray(data)) {
          throw new Error("Invalid countries data");
        }

        const formattedCountries = data
          .filter((country) => country && country.name)
          .map((country, index) => {
            const commonName =
              typeof country.name === "string"
                ? country.name
                : country.name?.common || `Country ${index + 1}`;

            return {
              id: country.alpha3Code || country.alpha2Code || index,
              name: {
                common: commonName,
              },
              capital: Array.isArray(country.capital)
                ? country.capital
                : country.capital
                  ? [country.capital]
                  : [],
              region: country.region || "Other",
              flags: {
                png: country.alpha2Code
                  ? `https://countries.dev/flags/${country.alpha2Code.toLowerCase()}.svg`
                  : "",
              },
              population: country.population || 0,
              currencies: country.currencies || [],
              languages: country.languages || [],
              cca3: country.alpha3Code || `${commonName}-${index}`,
            };
          })
          .sort((a, b) => a.name.common.localeCompare(b.name.common));

        setCountries(formattedCountries);
      } catch (err) {
        console.error("Error loading countries:", err);

        setError(
          "تعذر تحميل الدول. تحققي من اتصال الإنترنت وحاولي مجددًا."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);
function toggleFavorite(country) {
  setFavorites((previousFavorites) => {
    const alreadyFavorite = previousFavorites.some(
      (item) => item.cca3 === country.cca3
    );

    const updatedFavorites = alreadyFavorite
      ? previousFavorites.filter(
          (item) => item.cca3 !== country.cca3
        )
      : [...previousFavorites, country];

    localStorage.setItem(
      "travelFavorites",
      JSON.stringify(updatedFavorites)
    );

    return updatedFavorites;
  });
}
 const filteredCountries = (
  activePage === "favorites"
    ? countries.filter((country) =>
        favorites.some((item) => item.cca3 === country.cca3)
      )
    : countries
).filter((country) => {
  const matchesSearch = country.name.common
    .toLowerCase()
    .includes(search.toLowerCase().trim());

  const matchesContinent =
    continent === "All" || country.region === continent;

  return matchesSearch && matchesContinent;
});

  return (
    <div
      className={darkMode ? "app dark-mode" : "app"}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <button
        className="nav-button"
        onClick={() => setDarkMode((current) => !current)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <header className="navbar">
        <a className="logo" href="#">
          <span>✈</span> Travel Explorer
        </a>

        <button
          className="nav-button language-button"
          onClick={() =>
            setLanguage((current) => (current === "en" ? "ar" : "en"))
          }
        >
          {language === "en" ? "العربية" : "English"}
        </button>

        <nav className="nav-actions">
          <button
            className={
              activePage === "explore" ? "nav-button active" : "nav-button"
            }
            onClick={() => {
              setActivePage("explore");
              setContinent("All");
            }}
          >
            Explore
          </button>
                 <button
                  className={
                   activePage === "destinations"
                   ? "nav-button active"
                    : "nav-button"
  }
                      onClick={() => setActivePage("destinations")}
>
                         🏝️ Destinations
</button>
          <button
            className={
              activePage === "favorites" ? "nav-button active" : "nav-button"
            }
            onClick={() => {
              setActivePage("favorites");
              setContinent("All");
            }}
          >
            ⭐ {t.favoritesButton} ({favorites.length})
          </button>
        </nav>
      </header>

    <main>
      {activePage === "destinations" ? (
        <Destinations />
      ) : (
        <>
          <section className="hero">
            <p className="eyebrow">{t.eyebrow}</p>

            <h1>
              {t.exploreButton}
              <br />
              <span>{t.heroSubtitle}</span>
            </h1>

            <p className="hero-description">{t.description}</p>

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder={t.search}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </section>

          <section className="destinations">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR NEXT ADVENTURE</p>
                <h2>
                  {activePage === "favorites" ? t.favorites : t.explore}
                </h2>
              </div>

              <span className="country-count">
                {filteredCountries.length} countries
              </span>
            </div>

            <div className="filters">
              {[
                "All",
                "Europe",
                "Asia",
                "Africa",
                "Americas",
                "Oceania",
              ].map((item) => (
                <button
                  key={item}
                  className={continent === item ? "filter active" : "filter"}
                  onClick={() => setContinent(item)}
                >
                  {item === "All" ? "All regions" : item}
                </button>
              ))}
            </div>

            {loading && <p className="message">Loading destinations...</p>}

            {error && (
              <div className="message error">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Try again</button>
              </div>
            )}

            {!loading && !error && filteredCountries.length === 0 && (
              <p className="message">No countries found. Try another search.</p>
            )}

            {!loading && !error && (
              <div className="country-grid">
                {filteredCountries.map((country) => (
                  <article
                    className="country-card"
                    key={country.cca3}
                    onClick={() => setSelectedCountry(country)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedCountry(country);
                      }
                    }}
                  >
                    {country.flags.png ? (
                      <img
                        className="country-flag"
                        src={country.flags.png}
                        alt={`Flag of ${country.name.common}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="country-flag">Flag unavailable</div>
                    )}
                    <div className="tourism-image-container">
                      <img
                        className="tourism-image"
                        
                         src={
                          countryImages[country.name.common] ||
                         fallbackImages[country.region] ||
                            fallbackImages.default
}
                        alt={`Tourism in ${country.name.common}`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src =
                            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                    </div>
                    <div className="country-info">
                      <span className="region">{country.region}</span>
                      <h3>{country.name.common}</h3>
                      {countryAttractions[country.name.common] && (
                        <div className="country-attractions">
                          <strong>🏛️ أشهر المعالم السياحية:</strong>

                          <ul>
                            {countryAttractions[country.name.common].map((attraction) => (
                              <li key={attraction}>{attraction}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <a
                        className="map-button"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          country.name.common
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                      >
                        🗺️ Explore on Map
                      </a>
                      <p>
                        <strong>Capital:</strong>{" "}
                        {country.capital?.[0] || "Not available"}
                      </p>

                      <p>
                        <strong>Population:</strong>{" "}
                        {country.population?.toLocaleString("en-US") || "—"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {selectedCountry && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedCountry(null)}
            >
              <div
                className="country-modal"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedCountry(null)}
                  aria-label="Close details"
                >
                  ×
                </button>

                {selectedCountry.flags.png && (
                  <img
                    className="modal-flag"
                    src={selectedCountry.flags.png}
                    alt={`Flag of ${selectedCountry.name.common}`}
                  />
                )}

                <span className="region">{selectedCountry.region}</span>
                <h2>{selectedCountry.name.common}</h2>

                <button
                  className="favorite-button"
                  onClick={() => toggleFavorite(selectedCountry)}
                >
                  {favorites.some((item) => item.cca3 === selectedCountry.cca3)
                    ? "★ Remove from Favorites"
                    : "☆ Add to Favorites"}
                </button>

                <div className="modal-details">
                  <p>
                    <strong>Capital:</strong>{" "}
                    {selectedCountry.capital?.[0] || "Not available"}
                  </p>

                  <p>
                    <strong>Population:</strong>{" "}
                    {selectedCountry.population?.toLocaleString("en-US") || "—"}
                  </p>

                  <p>
                    <strong>Region:</strong>{" "}
                    {selectedCountry.region || "Not available"}
                  </p>

                  <p>
                    <strong>Country Code:</strong>{" "}
                    {selectedCountry.cca3 || "Not available"}
                  </p>

                  <p>
                    <strong>Official Name:</strong>{" "}
                    {selectedCountry.name?.official ||
                      selectedCountry.name?.common ||
                      "Not available"}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {extraDetails?.loading
                      ? "Loading..."
                      : Array.isArray(extraDetails?.languages) &&
                          extraDetails.languages.length > 0
                        ? extraDetails.languages
                            .map((lang) => lang.name)
                            .join(", ")
                        : "Not available"}
                  </p>

                  <p>
                    <strong>Currencies:</strong>{" "}
                    {extraDetails?.loading
                      ? "Loading..."
                      : Array.isArray(extraDetails?.currencies) &&
                          extraDetails.currencies.length > 0
                        ? extraDetails.currencies
                            .map((currency) => currency.name)
                            .join(", ")
                        : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
    
{showScrollTop && (
  <button
    type="button"
    className="scroll-top-button"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Back to top"
    title="Back to top"
  >
    ↑
  </button>
)}

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;