
import React from "react";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Experience from "./src/components/Experience";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

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
