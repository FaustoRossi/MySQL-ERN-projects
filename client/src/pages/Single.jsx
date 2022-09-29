import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
	return (
		<div className="single">
			<div className="content">
				<img
					src="https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
				<div className="user">
					<img
						src="https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					<div className="info">
						<span>John</span>
						<p>Posted 2 days ago</p>
					</div>
					<div className="edit">
						<Link to={`/write?edit=2`}>
							<img src={Edit} alt="" />
						</Link>
						<img src={Delete} alt="" />
					</div>
				</div>
				<h1>Lorem ipsum dolor sit!</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
					iure sapiente hic, nostrum aperiam id veniam ipsum quisquam ipsa
					expedita eius delectus, deleniti quod praesentium ratione quas maiores
					ab saepe? Eius ducimus, labore impedit cumque amet ex? Impedit id
					iusto facilis aperiam nemo explicabo repellat libero. Repudiandae
					itaque, nostrum, eius amet quam natus id hic totam iste ex, in
					excepturi. Fugiat ut accusamus vitae porro! Sint architecto voluptatem
					nobis autem voluptates tempora. Nostrum est mollitia soluta ratione
					odit temporibus recusandae, ex ad vitae sapiente, a voluptates
					blanditiis cupiditate placeat molestias. Sequi minus veniam earum,
					accusamus placeat animi officiis nobis distinctio tenetur nostrum quia
					vel provident sed necessitatibus? Illo, suscipit? Magnam nisi libero
					porro nulla, molestiae officia. Dolor praesentium maiores
					perspiciatis? Assumenda eos reiciendis placeat, qui debitis adipisci
					hic aperiam cumque beatae quam sit distinctio ut culpa sapiente
					consectetur deleniti quidem consequuntur magnam earum voluptate
					molestiae odio dolores expedita. Exercitationem, rem? Dolorum unde,
					ipsum praesentium alias est atque! Fugiat corporis dolorem magnam
					consectetur libero repellat incidunt, aliquam labore debitis nulla
					corrupti natus, cupiditate quis, ipsa ex qui totam aperiam culpa
					exercitationem. Incidunt hic quae nemo, eaque eum quibusdam quasi
					delectus unde deleniti officiis qui culpa fugiat eligendi enim atque
					sequi sunt nisi sit voluptatum natus ipsum. Quidem amet blanditiis
					ipsum corrupti! Tempora consequatur dolores optio nesciunt sint,
					tempore, impedit in et nihil earum voluptates temporibus, voluptatem
					perferendis placeat. Tempore natus quis vero vel eum delectus,
					corrupti at laborum? Ea, amet eum. Nisi, aliquam atque accusantium,
					magnam officiis, amet quod maiores deserunt laborum eius quas delectus
					aspernatur dolores aut at necessitatibus labore porro odit qui in!
					Iste est deserunt possimus debitis cupiditate? Eaque natus soluta
					culpa dolorem quasi et eum, corrupti quia placeat recusandae, nulla
					velit sequi sint aliquid minima maxime commodi necessitatibus. Itaque
					cupiditate maxime voluptas adipisci aspernatur minus ut dignissimos.
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
