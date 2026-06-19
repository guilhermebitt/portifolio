//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-C0-ViIFV.js
var manifest = { "b02c23f871ea909bb64c037cd6c2b9f091be94937cf2f19dd4a367cea69977b3": {
	functionName: "submitContactForm_createServerFn_handler",
	importer: () => import("./_ssr/contact-form.server-ClrUrRch.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
