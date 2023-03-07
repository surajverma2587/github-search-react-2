import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";
import { ErrorMessage } from "./components/ErrorMessage";
import { LoadingSpinner } from "./components/LoadingSpinner";

export const App = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const { data } = await axios.get(url);

          setError(false);
          setData(data);
        } catch (error) {
          console.log(error.message);
          setError(true);
          setData();
        }

        setIsLoading(false);
      };

      fetchData();
    }
  }, [url]);

  const handleSearch = (mode, searchText) => {
    if (mode === "organisation") {
      setUrl(`https://api.github.com/orgs/${searchText}/repos`);
    }

    if (mode === "username") {
      setUrl(`https://api.github.com/users/${searchText}/repos`);
    }
  };

  return (
    <Container>
      <Banner />

      <SearchForm handleSearch={handleSearch} />

      {isLoading && <LoadingSpinner />}

      {error && !data && !isLoading && <ErrorMessage />}

      {data && !error && !isLoading && <Repos repos={data} />}
    </Container>
  );
};
