import {
	Users,
	Package,
	ShoppingCart,
	DollarSign,
	Truck,
	AlertTriangle,
	UserPlus,
	BarChart3,
} from "lucide-react";


export const dashboardMetrics = [

	{
		id: "users",
		title: "Total de Usuários",
		key: "users",
		icon: Users,
		format: "number",
		description: "Usuários cadastrados na plataforma",
	},


	{
		id: "products",
		title: "Total de Produtos",
		key: "products",
		icon: Package,
		format: "number",
		description: "Produtos disponíveis no catálogo",
	},


	{
		id: "sales",
		title: "Total de Vendas",
		key: "sales",
		icon: ShoppingCart,
		format: "number",
		description: "Quantidade de pedidos realizados",
	},


	{
		id: "revenue",
		title: "Receita Total",
		key: "revenue",
		icon: DollarSign,
		format: "currency",
		description: "Faturamento acumulado",
	},


	{
		id: "deliveries",
		title: "Entregas",
		key: "deliveries",
		icon: Truck,
		format: "number",
		description: "Pedidos em transporte",
	},


	{
		id: "customers",
		title: "Novos Clientes",
		key: "newCustomers",
		icon: UserPlus,
		format: "number",
		description: "Novos cadastros recentes",
	},


	{
		id: "alerts",
		title: "Alertas",
		key: "alerts",
		icon: AlertTriangle,
		format: "number",
		description: "Problemas que precisam atenção",
	},


	{
		id: "performance",
		title: "Performance",
		key: "performance",
		icon: BarChart3,
		format: "percentage",
		description: "Indicadores gerais da loja",
	},

];