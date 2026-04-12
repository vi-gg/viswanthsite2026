import type { ImgHTMLAttributes } from "react";
import { mediaAssetUrl, webpVariant } from "@/lib/media-asset";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

export function SmartImage({ src, alt, ...props }: SmartImageProps) {
  const webpSrc = webpVariant(src);

  return (
    <picture>
      {webpSrc ? (
        <source srcSet={mediaAssetUrl(webpSrc)} type="image/webp" />
      ) : null}
      <img src={mediaAssetUrl(src)} alt={alt} {...props} />
    </picture>
  );
}

