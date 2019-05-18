import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "20px",
  margin: "0 6px 6px",
  background: "rgb(119, 139, 235)",
  textDecoration: "none",
  color: "white"
};

const activeLink = {
  background: "rgb(89, 98, 117)",
  color: "black"
};

let Navbar = () => (
  <div className="navbar">
    <NavLink
      className="navlink"
      to="/"
      exact
      style={link}
      activeStyle={activeLink}
    >
      Home
    </NavLink>
    <NavLink
      className="navlink"
      to="/about"
      exact
      style={link}
      activeStyle={activeLink}
    >
      About
    </NavLink>
    <NavLink
      className="navlink"
      to="/entries/"
      exact
      style={link}
      activeStyle={activeLink}
    >
      All Entries
    </NavLink>
    <NavLink
      className="navlink"
      to="/entries/new"
      exact
      style={link}
      activeStyle={activeLink}
    >
      New Entry
    </NavLink>
  </div>
);

export const Home = () => {
  return (
    <div className="title">
      <h1>Enter with the password: "Thank you!"</h1>
      <p>Psalm 100:4-5 The Message (MSG)</p>

      <h3>
        It's easy to let the challenges and disappointments of life get us down.
        The cure for a downcast soul is gratefulness. Add a new entry to journal
        what you're grateful for. This forces yourself to look for good things
        in life to build mental resilience and bounce back from adversity. Start
        with something as simple as, "I'm thankful that I woke up this morning!"
        How about being thankful for something that did NOT happen? Start with
        something like, "I'm thankful that I did NOT have a flat tire on the
        road today!" If you find a grateful entry that you like, then go ahead
        and vote for it. This increases your awareness of the good things in
        life, benefiting mental health.
      </h3>
    </div>
  );
};

export const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>
        This is a website to help you cultivate an attitude of thankfulness,
        leading to better mental health. Even if everything is not going as
        hoped in life, you can still find reasons to be thankful. How about that
        cup of coffee you had this morning? How about the fact that you woke up
        today? You can start with that.
      </p>
      <p>Add, like, or dislike comments from the entry show page.</p>
      <p>
        Click on 'New Entry' to add another reason for being grateful today!
        Please limit your entry to 255 characters, keeping it short and sweet.
      </p>
    </div>
  );
};

export default Navbar;
