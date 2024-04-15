import Description from "../../components/desc/Description";
import style from "./main.module.css";

function MainPage(props) {
	return (
		<div className={style.main}>
			<h1>Главная страница</h1>
			<Description title="Title"  description="description"/>
		</div>
	);
}

export default MainPage;