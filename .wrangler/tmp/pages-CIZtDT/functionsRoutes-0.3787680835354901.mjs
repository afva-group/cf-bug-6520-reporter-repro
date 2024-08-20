import { onRequestPost as __api_submit_js_onRequestPost } from "C:\\Users\\Xcore1\\Desktop\\Repos\\Afva\\Sites\\Stockholmsmalare.se\\functions\\api\\submit.js"

export const routes = [
    {
      routePath: "/api/submit",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_submit_js_onRequestPost],
    },
  ]