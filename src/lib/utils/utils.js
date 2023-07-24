import { toast } from "react-toastify";
import { client } from "./contentful";

export function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
}
export const notify = () =>
  toast.warn("Please Choose a File to Upload!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    style: {
      color: "#fff",
    },
  });
export const notifyClipBoard = () =>
  toast.success("link copied to your clipboard", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    bodyStyle: { color: " var(--color-primary-a10" },
    progressStyle: { backgroundColor: " var(--color-primary-a10)" },
    style: {
      color: "#fff",
    },
  });
export const codeCopy = () =>
  toast.success("code copied", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    bodyStyle: { color: " var(--color-primary-a10" },
    progressStyle: { backgroundColor: " var(--color-primary-a10)" },
    style: {
      color: "#fff",
    },
  });

export const copyToclipBoard = (link) => {
  navigator.clipboard.writeText(link);
};
export const FetchFeaturedfirstPost = async () => {
  try {
    const FeaturedfirstPost = await client.getEntries({
      content_type: "nextBlog",
      limit: 1,
    });

    return FeaturedfirstPost;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchFeaturedPosts = async () => {
  try {
    const FeaturedPosts = await client.getEntries({
      content_type: "nextBlog",
      limit: 4,
      skip: 1,
    });

    return FeaturedPosts;
  } catch (error) {
    throw new Error(error);
  }
};
