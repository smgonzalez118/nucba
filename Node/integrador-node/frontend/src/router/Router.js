import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Galery from '../pages/galery';
import About from '../pages/about';
import Tools from '../pages/tools';
import Contact from '../pages/contact';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from '../pages/login';
import Register from '../pages/register';
import SourceCode from '../pages/sourceCode';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route exact path='/galery' element={<Galery />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/tools' element={<Tools />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/code' element={<SourceCode />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
