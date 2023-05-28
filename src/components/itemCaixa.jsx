export default function ItemCaixa({ type, value, className }) {
	const numeberFormat = new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	}).format(value)

	return (
		<div className={`grid grid-cols-2 ${className}`}>
			<span>{type}</span>

			<span>{numeberFormat}</span>
		</div>
	)
}
