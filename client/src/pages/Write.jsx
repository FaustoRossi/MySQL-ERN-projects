import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
	const navigate = useNavigate();
	const state = useLocation().state;
	const [value, setValue] = useState(state?.title || "");
	const [title, setTitle] = useState(state?.desc || "");
	const [img, setImg] = useState(null);
	const [cat, setCat] = useState(state?.cat || "");

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", img);
			const res = await axios.post("/upload", formData);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const imgUrl = await upload();

		try {
			state
				? await axios.put(`/posts/${state.id}`, {
						title,
						desc: value,
						cat,
						img: img ? imgUrl : "",
				  })
				: await axios.post(`/posts/`, {
						title,
						desc: value,
						cat,
						img: img ? imgUrl : "",
						date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
				  });
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="add">
			<div className="content">
				<h2>Publish a new blog</h2>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input
							checked={cat === "art"}
							type="radio"
							name="cat"
							id="art"
							value="art"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="art">Art</label>
					</div>
					<div className="cat">
						<input
							checked={cat === "science"}
							type="radio"
							name="cat"
							id="science"
							value="science"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="science">Science</label>
					</div>
					<div className="cat">
						<input
							checked={cat === "tech"}
							type="radio"
							name="cat"
							id="tech"
							value="tech"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="tech">Technology</label>
					</div>
					<div className="cat">
						<input
							checked={cat === "cinema"}
							type="radio"
							name="cat"
							id="cinema"
							value="cinema"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="cinema">Cinema</label>
					</div>
					<div className="cat">
						<input
							checked={cat === "design"}
							type="radio"
							name="cat"
							id="design"
							value="design"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="design">Design</label>
					</div>
					<div className="cat">
						<input
							checked={cat === "food"}
							type="radio"
							name="cat"
							id="food"
							value="food"
							onChange={(e) => setCat(e.target.value)}
						/>
						<label htmlFor="food">Food</label>
					</div>
				</div>
				<div className="item">
					<h1>Publish</h1>
					<span>
						<b>Status: </b> Draftf
					</span>
					<span>
						<b>Visibility: </b> Public
					</span>
					<input
						style={{ display: "none" }}
						type="file"
						name=""
						id="file"
						onChange={(e) => setImg(e.target.files[0])}
					/>
					<label className="file" htmlFor="file">
						Upload image
					</label>
					<div className="buttons">
						<button>Save as a draft</button>
						<button onClick={handleSubmit}>Publish</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Write;
