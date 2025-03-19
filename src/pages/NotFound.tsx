
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="glass-card rounded-xl p-8 md:p-12 max-w-md w-full text-center">
        <h1 className="text-heading-lg mb-2 tracking-tight text-accent">404</h1>
        <p className="text-xl font-medium mb-6">Page not found</p>
        <p className="text-muted-foreground mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center justify-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
