import Burger from "./Burger"
import logo from '../../../assets/logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Search from "./Search"

const links = [
	'shop', 'activism', 'sports', 'stories'
]

const Logo = () => {
	return (
<div className="absolute xl:relative left-1/2 xl:left-auto transform -translate-x-1/2 xl:-translate-x-0 z-30 xl:flex-1 xl:ml-2">
					<img src={logo} className="w-28 md:w-40 opacity-90" alt="" />
				</div>
	)
}

const MainNav = () => {
	return (
		<div className=" bg-[#E3E1CA] xl:hover:bg-white transition-all duration-500">
			<div className="h-24 md:h-32 max-w-7xl mx-auto px-4 md:px-8 xl:px-0 flex items-center justify-between relative">
				<Burger />
				<Logo />
				<div className="hidden xl:absolute xl:block left-1/2 transform -translate-x-1/2">
					<ul className="flex items-center gap-14 font-bold capitalize">
						{links.map((link, i) => <li>{link}</li>)}
					</ul>
				</div>
				<div className="flex items-center">
					<div className="w-12 flex justify-center">
						<a href="/cart">
							<HiOutlineShoppingBag size={28} />
						</a>
					</div>
					<Search />
				</div>
			</div>
		</div>
	)
}

export default MainNav
