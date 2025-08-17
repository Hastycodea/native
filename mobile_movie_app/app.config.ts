import "dotenv/config";

export default {
  expo: {
    name: "myapp",
    slug: "myapp",
    extra: {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
      SAMPLE_TEXT: process.env.SAMPLE_TEXT,
    },
  },
};
