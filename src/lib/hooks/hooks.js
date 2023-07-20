import { notFound } from "next/navigation";

export const fetchHook = async (url, options) => {
  try {
    const response = await fetch(url, options || null);
    if (!response.ok) {
      return notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {}
};
