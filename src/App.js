import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import * as yup from "yup";
import "./App.css";
import axios from "axios";
import HomePage from "./homePage";
import PizzaForm from "./pizzaForm";
import pizzaSchema from "./pizzaFormSchema";

const initialFormValues = {
  size: "",
  sauce: "Original Red",
  Pepperoni: false,
  ThreeCheese: false,
  Pinapple: false,
  name: "",
};

const initialFormErrors = {
  name: "Please provide a name",
  size: "Please choose a size",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const createPizza = (pizza) => {
    axios
      .post("https://reqres.in/api/orders", pizza)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormValues(initialFormValues);
  };

  const inputChange = (name, value) => {
    yup
      .reach(pizzaSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pepperoni", "olives", "onions", "peppers"].filter(
        (topping) => formValues[topping]
      ),
    };
    createPizza(pizza);
  };
  useEffect(() => {
    pizzaSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>Food Delivery App</h1>
      </header>

      <Switch>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
/*         values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors} */
