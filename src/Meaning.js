import React from "react";
import emojipedia from "./emojipedia";
const meanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(meanings);
