import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
	PlusCircle,
	ShoppingBasket,
	LayoutDashboard,
} from "lucide-react";


import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";

import DashboardHeader from "../components/admin/dashboard/DashboardHeader";
import DashboardFilters from "../components/admin/dashboard/DashboardFilters";

import MetricsGrid from "../components/admin/dashboard/metrics/MetricsGrid";


import RevenueChart from "../components/admin/dashboard/revenue/RevenueChart";
import FinancialOverview from "../components/admin/dashboard/revenue/FinancialOverview";


import ProductPerformance from "../components/admin/dashboard/products/ProductPerformance";
import CategoryPerformance from "../components/admin/dashboard/products/CategoryPerformance";


import InventoryOverview from "../components/admin/dashboard/inventory/InventoryOverview";


import LogisticsOverview from "../components/admin/dashboard/logistics/LogisticsOverview";


import CustomerAnalytics from "../components/admin/dashboard/customers/CustomerAnalytics";
import RecentCustomers from "../components/admin/dashboard/customers/RecentCustomers";


import RecentOrders from "../components/admin/dashboard/orders/RecentOrders";
import OrderTable from "../components/admin/dashboard/orders/OrderTable";


import AlertsPanel from "../components/admin/dashboard/alerts/AlertsPanel";
import SystemNotifications from "../components/admin/dashboard/alerts/SystemNotifications";


import useDashboardAnalytics from "../hooks/useDashboardAnalytics";


const tabs = [

	{
		id:"dashboard",
		label:"Dashboard",
		icon:LayoutDashboard,
	},

	{
		id:"create",
		label:"Criar Produto",
		icon:PlusCircle,
	},


	{
		id:"products",
		label:"Produtos",
		icon:ShoppingBasket,
	},

];



const AdminPage = () => {


	const [activeTab,setActiveTab] =
		useState("dashboard");


	const {
		analytics,
		loading
	}=useDashboardAnalytics();



	if(loading){

		return (
			<div className="flex h-screen items-center justify-center text-white">
				Carregando dashboard...
			</div>
		);

	}



	return (

		<div className="min-h-screen overflow-hidden">


			<div className="container mx-auto px-4 py-10">


				<motion.h1

					className="
					mb-8
					text-center
					text-4xl
					font-bold
					text-emerald-400
					"

					initial={{
						opacity:0,
						y:-20
					}}

					animate={{
						opacity:1,
						y:0
					}}

				>

					Admin Dashboard

				</motion.h1>




				<div className="mb-8 flex justify-center">


					{tabs.map((tab)=>(
						
						<button

							key={tab.id}

							onClick={()=>
								setActiveTab(tab.id)
							}

							className={`
								mx-2
								flex
								items-center
								gap-2
								rounded-lg
								px-5
								py-3
								transition

								${
									activeTab===tab.id
									?
									"bg-emerald-600 text-white"
									:
									"bg-gray-700 text-gray-300"
								}
							`}

						>

							<tab.icon size={20}/>

							{tab.label}

						</button>

					))}


				</div>





				{activeTab==="dashboard" && (

					<div className="space-y-8">


						<DashboardHeader
							data={analytics}
						/>


						<DashboardFilters />



						<MetricsGrid
							data={analytics || {}}
						/>




						<div className="grid gap-8 lg:grid-cols-2">

							<RevenueChart
								data={
									analytics?.sales || []
								}
							/>


							<FinancialOverview
								data={
									analytics?.financial
								}
							/>


						</div>





						<div className="grid gap-8 lg:grid-cols-2">

							<ProductPerformance
								data={
									analytics?.products
								}
							/>


							<CategoryPerformance
								data={
									analytics?.categories
								}
							/>


						</div>





						<InventoryOverview
							data={
								analytics?.inventory
							}
						/>





						<LogisticsOverview
							data={
								analytics?.logistics
							}
						/>


						<div className="grid gap-8 lg:grid-cols-2">

							<CustomerAnalytics
								customers={
									analytics?.customers
								}
							/>


							<RecentCustomers
								customers={
									analytics?.recentCustomers
								}
							/>

						</div>


						<div className="grid gap-8 lg:grid-cols-2">


							<RecentOrders
								orders={
									analytics?.orders
								}
							/>


							<AlertsPanel
								alerts={
									analytics?.alerts
								}
							/>


						</div>

						<SystemNotifications
							notifications={
								analytics?.notifications
							}
						/>


					</div>

				)}


				{activeTab==="create" && (

					<CreateProductForm />

				)}

				{activeTab==="products" && (

					<ProductsList />

				)}



			</div>


		</div>

	);

};


export default AdminPage;