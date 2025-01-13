/**
 * NOTE:
 * mode毎のWrapperコンポーネント等使っていきたい場合に現状のswitch文だけの
 * つくりだとしんどくなることがあるかもしれないという文脈で口頭で上手く伝わらなかったため
 * サンプルコードを記載
 */
import type { FC, ReactNode } from "react";

type Obj1Type = {
  mode: "mode1" | "mode2";
  type: "type1" | "type2" | "type3";
};

const obj1: Obj1Type = {
  mode: "mode1",
  type: "type1",
};

// Wrapper内のswitch文で分岐表示しているコンポーネント群はそれぞれ別関数に切り出すことで保守性UP
const SwitchComponent: FC<{ obj1: Obj1Type }> = ({ obj1 }) => {
  switch (obj1.type) {
    case "type1":
      return <p>type1</p>;
    case "type2":
      return <p>type2</p>;
    case "type3":
      return <p>type3</p>;
  }
};

export const WrapperCondition = () => {
  // 適宜return内で三項演算子等でコンポーネントを出し分けることでWrapperで囲む処理がシンプルに
  return (
    <div>
      {obj1.mode === "mode1" ? (
        <Mode1Wrapper>
          <SwitchComponent obj1={obj1} />
        </Mode1Wrapper>
      ) : (
        <Mode2Wrapper>
          <SwitchComponent obj1={obj1} />
        </Mode2Wrapper>
      )}
    </div>
  );
};

// mode毎に設定したいラッパーコンポーネントなどがある場合の想定
const Mode1Wrapper = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
const Mode2Wrapper = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};
