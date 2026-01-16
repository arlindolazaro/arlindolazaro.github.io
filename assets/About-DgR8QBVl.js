import{j as e,F,a as A,b as T,c as P,d as C,e as R,f as E,g as I,h as M,m as p,r as n}from"./index-xsArxxkr.js";import{A as J}from"./AnimatedDivider-CAjBx3_s.js";import{S as L}from"./SectionTitle-DrFUlq5o.js";import{S as q,a as D,b as H,c as O,d as G,e as Q}from"./index-DBqv2iX0.js";const B=[{name:"React",icon:e.jsx(F,{})},{name:"TypeScript",icon:e.jsx(q,{})},{name:"Java",icon:e.jsx(A,{})},{name:"Spring Boot",icon:e.jsx(D,{})},{name:"PHP",icon:e.jsx(T,{})},{name:"Node.js",icon:e.jsx(P,{})},{name:"JavaScript",icon:e.jsx(H,{})},{name:"HTML5",icon:e.jsx(C,{})},{name:"CSS3",icon:e.jsx(R,{})},{name:"MySQL",icon:e.jsx(O,{})},{name:"PostgreSQL",icon:e.jsx(G,{})},{name:"Tailwind CSS",icon:e.jsx(Q,{})},{name:"SQL",icon:e.jsx(E,{})},{name:"Git",icon:e.jsx(I,{})},{name:"Docker",icon:e.jsx(M,{})}],V=({technologies:s})=>e.jsx("div",{className:"mt-24 w-full overflow-hidden",children:e.jsx(p.div,{className:"flex gap-6",animate:{x:["0%","-50%"]},transition:{repeat:1/0,repeatType:"loop",duration:30,ease:"linear"},children:[...s,...s].map((t,a)=>e.jsxs("div",{className:`\r
              min-w-[140px]\r
              flex flex-col items-center gap-3\r
              p-4\r
              rounded-2xl\r
              bg-white/5\r
              border border-white/10\r
              backdrop-blur\r
              shadow-lg\r
            `,children:[e.jsx("div",{className:`\r
              w-14 h-14\r
              flex items-center justify-center\r
              rounded-full\r
              text-3xl\r
              bg-gradient-to-br from-indigo-600 to-indigo-700\r
              text-white\r
            `,children:t.icon}),e.jsx("span",{className:"text-sm font-medium text-neutral-300",children:t.name})]},a))})}),U=({end:s,duration:t=1.2,suffix:a="",className:b=""})=>{const[h,f]=n.useState(0),o=n.useRef(null),r=n.useRef(null),c=n.useRef(!1);return n.useEffect(()=>{const l=o.current;if(!l)return;const d=new IntersectionObserver(j=>{j.forEach(g=>{if(g.isIntersecting&&!c.current){c.current=!0;const v=performance.now(),m=0,w=s,x=S=>{const N=(S-v)/1e3,u=Math.min(N/t,1),y=1-Math.pow(1-u,3),k=Math.round(m+(w-m)*y);f(k),u<1&&(r.current=requestAnimationFrame(x))};r.current=requestAnimationFrame(x)}})},{threshold:.25});return d.observe(l),()=>{d.disconnect(),r.current&&cancelAnimationFrame(r.current)}},[s,t]),e.jsxs("span",{ref:o,className:b,children:[h,a]})},Y=()=>e.jsxs("section",{id:"about",className:`\r
        relative\r
        py-20 sm:py-28\r
        bg-black dark:bg-black\r
        text-white dark:text-white\r
        scroll-mt-22\r
        overflow-hidden\r
        transition-all duration-300\r
      `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-violet-950/25 via-black to-neutral-950/30 pointer-events-none"}),e.jsxs("div",{className:"relative container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center",children:[e.jsx(L,{children:"Sobre Mim"}),e.jsx(J,{}),e.jsx(p.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-center max-w-4xl",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center",children:[e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("p",{className:"text-neutral-200 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4",children:"Sou um Desenvolvedor Web com mais de 3 anos de experiência no desenvolvimento de soluções completas, desde APIs robustas até interfaces modernas e responsivas."}),e.jsx("p",{className:"text-neutral-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8",children:"Trabalho com PHP, TypeScript, Java, Spring Boot e React. Actualmente, aprofundo conhecimentos em Cibersegurança e Machine Learning."}),e.jsxs("div",{className:"flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start",children:[e.jsx(i,{label:"Anos de Experiência",value:3}),e.jsx(i,{label:"Projectos Entregues",value:15}),e.jsx(i,{label:"Clientes",value:8})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:`\r
                w-full max-w-md\r
                p-5 sm:p-6\r
                rounded-2xl\r
                bg-white/5 dark:bg-white/5\r
                backdrop-blur\r
                border border-white/10 dark:border-white/10\r
                shadow-2xl\r
                transition-all duration-300\r
              `,children:[e.jsx("h4",{className:"text-base sm:text-lg font-semibold text-white mb-3",children:"O que eu entrego"}),e.jsxs("ul",{className:"text-neutral-300 space-y-2 text-sm sm:text-base",children:[e.jsx("li",{children:"• Aplicações web escaláveis e seguras"}),e.jsx("li",{children:"• APIs bem documentadas e testadas"}),e.jsx("li",{children:"• Interfaces focadas em usabilidade e performance"})]})]})})]})}),e.jsx(V,{technologies:B})]})]}),i=({label:s,value:t})=>e.jsxs("div",{className:`\r
      px-3 sm:px-5 py-3 sm:py-4\r
      rounded-xl\r
      bg-white/5 dark:bg-white/5\r
      border border-white/10 dark:border-white/10\r
      text-center\r
      backdrop-blur\r
      transition-all duration-300 text-xs sm:text-sm\r
    `,children:[e.jsx("div",{className:"text-xl sm:text-2xl font-bold text-indigo-400",children:e.jsx(U,{end:t,suffix:"+"})}),e.jsx("div",{className:"text-xs sm:text-sm text-neutral-400",children:s})]});export{Y as default};
