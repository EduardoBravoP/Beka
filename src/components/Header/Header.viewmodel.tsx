import { HeaderProps } from "./Header.model";

function useHeaderViewModel({ title, leftIcon, onLeftIconPress }: HeaderProps) {
  return { title, leftIcon, onLeftIconPress };
}

export { useHeaderViewModel };