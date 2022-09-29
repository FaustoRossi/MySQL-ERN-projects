import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Route,
} from "react-router-dom";
import "./style.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Single />,
			},
			{
				path: "/Write",
				element: <Write />,
			},
		],
	},
	{
		path: "/register",
		element: (
			<div>
				<Register />
			</div>
		),
	},
	{
		path: "/login",
		element: (
			<div>
				<Login />
			</div>
		),
	},
]);

function App() {
	return (
		<div className="App">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
