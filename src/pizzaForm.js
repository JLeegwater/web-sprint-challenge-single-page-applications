import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PizzaImg from "./Pizza.jpg";
export default function PizzaForm(props) {
  const { values, submit, change, errors, disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="PizzaForm">
      <h1>Build your Own Pizza</h1>
      <img src={PizzaImg}></img>
      <form onSubmit={onSubmit}>
        <h2>Build your Own Pizza</h2>

        <lable>
          <h3>Choice of Size*</h3>
          <select
            onChange={onChange}
            value={values.size}
            name="size"
            id="size-dropdown"
          >
            <option value="">---Size---</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra large">Extra Large</option>
          </select>
        </lable>

        <div className="sauces">
          <label>
            Original Red
            <input
              type="radio"
              name="sauce"
              value="Original Red"
              onChange={onChange}
              checked={values.sauce === "Original Red"}
            />
          </label>

          <label>
            BBQ Sauce
            <input
              type="radio"
              name="sauce"
              value="BBQ Sauce"
              onChange={onChange}
              checked={values.sauce === "BBQ Sauce"}
            />
          </label>
        </div>

        <div className="toppings">
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="Pepperoni"
              onChange={onChange}
              checked={values.Pepperoni}
            />
          </label>
          <label>
            Three Cheese
            <input
              type="checkbox"
              name="ThreeCheese"
              onChange={onChange}
              checked={values.ThreeCheese}
            />
          </label>

          <label>
            Pinapple
            <input
              type="checkbox"
              name="Pinapple"
              onChange={onChange}
              checked={values.Pinapple}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="Sausage"
              onChange={onChange}
              checked={values.Sausage}
            />
          </label>

          <div className="name" id="name-input">
            <label>
              Name*
              <input
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
              />
            </label>
          </div>

          <div className="special" id="special-text">
            <label>
              Special Instructions
              <input
                value={values.special}
                onChange={onChange}
                name="special"
                type="text"
              />
            </label>
          </div>

          <div className="submit">
            <div className="errors">
              {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              <p>{errors.name}</p>
              <p>{errors.size}</p>
            </div>

            <button disabled={disabled} id="order-button">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
