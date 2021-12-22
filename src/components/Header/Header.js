import { TextLoop } from 'react-text-loop-next'
import logo from '../../assets/logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import { GrClose } from 'react-icons/gr'
import useOnClickOutside from 'use-onclickoutside'
import {AiOutlineLeft} from 'react-icons/ai'

const TopBar = () => {
	return (
		<div
			className={`bg-gradient-to-r 
            from-indigo-600 
            to-pink-500 
            via-purple-700 transition-colors duration-500 animate-gradient-x`}
		>
			<div className="relative max-w-7xl mx-auto px-10 h-12 flex items-center text-white justify-center md:justify-between text-sm">
				<div className="hidden md:flex ">
					<button className="flex items-center font-extrabold gap-2 hover:text-purple-200">
						<i class="fa fa-location-arrow" aria-hidden="true" />
						<p>Patagonia Pasadena, ...</p>
					</button>
				</div>
				<div className=" flex items-center gap-2  md:absolute md:left-1/2 transform md:-translate-x-1/2">
					<p className="font-extrabold capitalize tracking-[-.01em]">
						<TextLoop mask noWrap="false" interval={3500} delay={500}>
							<div className=" cursor-pointer hover:underline flex items-center gap-2">
								<p>Trade in, get credit</p>
								<div className="text-xs">
									<i className="fa fa-chevron-down" aria-hidden="true" />
								</div>
							</div>
							<div className=" cursor-pointer hover:underline flex items-center gap-2">
								<p>free expedited shipping on orders over $99</p>
								<div className="text-xs">
									<i className="fa fa-chevron-down" aria-hidden="true" />
								</div>
							</div>
						</TextLoop>{' '}
					</p>
				</div>
				<div className="hidden md:flex ">
					<button className="font-extrabold hover:text-pink-200">Login</button>
				</div>
			</div>
		</div>
	)
}

const MainNav = () => {
	const Search = () => {
		const [ isOpen, setIsOpen ] = useState(false)
		const ref = useRef()
		useOnClickOutside(ref, () => setIsOpen(false))
		return (
			<div ref={ref}>
				<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
					<BiSearch size={28} />
				</div>
				<div
					className={`fixed top-12 left-0 w-full h-24 bg-gray-300 z-30 transition-opacity duration-500 ${isOpen
						? 'opacity-100'
						: 'opacity-0 pointer-events-none'}`}
				>
					<div className="max-w-7xl mx-auto px-8 flex items-center gap-4 justify-between h-full">
						<div className="w-full relative">
							<div className="absolute left-4 top-1/2 transform -translate-y-1/2">
								<BiSearch size={26} />
							</div>
							<input
								type="search"
								placeholder="Search"
								className="rounded-full w-full pl-14 h-12 shadow"
							/>
						</div>
						<div className="flex items-center gap-2">
							<div
								onClick={() => setIsOpen(!isOpen)}
								className="transform -translate-x-1"
							>
								<GrClose size={26} />
							</div>
							<div className="opacity-0">
								<Hamburger size={29} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	const Burger = () => {
		const [ isOpen, setIsOpen ] = useState(false)
		const [ isInnerOpen, setIsInnerOpen ] = useState(false)
		const ref = useRef()
		useOnClickOutside(ref, () => setIsOpen(false))
		return (
			<div ref={ref}>
				<Hamburger size={29} toggled={isOpen} toggle={setIsOpen} />
				<div
					className={`fixed top-0  w-[85%] h-full z-20 transition-all duration-300 bg-gray-500 text-white ${isOpen
						? 'opacity-100 right-0'
						: 'opacity-0 pointer-events-none -right-full'}`}
				>
					<div className="max-w-7xl mx-auto px-8">
						<div className="h-12" />
						<div className="h-24  flex items-center">
							<button
								onClick={() => setIsOpen(false)}
								className="h-full ml-auto transform -translate-x-2 text-white"
							>
								<GrClose size={26} color="#fff" />
							</button>
						</div>
						<div className="mt-8">
							<ul className="flex flex-col gap-5 text-4xl font-extrabold">
								<li className="">
									<p onClick={() => setIsInnerOpen(!isInnerOpen)} className="cursor-pointer">Shop</p>
									<div
										className={`fixed top-0  w-[85%] h-screen bg-gray-400 transition-all duration-500 ${isInnerOpen
											? 'opacity-100 right-0'
											: 'opacity-0 pointer-events-none -right-full'}`}
									>
										<div className="max-w-7xl mx-auto px-8">
											<div className="h-12" />
											<div className="h-24  flex items-center">
												<div onClick={() => setIsInnerOpen(false)} className="cursor-pointer">
													<AiOutlineLeft size={28} />
												</div>
											</div>
											<div className=" mt-8">
												<ul className="flex flex-col capitalize gap-4">
													<li>
														<p>women's</p>
													</li>
													<li>
														<p>men's</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={`fixed bg-black transition-opacity duration-200 top-0 left-0 w-full h-screen pointer-events-none ${isOpen ? 'opacity-70' : 'opacity-0'}`}></div>
			</div>
		)
	}
	return (
		<div className="shadow bg-[#E3E1CA]">
			<div className="h-24 max-w-7xl mx-auto px-8 flex items-center justify-between relative">
				<div>
					<HiOutlineShoppingBag size={28} />
				</div>
				<div className="absolute left-1/2 transform -translate-x-1/2 z-30">
					<img src={logo} className="w-28" alt="" />
				</div>
				<div className="flex items-center gap-2">
					<Search />
					<Burger />
				</div>
			</div>
		</div>
	)
}

const Header = () => {
	return (
		<header>
			<TopBar />
			<MainNav />
		</header>
	)
}
export default Header
