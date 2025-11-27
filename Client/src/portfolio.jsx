
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
	return (
		<>
			<Navbar />
			<Hero />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
