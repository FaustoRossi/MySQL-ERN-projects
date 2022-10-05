import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user") || null)
	);

	const login = async (values) => {
		const res = await axios.post("/auth/login", values);
		setCurrentUser(res.data);
	};

	const logout = async (values) => {
		await axios.post("/auth/logout");
		setCurrentUser(null);
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
