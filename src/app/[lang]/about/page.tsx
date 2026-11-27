import { langRoute } from "@/components/sites/genghiskhan/routes";

const route = langRoute("about");
export const generateMetadata = route.generateMetadata;
export default route.Page;
