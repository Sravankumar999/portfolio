import Content from "./components/content";
import Navbar from "./components/navbar";
import "./index.css";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar/>
				<Content/>
			</header>
		</div>
	);
}

export default App;
