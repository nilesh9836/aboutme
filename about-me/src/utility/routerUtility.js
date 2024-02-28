import router from '../router'

export default {
	goToHome() {
		router.push({ name: 'home' })
	},
	goToAbout() {
		router.push({ name: 'about' })
	},
	goToPortfolio() {
		router.push({ name: 'portfolio' })
	},
	goToContact() {
		router.push({ name: 'contact' })
	},
	goToWorkExperience() {
		router.push({ name: 'work-experience' })
	}
}