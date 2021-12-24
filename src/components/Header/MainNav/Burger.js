import {useState, useRef} from 'react'
import useOnClickOutside from 'use-onclickoutside'
import Hamburger from 'hamburger-react'
import { GrClose } from 'react-icons/gr'
import { AiOutlineLeft } from 'react-icons/ai'


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
					? 'opacity-100  xl:right-0 left-0'
					: 'opacity-0 pointer-events-none  xl:right-full -left-full'}`}
			>
				<div className="max-w-7xl mx-auto px-8 md:px-10">
					<div className="h-12" />
					<div className="h-24 md:h-32  flex items-center">
						<button
							onClick={() => setIsOpen(false)}
							className="h-full transform -translate-x-1 md:translate-x-1 text-white"
						>
							<GrClose size={26} color="#fff" />
						</button>
					</div>
					<div className="mt-8">
						<ul className="flex flex-col gap-5 text-4xl font-extrabold">
							<li className="">
								<p
									onClick={() => setIsInnerOpen(!isInnerOpen)}
									className="cursor-pointer hover:underline"
								>
									Shop
								</p>
								<div
									className={`fixed top-0  w-[85%] h-screen bg-gray-400 transition-all duration-500 ${isInnerOpen
										? 'opacity-100 left-0'
										: 'opacity-0 pointer-events-none -left-full'}`}
								>
									<div className="max-w-7xl mx-auto px-8">
										<div className="h-12" />
										<div className="h-24 md:h-32  flex items-center">
											<div
												onClick={() => setIsInnerOpen(false)}
												className="cursor-pointer transform -translate-x-2 md:translate-x-2"
											>
												<AiOutlineLeft size={28} />
											</div>
										</div>
										<div className=" mt-8">
											<ul className="flex flex-col capitalize gap-4">
												<li>
													<p className="hover:underline cursor-pointer">
														women's
													</p>
												</li>
												<li>
													<p className="hover:underline cursor-pointer">
														men's
													</p>
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
			<div
				className={`fixed bg-black transition-opacity duration-200 top-0 left-0 w-full h-screen pointer-events-none ${isOpen
					? 'opacity-70'
					: 'opacity-0'}`}
			/>
		</div>
	)
}

export default Burger
