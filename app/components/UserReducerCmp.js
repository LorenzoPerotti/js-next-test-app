"use client";
import { useReducer } from "react";
import "./UseReducerCmp.css";

// state is an object with name and email fields
// action is an object with type, field, and value fields
function formReducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return {
        name: "",
        email: "",
      };
    default:
      return state;
  }
}

function UserReducerCmp() {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: "FIELD_CHANGE", field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({ type: "RESET_FORM" });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="use-reducer-cmp">
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
          />
        </div>
        <button onClick={resetForm}>Reset</button>
        <button onClick={sendForm}>Send</button>
      </form>
    </div>
  );
}

export default UserReducerCmp;
