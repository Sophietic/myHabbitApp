import React, { useState } from "react";
import "./addHabit.css";
import axios from "axios";
import "bulma/css/bulma.css";

const initialState = {
  habitname: "",
  description: "",
  categories: "",
};

function AddHabit() {
  const [formState, setForm] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...formState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const { habitname, description, categories } = formState;
    axios
      .post("http://localhost:5000/api/create", {
        habitname: formState.habitname,
        description: formState.description,
        categories: formState.categories,
      })
      .then(() => {
        setForm(initialState);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Add New Habit</h1>
        <div className="field">
          <label class="label is-medium" htmlFor="habitname">
            Habit Name
          </label>
          <div class="control">
            <input
              name="habitname"
              type="text"
              value={formState.habitname}
              onChange={handleChange}
              class="input"
              placeholder="Habitname"
            />
          </div>
        </div>

        <div class="field">
          <label class="label is-medium" htmlFor="description">
            Description
          </label>
          <div class="control">
            <input
              name="description"
              type="text"
              value={formState.description}
              onChange={handleChange}
              class="input"
              placeholder="Description"
            />
          </div>
        </div>

        <div class="field">
          <label class="label is-medium" htmlFor="categories">
            Categories
          </label>
          <div class="control">
            <input
              name="categories"
              type="text"
              value={formState.categories}
              onChange={handleChange}
              class="input"
              placeholder="Categories"
            />
          </div>
        </div>
        <div class="control">
          <button
            class="button is-danger is-rounded"
            type="submit"
            value="addHabit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHabit;
