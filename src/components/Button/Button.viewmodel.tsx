import { ButtonProps, ButtonViewModel } from "./Button.model";

function useButtonViewModel({ label }: ButtonProps): ButtonViewModel {
  return { label };
}

export { useButtonViewModel };