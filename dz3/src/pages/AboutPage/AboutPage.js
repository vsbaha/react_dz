import Description from "../../components/desc/Description";
import style from "./about.module.css"

function AboutPage(props) {
	return (
		<div className={style.about}>
			<h1>О нас</h1>
			<Description title="Title 2"  description="description 2"/>
		</div>
	);
}

export default AboutPage;