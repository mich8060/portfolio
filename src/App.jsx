import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Writing from './pages/Writing';
import NotFound from './pages/NotFound';

import Footer from "./components/footer";
import Header from './components/header';
import './app.scss';
import ArticleDetail from './pages/ArticleDetail';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
					<main className="main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/writing" element={<Writing />} />
							<Route exact path="/case-studies/:articleName" element={<CaseStudies />} />
							<Route exact path="/articles/:articleName" element={<ArticleDetail />} />
							<Route path="*" element={<NotFound />} /> 
						</Routes>
					</main>
            	<Footer />
			</div>
    	</Router>		
	);
}

export default App;
