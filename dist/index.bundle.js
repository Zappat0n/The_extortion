(()=>{"use strict";var t={394:(t,e,o)=>{var r=o(260),n=o.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,o,r,n,i=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(r);if(n){var o=u(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return c(this,t)});function l(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),i.call(this,"preloadScene")}return e=l,(o=[{key:"preload",value:function(){this.load.image("platform","./assets/platform.png"),this.load.spritesheet("wall","./assets/blocks1.jpg",{frameWidth:512,frameHeight:512}),this.load.spritesheet("player","./assets/player.png",{frameWidth:28,frameHeight:51}),this.load.spritesheet("coin","./assets/coin.png",{frameWidth:20,frameHeight:20}),this.load.image("rock","./assets/rock.png"),this.load.spritesheet("bat","./assets/bat.png",{frameWidth:32,frameHeight:32}),this.load.image("button1","./assets/button1.png")}},{key:"create",value:function(){this.anims.create({key:"left",frames:this.anims.generateFrameNumbers("player",{start:0,end:6}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:"player",frame:6}],frameRate:10,repeat:-1}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers("player",{start:7,end:13}),frameRate:10,repeat:-1}),this.anims.create({key:"rotate",frames:this.anims.generateFrameNumbers("coin",{start:0,end:5}),frameRate:15,yoyo:!0,repeat:-1}),this.anims.create({key:"fly",frames:this.anims.generateFrameNumbers("bat",{start:0,end:3}),frameRate:15,repeat:-1}),this.timer=this.time.addEvent({delay:3e3,callback:this.scene.start("titleScene"),callbackScope:this})}}])&&a(e.prototype,o),l}(n().Scene);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,o,r,n,i=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(n){var o=y(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return d(this,t)});function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,"bootScene")}return e=a,(o=[{key:"preload",value:function(){this.load.image("boot_image","./assets/anirudh-3esjG-nlgyk-unsplash.jpg")}},{key:"create",value:function(){this.scene.start("preloadScene")}}])&&h(e.prototype,o),a}(n().Scene);const b=1200,v=1024,g=32,k=32,S=180,w=900,O=200,P=80,x=500,R=2,C=5,_=5,j="Fredericka the Great, cursive";var G="https://us-central1-js-capstone-backend.cloudfunctions.net/api/",T="R52YD0HFYII5RH0TSzhv";const E={displayError:function(t){var e=document.createElement("div"),o=document.createElement("h2");return o.textContent=t,e.appendChild(o),document.querySelector("body").appendChild(e),o},getScores:function(){var t=this,e=new Request("".concat(G,"games/").concat(T,"/scores/"),{method:"GET"});return Promise.resolve(fetch(e).then((function(t){return t.json()})).then((function(t){return t})).catch((function(e){return t.displayError(e)})))},setScore:function(t){var e,o=this,r=(e={user:t.user,score:t.score},new Request("".concat(G,"games/").concat(T,"/scores/"),{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify(e)}));return Promise.resolve(fetch(r).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return o.displayError(t)})))}};var B=function(t){return t.sort((function(t,e){return e.score-t.score}))};function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(s,t);var e,o,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(i){var o=A(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return M(this,t)});function s(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),a.call(this,"gameScene")}return e=s,(o=[{key:"addCloud",value:function(t,e){if(this.cloudPool.getLength()){var o=this.cloudPool.getFirst();o.x=t,o.y=e,o.active=!0,o.visible=!0,this.cloudPool.remove(o)}else{var r=this.physics.add.sprite(t,e,"platform");this.physics.add.existing(r),r.body.setVelocityY(P),r.body.setImmovable(!0),r.body.allowGravity=!1,this.cloudGroup.add(r)}this.started&&(this.createCoin(t,e),this.createBat(t,e))}},{key:"addPlatform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];void 0===t&&(t=-g);for(var o=Math.ceil(b/k),r=Math.floor(Math.random()*(o-3))+1,n=Math.floor(Math.random()*(o-3))+1,i=Math.floor(Math.random()*(o-3))+1,a=[r,r+1,r+2,r+3,n,n+1,n+2,n+3,i,i+1,i+2,i+3],s=0;s<o;s+=1)a.includes(s)&&!e||this.addCloud(s*k,t);this.started&&(this.createRock(),this.addPoints(10))}},{key:"createPlayer",value:function(){this.player=this.physics.add.sprite(b/2,v-(2*S+3*g),"player"),this.player.setGravityY(w),this.player.body.setCollideWorldBounds(!0),this.player.setBounce(.1),this.cursors=this.input.keyboard.createCursorKeys(),this.playerJumps=0,this.input.on("pointerdown",this.jump,this)}},{key:"createPlatforms",value:function(){for(var t=g-40,e=v-g;e>t-g;e-=S)this.addPlatform(e,e>v/2)}},{key:"createBat",value:function(t,e){if(n().Math.Between(1,100)<=_)if(this.batPool.getLength()){var o=this.batPool.getFirst();o.x=t,o.y=e,o.alpha=1,o.active=!0,o.visible=!0,this.batPool.remove(o)}else{var r=this.physics.add.sprite(t,e,"bat");r.setCollideWorldBounds(!0),r.setGravityY(w),r.anims.play("fly"),this.batGroup.add(r)}}},{key:"createCoin",value:function(t,e){if(n().Math.Between(1,100)<=C)if(this.coinPool.getLength()){var o=this.coinPool.getFirst();o.x=t,o.y=e-45,o.alpha=1,o.active=!0,o.visible=!0,this.coinPool.remove(o)}else{var r=this.physics.add.sprite(t,e,"coin");r.setCollideWorldBounds(!0),r.setGravityY(w),r.anims.play("rotate"),this.coinGroup.add(r)}}},{key:"createRock",value:function(){var t=n().Math.Between(0,b);if(this.rockPool.getLength()){var e=this.rockPool.getFirst();e.x=t,e.y=24,e.alpha=1,e.active=!0,e.visible=!0,this.rockPool.remove(e)}else{var o=this.physics.add.sprite(t,24,"rock");o.setBounce(1),o.setCollideWorldBounds(!0),o.setGravityY(w),o.setVelocityX(n().Math.Between(-60,60),20),this.rockGroup.add(o)}}},{key:"addPoints",value:function(t){this.score+=t,this.scoreText.setText("Score: ".concat(this.score))}},{key:"collectCoin",value:function(t,e){this.started&&this.addPoints(10),this.tweens.add({targets:e,y:e.y-100,alpha:0,duration:800,ease:"Cubic.easeOut",callbackScope:this,onComplete:function(){this.coinGroup.killAndHide(e),this.coinGroup.remove(e)}})}},{key:"createClouds",value:function(){this.cloudGroup=this.add.group({removeCallback:function(t){t.scene.cloudPool.add(t)}}),this.cloudPool=this.add.group({removeCallback:function(t){t.scene.cloudGroup.add(t)}})}},{key:"createCoins",value:function(){this.coinGroup=this.add.group({removeCallback:function(t){t.scene.coinPool.add(t)}}),this.coinPool=this.add.group({removeCallback:function(t){t.scene.coinGroup.add(t)}})}},{key:"createBats",value:function(){this.batGroup=this.add.group({removeCallback:function(t){t.scene.batPool.add(t)}}),this.batPool=this.add.group({removeCallback:function(t){t.scene.batGroup.add(t)}})}},{key:"createRocks",value:function(){this.rockGroup=this.add.group({removeCallback:function(t){t.scene.rockPool.add(t)}}),this.rockPool=this.add.group({removeCallback:function(t){t.scene.rockGroup.add(t)}})}},{key:"playRound",value:function(){this.evenRound?(this.addPlatform(),this.evenRound=!1):this.evenRound=!0}},{key:"create",value:function(){this.started=!1,this.evenRound=!1,this.score=0,this.dead=!1,this.scoreText=this.add.text(16,16,"Score: 0",{fontFamily:"Fredericka the Great, cursive",fontSize:"36px",fill:"#000000",color:"#ffd700",strokeThickness:2}),this.scoreText.setDepth(99),this.walls=this.add.tileSprite(0,0,2*b,2*v,"wall"),this.createClouds(),this.createCoins(),this.createBats(),this.createRocks(),this.createPlayer(),this.createPlatforms(),this.physics.add.collider(this.player,this.cloudGroup),this.physics.add.collider(this.coinGroup,this.cloudGroup),this.physics.add.collider(this.rockGroup,this.cloudGroup),this.physics.add.collider(this.batGroup,this.cloudGroup),this.physics.add.overlap(this.player,this.coinGroup,this.collectCoin,null,this),this.physics.add.collider(this.player,this.rockGroup,this.gameOver,null,this),this.physics.add.collider(this.player,this.batGroup,this.gameOver,null,this),this.started=!0,this.timer=this.time.addEvent({delay:1e3,callback:this.playRound,callbackScope:this,loop:!0})}},{key:"jump",value:function(){!this.dying&&(this.player.body.touching.down||this.playerJumps>0&&this.playerJumps<R)&&(this.player.body.touching.down&&(this.playerJumps=0),this.player.setVelocityY(-1*x),this.playerJumps+=1)}},{key:"gotoTitleScene",value:function(){this.scene.start("titleScene")}},{key:"checkScore",value:function(t){var e=this;B(t.result).slice(0,8).every((function(t){return t.score>e.score}))?this.input.on("pointerdown",this.gotoTitleScene,this):function(t){return{create:function(){var e,o=document.createElement("form"),r=document.createElement("h2");return r.textContent="You got a Highscore!",document.querySelector("body").appendChild(o),o.appendChild(r),o.setAttribute("id","main_form"),o.classList.add("form"),o.appendChild(function(t,e,o,r,n,i){var a=document.createElement("div");a.classList.add("form_field");var s=document.createElement("label");s.setAttribute("for",t),s.textContent="Please introduce your name";var c=document.createElement("input");return c.classList.add("input_name"),c.setAttribute("type","text"),c.setAttribute("name",t),c.setAttribute("id",t),c.focus(),c.setAttribute("required",!0),a.appendChild(s),a.appendChild(c),a}("name")),o.appendChild(((e=document.createElement("input")).setAttribute("type","submit"),e.classList.add("button"),e)),o.addEventListener("submit",(function(e){var o;e.preventDefault(),o={user:e.target.elements.name.value,score:t.score},E.setScore(o).then((function(){var e=document.querySelector("body"),o=document.querySelector("#main_form");e.removeChild(o),t.scene.start("leaderboardScene")}))})),o}}}(this).create()}},{key:"gameOver",value:function(){var t=this;this.dead=!0,this.physics.pause(),this.timer.paused=!0,this.player.anims.play("turn"),this.player.setTint(16711680),this.add.text(b/2-200,300,"GAME OVER",{fontFamily:"Fredericka the Great, cursive",fontSize:"96px",color:"#ffd700",fill:"#000000",strokeThickness:5}),E.getScores().then((function(e){return t.checkScore(e)}))}},{key:"removeItemsOutOfScreen",value:function(t){var e=this;t.getChildren().forEach((function(o){o.y>=v-(t===e.cloudGroup?0:o.height)&&(t.killAndHide(o),t.remove(o))}),this)}},{key:"update",value:function(){this.dead||(this.cursors.left.isDown?(this.player.setVelocityX(-O),this.player.anims.play("left",!0)):this.cursors.right.isDown?(this.player.setVelocityX(O),this.player.anims.play("right",!0)):this.cursors.up.isDown?this.jump():(this.player.setVelocityX(0),this.player.anims.play("turn")),this.player.body.position.y>=v-this.player.body.height&&this.gameOver(),this.removeItemsOutOfScreen(this.cloudGroup),this.removeItemsOutOfScreen(this.rockGroup),this.removeItemsOutOfScreen(this.coinGroup),this.removeItemsOutOfScreen(this.batGroup),this.walls.tilePositionY-=2)}}])&&L(e.prototype,o),s}(n().Scene);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(a,t);var e,o,r,n,i=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(n){var o=J(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return q(this,t)});function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,"titleScene")}return e=a,(o=[{key:"create",value:function(){var t=this;this.add.image(b/2,200,"boot_image"),this.add.text(b/2-200,50,"The extortion",{fontFamily:j,fontSize:"64px",fill:"#000000",color:"#ffd700",strokeThickness:5}),this.add.text(b/2-400,150,"Þrymr has stolen Thor's hammer to extort the gods\ninto giving him Freyja as his wife. \n Would you travel to Jötunheimr\nand climb the walls of Útgarðar\nto help Thor recover his hammer?",{fontFamily:j,fontSize:"28px",color:"#ffd700",fill:"#000000",align:"center",fixedWidth:"800",wordWrap:!0,useAdvancedWrap:!0,strokeThickness:5}),this.gameButton=this.add.sprite(b/2,430,"button1").setInteractive(),this.gameText=this.add.text(b/2-24,420,"Play",{fontFamily:j,fontSize:"24px",color:"#ffd700"}),this.scoresButton=this.add.sprite(b/2,500,"button1").setInteractive(),this.gameText=this.add.text(b/2-60,490,"Highscores",{fontFamily:j,fontSize:"24px",color:"#ffd700"}),this.add.text(b/2-400,600,"Cursor left: LEFT\nCursor right: RIGHT\nLeft click: JUMP",{fontFamily:j,fontSize:"28px",color:"#ffd700",fill:"#000000",align:"center",fixedWidth:"800",wordWrap:!0,useAdvancedWrap:!0,strokeThickness:5}),this.gameButton.on("pointerdown",(function(){t.scene.start("gameScene")})),this.scoresButton.on("pointerdown",(function(){t.scene.start("leaderboardScene")}))}}])&&I(e.prototype,o),a}(n().Scene);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Q=b/2-180,Z=b/2+120,$=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(a,t);var e,o,r,n,i=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(n){var o=K(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return U(this,t)});function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,"leaderboardScene")}return e=a,(o=[{key:"gotoTitleScene",value:function(){this.scene.start("titleScene")}},{key:"addLine",value:function(t,e){this.add.text(Q,e,t.user,{fontFamily:"Fredericka the Great, cursive",fontSize:"24px",fill:"#000000",color:"#ffd700",strokeThickness:3}),this.add.text(Z,e,t.score,{fontFamily:"Fredericka the Great, cursive",fontSize:"24px",fill:"#000000",color:"#ffd700",strokeThickness:3})}},{key:"displayLeaderboard",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.result;if(r&&r.length>0){r=B(r).slice(0,8);var n=140;r.forEach((function(t){o||e.addLine(t,n),n+=60}))}return r.length}},{key:"create",value:function(){var t=this;this.add.image(b/2,200,"boot_image"),this.add.text(b/2-200,50,"Leaderboard",{fontFamily:"Fredericka the Great, cursive",fontSize:"64px",fill:"#000000",color:"#ffd700",strokeThickness:3}),E.getScores().then((function(e){return t.displayLeaderboard(e)})),this.input.on("pointerdown",this.gotoTitleScene,this)}}])&&N(e.prototype,o),a}(n().Scene);const tt={type:n().AUTO,width:b,height:v,scene:[m,l,V,z,$],backgroundColor:0,physics:{default:"arcade"}};var et;function ot(){var t=document.querySelector("canvas"),e=window.innerWidth,o=window.innerHeight,r=e/o,n=et.config.width/et.config.height;r<n?(t.style.width="".concat(e,"px"),t.style.height="".concat(e/n,"px")):(t.style.width="".concat(o*n,"px"),t.style.height="".concat(o,"px"))}window.onload=function(){et=new(n().Game)(tt),window.focus(),ot(),window.addEventListener("resize",ot,!1)}}},e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.m=t,o.x=t=>{},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={826:0},e=[[394,260]],r=t=>{},n=(n,i)=>{for(var a,s,[c,u,l,f]=i,h=0,p=[];h<c.length;h++)s=c[h],o.o(t,s)&&t[s]&&p.push(t[s][0]),t[s]=0;for(a in u)o.o(u,a)&&(o.m[a]=u[a]);for(l&&l(o),n&&n(i);p.length;)p.shift()();return f&&e.push.apply(e,f),r()},i=self.webpackChunkgame=self.webpackChunkgame||[];function a(){for(var r,n=0;n<e.length;n++){for(var i=e[n],a=!0,s=1;s<i.length;s++){var c=i[s];0!==t[c]&&(a=!1)}a&&(e.splice(n--,1),r=o(o.s=i[0]))}return 0===e.length&&(o.x(),o.x=t=>{}),r}i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var s=o.x;o.x=()=>(o.x=s||(t=>{}),(r=a)())})(),o.x()})();