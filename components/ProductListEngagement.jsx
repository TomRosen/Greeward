const products = [
	{
		id: 1,
		name: 'Travel Green',
		href: 'engagements/verify',
		price: 'Get up to 1000 🥕',
		imageSrc:
			'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		imageAlt:
			'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Conscious Mensa Meals',
		href: 'engagements/verify',
		price: 'Get up to 20 🥕',
		imageSrc:
			'https://images.unsplash.com/photo-1560341208-305f47d5e901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		imageAlt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 3,
		name: 'Buy refurbished Equipment',
		href: 'engagements/verify',
		price: 'Get up to 200 🥕',
		imageSrc:
			'https://images.unsplash.com/photo-1444201716572-c60ec66d0494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	{
		id: 4,
		name: 'Repair, reduce and recycle',
		href: 'engagements/verify',
		price: 'Get up to 100 🥕',
		imageSrc:
			'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		imageAlt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
];

export default function ProductList(props) {
	return (
		<div className='px-4 py-7 sm:px-6 lg:px-8'>
			<h1 className='text-xl font-semibold text-gray-900'>Engagements</h1>
			<div className='bg-white'>
				<div className='py-16'>
					<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{props.products.map((product) => (
							<a
								key={product.title}
								href='engagements/verify'
								className='group'>
								<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-5'>
									<img
										src={product.image}
										className='w-full h-full object-center object-cover group-hover:opacity-75'
									/>
								</div>
								<h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
								<p className='mt-1 text-lg font-medium text-gray-900'>
									Get up to {product.carrots}🥕
								</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
