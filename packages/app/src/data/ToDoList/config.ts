import txt from "./data.md?raw";
import imgUrl from "./ToDoList.png";
import { IChallengeConfig } from "../config.ts";

export default {
  name: "(1440x720) ToDoList",
  instructions: txt,
  reference: imgUrl,
} as IChallengeConfig;
