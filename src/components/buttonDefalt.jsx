import { className } from '@/styles/colorsDeafalt'

const { colors } = className

export default function Button({ label, className, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`${colors.gradientContraste}  text-base rounded-md py-2 font-semibold shadow-2xl ${className} `}>
			{label}
		</button>
	)
}
