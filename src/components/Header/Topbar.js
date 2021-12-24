import { TextLoop } from 'react-text-loop-next'

const Topbar = () => {
    return (
        <div
			className={`bg-gradient-to-r 
            from-indigo-600 
            to-pink-500 
            via-purple-700 transition-colors duration-500 animate-gradient-x`}
		>
			<div className="relative max-w-7xl mx-auto px-10 xl:px-2 h-12 flex items-center text-white justify-center md:justify-between text-sm">
				<div className="hidden md:flex ">
					<button className="flex items-center font-extrabold gap-2 hover:text-purple-200">
						<div className="text-[10px]"><i className="fa fa-location-arrow" aria-hidden="true" /></div>
						<p>Patagonia Pasadena, CA</p>
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

export default Topbar
