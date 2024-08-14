"use server";

import { isUrlValid } from "@/lib/Hooks";

export const listingDomain = async (domain) => {
  try {
    if (!domain) throw "Please enter domain";
    // let _url = true
    const _url = await isUrlValid(domain);
    if (_url) {
      const url = new URL(domain);
      const _domain = url.hostname;
      console.log(_domain, "ghjgjhg");
      return { status: true, domain: _domain };
    } else {
      throw `[${domain}] is not a valid domain name`;
    }
  } catch (error:any) {
    return { status: false, error: error };
  }
};
