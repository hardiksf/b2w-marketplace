import '../sass/style.sass'
import { html, render } from 'lit-html';

import './code-challenge-element';
const CodeChallengeElement = html `<code-challenge-element></code-challenge-element>`
render(CodeChallengeElement, document.body);
