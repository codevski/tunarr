"use client";

import Box from "@/components/Box";

const Error = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page not found</h2>
      </div>
    </Box>
  );
};

export default Error;
