(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a.p+"static/media/HeroImage.49243294.jpg"},86:function(e,t,a){e.exports=a(99)},96:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(52),o=a.n(r),l=a(2);const p={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#854CE6",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000"};var d=a(29);const s=l.b.div`
    background-color: ${e=>{let{theme:t}=e;return t.card_light}};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`,c=l.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,m=Object(l.b)(d.b)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`,x=l.b.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,u=l.b.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`,g=l.b.a`
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${e=>{let{theme:t}=e;return t.primary}};
    }

    &.active {
      border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
    }
`,h=l.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${e=>{let{theme:t}=e;return t.primary}};
      color: ${e=>{let{theme:t}=e;return t.white}};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`,b=l.b.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,f=l.b.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
  }
`,w=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${e=>{let{theme:t}=e;return t.card_light+99}};
    transition: all 0.6s ease-in-out;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
    z-index: ${e=>{let{isOpen:t}=e;return t?"1000":"-1000"}};

`,y=(l.b.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`,Object(l.b)(d.b)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,l.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.white}};
  }
`,l.b.a`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`);Object(l.b)(d.b)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;var v=a(56),E=a(57);const k={name:"Ravi Prasad",roles:["Full Stack Developer","Android Developer","Programmer"],description:"I am a passionate and adaptable individual, driven by a constant desire to learn and grow. I take pride in delivering high-quality work and embracing new challenges with enthusiasm. With a positive outlook and a commitment to continuous improvement, I am eager to contribute meaningfully and achieve outstanding results.",github:"https://github.com/Raviprasad53339",resume:"https://drive.google.com/file/d/15L-Q3ZAJ4CjlaI1awpdmReEW67Bl5IO3/view?usp=drive_link",linkedin:"https://www.linkedin.com/in/ravi-prasad-a82067279/",twitter:"https://x.com/Ravi9653621614",insta:"https://www.instagram.com/ravi_r_prasad/",youtube:"https://www.youtube.com/@Raviprasadmotovlog/videos"},C=[{title:"Frontend",skills:[{name:"React Js",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},{name:"HTML",image:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"},{name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"},{name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},{name:"Flutter",image:"https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"}]},{title:"Backend",skills:[{name:"Node Js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Python",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},{name:"MySQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},{name:"Firebase",image:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"}]},{title:"Android",skills:[{name:"Java",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Kotlin",image:"https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"},{name:"XML",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s"},{name:"Android Studio",image:"https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png"}]},{title:"Others",skills:[{name:"GitHub",image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},{name:"Netlify",image:"https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"},{name:"VS Code",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"}]}],z=[{id:3,img:"https://raw.githubusercontent.com/Raviprasad53339/Ravi-Prasad-portfolio/refs/heads/main/images/Appnity.jpg",role:"Android Developer Intern",company:"Appnity ",date:"April 2024 - Jan 2025",desc:"At Appnity, I worked as an Android Developer Intern focused on interface design and feature implementation tailored to diverse client requirements. My role involved designing intuitive mobile interfaces, integrating backend services, and ensuring seamless user experiences across Android devices. I collaborated with cross-functional teams to deliver high-quality apps using Java and XML, while also working with databases like Firebase, SQLite, and MongoDB. Additionally, I handled RESTful API integration and contributed to improving overall app architecture.",skills:["Leadership","Mobile Application Development","Kotlin","XML","Java","Firebase","SQLite","MongoDB","RESTful API"]},{id:4,img:"https://raw.githubusercontent.com/Raviprasad53339/Ravi-Prasad-portfolio/refs/heads/main/images/webteck.jpg",role:"Frontend Developer Intern",company:"Webtech ",date:"Sep 2023 - Feb 2024",desc:"Working as a Frontend Developer at Webteck, I'm responsible for designing and developing responsive, user-friendly websites tailored to client specifications. I collaborate closely with designers and backend developers to translate UI/UX mockups into pixel-perfect interfaces using modern web technologies like HTML5, CSS3, JavaScript, and React. I\u2019ve contributed to several client projects, ensuring fast load times, accessibility, and cross-browser compatibility. This role has significantly strengthened my skills in frontend development, version control (Git), and agile workflows while deepening my understanding of client-centric design and development.",skills:["JavaScript","HTML","CSS","Firebase","SQLite","React.js","Python","API"]}],_=[{id:0,img:"https://raw.githubusercontent.com/Raviprasad53339/Ravi-Prasad-portfolio/refs/heads/main/images/kvpendaarkar%20(1).jpeg",school:"K. V. Pendharkar College of Arts, Science and Commerce",date:"June 2022 - May 2025",grade:"0.00 CGPA",desc:"I completed my Bachelor's degree in Computer Science at K. V. Pendharkar College of Arts, Science and Commerce, successfully finishing all 6 semesters with a CGPA of 0.00. My coursework covered a wide range of subjects including Programming (C, Python, Java), Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks, Web Technologies, Software Engineering, Computer Architecture, Digital Electronics, Discrete Mathematics, Mobile App Development, Cloud Computing, Artificial Intelligence, Cybersecurity, and Project Work, among others.",degree:"Bachelor of Science - BSC-CS, Computer Science"},{id:1,img:"https://raw.githubusercontent.com/Raviprasad53339/Ravi-Prasad-portfolio/refs/heads/main/images/iraglobal%20(1).jpeg",school:"Global jr. College of Science & Commerce",date:"June 2018 - February 2020",grade:"46.92%",desc:"I completed my class 12 high school education at Global jr. College of Science & Commerce, Katai-Kole, where I studied Science with Mathematics.",degree:"HSC(XII), Science with Mathematics"},{id:2,img:"https://raw.githubusercontent.com/Raviprasad53339/Ravi-Prasad-portfolio/refs/heads/main/images/sakharam%20(1).jpeg",school:"Sakharam Sheth Vidyalaya Katai-Kole",date:"March 2018",grade:"55.60%",desc:"I completed my class 10 education at Sakharam Sheth Vidyalaya, Katai-kole, where I studied Science with Mathematics.",degree:"SSC(X), Science with Mathematics"}],S=[{id:9,title:"TradewithRavi",date:"Jun 2024 - Jul 2024",description:"Developed an interactive web platform aimed at teaching users stock market concepts through structured lessons, quizzes, and real-time mock trading simulations. The platform is designed to support both beginners and intermediate traders with a step-by-step learning approach. Implemented features like dynamic data visualization for stock trends, personalized learning paths, and AI-powered chatbot support for real-time user assistance. Ensured the platform is responsive, user-friendly, and scalable.",image:"https://raw.githubusercontent.com/Raviprasad53339/Tradewithravi/refs/heads/main/image.png",tags:["HTML","CSS","JavaScript","React Js","Firebase","Chart.js","Chatbase","REST APIs"],category:"web app",github:"https://github.com/Raviprasad53339/Tradewithravi",webapp:"https://tradewithravi.netlify.app/"},{id:3,title:"Crack It Interview Question Generator Chatbot \u2014 Android Application",date:"January 2025 - February 2025",description:"Developed an Android application that dynamically generates interview questions based on any topic entered by the user, enhancing personalized interview preparation. Integrated Google Gemini API for AI-driven question generation. Implemented a secure login and signup system using SQLite for local data storage. Focused on creating a clean, user-friendly interface in Android Studio, ensuring smooth user experience and offline functionality for authentication.",image:"https://raw.githubusercontent.com/Raviprasad53339/Crack-It---Interview-Question-Generator/refs/heads/main/Crack%20It%20images.jpg",tags:["Kotlin","Java","XML","Android Studio","SQLite","Google Gemini API"],category:"android app",github:"https://github.com/Raviprasad53339/Crack-It---Interview-Question-Generator",webapp:"https://github.com/Raviprasad53339/Crack-It---Interview-Question-Generator/blob/main/Crack%20It.apk"},{id:10,title:"FarmerFriend",date:"Aug 2024 - Sep 2024",description:"Developed a mobile application that enables farmers to share, rent, or exchange agricultural tools and machinery with nearby farmers, promoting cost savings and efficient resource utilization. Integrated Razorpay payment gateway to facilitate secure and seamless transactions between farmers for equipment rentals. The app features user authentication, real-time equipment listings, location-based services using Google Maps API, and smooth communication between users. Focused on delivering a user-friendly interface and a robust backend to improve accessibility in rural areas.",image:"https://raw.githubusercontent.com/Raviprasad53339/FarmerFriend/refs/heads/main/FarmerFriend%20Images.jpg",tags:["Kotlin","Java","XML","Firebase","Android Studio","Razorpay","Google Maps API","SQLite"],category:"android app",github:"https://github.com/Raviprasad53339/FarmerFriend",webapp:"https://github.com/Raviprasad53339/FarmerFriend/blob/main/FarmerFriend.apk"},{id:6,title:"Job Interview Question Generator Chatbot",date:"January 2025 - February 2025",description:"Designed and developed a chatbot that dynamically generates customized interview questions based on the user's selected domain (e.g., Web Development, Data Science, Networking), helping students and job seekers enhance their interview preparation. Integrated Google Gemini API for generating domain-specific questions, and a responsive front-end using HTML, CSS, and JavaScript to ensure a seamless user experience.",image:"https://raw.githubusercontent.com/Raviprasad53339/Job-Interview-Question-Generator-Chatbot/refs/heads/main/Screenshot%20(199).png",tags:["Html","CSS","JavaScript","Google Gemini API"],category:"web app",github:"https://github.com/Raviprasad53339/Job-Interview-Question-Generator-Chatbot",webapp:"https://jiqgc.netlify.app"},{id:7,title:"Healthcare Chatbot - AI Medical Assistant",date:"January 2025 - February 2025",description:"Built an AI-powered chatbot designed to provide basic healthcare advice, symptom checking, and medication information using natural language processing techniques. Integrated Google Gemini API for advanced conversational capabilities, Firebase for real-time user data management, and SQLite for efficient local data storage. Developed a user-friendly Android app with fast performance, ensuring quick access to healthcare information even in offline scenarios.",image:"https://raw.githubusercontent.com/Raviprasad53339/Healthcare-Chatbot/refs/heads/main/Healthcare%20Chatbot%20image.jpg",tags:["Java","XML","Google Gemini API","Android Studio","Firebase","SQLite"],category:"android app",github:"https://github.com/Raviprasad53339/Healthcare-Chatbot/blob/main/HealthChatbot.zip",webapp:"https://github.com/Raviprasad53339/Healthcare-Chatbot/blob/main/Healthcare%20Chatbot.apk"},{id:8,title:"AutoAlgo",date:"Oct 2024 - Dec 2024",description:"Developed an automated trading algorithm that executes buy and sell orders based on predefined strategies and real-time market data, minimizing human error and optimizing trade entry and exit points. Implemented robust data analysis techniques for signal generation, backtesting strategies, and visualizing trading performance. Integrated Fyers API for live trading execution and market data fetching. Focused on improving trade accuracy, efficiency, and portfolio management automation.",image:"https://raw.githubusercontent.com/Raviprasad53339/AutoAlgo/refs/heads/main/AutoAlgo.jpg",tags:["Python","Pandas","NumPy","Fyers API","Matplotlib"],category:"machine learning",github:"https://github.com/Raviprasad53339/AutoAlgo",webapp:"https://github.com/Raviprasad53339/AutoAlgo"}];var I=()=>{const[e,t]=i.a.useState(!1),a=Object(l.c)();return i.a.createElement(s,null,i.a.createElement(c,null,i.a.createElement(m,{to:"/"},i.a.createElement("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20;",cursor:"pointer"}},i.a.createElement(v.a,{size:"3rem"})," ",i.a.createElement(x,null,"Portfolio"))),i.a.createElement(f,null,i.a.createElement(E.a,{onClick:()=>{t(!e)}})),i.a.createElement(u,null,i.a.createElement(g,{href:"#about"},"About"),i.a.createElement(g,{href:"#skills"},"Skills"),i.a.createElement(g,{href:"#experience"},"Experience"),i.a.createElement(g,{href:"#projects"},"Projects"),i.a.createElement(g,{href:"#education"},"Education")),i.a.createElement(b,null,i.a.createElement(h,{href:k.github,target:"_blank"},"Github Profile")),e&&i.a.createElement(w,{isOpen:e},i.a.createElement(y,{href:"#about",onClick:()=>{t(!e)}},"About"),i.a.createElement(y,{href:"#skills",onClick:()=>{t(!e)}},"Skills"),i.a.createElement(y,{href:"#experience",onClick:()=>{t(!e)}},"Experience"),i.a.createElement(y,{href:"#projects",onClick:()=>{t(!e)}},"Projects"),i.a.createElement(y,{href:"#education",onClick:()=>{t(!e)}},"Education"),i.a.createElement(h,{style:{padding:"10px 16px",background:`${a.primary}`,color:"white",width:"max-content"},href:k.github,target:"_blank"},"Github Profile"))))};a(96);const j=l.b.div`
    width:600px;
    height: 500px;
`;var $=()=>i.a.createElement(j,null,i.a.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{opacity:"0.15"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),i.a.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),i.a.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("defs",null,i.a.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})))));const A=l.b.div`
  background: ${e=>{let{theme:t}=e;return t.card_light}};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,M=l.b.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,F=l.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,P=l.b.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,D=l.b.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,L=l.b.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.primary}};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,G=l.b.div`
  font-weight: 700;
  font-size: 50px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,R=l.b.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,O=l.b.span`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
`,H=l.b.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${e=>{let{theme:t}=e;return t.text_primary+95}};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,J=l.b.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${e=>{let{theme:t}=e;return t.white}};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;var B=a(58),U=a.n(B),N=a(59),q=a.n(N);var T=()=>i.a.createElement("div",{id:"about"},i.a.createElement(A,null,i.a.createElement(M,null,i.a.createElement($,null)),i.a.createElement(F,null,i.a.createElement(P,{id:"Left"},i.a.createElement(G,null,"Hi, I am ",i.a.createElement("br",null)," ",k.name),i.a.createElement(R,null,"I am a",i.a.createElement(O,null,i.a.createElement(q.a,{options:{strings:k.roles,autoStart:!0,loop:!0}}))),i.a.createElement(H,null,k.description),i.a.createElement(J,{href:k.resume,target:"display"},"Check Resume")),i.a.createElement(D,{id:"Right"},i.a.createElement(L,{src:U.a,alt:"hero-image"})))));const Q=l.b.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`,Z=l.b.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,W=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`,X=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,K=l.b.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,Y=l.b.div`
  width: 100%;
  max-width: 500px;
  background: ${e=>{let{theme:t}=e;return t.card}};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`,V=l.b.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  margin-bottom: 20px;
  text-align: center;
`,ee=l.b.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,te=l.b.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,ae=l.b.img`
  width: 24px;
  height: 24px;
`;var ne=()=>i.a.createElement(Q,{id:"skills"},i.a.createElement(Z,null,i.a.createElement(W,null,"Skills"),i.a.createElement(X,null,"Here are some of my skills on which I have been working on for the past 2 years."),i.a.createElement(K,null,C.map(e=>i.a.createElement(Y,null,i.a.createElement(V,null,e.title),i.a.createElement(ee,null,e.skills.map(e=>i.a.createElement(te,null,i.a.createElement(ae,{src:e.image}),e.name))))))));const ie=l.b.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,re=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,oe=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,le=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,pe=l.b.div`
    display: flex;
    border: 1.5px solid ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.primary}};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,de=l.b.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${e=>{let{active:t,theme:a}=e;return t&&`\n    background: ${a.primary+20};\n    `}}
    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primary+8}};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`,se=l.b.div`
    width: 1.5px;
    background: ${e=>{let{theme:t}=e;return t.primary}};
`,ce=l.b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`,me=l.b.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    color: ${e=>{let{theme:t}=e;return t.text_black}};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,xe=l.b.div`
    width: 330px;
    height: 490px;
    background-color: ${e=>{let{theme:t}=e;return t.card}};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${me} {
        display: block;
    }
`,ue=l.b.img`
    width: 100%;
    height: 180px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,ge=l.b.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,he=l.b.span`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    background-color: ${e=>{let{theme:t}=e;return t.primary+15}};
    padding: 2px 8px;
    border-radius: 10px;
`,be=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,fe=l.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,we=l.b.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,ye=l.b.div`
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,ve=l.b.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,Ee=l.b.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${e=>{let{theme:t}=e;return t.card}};
`;var ke=e=>{var t,a;let{project:n,setOpenModal:r}=e;return i.a.createElement(xe,{onClick:()=>r({state:!0,project:n})},i.a.createElement(ue,{src:n.image}),i.a.createElement(ge,null,null===(t=n.tags)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(he,null,e))),i.a.createElement(be,null,i.a.createElement(fe,null,n.title),i.a.createElement(we,null,n.date),i.a.createElement(ye,null,n.description)),i.a.createElement(ve,null,null===(a=n.member)||void 0===a?void 0:a.map(e=>i.a.createElement(Ee,{src:e.img}))))};var Ce=e=>{let{openModal:t,setOpenModal:a}=e;const[r,o]=Object(n.useState)("all");return i.a.createElement(ie,{id:"projects"},i.a.createElement(re,null,i.a.createElement(oe,null,"Projects"),i.a.createElement(le,null,"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."),i.a.createElement(pe,null,"all"===r?i.a.createElement(de,{active:!0,value:"all",onClick:()=>o("all")},"All"):i.a.createElement(de,{value:"all",onClick:()=>o("all")},"All"),i.a.createElement(se,null),"web app"===r?i.a.createElement(de,{active:!0,value:"web app",onClick:()=>o("web app")},"WEB APP'S"):i.a.createElement(de,{value:"web app",onClick:()=>o("web app")},"WEB APP'S"),i.a.createElement(se,null),"android app"===r?i.a.createElement(de,{active:!0,value:"android app",onClick:()=>o("android app")},"ANDROID APP'S"):i.a.createElement(de,{value:"android app",onClick:()=>o("android app")},"ANDROID APP'S"),i.a.createElement(se,null),"machine learning"===r?i.a.createElement(de,{active:!0,value:"machine learning",onClick:()=>o("machine learning")},"MACHINE LEARNING"):i.a.createElement(de,{value:"machine learning",onClick:()=>o("machine learning")},"MACHINE LEARNING")),i.a.createElement(ce,null,"all"===r&&S.map(e=>i.a.createElement(ke,{project:e,openModal:t,setOpenModal:a})),S.filter(e=>e.category==r).map(e=>i.a.createElement(ke,{project:e,openModal:t,setOpenModal:a})))))},ze=a(71),_e=a(133);const Se=l.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,Ie=l.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,je=l.b.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,$e=l.b.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,Ae=l.b.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,Me=l.b.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,Fe=l.b.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Pe=l.b.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,De=l.b.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-size: 18px;
  font-weight: 600;
`;var Le=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!1),o=Object(n.useRef)();return i.a.createElement(Se,null,i.a.createElement(Ie,null,i.a.createElement(je,null,"Contact"),i.a.createElement($e,null,"Feel free to reach out to me for any questions or opportunities!"),i.a.createElement(Ae,{ref:o,onSubmit:e=>{e.preventDefault(),ze.a.sendForm("service_p9t9jho","template_f3anpik",o.current,"Nzu8D2wkFDlHygW1Z").then(e=>{t(!0),o.current.reset(),r(!1)},e=>{console.log(e.text),r(!0)})}},i.a.createElement(Me,null,"Email Me \ud83d\ude80"),i.a.createElement(Fe,{placeholder:"Your Email",name:"from_email",required:!0}),i.a.createElement(Fe,{placeholder:"Your Name",name:"from_name",required:!0}),i.a.createElement(Fe,{placeholder:"Subject",name:"subject",required:!0}),i.a.createElement(Pe,{placeholder:"Message",rows:"4",name:"message",required:!0}),i.a.createElement(De,{type:"submit",value:"Send"})),i.a.createElement(_e.a,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully!",severity:"success"}),i.a.createElement(_e.a,{open:a,autoHideDuration:6e3,onClose:()=>r(!1),message:"Error sending email. Please try again.",severity:"error"})))},Ge=a(66),Re=a.n(Ge),Oe=a(67),He=a.n(Oe),Je=a(68),Be=a.n(Je),Ue=a(69),Ne=a.n(Ue);const qe=l.b.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,Te=l.b.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,Qe=l.b.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
`,Ze=l.b.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,We=l.b.a`
color: ${e=>{let{theme:t}=e;return t.text_primary}};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Xe=l.b.div`
  display: flex;
  margin-top: 1rem;
`,Ke=l.b.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Ye=l.b.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.soft2}};
  text-align: center;
`;var Ve=function(){return i.a.createElement(qe,null,i.a.createElement(Te,null,i.a.createElement(Qe,null,"Ravi Prasad"),i.a.createElement(Ze,null,i.a.createElement(We,{href:"#about"},"About"),i.a.createElement(We,{href:"#skills"},"Skills"),i.a.createElement(We,{href:"#experience"},"Experience"),i.a.createElement(We,{href:"#projects"},"Projects"),i.a.createElement(We,{href:"#education"},"Education")),i.a.createElement(Xe,null,i.a.createElement(Ke,{href:k.twitter,target:"display"},i.a.createElement(Re.a,null)),i.a.createElement(Ke,{href:k.linkedin,target:"display"},i.a.createElement(He.a,null)),i.a.createElement(Ke,{href:k.insta,target:"display"},i.a.createElement(Be.a,null)),i.a.createElement(Ke,{href:k.youtube,target:"display"},i.a.createElement(Ne.a,null))),i.a.createElement(Ye,null,"\xa9 2025 Ravi Prasad. All rights reserved.")))},et=a(140),tt=a(139),at=a(141),nt=a(143),it=a(136),rt=a(142);const ot=l.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,lt=l.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,pt=l.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,dt=l.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${ot}{
        display: flex;
    }

    &:hover ${pt}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`,st=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,ct=l.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,mt=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,xt=l.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,ut=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,gt=l.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,ht=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,bt=l.b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,ft=l.b.div`
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var wt=e=>{var t;let{experience:a}=e;return i.a.createElement(dt,null,i.a.createElement(st,null,i.a.createElement(ct,{src:a.img}),i.a.createElement(mt,null,i.a.createElement(xt,null,a.role),i.a.createElement(ut,null,a.company),i.a.createElement(gt,null,a.date))),i.a.createElement(lt,null,(null===a||void 0===a?void 0:a.desc)&&i.a.createElement(pt,null,null===a||void 0===a?void 0:a.desc),(null===a||void 0===a?void 0:a.skills)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(ht,null,i.a.createElement("b",null,"Skills:"),i.a.createElement(bt,null,null===a||void 0===a?void 0:null===(t=a.skills)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(ft,null,"\u2022 ",e)))))),a.doc&&i.a.createElement("a",{href:a.doc,target:"new"},i.a.createElement(ot,{src:a.doc})))};const yt=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,vt=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Et=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,kt=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Ct=l.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;var zt=()=>i.a.createElement(yt,{id:"experience"},i.a.createElement(vt,null,i.a.createElement(Et,null,"Experience"),i.a.createElement(kt,null,"My work experience as a developer and working on different companies and projects."),i.a.createElement(Ct,null,i.a.createElement(et.a,null,z.map((e,t)=>i.a.createElement(tt.a,null,i.a.createElement(at.a,null,i.a.createElement(rt.a,{variant:"outlined",color:"secondary"}),t!==z.length-1&&i.a.createElement(nt.a,{style:{background:"#854CE6"}})),i.a.createElement(it.a,{sx:{py:"12px",px:2}},i.a.createElement(wt,{experience:e}))))))));const _t=l.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,St=l.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,It=l.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,jt=l.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${_t}{
        display: flex;
    }

    &:hover ${It}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid #854CE6;
