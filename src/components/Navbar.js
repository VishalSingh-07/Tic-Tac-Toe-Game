import React from "react"
import Logo from "../Image/tic-tac-toe__.png"
import "./Navbar.css"
export const Navbar = () => {
	return (
		<div id="container">
			<h1>
				<img src={Logo} alt="Logo" />
				Tic-Tac-Toe
			</h1>
		</div>
	)
}
