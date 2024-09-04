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


export function debounce(fn:Callback, delay:number) {
  let timeoutId:any;
  return (...args:any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
