export const adminPermissions = {


	ADMIN: [

		"dashboard:view",

		"products:create",

		"products:update",

		"products:delete",

		"orders:view",

		"orders:update",

		"customers:view",

		"inventory:view",

		"inventory:update",

		"analytics:view",

		"reports:view",

	],




	MANAGER: [

		"dashboard:view",

		"products:create",

		"products:update",

		"orders:view",

		"orders:update",

		"customers:view",

		"analytics:view",

	],




	INVENTORY: [

		"products:view",

		"inventory:view",

		"inventory:update",

	],




	FINANCE: [

		"dashboard:view",

		"orders:view",

		"analytics:view",

		"reports:view",

	],


};



export const hasPermission = (
	role,
	permission
)=>{


	return adminPermissions[
		role
	]?.includes(permission)
	|| false;


};