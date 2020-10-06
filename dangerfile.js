import { message, danger } from "danger"

const php = danger.git.fileMatch("**/*.php");
const js = danger.git.fileMatch("src/**/*.js");

const backendLabel = { color: '#F00',  description: 'Backend Related Change',  name: 'Backend' };
const frontendLabel = { color: '#00F',  description: 'Frontend Related Change',  name: 'Frontend' };

{"modified":false,"created":true,"deleted":false,"edited":true}

if (php.created || php.modified || php.deleted || php.edited) {
  danger.github.utils.createOrAddLabel(backendLabel);
}

if (js.created || js.modified || js.deleted || js.edited) {
  danger.github.utils.createOrAddLabel(frontendLabel);
}

message('Hello from Danger');
