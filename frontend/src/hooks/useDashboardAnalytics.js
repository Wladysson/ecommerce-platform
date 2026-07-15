import { useEffect, useState } from "react";
import adminService from "../services/adminService";


const useDashboardAnalytics = (period = "30days") => {

	const [analytics, setAnalytics] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);


	const fetchAnalytics = async () => {

		try {

			setLoading(true);

			const data = await adminService.getAnalytics(period);

			setAnalytics(data);

		} catch (err) {

			setError(
				err.response?.data?.message ||
				"Erro ao carregar analytics"
			);

		} finally {

			setLoading(false);

		}

	};



	useEffect(() => {

		fetchAnalytics();

	}, [period]);



	return {
		analytics,
		loading,
		error,
		refresh: fetchAnalytics,
	};

};


export default useDashboardAnalytics;