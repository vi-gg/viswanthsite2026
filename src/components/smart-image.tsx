import type { ImgHTMLAttributes } from "react";
import {
  cloudflareImageSrcSet,
  cloudflareImageUrl,
  isCloudflareImageOptimizeEnabled,
  mediaAssetUrl,
  webpVariant,
} from "@/lib/media-asset";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

export function SmartImage({ src, alt, ...props }: SmartImageProps) {
  const cfOptimizeEnabled = isCloudflareImageOptimizeEnabled();
  const webpSrc = webpVariant(src);
  const responsiveWidths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];
  const optimizedSrc = cloudflareImageUrl(src, { width: 1280 });
  const responsiveSrcSet = cloudflareImageSrcSet(src, responsiveWidths);

  if (cfOptimizeEnabled) {
    return (
      <img
        src={optimizedSrc}
        srcSet={props.srcSet ?? responsiveSrcSet}
        sizes={props.sizes ?? "100vw"}
        alt={alt}
        {...props}
      />
    );
  }

  return (
    <picture>
      {webpSrc ? (
        <source srcSet={mediaAssetUrl(webpSrc)} type="image/webp" />
      ) : null}
      <img src={optimizedSrc} alt={alt} {...props} />
    </picture>
  );
}
