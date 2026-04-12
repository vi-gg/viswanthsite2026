const CDN_BASE = process.env.NEXT_PUBLIC_CDN_BASE?.replace(/\/+$/, "");
const CF_IMAGE_OPTIMIZE =
  process.env.NEXT_PUBLIC_CF_IMAGE_OPTIMIZE === "1" ||
  process.env.NEXT_PUBLIC_CF_IMAGE_OPTIMIZE === "true";

type CloudflareImageOptions = {
  width?: number;
  quality?: number;
};

function splitSuffix(path: string) {
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const splitIndex =
    hashIndex === -1
      ? queryIndex
      : queryIndex === -1
        ? hashIndex
        : Math.min(hashIndex, queryIndex);

  if (splitIndex === -1) {
    return { base: path, suffix: "" };
  }

  return {
    base: path.slice(0, splitIndex),
    suffix: path.slice(splitIndex),
  };
}

function withReplacedExtension(path: string, nextExt: string) {
  const { base, suffix } = splitSuffix(path);
  const extIndex = base.lastIndexOf(".");

  if (extIndex === -1) {
    return undefined;
  }

  return `${base.slice(0, extIndex)}.${nextExt}${suffix}`;
}

export function mediaAssetUrl(path?: string) {
  if (!path) {
    return undefined;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  if (!CDN_BASE) {
    return path;
  }

  return path.startsWith("/") ? `${CDN_BASE}${path}` : `${CDN_BASE}/${path}`;
}

export function isCloudflareImageOptimizeEnabled() {
  return CF_IMAGE_OPTIMIZE;
}

export function webmVariant(path?: string) {
  if (!path) {
    return undefined;
  }

  const { base } = splitSuffix(path);
  if (!base.toLowerCase().endsWith(".mp4")) {
    return undefined;
  }

  return withReplacedExtension(path, "webm");
}

export function webpVariant(path?: string) {
  if (!path) {
    return undefined;
  }

  const { base } = splitSuffix(path);
  const lower = base.toLowerCase();
  if (
    !(lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg"))
  ) {
    return undefined;
  }

  return withReplacedExtension(path, "webp");
}

export function cloudflareImageUrl(path?: string, options?: CloudflareImageOptions) {
  if (!path) {
    return undefined;
  }

  if (!CF_IMAGE_OPTIMIZE) {
    return mediaAssetUrl(path);
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:")
  ) {
    return mediaAssetUrl(path);
  }

  const transforms = ["format=auto", "quality=70", "metadata=none"];
  if (options?.width && Number.isFinite(options.width)) {
    transforms.push(`width=${Math.round(options.width)}`);
  }
  if (options?.quality && Number.isFinite(options.quality)) {
    transforms[1] = `quality=${Math.round(options.quality)}`;
  }

  // Use Cloudflare's free on-the-fly image optimization route.
  // This works when the site is served from a Cloudflare zone/pages domain.
  return `/cdn-cgi/image/${transforms.join(",")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function cloudflareImageSrcSet(path?: string, widths: number[] = []) {
  if (!path || !CF_IMAGE_OPTIMIZE || widths.length === 0) {
    return undefined;
  }

  return widths
    .filter((width) => Number.isFinite(width) && width > 0)
    .map((width) => `${cloudflareImageUrl(path, { width })} ${Math.round(width)}w`)
    .join(", ");
}
