const InventorySpecifications = ({ product }) => {
	if (!product) return null;

	const specifications = product.specifications || {};

	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
			<h2 className="text-2xl font-semibold text-white mb-6">
				Especificações Técnicas
			</h2>

			{Object.keys(specifications).length === 0 ? (
				<div className="bg-gray-900 rounded-lg p-6 text-center">
					<p className="text-gray-400">
						Este produto não possui especificações cadastradas.
					</p>
				</div>
			) : (
				<div className="space-y-8">
					{Object.entries(specifications).map(
						([section, values]) => (
							<div
								key={section}
								className="border border-gray-700 rounded-lg overflow-hidden"
							>
								<div className="bg-gray-900 px-5 py-3">
									<h3 className="text-lg font-semibold text-emerald-400">
										{section}
									</h3>
								</div>

								<div className="divide-y divide-gray-700">
									{Object.entries(values).map(
										([key, value]) => (
											<div
												key={key}
												className="flex flex-col md:flex-row md:justify-between gap-2 px-5 py-4"
											>
												<span className="text-gray-400 capitalize">
													{key}
												</span>

												<span className="text-white font-medium text-right">
													{String(value)}
												</span>
											</div>
										)
									)}
								</div>
							</div>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default InventorySpecifications;