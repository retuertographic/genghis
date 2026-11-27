import { langRoute } from "@/components/sites/genghiskhan/routes";

const route = langRoute("bookings");
export const generateMetadata = route.generateMetadata;
export default route.Page;
