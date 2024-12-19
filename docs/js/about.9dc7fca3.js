(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Resume")]),a("div",{staticClass:"paragraph"},[e._v(" I am a software engineer currently working as an AR Software Engineer at "),a("a",{attrs:{href:"https://www.trace3d.app/"}},[e._v("Trace 3D")]),e._v(" with a passion for developing interactive media applications. I’ve led projects ranging from immersive augmented reality experiences to 3D educational simulations. I enjoy working with multidisciplinary teams and have hands-on experience with Unity, C#, JavaScript, and Babylon.js. I am committed to strong programming practices and driven by a passion for crafting intuitive, engaging digital experiences. "),a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"/d/AaronPostResume.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v("Resume PDF")]),a("div",{staticStyle:{clear:"both"}})])]),a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/resume-photo.png",alt:"Photo of Aaron"}})]),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"full-content"},[a("div",{staticStyle:{clear:"both"}}),a("h2",[e._v("Besides Programming...")]),a("div",[a("h3",[e._v("I 🩶 Music")]),a("div",[e._v(" I deeply appreciate music -- creating it, listening to new releases, and following internet discourse. ")]),a("h3",[e._v("I 🩵 Fitness")]),a("div",[e._v(" I love lifting heavy objects in my spare time. I've also been trying to convince myself I enjoy running. ")]),a("h3",[e._v("I 💙 Film and TV")]),a("div",[e._v(" One of my favorite days was spent eating cherry pie at the real-life Double R Diner from Twin Peaks. ")])])])])}],s=a("2b0e"),i=s["a"].extend({name:"Resume"}),o=i,c=(a("2fec"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,"3b19eb74",null);t["default"]=l.exports},"253f":function(e,t,a){"use strict";var n=a("35d1"),r=a.n(n);r.a},"27bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[a("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(a){return e.showDetails(t)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},r=[],s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":e.color}},[a("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),a("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},o=[],c=s["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),l=c,d=(a("4327"),a("2877")),p=Object(d["a"])(l,i,o,!1,null,"6d5ad615",null),u=p.exports,m=s["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),f=m,v=(a("f279"),Object(d["a"])(f,n,r,!1,null,"24242aa2",null));t["a"]=v.exports},"2fec":function(e,t,a){"use strict";var n=a("5f43"),r=a.n(n);r.a},"35d1":function(e,t,a){},4327:function(e,t,a){"use strict";var n=a("8c15"),r=a.n(n);r.a},"4d97":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Game Projects")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},r=[],s=a("2b0e"),i=a("27bb"),o=a("983d"),c=[new o["a"]("project-1","Good Soup","img/projects/project-1-icon.png",'\n    <div class="paragraph">\n    I led the design and development of a cozy point-and-click game called <strong>Good Soup</strong> where you play as a mischievous ghost, influencing the life of Amber, a culinary student. I built a behavior tree system that drives Amber’s actions, where player interactions directly impact the branches she follows. Your choices dynamically affect her mood, alter her decisions, and unlock different story outcomes.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/OPVhYqheEM8" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n        <div class="paragraph">\n<strong>Good Soup</strong> went through four key development milestones: a "Core Mechanics" whitebox, followed by alpha, beta, and gold iterations. Each release was thoroughly playtested, and I worked to integrate as much feedback as possible, with a focus on refining mechanics, game feel, intuitiveness, and art assets.\n        </div>\n        <div class="paragraph center">\n            <img class="pc-screenshot" src="img/projects/versionssouop.gif"></img>\n        </div>\n    <div class="paragraph center">\n        <strong>Good Soup is coming soon to steam!</strong>\n    </div>\n    ',"#800080",!0),new o["a"]("project-2","Lost in the Static","img/projects/project-2-icon.png",'\n    <div class="paragraph">\n        I led the design and development of a narrative puzzle game over 6 weeks. I programmed many systems for the game and built a one-of-a-kind radio controller using an Arduino. I worked alongside a diverse team of six students: software engineers, artists, narrative writers. <strong>Lost in the Static</strong> was presented at the <a href="https://accad.osu.edu/outreach">2024 ACCAD Open House</a> as an example of some of the best work being done in the department.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/ZJPeOQ3XgFY" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph">\n    </div>\n\n    <div class="paragraph center">\n    <img class="pc-screenshot" src="img/projects/litsgif (1).gif" alt="LITS demo" />\n    <img class="pc-screenshot" src="img/projects/radiocontroller.gif" alt="Singing Addict Screenshot" />\n        <img class="pc-screenshot" src="img/projects/controllerfront.jpg" alt="LITS demo" />\n    <img class="pc-screenshot" src="img/projects/controllerwiring.jpg" alt="Singing Addict Screenshot" />\n    </div>\n    ',"#880808"),new o["a"]("project-3","ClashCraft","img/projects/clash.png",'\n    <div class="paragraph">\nI created a Minecraft plugin using Java that transforms a multiplayer server into a recreation of the mobile game Clash of Clans. Players can build their own island, attack offline players\' bases, and collect resources.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/H8aE69ND6ew" frameborder="0" allowfullscreen></iframe>\n    </div>\n    Sample JSON Data for Player Islands\n    <pre class="code-snippet">\n{\n    "island": {\n        "buildingsToSave": [\n        {\n            "type": "TownHall",\n            "properties": {\n            "state": {\n                "type": "IslandState",\n                "properties": {}\n            },\n            "uuid": "756d6990-126a-4d6c-8d14-87987bce9feb",\n            "x": 36,\n            "z": 30,\n            "buildTime": 4,\n            "level": 1\n            }\n        },\n        {\n            "type": "ElixirCollector",\n            "properties": {\n                "amount": 5000.0,\n                "currencyName": "elixir",\n                "state": {\n                    "type": "IslandState",\n                    "properties": {}\n                },\n                "uuid": "8826a726-1965-4d24-bdb0-e954e2b13146",\n                "x": 38,\n                "z": 54,\n                "buildTime": 686,\n                "level": 4\n            }\n        },\n        {\n            "type": "ElixirStorage",\n            "properties": {\n                "state": {\n                    "type": "IslandState",\n                    "properties": {}\n                },\n                "uuid": "4cf8291b-ccc0-4a0f-ad9d-7ca8c1d25e38",\n                "x": 22,\n                "z": 50,\n                "buildTime": 1412,\n                "level": 3\n            }\n        }\n        ]\n    },\n    "currencies": {\n        "elixir": {\n            "type": "Elixir",\n            "properties": {\n                "amount": 7000,\n                "maxAmount": 7000\n            }\n        }\n    },\n    "u": "89465e61-a25d-45a1-891e-1fcac9bf49f2",\n    "playerUsername": "Aaronn"\n}\n    </pre>\n    ',"#454B1B"),new o["a"]("project-4","Limbo Arcade","img/projects/limboarcade.png",'\n    <div class="paragraph">\n    I designed and developed a short puzzle game using C# and Unity. Along with programming, I created basic animations, 3D and 2D art assets, particle effects, and sound effects.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/nCea7lnLYwE" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph">\n        <strong>Limbo Arcade</strong> was the culmination of three smaller, experimental PS2-style games I made. Playtesters were most captivated by the light puzzle aspects of these games, so I structured <strong>Limbo Arcade</strong> as an escape room full of puzzles.\n        You can view the other Limbo games <a href="https://www.youtube.com/watch?v=EA5PAlIobvw&list=PLjBSsBYMtaRxzSvgKYxw55_NHFzq9YmrI">here</a>.\n        </div>\n    ',"#A9A9A9"),new o["a"]("project-5","Stern Gerlach Simulation","img/projects/sg.png",'\n    <div class="paragraph">\n        I designed and developed a prototype educational simulation with Unity and C# that intends to teach abstract physics concepts to college students. Users place down components including magnets and detector plates and fire silver atoms through the setup.\n    </div>\n\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/GjAn0ApUaGY" frameborder="0" allowfullscreen></iframe>\n    </div>\n\n    <div class="paragraph center">\n\n    </div>',"#e48246")],l=s["a"].extend({name:"GameProjects",components:{ProjectsList:i["a"]},data:function(){return{projects:c}}}),d=l,p=a("2877"),u=Object(p["a"])(d,n,r,!1,null,null,null);t["default"]=u.exports},"5f43":function(e,t,a){},6598:function(e,t,a){"use strict";var n=a("c011"),r=a.n(n);r.a},"67f3":function(e,t,a){"use strict";var n=a("ee3f"),r=a.n(n);r.a},"7c58":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" These are other projects that I have worked on that aren't game-related. ")]),a("ProjectsList",{attrs:{projects:e.projects}})],1)},r=[],s=a("2b0e"),i=a("27bb"),o=a("983d"),c=[new o["a"]("project-6","Simple Drive","img/projects/drive.png",'\n    <div class="paragraph">\n      I designed and developed a Windows Forms app that integrates with AWS services. Users are able to create their own account and securely upload, download, and share files in the cloud.\n            </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/eu_6SOVnN8g" frameborder="0" allowfullscreen></iframe>\n    </div>\n        <div class="paragraph center">\n              <div class="notice">\n                Source code available on <a href="https://github.com/aaronpostus/SimpleDrive" target="_blank">GitHub</a>.\n              </div>\n        </div>\n    ',"#000000",!1,!0),new o["a"]("project-7","Network File Transfer Programs","img/projects/networkinglabs.png",'\n    <div class="paragraph">\nI created four file transfer programs with Python that send files over the internet using UDP and TCP. I implemented an alternating-bit protocol that retransmits lost packets.\n</br>\nLab 1: File Transfer </br>\n\nLab 2: File Transfer via TCP </br>\n\nLab 3: File Transfer via UDP </br>\n\nLab 4: File Transfer via UDP (with dropped packets in both directions)            \n\n</div>\n\n        <div class="paragraph center">\n              <div class="notice">\n                Source code available on <a href="https://github.com/aaronpostus/cse3461" target="_blank">GitHub</a>.\n              </div>\n        </div>\n            <div class="paragraph center">\n\n            </div>',"#000000"),new o["a"]("project-8","Toy Interpreter and Tokenizer","img/projects/coreprogram.png",'\n    <div class="paragraph">\nI created an interpreter and tokenizer in Java for the toy language CORE. The interpreter is full-featured; it parses, pretty-prints, and executes code.\n\n        <div class="paragraph center">\n              <div class="notice">\n                Source code available on <a href="https://github.com/aaronpostus/CSE3341-PROJECT" target="_blank">GitHub</a>.\n              </div>\n        </div>\n\n            <div class="paragraph center">\n            </div>')],l=s["a"].extend({name:"OtherProjects",components:{ProjectsList:i["a"]},data:function(){return{projects:c}}}),d=l,p=a("2877"),u=Object(p["a"])(d,n,r,!1,null,null,null);t["default"]=u.exports},"8c15":function(e,t,a){},"8cdb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"http-404"},[e._v("404 🙈")])},r=[],s=(a("67f3"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,"c64612d2",null);t["default"]=o.exports},"983d":function(e,t,a){"use strict";var n=function(){function e(e,t,a,n,r,s,i){void 0===r&&(r="#000000"),void 0===s&&(s=!1),void 0===i&&(i=!1),this.id=e,this.name=t,this.htmlDescription=n,this.iconUrl=a,this.isHigh=s,this.isWide=i,this.accentColor=r}return e}();t["a"]=n},af2b:function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Contact Me")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[e._v(" I'm looking for a job as a software engineer."),a("br"),e._v("Feel free to reach out to me about any opportunity! ")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-user-circle-o fa-lg fa-fw"}),a("a",{attrs:{href:"http://aaronpost.dev",target:"_blank"}},[e._v("https://aaronpost.dev")])]),a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:aaronpost@gmail.com",target:"_blank"}},[e._v("aarontpost@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/aaron-t-post/",target:"_blank"}},[e._v("linkedin.com/in/aaron-t-post")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/aaronpostus",target:"_blank"}},[e._v("github.com/aaronpostus")])])])])}],s=(a("253f"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,"7492a888",null);t["default"]=o.exports},c011:function(e,t,a){},ee3f:function(e,t,a){},f279:function(e,t,a){"use strict";var n=a("af2b"),r=a.n(n);r.a},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"80px"}},[e._m(0),a("div",{staticClass:"paragraph"},[e._m(1),a("div",{staticStyle:{"margin-top":"20px"}},[e._v(" I am currently working as a Software Engineering Intern for "),a("a",{attrs:{href:"https://www.trace3d.app/"}},[e._v("Trace 3D")]),e._v(" to make cutting-edge tools for their augmented reality app. Outside of work, I have worked on "),a("router-link",{attrs:{to:"/game-projects"}},[e._v("many games")]),e._v(" and "),a("router-link",{attrs:{to:"/other-projects"}},[e._v("other software projects")]),e._v(". "),a("br"),a("br"),e._v(" Feel free to take a look! ")],1)]),e._m(2),a("div",{staticStyle:{clear:"both"}})])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Hello, my name is "),a("strong",[e._v("Aaron Post")]),e._v(" 👋")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" I am a recent graduate from The Ohio State University, and I am passionate about "),a("br"),e._v(" building interactive media applications, especially alongside artists. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Aaron Post"}})])}],s=(a("6598"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,"3719d0da",null);t["default"]=o.exports}}]);
//# sourceMappingURL=about.9dc7fca3.js.map