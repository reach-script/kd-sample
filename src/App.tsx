import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error1 } from "./sample/suspense/Error1";
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
      {/* 共通のエラー処理やローディング処理は↓のように定義できます */}
      <ErrorBoundary fallback={<Error1 />}>
        <Suspense fallback={<Loading1 />}>
          <Suspense1 />
        </Suspense>
        {/* Loadingの粒度を適切に分割したい場合は適宜Suspenseを設定する */}
        {/* Suspense2のAPI取得完了を待たずSuspense1コンポーネントのレンダリングが出来ている例です */}
        <Suspense fallback={<Loading2 />}>
          <Suspense2 />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
