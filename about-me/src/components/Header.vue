<template>
	<header class="header">
		<h1 class="header__title">My Portfolio</h1>
		<nav class="header__nav">
			<ul class="header__nav-list">
				<li class="header__nav-item" @click="goToHome">Home</li>
				<li class="header__nav-item" @click="goToAbout">About</li>
				<li class="header__nav-item" @click="goToPortfolio">Projects</li>
				<li class="header__nav-item" @click="goToContact">Contact</li>
				<li class="header__nav-item" @click="goToWorkExperience">Work Experience</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import routerUtility from "@/utility/routerUtility";

export default {
	name: 'Header',
	methods: {
		goToHome: routerUtility.goToHome,
		goToAbout: routerUtility.goToAbout,
		goToPortfolio: routerUtility.goToPortfolio,
		goToContact: routerUtility.goToContact,
		goToWorkExperience: routerUtility.goToWorkExperience
	}
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #f5f5f5;
}

.header__title {
	font-size: 2rem;
	font-weight: bold;
}

.header__nav-list {
	display: flex;
	list-style: none;
}

.header__nav-item {
	margin-right: 1rem;
	cursor: pointer;
}

.header__nav-item a {
	text-decoration: none;
	color: #333;
	font-weight: bold;
}
</style>