import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <ButtonGroup className="mb-3">
      <Button
        key="all"
        variant={selectedCategory === null ? "red" : "light"}
        onClick={() => onSelectCategory(null)}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "red" : "light"}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CategoryFilter;
