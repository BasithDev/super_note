import { useState, useEffect, Suspense } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (event) => {
      console.error("Microfrontend Error:", event);
      setHasError(true);
      event.preventDefault(); // Prevents app crash due to unhandled module load failure
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return <h2>Feature is temporarily unavailable.</h2>;
  }

  return children;
};

export default ErrorBoundary;