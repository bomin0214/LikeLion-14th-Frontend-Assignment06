import useWeather from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";

function Weather() {
  const { weather, loading, error } = useWeather();

  if (loading) {
    return <p>불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        현재 날씨
      </h2>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
