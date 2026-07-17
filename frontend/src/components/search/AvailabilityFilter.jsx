const AvailabilityFilter = () => {
	return (
		<div>

			<h3 className="text-lg font-semibold text-white mb-4">
				Disponibilidade
			</h3>

			<div className="space-y-3">

				<label className="flex items-center gap-3 cursor-pointer">

					<input
						type="checkbox"
						className="w-4 h-4 accent-emerald-500"
					/>

					<span className="text-gray-300">
						Em estoque
					</span>

				</label>

				<label className="flex items-center gap-3 cursor-pointer">

					<input
						type="checkbox"
						className="w-4 h-4 accent-emerald-500"
					/>

					<span className="text-gray-300">
						Pronta entrega
					</span>

				</label>

				<label className="flex items-center gap-3 cursor-pointer">

					<input
						type="checkbox"
						className="w-4 h-4 accent-emerald-500"
					/>

					<span className="text-gray-300">
						Oferta
					</span>

				</label>

			</div>

		</div>
	);
};

export default AvailabilityFilter;