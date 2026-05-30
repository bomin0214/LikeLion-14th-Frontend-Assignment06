function AirCard({ air }) {
  return (
    <section className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-bold text-lg mb-3">미세먼지 정보</h3>

      <div className="grid gap-2 text-sm">
        <p>통합 등급: {air.aqiLabel} ({air.aqi})</p>
        <p>PM10: {air.pm10} μg/m³</p>
        <p>PM2.5: {air.pm2_5} μg/m³</p>
        <p>CO: {air.carbonMonoxide} μg/m³</p>
        <p>NO2: {air.nitrogenDioxide} μg/m³</p>
        <p>O3: {air.ozone} μg/m³</p>
        <p>SO2: {air.sulphurDioxide} μg/m³</p>
        <p>관측 시각: {air.time}</p>
      </div>
    </section>
  );
}

export default AirCard;
