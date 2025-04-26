import './category.css';
import Input from '../Input/Input';
import { useState } from 'react';
const Category = ({ onCategorySelect }) => {
  const onChange = event => {
    onCategorySelect(event.target.value); // Call the parent function with the selected price value
  };

  const onCategoryChange = () => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="category">
        <h2>Category</h2>

        <Input
          type="radio"
          label="Chair"
          value="Chair"
          name="category"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="Cabinet"
          value="Cabinet"
          name="category"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="Study Table"
          value="Study Table"
          name="category"
          onChange={onChange}
        />
        <Input
          type="radio"
          label="Dyning Table"
          value="Dyning Table"
          name="category"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Category;

// To ensure only one option can be selected at a time, you need to give all radio buttons the same name attribute
