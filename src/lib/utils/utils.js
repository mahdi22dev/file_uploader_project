import { toast } from "react-toastify";
import { client } from "../contentful";
import moment from "moment/moment";

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
export const notifySuccesUpload = () =>
  toast.success("File Uploaded successfully", {
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
      limit: 3,
      skip: 1,
    });

    return FeaturedPosts;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchAllPosts = async () => {
  try {
    const FeaturedPosts = await client.getEntries({
      content_type: "nextBlog",
    });
    return FeaturedPosts;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchPaginationPosts = async (skip, id, limit) => {
  let FeaturedPosts;
  try {
    if (id == 1) {
      FeaturedPosts = await client.getEntries({
        content_type: "nextBlog",
        limit: limit,
      });
    } else {
      FeaturedPosts = await client.getEntries({
        content_type: "nextBlog",
        limit: limit,
        skip: skip,
      });
    }

    return FeaturedPosts;
  } catch (error) {
    throw new Error(error);
  }
};

export const FetchOnePost = async (slug) => {
  try {
    const MyBlogData = await client.getEntries({
      content_type: "nextBlog",
      "fields.slug": slug,
    });
    return MyBlogData;
  } catch (error) {
    throw new Error(error);
  }
};

export const formattedDate = (dateStr) => {
  return moment(dateStr).format("MMMM DD, YYYY");
};

export function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
}

export const baseUrl = () => {
  const isProduction = process.env.NODE_ENV === "production";

  // Define your production and development base URLs
  const productionUrl =
    process.env.VERCEL_URL || "https://file-uploader-project.vercel.app";
  const developmentUrl = "http://localhost:3000"; // Change this to your local development URL

  // Return the appropriate base URL based on the environment
  return isProduction ? productionUrl : developmentUrl;
};
