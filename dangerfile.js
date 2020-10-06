import { message, danger } from "danger"

const php = danger.git.fileMatch("**/*.php");
const js = danger.git.fileMatch("src/**/*.js");

const backendLabel = { color: '#ff0000',  description: 'Backend Related Change',  name: 'Backend' };
const frontendLabel = { color: '#0000ff',  description: 'Frontend Related Change',  name: 'Frontend' };

if (php.created || php.modified || php.deleted || php.edited) {
  message('PHP files changed, adding Backend label');
  danger.github.utils.createOrAddLabel(backendLabel);
}

if (js.created || js.modified || js.deleted || js.edited) {
  message('JS files changed, adding Frontend label');
  danger.github.utils.createOrAddLabel(frontendLabel);
}

const baseBranch = danger.github.pr.base.ref;

if (baseBranch.toLowerCase().includes('projcat')) {
  message('Adding Projcat label');
  danger.github.utils.createOrAddLabel({ color: '#00ff00',  description: baseBranch,  name: baseBranch });
}
