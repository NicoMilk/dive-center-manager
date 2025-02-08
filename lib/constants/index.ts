export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Dive Center Manager";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "App to fully manage a dive center, built with NextJS, based on Traversy's course";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT = Number(
  process.env.LATEST_PRODUCTS_LIMIT || 4
);

export const signInDefaultValues = {
  email: "",
  password: "",
};
