import flag from '../../assets/flag.png'

const moreInfo = [
	'patagonia action works',
	'patagonia provisions',
	'worn wear',
	'careers',
	'privacy policy',
	'sitemap',
	'group sales',
	'press'
]
const help = [ 'help center', 'order status', 'returns & exchanges', 'login' ]

const Subscribe = () => (
	<div className="max-w-xl">
		<h1 className="capitalize text-3xl font-bold">subscribe</h1>
		<div className="mt-10">
			<p className="font-semibold leading-7">
				Sign up for exclusive offers, original stories, activism awareness, events and more.
			</p>
			<input
				type="email"
				placeholder="Email Address"
				className="mt-10 border-b-2 bg-transparent pb-1 w-full focus:outline-none"
			/>
			<button className="bg-white text-black px-8 py-3 rounded-full mt-10 font-bold">
				Sign Me Up
			</button>
		</div>
	</div>
)
const Help = () => (
	<div>
		<h1 className="capitalize text-3xl font-bold">need help?</h1>
		<ul className="flex flex-wrap font-bold mt-10 capitalize gap-4">
			{help.map((item) => (
				<li key={item} className="rounded-full border-4 px-6 py-2">
					{item}
				</li>
			))}
		</ul>
	</div>
)
const Info = () => (
	<div>
		<h1 className="capitalize text-3xl font-bold">more info</h1>
		<ul className="grid grid-cols-2 mt-10 capitalize font-medium gap-y-4">
			{moreInfo.map((item) => <li key={item}>{item}</li>)}
		</ul>
	</div>
)
const Copyright = () => (
	<div className="xl:flex xl:justify-between xl:items-center">
		<p>© 2021 CxS Development for Patagonia, Inc. All Rights Reserved. Do Not Sell My Data</p>
		<div className="mt-10 xl:mt-0 flex items-center gap-2 font-semibold">
			<img src={flag} alt="" className="w-8" />
			<p>English</p>
		</div>
	</div>
)

const Footer = () => {
	return (
		<footer className="bg-[#000000]">
			<div className="max-w-7xl mx-auto px-4 md:px-10 xl:px-0 text-white pt-10 pb-16 flex flex-col gap-16 text-sm">
				<div className="flex flex-col gap-16 xl:grid xl:grid-cols-3">
					<Subscribe />
					<Help />
					<Info />
				</div>
				<Copyright />
			</div>
		</footer>
	)
}

export default Footer