`,$t=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,At=l.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,Mt=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Ft=l.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Pt=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Dt=l.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,Lt=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var Gt=e=>{let{education:t}=e;return i.a.createElement(jt,null,i.a.createElement($t,null,i.a.createElement(At,{src:t.img}),i.a.createElement(Mt,null,i.a.createElement(Ft,null,t.school),i.a.createElement(Pt,null,t.degree),i.a.createElement(Dt,null,t.date))),i.a.createElement(Lt,null,i.a.createElement("b",null,"Grade: "),t.grade),i.a.createElement(St,null,i.a.createElement(It,null,t.desc)))};const Rt=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Ot=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Ht=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Jt=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Bt=l.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;var Ut=()=>i.a.createElement(Rt,{id:"education"},i.a.createElement(Ot,null,i.a.createElement(Ht,null,"Education"),i.a.createElement(Jt,null,"My education has been a journey of self-discovery and growth. My educational details are as follows."),i.a.createElement(Bt,null,i.a.createElement(et.a,null,_.map((e,t)=>i.a.createElement(tt.a,null,i.a.createElement(it.a,{sx:{py:"12px",px:2}},i.a.createElement(Gt,{education:e})),i.a.createElement(at.a,null,i.a.createElement(rt.a,{variant:"outlined",color:"secondary"}),t!==z.length&&i.a.createElement(nt.a,{style:{background:"#854CE6"}})))))))),Nt=a(129),qt=a(130),Tt=a(131),Qt=a(132);const Zt=l.b.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`,Wt=l.b.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${e=>{let{theme:t}=e;return t.card}};
color: ${e=>{let{theme:t}=e;return t.text_primary}};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`,Xt=l.b.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,Kt=l.b.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Yt=l.b.div`
    font-size: 16px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,Vt=l.b.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,ea=l.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,ta=l.b.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,aa=l.b.div`
    font-size: 14px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary+20}};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,na=l.b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,ia=l.b.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,ra=l.b.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`,oa=l.b.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`,la=l.b.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`,pa=l.b.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    ${e=>{let{dull:t,theme:a}=e;return t&&`\n        background-color: ${a.bgLight};\n        color: ${a.text_secondary};\n        &:hover {\n            background-color: ${e=>{let{theme:t}=e;return t.bg+99}};\n        }\n    `}}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.primary+99}};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;var da=e=>{let{openModal:t,setOpenModal:a}=e;const n=null===t||void 0===t?void 0:t.project;return i.a.createElement(Qt.a,{open:!0,onClose:()=>a({state:!1,project:null})},i.a.createElement(Zt,null,i.a.createElement(Wt,null,i.a.createElement(Nt.a,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>a({state:!1,project:null})}),i.a.createElement(Vt,{src:null===n||void 0===n?void 0:n.image}),i.a.createElement(Xt,null,null===n||void 0===n?void 0:n.title),i.a.createElement(Kt,null,n.date),i.a.createElement(ta,null,null===n||void 0===n?void 0:n.tags.map(e=>i.a.createElement(aa,null,e))),i.a.createElement(Yt,null,null===n||void 0===n?void 0:n.description),n.member&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ea,null,"Members"),i.a.createElement(na,null,null===n||void 0===n?void 0:n.member.map(e=>i.a.createElement(ia,null,i.a.createElement(ra,{src:e.img}),i.a.createElement(oa,null,e.name),i.a.createElement("a",{href:e.github,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(qt.a,null)),i.a.createElement("a",{href:e.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(Tt.a,null)))))),i.a.createElement(la,null,i.a.createElement(pa,{dull:!0,href:null===n||void 0===n?void 0:n.github,target:"new"},"View Code"),i.a.createElement(pa,{href:null===n||void 0===n?void 0:n.webapp,target:"new"},"View Live App")))))};const sa=l.b.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg}};
  width: 100%;
  overflow-x: hidden;
`,ca=l.b.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;var ma=function(){const[e,t]=Object(n.useState)({state:!1,project:null});return i.a.createElement(l.a,{theme:p},i.a.createElement(d.a,null,i.a.createElement(I,null),i.a.createElement(sa,null,i.a.createElement(T,null),i.a.createElement(ca,null,i.a.createElement(ne,null),i.a.createElement(zt,null)),i.a.createElement(Ce,{openModal:e,setOpenModal:t}),i.a.createElement(ca,null,i.a.createElement(Ut,null),i.a.createElement(Le,null)),i.a.createElement(Ve,null),e.state&&i.a.createElement(da,{openModal:e,setOpenModal:t}))))};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ma,null)))}},[[86,1,2]]]);
//# sourceMappingURL=main.6e244c5f.chunk.js.map