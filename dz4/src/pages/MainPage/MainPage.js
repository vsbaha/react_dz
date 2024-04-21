// MainPage.js
import React from "react";

function MainPage({ user }) {
	return (
		<div>
			{user && (
				<div>Добро пожаловать {user.name} {user.lastName}, мы тебя ждали</div>
			)}
		</div>
	);
}

export default MainPage;
