// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import profileJson from '../data/profile.json';
const profile = profileJson["profile"];
import image from '../data/avatar-dev.png'

// Extend the LitElement base class
class CodeChallengeElement extends LitElement {

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render() {
        const name = profile["name"];
        const profession = profile["profession"];
        const description = profile["description"];

        const contact = profile["contact"];
        const tel = contact["tel"];
        const cel = contact["cel"];
        const address = contact["address"];
        const website = contact["website"];
        const mail = contact["mail"];

        const skills = profile["skills"];
        const experience = profile["experience"];
        const education = profile["education"];

        //If we were to get data from API instead of local file,
        // fetch('http://www.mocky.io/v2/5a5e38f3330000b0261923a5',)
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(myJson) {
        //   console.log(JSON.stringify(myJson));
        // });


        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html`
      <!-- template content -->
      <meta name="viewport" content="width=device-width">
      <div class="resume">
        <div class="brief">
            <img src=${image}>
            <div class="sub-header name">${name}</div>
            <div class="sub-header profession">${profession}</div>
            <div class="sub-header">profile</div>
            <div>${description}</div>
            <div class="sub-header">contact</div>
            <div class="contact digits">
                <div class="digits">${tel}</div>
                <div class="digits">${cel}</div>
            </div>
            <div class="contact address">
                <div class="address">${address}</div>
            </div>
            <div class="contact web">
                <div class="web">${website}</div>
                <div class="web">${mail}</div>
            </div>
            <div class="sub-header skills">skills</div>
            ${skills.map((skill) => html`
            <div class="skill">
                <div class="skill-name">${skill["name"]}</div>
                <div class="bar">
                    <div class="bar-color" style="height:2.5vw;width:${skill["value"]}"></div>
                </div>
            </div>`)}
        </div>
        <div class="detail">
            <div class="experience sub-header">work experience</div>
                ${experience.map((eachExperience) => html`
                <div class="sub-header experience-name">${eachExperience["name"]}</div>
                <div class="date">${eachExperience["date"]}</div>
                <div class="description">${eachExperience["description"]}</div>
                `)}
            <div class="education sub-header">Education</div>
            ${education.map((eachDegree) => html`
            <div class="sub-header experience-name">${eachDegree["name"]}</div>
            <div class="date">${eachDegree["date"]}</div>
            <div class="description">${eachDegree["description"]}</div>
            `)}
        </div>
    </div>
    `;
    }

    createRenderRoot() {
        /**
         * Render template in light DOM. Note that shadow DOM features like
         * encapsulated CSS are unavailable.
         */
        return this;
    }
}

// Register the new element with the browser.
customElements.define('code-challenge-element', CodeChallengeElement);
