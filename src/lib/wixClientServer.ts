// this will contain server-side logic to interact with Wix APIs

// for example, fetching products, categories, etc. i.e will be fetched on server side
import { createClient, OAuthStrategy } from "@wix/sdk";
// because this is server side, we can use next/headers to get cookies
import { cookies } from "next/headers";
import { products, collections } from "@wix/stores";
import { productsV3 } from "@wix/stores";
import { categories } from "@wix/categories";

export const WixClientServer = async () => {
  let refreshToken;
  try {
    refreshToken = JSON.parse(
      (await cookies()).get("refreshToken")?.value || "{}",
    );
  } catch (e) {}
  const wixClient = createClient({
    modules: {
      products,
      collections,
      productsV3,
      categories,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_ID || "",
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
  return wixClient;
};
