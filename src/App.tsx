import { Suspense } from "react";
import { Loading1 } from "./sample/suspense/Loading1";
import { Loading2 } from "./sample/suspense/Loading2";
import { Suspense1 } from "./sample/suspense/Suspense1";
import { Suspense2 } from "./sample/suspense/Suspense2";
import { WrapperCondition } from "./sample/wrapperCondition/WrapperCondition";

export const App = () => {
  return (
    <div>
      <h2>サンプルコードを記載しています</h2>
      <WrapperCondition />
      <Suspense fallback={<Loading1 />}>
        <Suspense1 />
        <Suspense fallback={<Loading2 />}>
          <Suspense2 />
        </Suspense>
      </Suspense>
    </div>
  );
};
