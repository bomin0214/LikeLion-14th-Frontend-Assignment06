import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        홈
      </h2>

      <div className="grid gap-3">

        <button
          className="border p-4 rounded"
          onClick={() => navigate("/weather")}
        >
          날씨 보기
        </button>

        <button
          className="border p-4 rounded"
          onClick={() => navigate("/air")}
        >
          미세먼지 보기
        </button>

        <button
          className="border p-4 rounded"
          onClick={() => navigate("/life")}
        >
          생활 정보 보기
        </button>

      </div>
    </div>
  );
}

export default Home;
