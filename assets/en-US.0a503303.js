import{B as h,F as d}from"./FooterSlots.980855be.js";import{_ as p}from"./elevation.c9ea9f5a.js";import{e,o as r,c as j,a,i as t,j as n,m as s,U as i}from"./vendor.49f89f0d.js";import"./index.caa69699.js";import"./elements.b75de382.js";import"./components.5cba9644.js";import"./index.f6335cb7.js";import"./Pagination.56376b0f.js";import"./index.44744767.js";import"./zIndex.8c13fd4c.js";import"./index.48ee5316.js";import"./index.c3ac679f.js";import"./index.07bfe65b.js";import"./index.be0a5978.js";import"./index.f3db583b.js";import"./provide.4b9efbeb.js";import"./en-US.628e0d34.js";import"./AppType.d4c1c6c3.js";import"./index.079ade67.js";import"./utils.3a4595f4.js";const m={components:{BasicExample:h,FooterSlots:d}},g={class:"varlet-site-doc"},b=a("h1",null,"Table",-1),u=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"A minimal table, when you need to display some data in the form of a table, you may use it.")],-1),_={class:"card"},f=a("h3",null,"Install",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Table } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Table)
`)])],-1),v={class:"card"},x=a("h3",null,"Basic Usage",-1),w={class:"varlet-component-preview"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Jerry"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("124"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("38"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(` 
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("Tom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("100"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("135"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`)])],-1),S={class:"card"},z=a("h3",null,"Footer Slots",-1),N=a("p",null,[s("You can insert something in the tail slot, the most common is to insert a "),a("code",null,"Pagination"),s(".")],-1),T={class:"varlet-component-preview"},A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Name"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("Math"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("English"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"l in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"l.name"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.math }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.english }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"footer"'),s(">")]),s(`
      `),a("span",{class:"hljs-comment"},"<!-- Paging in the mobile preview mode uses the simple true mode, which is more friendly to small screen devices -->"),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pagination"),s(`
        `),a("span",{class:"hljs-attr"},":simple"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
        `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
        `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
        `),a("span",{class:"hljs-attr"},":size-option"),s("="),a("span",{class:"hljs-string"},'"[5, 10]"'),s(`
        @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"get"'),s(`
      />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`)])],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"const"),s(" gen = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"current, size"),s(") =>")]),s(` {
  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": size }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" id = (current - "),a("span",{class:"hljs-number"},"1"),s(") * size + index + "),a("span",{class:"hljs-number"},"1"),s(`

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},[s("`Name "),a("span",{class:"hljs-subst"},"${id}"),s("`")]),s(`,
      `),a("span",{class:"hljs-attr"},"math"),s(`: id,
      `),a("span",{class:"hljs-attr"},"english"),s(`: id,
    }
  })
}

`),a("span",{class:"hljs-keyword"},"export"),s(),a("span",{class:"hljs-keyword"},"default"),s(` {
  `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"setup"),s("("),a("span",{class:"hljs-params"}),s(")")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" list = ref(gen("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"10"),s(`))

    `),a("span",{class:"hljs-keyword"},"const"),s(" get = "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"current, size"),s(") =>")]),s(` {
      list.value = gen(current, size)
    }
    
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      list,
      get
    }
  }
}
`)])],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-selector-class"},".footer"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: flex-end;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"16px"),s(`;
}
`)])],-1),V=i('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>full-Width</code></td><td>The width of the <code>table</code> (including the scrollable part)</td><td><em>string | number</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of <code>table</code></td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Footer of <code>table</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>#eee</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-td-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--table-row-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',4);function $(C,D,E,F,U,I){const l=e("var-site-code-example"),c=e("basic-example"),o=e("footer-slots");return r(),j("div",g,[b,u,a("div",_,[f,t(l,null,{default:n(()=>[y]),_:1})]),a("div",v,[x,a("div",w,[t(c)]),t(l,null,{default:n(()=>[k]),_:1})]),a("div",S,[z,N,a("div",T,[t(o)]),t(l,null,{default:n(()=>[A]),_:1}),t(l,null,{default:n(()=>[B]),_:1}),t(l,null,{default:n(()=>[P]),_:1})]),V])}var cs=p(m,[["render",$]]);export{cs as default};
