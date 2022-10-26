import {
  BarArea,
  PercentProgress,
  WhiteBar,
  PercentProgressBar
} from "./style";

export function PercentBar({ percentProgress }) {
  return (
    <BarArea>
      <p>HP</p>
      <WhiteBar>
        <PercentProgressBar>
          <PercentProgress percent={percentProgress} />
        </PercentProgressBar>
      </WhiteBar>
    </BarArea>
  );
}
