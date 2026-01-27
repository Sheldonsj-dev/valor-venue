import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageView } from "../lib/analytics";

export default function RouteAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // HashRouter: pathname/search reflect the hash route (good)
    const path = `${location.pathname}${location.search}`;
    pageView(path);
  }, [location.pathname, location.search]);

  return null;
}