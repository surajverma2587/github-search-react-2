import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = ({ handleSearch }) => {
  const [mode, setMode] = useState("organisation");
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleModeClick = ({ currentTarget }) => {
    setMode(currentTarget.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchText) {
      setError(true);
    } else {
      setError(false);

      handleSearch(mode, searchText);
    }
  };

  const handleChange = ({ currentTarget }) => {
    setSearchText(currentTarget.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonGroup className="mb-3 d-flex justify-content-center">
        <Button
          variant={mode === "organisation" ? "secondary" : "light"}
          onClick={handleModeClick}
          name="organisation"
        >
          Search by organisation
        </Button>
        <Button
          variant={mode === "username" ? "secondary" : "light"}
          onClick={handleModeClick}
          name="username"
        >
          Search by username
        </Button>
      </ButtonGroup>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder={`Enter ${mode}`}
          value={searchText}
          onChange={handleChange}
        />
        {error && (
          <Form.Text className="text-danger">
            Please enter a valid {mode}.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3 text-center">
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};
