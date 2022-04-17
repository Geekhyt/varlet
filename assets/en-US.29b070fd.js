import{_ as c}from"./elevation.c9ea9f5a.js";import{e as n,o as a,c as l,a as t,i as s,j as o,m as e,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"Picker",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.")],-1),u={class:"card"},j=t("h3",null,"Install",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Picker } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Picker)
`)])],-1),_={class:"card"},x=t("h3",null,"Scoped Install",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { Picker } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-attr"},"components"),e(`: {
    [Picker.Component.name]: Picker
  }
}
`)])],-1),y=t("h2",null,"Function Call",-1),k={class:"card"},f=t("h3",null,"Multi-column Picker",-1),v=t("p",null,"A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"const"),e(` columns = [
  `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index),
  `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index),
  `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index)
]
`),t("span",{class:"hljs-keyword"},"const"),e(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),e(` Picker(columns)
`)])],-1),C={class:"card"},P=t("h3",null,"Cascade Picker",-1),T=t("p",null,[e("Passing in a "),t("code",null,"cascade"),e(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),t("code",null,"area.json"),e(".")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" columns "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),e(`

`),t("span",{class:"hljs-keyword"},"const"),e(" { state, texts, indexes } = "),t("span",{class:"hljs-keyword"},"await"),e(` Picker({
  `),t("span",{class:"hljs-attr"},"cascade"),e(": "),t("span",{class:"hljs-literal"},"true"),e(`,
  columns
})
`)])],-1),D=t("h2",null,"Component Call",-1),S={class:"card"},N=t("h3",null,"Multi-column Picker",-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-picker"),e(),t("span",{class:"hljs-attr"},":columns"),e("="),t("span",{class:"hljs-string"},'"columns"'),e(" />")]),e(`
`)])],-1),I=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(` columns = ref([
      `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index),
      `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index),
      `),t("span",{class:"hljs-built_in"},"Array"),e(".from({ "),t("span",{class:"hljs-attr"},"length"),e(": "),t("span",{class:"hljs-number"},"20"),e(" }).map("),t("span",{class:"hljs-function"},[e("("),t("span",{class:"hljs-params"},"_, index"),e(") =>")]),e(` index),
    ])

    `),t("span",{class:"hljs-keyword"},"return"),e(` { columns }
  }
}
`)])],-1),V={class:"card"},O=t("h3",null,"Cascade Picker",-1),E=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-picker"),e(),t("span",{class:"hljs-attr"},"cascade"),e(),t("span",{class:"hljs-attr"},":columns"),e("="),t("span",{class:"hljs-string"},'"columns"'),e(" />")]),e(`
`)])],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(` columns = ref([
      {
        `),t("span",{class:"hljs-attr"},"text"),e(": "),t("span",{class:"hljs-string"},"'\u5317\u4EAC\u5E02'"),e(`,
        `),t("span",{class:"hljs-attr"},"children"),e(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),e(": "),t("span",{class:"hljs-string"},"'\u5E02\u8F96\u533A'"),e(`
          }
        ]
      },
      {
        `),t("span",{class:"hljs-attr"},"text"),e(": "),t("span",{class:"hljs-string"},"'\u6CB3\u5317\u7701'"),e(`,
        `),t("span",{class:"hljs-attr"},"children"),e(`: [
          {
            `),t("span",{class:"hljs-attr"},"text"),e(": "),t("span",{class:"hljs-string"},"'\u77F3\u5BB6\u5E84\u5E02'"),e(`
          }
        ]
      }
    ])

    `),t("span",{class:"hljs-keyword"},"return"),e(` { columns }
  }
}
`)])],-1),W={class:"card"},$=t("h3",null,"The three-level linkage between the provincial and municipal levels",-1),z=t("p",null,"The component library provides complete provincial information and can be used directly.",-1),U=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),e(" { ref } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" area "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),e(`

`),t("span",{class:"hljs-keyword"},"export"),e(),t("span",{class:"hljs-keyword"},"default"),e(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),e("("),t("span",{class:"hljs-params"}),e(")")]),e(` {
    `),t("span",{class:"hljs-keyword"},"const"),e(` columns = ref(area)

    `),t("span",{class:"hljs-keyword"},"return"),e(` { columns }
  }
}
`)])],-1),H=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>Option height(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>Option height</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>texts</code></td><td>Text array</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>Initialize index</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Each line of text</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>children tree</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>cancel button content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>title content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>confirm button content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function R(F,K,q,G,J,L){const d=n("var-site-code-example");return a(),l("div",h,[p,m,t("div",u,[j,s(d,null,{default:o(()=>[b]),_:1})]),t("div",_,[x,s(d,null,{default:o(()=>[g]),_:1})]),y,t("div",k,[f,v,s(d,null,{default:o(()=>[w]),_:1})]),t("div",C,[P,T,s(d,null,{default:o(()=>[A]),_:1})]),D,t("div",S,[N,s(d,null,{default:o(()=>[B]),_:1}),s(d,null,{default:o(()=>[I]),_:1})]),t("div",V,[O,s(d,null,{default:o(()=>[E]),_:1}),s(d,null,{default:o(()=>[M]),_:1})]),t("div",W,[$,z,s(d,null,{default:o(()=>[U]),_:1})]),H])}var Y=c(i,[["render",R]]);export{Y as default};
