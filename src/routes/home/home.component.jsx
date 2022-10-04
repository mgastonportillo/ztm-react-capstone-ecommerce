import { Outlet } from "react-router-dom";
import Category from "../../components/directory/directory.component";

const Home = () => {
	const categories = [
		{
			id: 1,
			title: "HATS",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		},
		{
			id: 2,
			title: "JACKETS",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		},
		{
			id: 3,
			title: "SNEAKERS",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		},
		{
			id: 4,
			title: "WOMEN",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "MEN",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
	];

	return (
		<div>
			<Category categories={categories} />
			<Outlet />
		</div>
	);
};

export default Home;
