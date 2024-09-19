import { NextRequest } from "next/server";
import { prisma } from "../../prisma/prisma";
import { Callback } from "ioredis";

function removeHttpsAndWww(url: string) {
  let cleanedUrl = url?.replace(/^https:\/\//, "");
  cleanedUrl = cleanedUrl?.replace(/^www\./, "");

  return cleanedUrl;
}

export function isUrlValid(url: string) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

export const CatchAsync = async (fn: any) => {
  return (req: NextRequest, res: NextRequest, next: any) => {
    fn(req, res, next)
      .catch(next)
      .finally(async () => {
        await prisma.$disconnect();
      });
  };
};

export async function checkConnection() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  } finally {
    await prisma.$disconnect();
  }
}

export function debounce(fn: Callback, delay: number) {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function convertToBase64(file: any) {
  if (!file) {
    return "";
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String: string = (reader.result as string) || ""; // Extract Base64 content
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function extractDomain(url: string) {
  // Regular expression to match a valid domain from a URL
  const regex = /^(?:https?:\/\/)?(?:www\.)?([\w-]+\.[\w.-]+)(?:\/|$)/i;

  // Use the regex to find the domain
  const match = url.match(regex);

  // If a match is found, return the domain
  if (match) {
    return match[1];
  } else {
    // Return null or an error message if the input is not a valid URL
    return null;
  }
}
