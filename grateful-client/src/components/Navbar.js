import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";

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
        Vote on a grateful entry that you find especially motivating, or add a
        new entry to list what you're grateful for.
        <br />
        This increases your awareness of the good things in life, benefiting
        your mental health.
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
        leading to better mental health.
        <br />
        Even if everything is not going as hoped in life, you can still find
        reasons to be thankful. How about that cup of coffee you had this
        morning?
        <br />
        How about the fact that you woke up today? You can start with that.
      </p>
      <p>
        Vote from the index page, or click on an entry to see and add comments.
      </p>
      <p>
        Click on 'New Entry' to add another reason for being grateful today! Limit your entry to 255 characters.
      </p>
    </div>
  );
};

export default Navbar;
