import PropTypes from "prop-types";
// import Button from "./Button";

const Subjects = ({ subjects }) => {
  return (
    <header className="header">
      <h1>{subjects[0].title}</h1>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// Header.propTypes = {
//   title: PropTypes.string,
// };

// CSS IN JS
// const headingStyle = { color: "red", backgroundColor: "black" };

export default Subjects;
