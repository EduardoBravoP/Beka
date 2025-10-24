import { ButtonProps } from "./Button.model";
import { ButtonView } from "./Button.view";
import { useButtonViewModel } from "./Button.viewmodel";

function Button({ label }: ButtonProps) {
  const props = useButtonViewModel({ label });

  return <ButtonView {...props} />;
}

export { Button };