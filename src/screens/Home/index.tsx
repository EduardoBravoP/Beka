import { HomeView } from "./Home.view";
import { useHomeViewModel } from "./Home.viewmodel";

function Home() {
  const props = useHomeViewModel();

  return <HomeView {...props} />;
}

export { Home };