import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
import Form from "./Components/Form";
import WeatherCard from "./Components/WeatherCard";
import ThemeToggle from "./Components/ThemeToggle";
import { useSelector } from "react-redux";
export default function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App Dark" : "App"}>
      <ThemeToggle />
      <Form />
      <WeatherCard />
    </div>
  );
}
