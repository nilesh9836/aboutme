import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'
import WorkExperience from './views/WorkExperience.vue'


Vue.use(VueRouter)

const routes=[
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: Portfolio
	},
	{
		path: '/work-experience',
		name: 'work-experience',
		component: WorkExperience
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	}
]

const router=new VueRouter({
	routes // short for `routes: routes`
})

export default router