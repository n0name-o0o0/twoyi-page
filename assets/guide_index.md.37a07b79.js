import{_ as e,c as i,o as t,a}from"./app.b5580867.js";const y='{"title":"Introduction","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"Capability","slug":"capability"},{"level":2,"title":"Features","slug":"features"}],"relativePath":"guide/index.md","lastUpdated":1646893276005}',o={},s=a('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><p>Twoyi is <strong>a lightweight Android container</strong>. It runs a nearly complete Android system as a normal app (no root required) on Android. Additionally, it supports Android 8.1 ~ 12.</p><h2 id="capability" tabindex="-1">Capability <a class="header-anchor" href="#capability" aria-hidden="true">#</a></h2><ol><li>Using Taichi\xB7Yang without unlocking the bootloader. Xposed, EdXposed and LSPosed will be supported later.</li><li>Using root on non-rooted devices.</li><li>Magisk modules will be partially supported.</li><li>Implementing additional system components such as virtual camera by virtualizing the HAL layer.</li><li>Doing security research such as shelling.</li></ol><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ol><li>Twoyi is a rootless Android system-level container, which runs a nearly complete Android system as a normal app and is mostly isolated from the main system.</li><li>The internal Android version is Android 8.1 and Android 10 will be supported later.</li><li>Starting up Twoyi is very fast and the system can be booted in about three seconds except for the initialization.</li><li>Twoyi is an open source project.</li><li>The internal system of twoyi will be fully customizable. Because its system is open source, you can fork the project to compile your own AOSP. You can also customize the system components, such as the HAL layer to implement virtual cameras, virtual sensors and other special features.</li></ol>',6),r=[s];function n(l,d,c,p,u,h){return t(),i("div",null,r)}var _=e(o,[["render",n]]);export{y as __pageData,_ as default};