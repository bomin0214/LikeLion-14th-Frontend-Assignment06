import { useEffect, useState } from "react";

const weatherLabels = {
  0: "맑음",
  1: "대체로 맑음",
  2: "구름 조금",
  3: "흐림",
};

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"
        );

        const data = await res.json();

        setWeather({
          city: "서울",
          temp: data.current.temperature_2m,
          humidity: data.current.relative_humidity_2m,
          windSpeed: data.current.wind_speed_10m,
          desc: weatherLabels[data.current.weather_code] || "기타",
        });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchWeather();
  }, []);

  return { weather, loading };
}

export default useWeather;
