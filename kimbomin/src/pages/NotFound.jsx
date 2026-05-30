import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">
        404
      </h1>

      <p className="mt-3">
        존재하지 않는 페이지입니다.
      </p>

      <Link
        to="/"
        className="inline-block mt-4 text-blue-500"
      >
        홈으로 이동
      </Link>
    </div>
  );
}

export default NotFound;
