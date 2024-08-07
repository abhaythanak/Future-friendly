import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	git,
	webshop,
	fit,
	dragdrop,
	threejs,
	angular,
	angularmaterial,
	firebase,
	cura,
	flair,
	doormate,
	controlytics,
	raymond,
	vigyanAshram,
	galvanize,
	swiggy,netflix,bitcoin,mdlogo,wns,bootstrap,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Responsive Design",
		icon: mobile,
	},
	{
		title: "Problem Solver",
		icon: creator,
	},
	{
		title: "Continuous Learning",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	// {
	// 	name: "TypeScript",
	// 	icon: typescript,
	// },
	// {
	// 	name: "Angular",
	// 	icon: angular,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next JS",
		icon: reactjs,
	},
	{
		name: "Firebase",
		icon: firebase,
	},
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	// {
	// 	name: "Angular Material",
	// 	icon: angularmaterial,
	// },
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "React Developer ",
		company_name: "Zeplinix PVT LTD, Pune",
		icon: "https://media.licdn.com/dms/image/D4D0BAQEM55O-Kk0AkQ/company-logo_100_100/0/1706773673131?e=1730937600&v=beta&t=WXFA8YnXyB4HLsSA_-55vJxTeJPzjR39IdsTbj3Lgrw",
		iconBg: "#383E56",
		date: "January 2024 - July 2024",
		points: [
			"Developed and maintained websites for Sweven Info, Zeplinix, and 301io.",
			"Utilized technologies such as React, Tailwind CSS, HTML, and Swiper JS to create responsive and visually appealing web applications.",
			"Gained proficiency in Angular for specific projects and leveraged various UI libraries, including Acernity UI, Swiper JS, and GSAP.",
			"",
		],
		website: "https://galvanizetestprep.com/",
	},
	{
		title: "Associate Operations",
		company_name: "WNS GLobal Services",
		icon: wns,
		iconBg: "#383E56",
		date: "Feb 2021 - May 2022",
		points: [
			"Developing and maintaining web applications for Internal Dashboard using Angular and TypeScript technologies.",
			"Monitoring system functions and performance for maintaining quality standards",
			"Real-time decision making for efficient and optimized use of containers and logistics equipments ",
			"Recommend and active participation in business flow improvements and clearly communicate problem/resolution process to project manager",
		],
		website: "https://galvanizetestprep.com/",
	},
	{
		title: "Associate Operations",
		company_name: "MD Industries",
		icon: mdlogo,
		iconBg: "#E6DEDD",
		date: "May 2019 - Feb 2020",
		points: [
			"Program development for machine programming based on requirements",
			"Designing and Production of highly intricate and complex mechanical parts using CNC machine",
			"Supervision of machine settings and programs for maintaining consistent quality",
			"Documentation and Logs of daily output and processes",
		],
		website: "https://controlytics.ai/",
	},
	// {
	// 	title: "Research Fellow, DIC",
	// 	company_name: "Vigyan Ashram",
	// 	icon: vigyanAshram,
	// 	iconBg: "#383E56",
	// 	date: "July 2019 - Dec 2019",
	// 	points: [
	// 		"Designed and developed an indoor system for the Black Soldier Flies (BSF) using Arduino for controlled Temperature and Humidity conditions (Project- Vegetable Waste Decomposition using BSF).",
	// 		"Derived psychometric properties of air and developed a mathematical model for the system for improved efficiency i.e 80% (earlier 45%).",
	// 		"Extended the implementation of Fan-Pad Evaporative Cooling System for Poly-house cooling (Project- Advanced Farming).",
	// 	],
	// 	website: "http://vigyanashram.com/",
	// },
	// {
	// 	title: "Graduate Engineer Trainee",
	// 	company_name: "Raymond Ltd.",
	// 	icon: raymond,
	// 	iconBg: "#E6DEDD",
	// 	date: "July 2018 - May 2019",
	// 	points: [
	// 		"Supervision and work allotment of 60 personnel for the production of Design Samples.",
	// 		"Real time decision making and management of process and resources for desired output.",
	// 		"Collaborated with cross-functional teams including designers, product managers, and workers to create high-quality products.",
	// 	],
	// 	website: "https://www.raymond.in/",
	// },
];

const testimonials = [
	{
		project: "CURA",
		testimonial:
			"CURA is a wearable IOT device which analyzes motion in patients with restricted movement and notifies the progress via mobile app. The device is designed to be used by patients with restricted movement due to stroke, Parkinson’s disease, or other neurological conditions.",
		tags: [
			{
				name: "wearableTech",
				color: "blue-text-gradient",
			},
			{
				name: "3DPrinting",
				color: "green-text-gradient",
			},
			{
				name: "prototyping",
				color: "pink-text-gradient",
			},
		],
		image: cura,
		source_code_link: "https://github.com/s4sachin/work-fit-app",
	},
	{
		project: "Fl'Air",
		testimonial:
			"Designing and developing a wheelchair that is capable of sliding right into a paraglider to challenge the boundaries of Differently-abled. The projects main motive was to make Paragliding a reality to give them a chance to experience the thrill of flying.",
		tags: [
			{
				name: "3DModelling",
				color: "blue-text-gradient",
			},
			{
				name: "designThinking",
				color: "green-text-gradient",
			},
			{
				name: "prototyping",
				color: "pink-text-gradient",
			},
		],
		image: flair,
		source_code_link: "https://github.com/s4sachin/work-fit-app",
	},
	{
		project: "DoorMate",
		testimonial:
			"A smart doormat built by integrating a pressure sensor, a microcontroller, and a mobile application. The doormat detects the person standing on it and sends a notification to the user’s mobile phone. It also tracks number of visitors, surroundings and make your home a Smart Home.",
		tags: [
			{
				name: "IOTInTextile",
				color: "blue-text-gradient",
			},
			{
				name: "Automation",
				color: "green-text-gradient",
			},
			{
				name: "smartTextiles",
				color: "pink-text-gradient",
			},
		],
		image: doormate,
		source_code_link: "https://github.com/s4sachin/work-fit-app",
	},
];

const projects = [
	{
		name: "Netflix App",
		description:
			"Single page app built using React.using React's built-in hooks like useEffect,useState and useContext to create a dynamic and responsive app. using React Styled components, ensuring a smooth and visually stunning user experience.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Styled Components",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
		],
		image: netflix,
		source_code_link: "https://github.com/abhaythanak/execution-code/tree/main/Netflix",
		deploy:"https://flix-mingle.netlify.app",
	},
	{
		name: "Trade Coin",
		description:
			"A platform for real-time viewing and comparison of multiple digital currencies.The platform has past 5 years data for in-depth analysis and decision making. Also there’s an option for multiple time frames selection along with user friendly Light & Dark Mode.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "ChakraUI",
				color: "pink-text-gradient",
			},
		],
		image: bitcoin,
		source_code_link: "https://github.com/abhaythanak/ReactProject/tree/main/crypto-app",
		deploy:"https://bitcoinstudy.netlify.app",
	},
	{
		name: "Food Craving",
		description:
			" An ecom platform for ordering food online built using React library with config driven config UI. Getting real time data from Swiggy API.Implemented Search functionality for searching and browsing through catalog.I have build shimmer UI component.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "TailwindCss",
				color: "green-text-gradient",
			},
			{
				name: "SwiggyAPI",
				color: "pink-text-gradient",
			},
		],
		image: swiggy,
		source_code_link: "https://github.com/abhaythanak/Future-friendly/tree/main/swiggy-api",
		deploy:"https://swiggyfoodapi.netlify.app",
	},
];

export { services, technologies, experiences, testimonials, projects };
