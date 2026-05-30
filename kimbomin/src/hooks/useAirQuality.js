import { useEffect, useState } from "react";

function useAirQuality() {
  const [air, setAir] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAir() {
      try {
        const res = await fetch(
          "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=37.5665&longitude=126.9780&current=pm10,pm2_5,us_aqi"
        );

        const data = await res.json();

        setAir({
          pm10: data.current.pm10,
          pm25: data.current.pm2_5,
          aqi: data.current.us_aqi,
        });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchAir();
  }, []);

  return { air, loading };
}

export default useAirQuality;
