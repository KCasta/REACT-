// App.js
import React from "react";
import { Card, Button } from "react-bootstrap";
const App = () => {
  const firstName = "Emmanuel";
  return (
    (
      <div className="container mt-5">
        {" "}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    ),
    (
      <div className="mt-3">
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && (
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="img-fluid rounded-circle"
          />
        )}
      </div>
    )
  );
};

export default App;
