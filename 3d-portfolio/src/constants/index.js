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
		title: "Ionic App Developer",
		icon: mobile,
	},
	{
		title: "Prototype Designer",
		icon: backend,
	},
	{
		title: "Problem Solver",
		icon: creator,
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
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "Angular",
		icon: angular,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Firebase",
		icon: firebase,
	},
	{
		name: "Angular Material",
		icon: angularmaterial,
	},
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
		title: "Angular Developer",
		company_name: "Galvanize",
		icon: galvanize,
		iconBg: "#383E56",
		date: "Feb 2022 - March 2023",
		points: [
			"Developing and maintaining web applications for Internal Dashboard using Angular and TypeScript technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
		website: "https://galvanizetestprep.com/",
	},
	{
		title: "Web Developer Intern",
		company_name: "Controlytics.AI",
		icon: controlytics,
		iconBg: "#E6DEDD",
		date: "July 2021 - Dec 2021",
		points: [
			"Worked on customizing Open-source ThingsBoard platform for collection, analysis and visualization of incoming Telemetry data.",
			"Developed and deployed custom widgets for the platform using Angular and TypeScript.",
			"Implemented Attendance Management System, Shift Hours and Violation Tracking features for the platform.",
		],
		website: "https://controlytics.ai/",
	},
	{
		title: "Research Fellow, DIC",
		company_name: "Vigyan Ashram",
		icon: vigyanAshram,
		iconBg: "#383E56",
		date: "July 2019 - Dec 2019",
		points: [
			"Designed and developed an indoor system for the Black Soldier Flies (BSF) using Arduino for controlled Temperature and Humidity conditions (Project- Vegetable Waste Decomposition using BSF).",
			"Derived psychometric properties of air and developed a mathematical model for the system for improved efficiency i.e 80% (earlier 45%).",
			"Extended the implementation of Fan-Pad Evaporative Cooling System for Poly-house cooling (Project- Advanced Farming).",
		],
		website: "http://vigyanashram.com/",
	},
	{
		title: "Graduate Engineer Trainee",
		company_name: "Raymond Ltd.",
		icon: raymond,
		iconBg: "#E6DEDD",
		date: "July 2018 - May 2019",
		points: [
			"Supervision and work allotment of 60 personnel for the production of Design Samples.",
			"Real time decision making and management of process and resources for desired output.",
			"Collaborated with cross-functional teams including designers, product managers, and workers to create high-quality products.",
		],
		website: "https://www.raymond.in/",
	},
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
		name: "WorkFit App",
		description:
			"An Angular fitness app that allows users to train, and view previous trainings. The app uses Firebase and Angularfire to add real-time database functionalities and see the updates almost before we make them!.",
		tags: [
			{
				name: "angular",
				color: "blue-text-gradient",
			},
			{
				name: "angular-material",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
		],
		image: fit,
		source_code_link: "https://github.com/s4sachin/work-fit-app",
	},
	{
		name: "Web Shop",
		description:
			"Web application that enables users to search for products, add them to cart, and place order. Used Angular material and TailwindCSS to structure and design the UI and Stripe for payment integration",
		tags: [
			{
				name: "angular",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "stripe",
				color: "pink-text-gradient",
			},
		],
		image: webshop,
		source_code_link: "https://github.com/s4sachin/webshop",
	},
	{
		name: "Drag & Drop",
		description:
			"A functional Drag and Drop component which can be extended to any application built entirely using TypeScript. Implemented Inference, Type Transformation, Generics and advanced functionalities of TS.",
		tags: [
			{
				name: "ts",
				color: "blue-text-gradient",
			},
			{
				name: "html",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: dragdrop,
		source_code_link: "https://github.com/s4sachin/drag-and-drop-TS",
	},
];

export { services, technologies, experiences, testimonials, projects };
