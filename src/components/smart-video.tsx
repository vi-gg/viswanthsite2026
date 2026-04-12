import type { VideoHTMLAttributes } from "react";
import { mediaAssetUrl, webmVariant } from "@/lib/media-asset";

type SmartVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
};

export function SmartVideo({ src, poster, children, ...props }: SmartVideoProps) {
  const webmSrc = webmVariant(src);

  return (
    <video {...props} poster={mediaAssetUrl(poster)}>
      {webmSrc ? <source src={mediaAssetUrl(webmSrc)} type="video/webm" /> : null}
      <source src={mediaAssetUrl(src)} type="video/mp4" />
      {children}
    </video>
  );
}

