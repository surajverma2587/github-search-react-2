import Alert from "react-bootstrap/Alert";

export const ErrorMessage = () => {
  return (
    <Alert variant="danger">
      Failed to perform a search. Please try again later.
    </Alert>
  );
};
