import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";

export const App = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <Repos />
    </div>
  );
};
