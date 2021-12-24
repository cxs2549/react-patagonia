import { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import { BiSearch } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

const Search = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const ref = useRef()
	const inputRef = useRef()
	const handleOpen = () => {
		setIsOpen(true)
		setTimeout(() => inputRef.current.focus(), 900)
	}
	useOnClickOutside(ref, () => setIsOpen(false))
	return (
		<div ref={ref}>
			<div onClick={handleOpen} className="cursor-pointer  w-12 flex justify-center">
				<BiSearch size={28} />
			</div>
			<div
				className={`fixed top-12 left-0 w-full h-24 md:h-32 bg-[#E3E1CA] z-30 transition-opacity duration-500 ${isOpen
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'}`}
			>
				<div className="max-w-7xl mx-auto pr-4 pl-6 md:px-8 xl:px-0 flex items-center gap-4 justify-between h-full">
					<div className="w-full relative max-w-xl ml-auto">
						<div className="absolute left-2 top-1/2 transform -translate-y-1/2">
							<BiSearch size={24} />
						</div>
						<input
							ref={inputRef}
							type="search"
							placeholder="Search"
							className=" w-full pl-10 rounded h-12  border-black bg-gray-100"
						/>
					</div>
					<div className="flex items-center gap-2">
						<div
							onClick={() => setIsOpen(!isOpen)}
							className="transform -translate-x-1 cursor-pointer"
						>
							<GrClose size={26} />
						</div>
						<div />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
