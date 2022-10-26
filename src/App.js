import { Menu } from "./Components/Menu/menu";
import { StatusCard } from "./Components/statusCard/statusCard";
import { TextBox } from "./Components/TextBox/textBox";
import { Screen, Enemy, Ally, MenuArea, AllyCard } from "./stlye";

export default function App() {
  const lula = {
    name: "Lula",
    numberVotes: 10,
    percentVotes: 50
  };

  const bonaro = {
    name: "Bolsonaro",
    numberVotes: 1,
    percentVotes: 1
  };

  return (
    <Screen>
      <Enemy>
        <StatusCard candidate={bonaro} />
      </Enemy>
      <Ally>
        <AllyCard>
          <StatusCard candidate={lula} />
        </AllyCard>
        <MenuArea>
          <TextBox />
          <Menu />
        </MenuArea>
      </Ally>
    </Screen>
  );
}
