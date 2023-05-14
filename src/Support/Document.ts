import error from "./Error";

export const document = window.document || error("The document cannot be found");