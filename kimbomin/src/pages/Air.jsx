import useAirQuality from "../hooks/useAirQuality";
import AirCard from "../components/AirCard";

function Air() {
  const { air, loading, error } = useAirQuality();

  if (loading) {
    return <p>불러오는 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        미세먼지 정보
      </h2>

      {air && <AirCard air={air} />}
    </div>
  );
}

export default Air;
