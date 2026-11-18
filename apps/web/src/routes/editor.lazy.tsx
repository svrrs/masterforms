import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/f/$id")({ component: () => <p>Editor goes here</p> });
