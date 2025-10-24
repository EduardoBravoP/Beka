import { HeaderProps } from "./Header.model";
import { HeaderView } from "./Header.view";
import { useHeaderViewModel } from "./Header.viewmodel";

function Header({ title, leftIcon, onLeftIconPress }: HeaderProps) {
  const props = useHeaderViewModel({ title, leftIcon, onLeftIconPress });

  return <HeaderView {...props} />;
}

export { Header };