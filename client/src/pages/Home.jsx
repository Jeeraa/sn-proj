export default function Home() {
	return (
		<div className="px-4 py-12 max-w-2xl mx-auto">
			<h1 className="text-3xl font-bold mb-4 text-slate-700">
				Welcome to my World!
			</h1>
			<p className="mb-4 text-slate-700">
				Each React component is a JavaScript function that may contain some markup
				that React renders into the browser. React components use a syntax extension
				called JSX to represent that markup. JSX looks a lot like HTML, but it is a
				bit stricter and can display dynamic information.
			</p>
			<p className="mb-4 text-slate-700">
				JSX lets you write HTML-like markup inside a JavaScript file, keeping
				rendering logic and content in the same place. Sometimes you will want to
				add a little JavaScript logic or reference a dynamic property inside that
				markup. In this situation, you can use curly braces in your JSX to “open a
				window” to JavaScript:
			</p>
			<p className="mb-4 text-slate-700">
				React components use props to communicate with each other. Every parent
				component can pass some information to its child components by giving them
				props. Props might remind you of HTML attributes, but you can pass any
				JavaScript value through them, including objects, arrays, functions, and
				even JSX!
			</p>
		</div>
	)
}
