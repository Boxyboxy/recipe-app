import React from "react";

import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { DisplayRecipe } from "./DisplayRecipe";

export class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipeList, deleteRecipe } = this.props;
    let recipeCards = recipeList.map((singleRecipe, index) => (
      <Col>
        <Card
          style={{ width: "20rem", height: "35rem" }}
          key={index}
          className="recipeCards"
        >
          <Card.Img
            variant="top"
            style={{ width: "20rem", height: "15rem" }}
            src={singleRecipe["image"]}
          />
          <Card.Body>
            <Card.Title>{singleRecipe["name"]}</Card.Title>
            <Card.Text>{singleRecipe["description"]}</Card.Text>
            {
              // Have not added functionality for edit button
            }
            <DisplayRecipe
              recipe={recipeList[index]}
              index={index}
              deleteRecipe={deleteRecipe}
            />
          </Card.Body>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs={1} md={2} className="g-4">
          {recipeCards}
        </Row>
      </Container>
    );
  }
}
