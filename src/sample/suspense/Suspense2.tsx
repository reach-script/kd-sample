import { useSuspenseQuery } from "@tanstack/react-query";

const wait = async (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, 1000 * second));
};

const getUser = async (): Promise<{ name: string }> => {
  // 一部ローディングに時間がかかる想定のモック実装
  await wait(3);
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => json);
};

export const Suspense2 = () => {
  const { data } = useSuspenseQuery({ queryKey: ["getUser"], queryFn: getUser });
  return (
    <div>
      <h3>取得結果：{data.name}</h3>
    </div>
  );
};
