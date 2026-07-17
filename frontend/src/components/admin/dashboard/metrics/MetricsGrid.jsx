import {
	Users,
	Package,
	ShoppingCart,
	DollarSign,
	TrendingUp,
	AlertTriangle,
	ShoppingBasket,
	Percent,
} from "lucide-react";

import MetricCard from "./MetricCard";


const MetricsGrid = ({ analytics = {} }) => {


	const metrics = [

		{
			title: "Usuários",
			value: analytics.users?.value || "0",
			growth: "+12%",
			icon: Users,
			color: "emerald",
			description: "Novos clientes cadastrados",
		},


		{
			title: "Produtos",
			value: analytics.products?.value || "0",
			growth: "+5%",
			icon: Package,
			color: "blue",
			description: "Produtos ativos no catálogo",
		},


		{
			title: "Pedidos",
			value: analytics.sales?.value || "0",
			growth: "+18%",
			icon: ShoppingCart,
			color: "purple",
			description: "Pedidos realizados",
		},


		{
			title: "Receita",
			value: `R$ ${analytics.revenue?.value || "0"}`,
			growth: "+22%",
			icon: DollarSign,
			color: "emerald",
			description: "Faturamento total",
		},


		{
			title: "Ticket Médio",
			value: `R$ ${analytics.averageTicket ?? 0}`,
			icon: TrendingUp,
			color: "orange",
			description: "Valor médio por pedido",
		},


		{
			title: "Conversão",
			value: `${analytics.conversion ?? 0}%`,
			icon: Percent,
			color: "blue",
			description: "Taxa de conversão da loja",
		},


		{
			title: "Estoque Baixo",
			value: analytics.lowStock ?? 0,
			icon: AlertTriangle,
			color: "red",
			description: "Produtos precisam reposição",
		},


		{
			title: "Carrinhos Abandonados",
			value: analytics.abandonedCarts ?? 0,
			icon: ShoppingBasket,
			color: "purple",
			description: "Clientes que não finalizaram",
		},

	];



	return (

		<div className="
			grid 
			grid-cols-1 
			gap-6 
			sm:grid-cols-2 
			xl:grid-cols-4
		">

			{
				metrics.map((metric)=>(

					<MetricCard
						key={metric.title}
						{...metric}
					/>

				))
			}

		</div>

	);

};


export default MetricsGrid;