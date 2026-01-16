import{j as e,i as p,k as h,l as g,n as b,m as l,o as v,r as o,s as f}from"./index-xsArxxkr.js";import{S as j}from"./SectionTitle-DrFUlq5o.js";import{A as w}from"./AnimatedDivider-CAjBx3_s.js";const r="text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110",m=[{title:"Desenvolvimento Full-Stack",description:"Aplicações web completas com foco em performance, escalabilidade e boas práticas modernas.",icon:e.jsx(p,{className:r})},{title:"APIs & Back-end",description:"APIs REST robustas, seguras e escaláveis com arquiteturas bem definidas.",icon:e.jsx(h,{className:r})},{title:"UI / UX Engineering",description:"Interfaces modernas, acessíveis e altamente responsivas com foco na experiência.",icon:e.jsx(g,{className:r})},{title:"Consultoria Técnica",description:"Apoio estratégico em decisões técnicas, arquitetura e evolução de produto.",icon:e.jsx(b,{className:r})}],x=({service:t})=>e.jsxs(l.div,{variants:v,whileHover:{y:-8,scale:1.03},tabIndex:0,role:"group",className:`\r
      group relative\r
      bg-black/70 backdrop-blur-xl\r
      rounded-2xl border border-white/10\r
      transition-all duration-300 transform-gpu\r
      hover:shadow-[0_20px_40px_-12px_rgba(124,58,237,0.35)]\r
      focus:outline-none focus:ring-2 focus:ring-indigo-500/50\r
\r
      /* Responsividade */\r
      p-4 sm:p-6\r
      flex flex-col items-center text-center\r
      h-full\r
    `,children:[e.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-indigo-600/8 via-transparent to-indigo-700/8"}),e.jsx("div",{className:`\r
      relative z-10\r
      w-12 h-12 sm:w-16 sm:h-16\r
      rounded-xl\r
      flex items-center justify-center\r
      mb-3 sm:mb-5\r
      bg-gradient-to-br from-indigo-600 to-indigo-700\r
      text-white\r
      shadow-lg\r
      text-base sm:text-xl\r
    `,children:t.icon}),e.jsx("h3",{className:"relative z-10 text-sm sm:text-lg font-semibold text-white mb-2 sm:mb-3",children:t.title}),e.jsx("p",{className:`\r
      relative z-10\r
      text-xs sm:text-sm\r
      text-neutral-400\r
      leading-relaxed\r
      max-w-[95%]\r
\r
      /* Limite no mobile */\r
      line-clamp-3 sm:line-clamp-none\r
    `,children:t.description}),e.jsx("a",{href:"#contact",className:`\r
        relative z-10\r
        mt-3 sm:mt-6\r
        px-4 py-2\r
        rounded-lg\r
        bg-white/5\r
        border border-white/10\r
        text-xs sm:text-sm\r
        text-neutral-200\r
        hover:bg-white/10\r
        transition-colors duration-300\r
      `,children:"Saiba mais"})]}),N=({services:t})=>{const c=o.useRef(null),[a,u]=o.useState(0),d=s=>{const n=c.current,i=n?.children[s];n&&i&&(n.scrollTo({left:i.offsetLeft-(n.clientWidth-i.clientWidth)/2,behavior:"smooth"}),u(s))};return o.useEffect(()=>{const s=setInterval(()=>{d((a+1)%t.length)},3500);return()=>clearInterval(s)},[a,t.length]),e.jsxs("div",{className:"md:hidden relative mt-12",children:[e.jsx("div",{ref:c,className:"flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-12",children:t.map(s=>e.jsx("div",{className:"snap-center min-w-[88%] flex-shrink-0",children:e.jsx(x,{service:s})},s.title))}),e.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2",children:t.map((s,n)=>e.jsx("button",{onClick:()=>d(n),className:`h-2 rounded-full transition-all ${a===n?"w-6 bg-indigo-500":"w-2 bg-white/30"}`},n))})]})},k=()=>e.jsxs(l.section,{id:"servicos",className:"relative py-24 bg-black overflow-hidden",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-indigo-950/20"}),e.jsxs("div",{className:"relative container mx-auto px-4",children:[e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16 sm:mb-20",children:[e.jsx(j,{children:"Serviços Profissionais"}),e.jsx(w,{}),e.jsx("p",{className:"text-neutral-300 text-base sm:text-lg mt-6",children:"Soluções técnicas modernas, escaláveis e orientadas a resultados."})]}),e.jsx(l.div,{className:"hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10",variants:f,initial:"initial",whileInView:"whileInView",viewport:{once:!0},children:m.map(t=>e.jsx(x,{service:t},t.title))}),e.jsx("div",{className:"md:hidden",children:e.jsx(N,{services:m})})]})]});export{k as default};
