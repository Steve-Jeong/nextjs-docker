import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? ""
      }),

    ]
}