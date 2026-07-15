import { motion } from "framer-motion";

const SpecificationField = ({
	field,
	value,
	onChange,
}) => {
	const handleChange = (newValue) => {
		onChange(field.key, newValue);
	};

	const commonClasses =
		"mt-2 w-full rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500";

	const renderField = () => {
		switch (field.type) {
			case "textarea":
				return (
					<textarea
						rows={4}
						value={value || ""}
						onChange={(e) => handleChange(e.target.value)}
						placeholder={field.placeholder}
						className={commonClasses}
					/>
				);

			case "number":
				return (
					<input
						type="number"
						value={value || ""}
						onChange={(e) => handleChange(e.target.value)}
						placeholder={field.placeholder}
						className={commonClasses}
					/>
				);

			case "select":
				return (
					<select
						value={value || ""}
						onChange={(e) => handleChange(e.target.value)}
						className={commonClasses}
					>
						<option value="">
							Selecione...
						</option>

						{field.options?.map((option) => (
							<option
								key={option}
								value={option}
							>
								{option}
							</option>
						))}
					</select>
				);

			case "checkbox":
				return (
					<label className="mt-3 flex cursor-pointer items-center gap-3">
						<input
							type="checkbox"
							checked={value || false}
							onChange={(e) => handleChange(e.target.checked)}
							className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-emerald-500 focus:ring-emerald-500"
						/>

						<span className="text-sm text-gray-300">
							{field.checkboxLabel || "Sim"}
						</span>
					</label>
				);

			default:
				return (
					<input
						type="text"
						value={value || ""}
						onChange={(e) => handleChange(e.target.value)}
						placeholder={field.placeholder}
						className={commonClasses}
					/>
				);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25 }}
			className="space-y-1"
		>
			<div className="flex items-center gap-2">
				<label className="text-sm font-medium text-gray-200">
					{field.label}
				</label>

				{field.required && (
					<span className="text-red-400">
						*
					</span>
				)}
			</div>

			{field.description && (
				<p className="text-xs text-gray-400">
					{field.description}
				</p>
			)}

			{renderField()}
		</motion.div>
	);
};

export default SpecificationField;