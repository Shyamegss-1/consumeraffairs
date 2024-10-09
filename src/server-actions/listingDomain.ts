import { isUrlValid } from "@/lib/Hooks";

export const listingDomain = async (domain: any) => {
  try {
    if (!domain) throw "Please enter domain";
    // let _url = true
    const _url = await isUrlValid(domain);
    if (_url) {
      const url = new URL(domain);
      const _domain = url.hostname;
      console.log(_domain, "ghjgjhg");
      return { status: true, domain: _domain };
    } else if (/^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,}$/.test(domain)) {
      return { status: true, domain: domain };
    } else {
      throw `[${domain}] is not a valid domain name`;
    }
  } catch (error: any) {
    return { status: false, error: error };
  }
};


