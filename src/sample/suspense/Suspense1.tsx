import { useSuspenseQuery } from "@tanstack/react-query";

const getTodo = (): Promise<{ title: string }> => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);
};

export const Suspense1 = () => {
  const { data } = useSuspenseQuery({ queryKey: ["getTodo"], queryFn: getTodo });
  return (
    <div>
      <h3>取得結果：{data.title}</h3>
    </div>
  );
};
