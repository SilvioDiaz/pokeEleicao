import { PercentBar } from "../percentBar/percentBar";
import { BoxCard, NameArea } from "./style";

export function StatusCard({ candidate }) {
  return (
    <BoxCard>
      <NameArea>
        <p>{candidate.name}</p>
        <p>{candidate.numberVotes}</p>
      </NameArea>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <PercentBar percentProgress={candidate.percentVotes} />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>{candidate.percentVotes}%</p>
      </div>
    </BoxCard>
  );
}
