import { message, danger } from "danger"

const php = danger.git.fileMatch("**/*.php");
const js = danger.git.fileMatch("src/**/*.js");

if (php.created || php.modified) {
  danger.github.utils.createOrAddLabel('Backend');
}

if (js.created || js.modified) {
  danger.github.utils.createOrAddLabel('Frontend');
}

message('Hello from Danger');