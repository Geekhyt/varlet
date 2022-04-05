import{B as p,Q as h,S as m,a as u,D as g}from"./Disabled.c8f794d9.js";import{_}from"./elevation.4d11ec3f.js";import{e as o,o as j,c as b,a as t,i as e,j as a,m as s,U as v}from"./vendor.49f89f0d.js";import"./Pagination.c96eabd7.js";import"./index.fcee23e5.js";import"./elements.600984cd.js";import"./components.57927f97.js";import"./zIndex.8c13fd4c.js";import"./index.48ee5316.js";import"./index.6e927d89.js";import"./index.d410b4f8.js";import"./index.6fefdd63.js";import"./index.e666d985.js";import"./provide.937335ea.js";import"./en-US.628e0d34.js";import"./index.aae57b26.js";import"./utils.3a4595f4.js";import"./index.1b19b5a5.js";const f={components:{Basic:p,QuickJumper:h,SizeOption:m,ShowTotal:u,Disabled:g}},w={class:"varlet-site-doc"},y=t("h1",null,"Pagination",-1),z=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"You may need it when you need to process large amounts of data.")],-1),k={class:"card"},S=t("h3",null,"Install",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Pagination } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Pagination)
`)])],-1),x=t("h2",null,"Simple Mode",-1),D=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"The default display mode is recommended for small-screen devices. See the mobile phone emulator on the right for a preview of the components.")],-1),T={class:"card"},C=t("h3",null,"Basic Usage",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(" />")]),s(`
`)])],-1),U={class:"card"},$=t("h3",null,"Hide Size Changer",-1),B=t("p",null,[s("Use "),t("code",null,"show-size-changer"),s(" prop to hide size changer.")],-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":show-size-changer"),s("="),t("span",{class:"hljs-string"},'"false"'),s("/>")]),s(`
`)])],-1),V={class:"card"},W=t("h3",null,"Show Total",-1),E=t("p",null,[s("Use "),t("code",null,"showTatol"),s(" prop to show custom total text.")],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"66"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),s(`
/>`)]),s(`
`)])],-1),A={class:"card"},H=t("h3",null,"Disabled",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"115"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`)])],-1),O=t("h2",null,"Basic Mode",-1),Q=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,[s("Set "),t("code",null,"simple"),s(" to "),t("code",null,"false"),s(" when you use medium and large screen devices.")])],-1),J={class:"card"},Y=t("h3",null,"Basic Usage",-1),F={class:"varlet-component-preview"},G=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},"current"),s("="),t("span",{class:"hljs-string"},'"6"'),s(),t("span",{class:"hljs-attr"},"total"),s("="),t("span",{class:"hljs-string"},'"115"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`)])],-1),K={class:"card"},L=t("h3",null,"Enable page number to jump quickly",-1),R=t("p",null,[s("Use "),t("code",null,"show-quick-jumper"),s(" prop to enable page number to jump quickly.")],-1),X={class:"varlet-component-preview"},Z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(` 
  `),t("span",{class:"hljs-attr"},"show-quick-jumper"),s(`
/>`)]),s(`
`)])],-1),tt={class:"card"},st=t("h3",null,"Size Option",-1),et=t("p",null,[s("Use "),t("code",null,"show-size-changer"),s(" hide size changer and use "),t("code",null,"size-option"),s(" prop set the number of "),t("code",null,"size"),s(" that can be chosen.")],-1),dt={class:"varlet-component-preview"},at=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},":show-size-changer"),s("="),t("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},":size-option"),s("="),t("span",{class:"hljs-string"},'"[10, 20, 30, 40]"'),s(" />")]),s(`
`)])],-1),ot={class:"card"},lt=t("h3",null,"Show Total",-1),nt={class:"varlet-component-preview"},ct=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"10"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"total => `Total ${total} items`"'),s(`
/>`)]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(`
  `),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  `),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"10"'),s(`
  `),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(`
  `),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
  `),t("span",{class:"hljs-attr"},":show-total"),s("="),t("span",{class:"hljs-string"},'"(total, range) => `Total ${total}, current ${range[0]}-${range[1]}`"'),s(`
/>`)]),s(`
`)])],-1),rt={class:"card"},it=t("h3",null,"Disabled",-1),pt={class:"varlet-component-preview"},ht=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pagination"),s(),t("span",{class:"hljs-attr"},":current"),s("="),t("span",{class:"hljs-string"},'"6"'),s(),t("span",{class:"hljs-attr"},":total"),s("="),t("span",{class:"hljs-string"},'"120"'),s(),t("span",{class:"hljs-attr"},":simple"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`)])],-1),mt=v('<h2>API</h2><div class="card"><h3>Props</h3><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</p><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model: current</code></td><td>Current page number</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>v-model: size</code></td><td>Number of data items per page</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>total</code></td><td>Total number of data items</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>simple</code></td><td>Whether to use simple mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show-size-changer</code></td><td>Whether to show <code>size</code> select</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>show-quick-jumper</code></td><td>Whether you can jump to pages directly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max-pager-count</code></td><td>Number of buttons displayed between ellipses</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>size-option</code></td><td>Specify the sizeChanger options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>show-total</code></td><td>Show page item\u2019s title</td><td><em>function(total, range)</em></td><td><code>-</code></td></tr><tr><td>=======</td><td></td><td></td><td></td></tr><tr><td>prop</td><td>Description</td><td>Type</td><td>Default</td></tr><tr><td>-----</td><td>--------------</td><td>--------</td><td>----------</td></tr><tr><td><code>current</code></td><td>Current page number</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>size</code></td><td>Number of data items per page</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>total</code></td><td>Total number of data items</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>simple</code></td><td>Whether to use simple mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Disable pagination</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show-size-changer</code></td><td>Whether to show <code>size</code> select</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>show-quick-jumper</code></td><td>Whether you can jump to pages directly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max-pager-count</code></td><td>Number of buttons displayed between ellipses</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>size-option</code></td><td>Specify the sizeChanger options</td><td><em>number[]</em></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td><code>show-total</code></td><td>Show page item\u2019s title</td><td><em>function(total, range)</em></td><td><code>-</code></td></tr></tbody></table><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>72ab6e91c2bce4fd69aab4ad8d0b575c7e2af336</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Callback after <code>current</code> or <code>size</code> changes</td><td><code>current: number</code> <br><code>size: number</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prev</code></td><td>Content of previous button</td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Content of next button</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pagination-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--pagination-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-active-bg-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-hover-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-total-margin</code></td><td><code>0 12px</code></td></tr><tr><td><code>--pagination-total-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--pagination-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-item-margin</code></td><td><code>0 6px</code></td></tr><tr><td><code>--pagination-item-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--pagination-list-bg-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--pagination-list-active-bg-color</code></td><td><code>#edf5ff</code></td></tr><tr><td><code>--pagination-list-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pagination-input-width</code></td><td><code>32px</code></td></tr><tr><td><code>--pagination-simple-padding</code></td><td><code>0 0 2px 0</code></td></tr><tr><td><code>--pagination-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--pagination-bg-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--pagination-size-line-height</code></td><td><code>24px</code></td></tr></tbody></table></div>',5);function ut(gt,_t,jt,bt,vt,ft){const d=o("var-site-code-example"),l=o("basic"),n=o("quick-jumper"),c=o("size-option"),r=o("show-total"),i=o("disabled");return j(),b("div",w,[y,z,t("div",k,[S,e(d,null,{default:a(()=>[q]),_:1})]),x,D,t("div",T,[C,e(d,null,{default:a(()=>[N]),_:1})]),t("div",U,[$,B,e(d,null,{default:a(()=>[P]),_:1})]),t("div",V,[W,E,e(d,null,{default:a(()=>[I]),_:1})]),t("div",A,[H,e(d,null,{default:a(()=>[M]),_:1})]),O,Q,t("div",J,[Y,t("div",F,[e(l)]),e(d,null,{default:a(()=>[G]),_:1})]),t("div",K,[L,R,t("div",X,[e(n)]),e(d,null,{default:a(()=>[Z]),_:1})]),t("div",tt,[st,et,t("div",dt,[e(c)]),e(d,null,{default:a(()=>[at]),_:1})]),t("div",ot,[lt,t("div",nt,[e(r)]),e(d,null,{default:a(()=>[ct]),_:1})]),t("div",rt,[it,t("div",pt,[e(i)]),e(d,null,{default:a(()=>[ht]),_:1})]),mt])}var It=_(f,[["render",ut]]);export{It as default};
