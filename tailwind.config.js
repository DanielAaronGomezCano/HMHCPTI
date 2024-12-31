/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,html}"],
	theme: {
			fontFamily: {
			'man':['Manjari'],'ques':['Questrial'],'did':['Didact Gothic'],
			},
			extend: {
				colors: {'azul-oscuro':'#001e2b'}
			},
			container: {
				right: 'auto',
				padding: '1rem',
			},
			},
plugins:[],
	}