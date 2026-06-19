import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as personal } from "./portfolio-data-C7lImfDF.mjs";
import { a as stringType, r as objectType } from "../_libs/zod.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-form.server-ClrUrRch.js
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function getRequiredEnv(name) {
	const value = process.env[name];
	if (!value) throw new Error(`Missing environment variable: ${name}`);
	return value;
}
async function sendContactEmail(payload) {
	const transporter = import_nodemailer.default.createTransport({
		host: getRequiredEnv("SMTP_HOST"),
		port: Number(getRequiredEnv("SMTP_PORT")),
		secure: getRequiredEnv("SMTP_SECURE") === "true",
		auth: {
			user: getRequiredEnv("SMTP_USER"),
			pass: getRequiredEnv("SMTP_PASS")
		}
	});
	const from = process.env.CONTACT_FROM_EMAIL ?? getRequiredEnv("SMTP_USER");
	const to = process.env.CONTACT_TO_EMAIL ?? personal.email;
	await transporter.sendMail({
		from,
		to,
		replyTo: payload.email,
		subject: `New portfolio message from ${payload.name}`,
		text: [
			`Name: ${payload.name}`,
			`Email: ${payload.email}`,
			"",
			payload.message
		].join("\n"),
		html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br />")}</p>
    `
	});
}
var ContactFormSchema = objectType({
	name: stringType().min(2).max(100),
	email: stringType().email(),
	message: stringType().min(10).max(5e3)
});
var submitContactForm_createServerFn_handler = createServerRpc({
	id: "b02c23f871ea909bb64c037cd6c2b9f091be94937cf2f19dd4a367cea69977b3",
	name: "submitContactForm",
	filename: "src/lib/contact-form.server.ts"
}, (opts) => submitContactForm.__executeServer(opts));
var submitContactForm = createServerFn({ method: "POST" }).validator((data) => ContactFormSchema.parse(data)).handler(submitContactForm_createServerFn_handler, async ({ data }) => {
	await sendContactEmail(data);
	return { ok: true };
});
//#endregion
export { submitContactForm_createServerFn_handler };
