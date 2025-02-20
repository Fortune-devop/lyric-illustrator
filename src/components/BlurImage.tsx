
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className }: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
