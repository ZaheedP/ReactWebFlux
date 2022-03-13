import { useEffect, useState } from "react";
import Subjects from "./components/Subjects";

import "./App.css";
function App() {
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async () => {
    const response = await fetch(
      "http://localhost:8080/swot/api/v1/subject/get-all",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log({ data });
    return data;
  };

  useEffect(() => {
    const getSubjects = async () => {
      const subjectsFromServer = await fetchSubjects();
      setSubjects(subjectsFromServer);
    };

    getSubjects();
  }, []);

  // const [subjects] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors",
  //     day: "5th Feb",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Teacher",
  //     day: "5th March",
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Dog",
  //     day: "24th April",
  //     reminder: false,
  //   },
  // ]);

  return <Subjects subjects={subjects} />;
}

export default App;
