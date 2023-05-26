/*  eslint-disable */
import Raphael from "raphael";
import parse from "./parse";
import RegExp from "./RegExp";
import NFA from "./NFA";
import Kit from "./Kit";
import visualize from "./visualize";

export default {
  Kit: Kit,
  NFA: NFA,
  RegExp: RegExp,
  parse: parse,
  Raphael: Raphael,
  visualize: visualize,
};
