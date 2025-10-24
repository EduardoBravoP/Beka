import { FavoritesView } from "./Favorites.view";
import { useFavoritesViewModel } from "./Favorites.viewmodel";

function Favorites() {
  const props = useFavoritesViewModel();

  return <FavoritesView {...props} />;
}

export { Favorites };