import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleTheme } from "../actions/Index";

export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle-theme">
      <button
        className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick={() => {
          dispatch(ToggleTheme());
        }}
      >
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
}
