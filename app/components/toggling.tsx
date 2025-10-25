"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Button variant="secondary" size="lg" onClick={toggleTheme}>
      {theme === "dark" ? (
        <span className="text-white">light</span>
      ) : (
        <span className="text-black">dark</span>
      )}
    </Button>
  );
}
