import{j as e,m as s,B as o,C as l,r as d}from"./index-xsArxxkr.js";import{S as c}from"./SectionTitle-DrFUlq5o.js";import{A as m}from"./AnimatedDivider-CAjBx3_s.js";import{u as x,a as p}from"./use-transform-wYliR_Cq.js";const u="/assets/ujc-logo-BI0fNpEF.webp",g="/assets/unitec-photo-D4FxYePY.ico",b=[{degree:"Licenciatura em Engenharia em Tecnologias e Sistemas de Informação",institution:"Universidade Joaquim Chissano",period:"Em andamento",location:"Maputo, Moçambique",logo:u,description:"Formação superior focada na criação de sistemas modernos, escaláveis e orientados a desempenho, com forte base em engenharia de software e arquitetura de aplicações.",focus:["Software Engineering","System Design","Agile Development","Databases","UML Modeling"],status:"in-progress"},{degree:"Sistemas Informáticos & Programação Web",institution:"UNITEC Academy",period:"2021",location:"Maputo, Moçambique",logo:g,description:"Formação técnica que consolidou fundamentos sólidos em infraestrutura, suporte técnico e desenvolvimento web.",focus:["Networking","Hardware","Web Fundamentals","Technical Support"],status:"completed"}],f={completed:"CONCLUÍDO","in-progress":"EM PROGRESSO",ongoing:"CONTÍNUO"},h=({education:t})=>e.jsxs(s.div,{whileHover:{y:-8},transition:{type:"spring",stiffness:180},className:"relative group",children:[e.jsx("div",{className:`\r
          absolute -inset-[1px] rounded-[28px]\r
          bg-gradient-to-r from-indigo-500/40 via-indigo-400/40 to-indigo-500/40\r
          opacity-0 group-hover:opacity-100 blur-xl transition duration-700\r
        `}),e.jsxs("div",{className:`\r
          relative rounded-[28px]\r
          p-6 sm:p-8 md:p-12\r
          bg-black/70 backdrop-blur-2xl\r
          border border-neutral-800\r
          shadow-[0_0_60px_rgba(0,0,0,0.6)]\r
        `,children:[e.jsxs("div",{className:`\r
            flex flex-col items-center text-center\r
            md:flex-row md:items-center md:text-left\r
            gap-6 md:gap-8 mb-8 md:mb-10\r
          `,children:[e.jsx("img",{src:t.logo,alt:t.institution,className:`\r
              w-14 h-14 sm:w-16 sm:h-16\r
              rounded-xl object-cover\r
              border border-neutral-700\r
            `}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white",children:t.degree}),e.jsx("p",{className:"text-neutral-400 mt-1 text-sm sm:text-base",children:t.institution})]}),e.jsx("span",{className:`\r
              px-4 py-2\r
              rounded-full\r
              text-[10px] sm:text-xs\r
              font-semibold tracking-widest\r
              text-cyan-200\r
              border border-cyan-500/50\r
              bg-cyan-500/20\r
            `,children:f[t.status]})]}),e.jsxs("div",{className:`\r
            flex flex-col items-center text-center\r
            sm:flex-row sm:justify-center\r
            md:justify-start md:text-left\r
            gap-4 sm:gap-8\r
            text-xs sm:text-sm\r
            text-neutral-300\r
            mb-6 md:mb-8\r
          `,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{}),e.jsx("span",{children:t.period})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{}),e.jsx("span",{children:t.location})]})]}),e.jsx("p",{className:`\r
            text-neutral-200\r
            text-sm sm:text-base md:text-lg\r
            leading-relaxed\r
            text-center md:text-left\r
            max-w-3xl mx-auto md:mx-0\r
            mb-8 md:mb-10\r
          `,children:t.description}),t.focus&&e.jsx("div",{className:`\r
              flex flex-wrap\r
              justify-center md:justify-start\r
              gap-3 sm:gap-4\r
            `,children:t.focus.map((r,a)=>e.jsx("span",{className:`\r
                  px-4 py-2\r
                  rounded-full\r
                  text-[10px] sm:text-xs\r
                  uppercase tracking-wider\r
                  text-neutral-200\r
                  border border-neutral-600\r
                  bg-neutral-800/80\r
                `,children:r},a))})]})]}),y=()=>{const t=d.useRef(null),{scrollYProgress:r}=x({target:t,offset:["start start","end start"]}),a=p(r,[0,1],["0%","10%"]);return e.jsxs("section",{id:"education",ref:t,className:"relative py-28 sm:py-40 overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black",children:[e.jsxs(s.div,{style:{y:a},className:"absolute inset-0",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-violet-950/10"}),e.jsx("div",{className:"absolute -top-60 -left-60 w-[700px] h-[700px] bg-indigo-500/8 rounded-full blur-[160px]"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[160px]"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.04]",style:{backgroundImage:"linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",backgroundSize:"80px 80px"}})]}),e.jsxs("div",{className:"relative z-10 container mx-auto px-4",children:[e.jsxs(s.div,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.9},viewport:{once:!0},className:"max-w-4xl mx-auto text-center mb-20 sm:mb-32",children:[e.jsx(c,{children:"Educação & Formação"}),e.jsx(m,{}),e.jsx("p",{className:"mt-8 sm:mt-10 text-base sm:text-xl text-neutral-300 leading-relaxed",children:"Base técnica sólida para construir soluções modernas, escaláveis e orientadas ao futuro."})]}),e.jsx("div",{className:"max-w-5xl mx-auto space-y-16 sm:space-y-20",children:b.map((i,n)=>e.jsx(s.div,{initial:{opacity:0,scale:.96},whileInView:{opacity:1,scale:1},transition:{duration:.7,delay:n*.12,ease:"easeOut"},viewport:{once:!0,amount:.3},children:e.jsx(h,{education:i})},n))})]})]})};export{y as default};
