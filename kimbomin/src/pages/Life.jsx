function Life() {
  const tips = [
    "외출 전 우산 확인하기",
    "물 자주 마시기",
    "환기하기",
    "가벼운 스트레칭 하기",
    "충분한 수면 취하기",
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        오늘의 생활 팁
      </h2>

      {tips.map((tip, index) => (
        <div
          key={index}
          className="border p-3 rounded mb-2"
        >
          {tip}
        </div>
      ))}
    </div>
  );
}

export default Life;
