function WeatherCard({ weather }) {
  return (
    <section className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-bold text-lg mb-3">현재 날씨</h3>

      <div className="grid gap-2 text-sm">
        <p>도시: {weather.city}</p>
        <p>기온: {weather.temp}°C</p>
        <p>습도: {weather.humidity}%</p>
        <p>풍속: {weather.windSpeed} m/s</p>
        <p>상태: {weather.desc}</p>
      </div>
    </section>
  );
}

export default WeatherCard;
