'use strict';
// ════════════════════════════════════════════════════════
//  DATA  – persisted in localStorage
// ════════════════════════════════════════════════════════
const SK='elms_ng_v4';
function mkDB(){
  return {
    users:[
      {id:1,name:'Admin User',email:'admin@elms.com',pass:'admin123',role:'Admin',avatar:'#534AB7',joined:'2025-12-08'},
      {id:2,name:'Dr. Priya Sharma',email:'teacher@elms.com',pass:'teach123',role:'Instructor',avatar:'#B45309',joined:'2025-12-08'},
      {id:3,name:'Naveen Gupta',email:'naveen@elms.com',pass:'student123',role:'Student',avatar:'#0F6E56',joined:'2025-12-10'},
      {id:4,name:'Anjali Verma',email:'anjali@elms.com',pass:'student123',role:'Student',avatar:'#185FA5',joined:'2025-12-11'},
      {id:5,name:'Rahul Mehta',email:'rahul@elms.com',pass:'student123',role:'Student',avatar:'#993556',joined:'2025-12-12'},
      {id:6,name:'Riya Singh',email:'riya@elms.com',pass:'student123',role:'Student',avatar:'#B45309',joined:'2026-01-05'},
    ],
    courses:[
      {id:1,title:'Web Development Fundamentals',code:'CS-101',desc:'Complete guide to HTML, CSS, JavaScript, Bootstrap and React for beginners.',instructor:2,students:[3,4,5,6],cat:'Web',dur:'12 weeks',thumb:'🌐',tags:['HTML','CSS','JavaScript','React'],pub:true,
        lectures:[
          {id:1,title:'Introduction to HTML & Document Structure',min:25},
          {id:2,title:'CSS Styling, Flexbox & Grid',min:35},
          {id:3,title:'JavaScript Basics & DOM Manipulation',min:45},
          {id:4,title:'Bootstrap 5 – Responsive Design',min:30},
          {id:5,title:'React Components & Props',min:40},
          {id:6,title:'React State & Hooks',min:38},
        ]},
      {id:2,title:'Database Management Systems',code:'CS-202',desc:'SQL, NoSQL, normalization, indexing, transactions and MongoDB integration.',instructor:2,students:[3,4,6],cat:'Database',dur:'10 weeks',thumb:'🗄️',tags:['SQL','MongoDB','DBMS','NoSQL'],pub:true,
        lectures:[
          {id:1,title:'Introduction to DBMS & Relational Model',min:30},
          {id:2,title:'SQL – DDL, DML & Queries',min:40},
          {id:3,title:'Normalization – 1NF to 3NF',min:28},
          {id:4,title:'Transactions & ACID Properties',min:32},
          {id:5,title:'MongoDB – Document Database',min:35},
        ]},
      {id:3,title:'Python Programming',code:'CS-303',desc:'Core Python with OOP, data structures, algorithms and file handling.',instructor:2,students:[3,5],cat:'Programming',dur:'8 weeks',thumb:'🐍',tags:['Python','OOP','DSA'],pub:true,
        lectures:[
          {id:1,title:'Python Basics & Data Types',min:20},
          {id:2,title:'Control Flow & Functions',min:28},
          {id:3,title:'OOP – Classes & Objects',min:35},
          {id:4,title:'Data Structures – Lists, Stacks, Queues',min:40},
        ]},
      {id:4,title:'Software Engineering',code:'CS-404',desc:'SDLC, Agile, UML diagrams, testing methodologies and project management.',instructor:2,students:[4,6],cat:'Other',dur:'10 weeks',thumb:'⚙️',tags:['SDLC','Agile','UML','Testing'],pub:true,
        lectures:[
          {id:1,title:'Software Development Life Cycle',min:25},
          {id:2,title:'Agile & Scrum Methodology',min:30},
          {id:3,title:'UML – Use Case & Class Diagrams',min:35},
        ]},
    ],
    assignments:[
      {id:1,cid:1,title:'Build a Responsive Portfolio Website',desc:'Create a fully responsive personal portfolio using HTML5, CSS3, Bootstrap 5 and JavaScript. Must include Home, About, Skills, Projects and Contact sections.',due:'2026-04-30',max:100,by:2,
        subs:[
          {sid:3,file:'naveen_portfolio.zip',on:'2026-04-10',grade:88,fb:'Excellent layout! Great use of Bootstrap grid and responsive design. Minor improvement needed in animation.',graded:true},
          {sid:4,file:'anjali_portfolio.zip',on:'2026-04-12',grade:null,fb:'',graded:false},
          {sid:5,file:'rahul_portfolio.zip',on:'2026-04-14',grade:76,fb:'Good effort. Navigation could be improved. Overall presentation is clean.',graded:true},
        ]},
      {id:2,cid:2,title:'Hospital Management ER Diagram',desc:'Design a complete ER diagram for a hospital management system with entities: Patient, Doctor, Appointment, Ward, Medicine. Show all relationships with correct cardinalities.',due:'2026-04-25',max:50,by:2,
        subs:[
          {sid:3,file:'naveen_er.pdf',on:'2026-04-18',grade:45,fb:'Well-structured! All cardinalities correct. Excellent use of weak entities.',graded:true},
          {sid:4,file:'anjali_er.pdf',on:'2026-04-20',grade:null,fb:'',graded:false},
        ]},
      {id:3,cid:3,title:'Python Data Structures Implementation',desc:'Implement Stack, Queue, Singly Linked List and Binary Search Tree in Python using OOP concepts. Include insertion, deletion and traversal operations.',due:'2026-05-05',max:100,by:2,subs:[]},
      {id:4,cid:1,title:'JavaScript DOM Mini Project',desc:'Build a To-Do List app using HTML, CSS and vanilla JavaScript. Features: Add task, delete task, mark complete, filter by status, save to localStorage.',due:'2026-05-10',max:50,by:2,subs:[]},
    ],
    quizzes:[
      {id:1,cid:1,title:'Web Development – Quiz 1',by:2,time:120,
        qs:[
          {q:'What does HTML stand for?',opts:['HyperText Markup Language','High Tech Modern Language','HyperText Modern Links','High Text Markup Language'],ans:0},
          {q:'Which CSS property is used to change text color?',opts:['font-color','text-style','color','background-color'],ans:2},
          {q:'JavaScript is a _____ language.',opts:['Compiled','Statically typed','Interpreted','Assembly'],ans:2},
          {q:'Which HTML tag creates a hyperlink?',opts:['<link>','<a>','<href>','<url>'],ans:1},
          {q:'What does CSS stand for?',opts:['Colorful Style Sheets','Cascading Style Sheets','Creative Style System','Computer Style Sheets'],ans:1},
          {q:'Which method adds an element to the end of an array in JavaScript?',opts:['push()','pop()','shift()','unshift()'],ans:0},
        ],attempts:[{sid:3,score:5,total:6,on:'2026-04-15'}]},
      {id:2,cid:2,title:'DBMS – Fundamentals Quiz',by:2,time:90,
        qs:[
          {q:'What does DBMS stand for?',opts:['Database Management System','Data Base Modifier System','Digital Binary Management System','Data Bridge Management System'],ans:0},
          {q:'Which SQL command is used to retrieve data?',opts:['INSERT','UPDATE','SELECT','DELETE'],ans:2},
          {q:'First Normal Form (1NF) eliminates:',opts:['Partial dependencies','Transitive dependencies','Repeating groups','Redundant tables'],ans:2},
          {q:'ACID stands for:',opts:['Atomicity Consistency Isolation Durability','Agility Consistency Integration Data','Atomicity Consistency Integration Design','None of the above'],ans:0},
          {q:'MongoDB is a _____ database.',opts:['Relational','Hierarchical','Document-oriented','Network'],ans:2},
        ],attempts:[]},
    ],
    progress:[
      {sid:3,cid:1,done:[1,2,3],pct:50},
      {sid:3,cid:2,done:[1,2,3,4,5],pct:100},
      {sid:3,cid:3,done:[1],pct:25},
      {sid:4,cid:1,done:[1,2],pct:33},
      {sid:4,cid:2,done:[1],pct:20},
      {sid:5,cid:1,done:[1,2,3,4],pct:67},
      {sid:6,cid:1,done:[],pct:0},
    ],
    notifs:[
      {id:1,uid:3,title:'Assignment Graded 🏆',msg:'"Build a Responsive Portfolio Website" graded: 88/100. Feedback: Excellent layout!',time:'2 hours ago',read:false,type:'grade'},
      {id:2,uid:3,title:'New Assignment Posted 📋',msg:'New assignment "Hospital Management ER Diagram" in Database Management Systems.',time:'1 day ago',read:false,type:'assign'},
      {id:3,uid:3,title:'Quiz Available ❓',msg:'"Web Development – Quiz 1" is now live. Due by 30 April.',time:'3 days ago',read:true,type:'quiz'},
      {id:4,uid:3,title:'Enrolled Successfully 🎉',msg:'You have been enrolled in "Python Programming" course.',time:'1 week ago',read:true,type:'enroll'},
      {id:5,uid:2,title:'New Submission 📤',msg:'Anjali Verma submitted "Build a Responsive Portfolio Website".',time:'4 hours ago',read:false,type:'sub'},
      {id:6,uid:2,title:'New Submission 📤',msg:'Naveen Gupta submitted "Hospital Management ER Diagram".',time:'2 days ago',read:false,type:'sub'},
      {id:7,uid:1,title:'New User Registered 👤',msg:'Riya Singh joined as a Student.',time:'1 week ago',read:true,type:'sys'},
      {id:8,uid:1,title:'System Ready ✅',msg:'ELMS is fully operational. 6 users, 4 courses, 4 assignments.',time:'2 weeks ago',read:true,type:'sys'},
    ],
    announcements:[
      {id:1,title:'Final Exam Schedule Published',msg:'Final practical exams will be held from 25 April to 30 April 2026. All students must ensure all assignments are submitted before 23 April.',by:1,date:'2026-04-10',target:'all'},
      {id:2,title:'Project Submission Deadline',msg:'All MCA final year project reports must be submitted to the faculty guide by 01 May 2026.',by:1,date:'2026-04-12',target:'all'},
      {id:3,title:'New Quiz Added – DBMS',msg:'A new quiz on DBMS Fundamentals has been added for Database Management Systems course. Attempt by 28 April 2026.',by:2,date:'2026-04-15',target:'Student'},
    ],
    nids:{user:7,course:5,assign:5,quiz:3,notif:9,ann:4},
  };
}
let DB=(()=>{try{const s=localStorage.getItem(SK);return s?JSON.parse(s):mkDB()}catch{return mkDB()}})();
function save(){localStorage.setItem(SK,JSON.stringify(DB))}

// ════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════
const $=id=>document.getElementById(id);
const init=n=>n?.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase()||'U';
const fmt=d=>{try{return new Date(d).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}catch{return d}};
const fmtR=d=>{const diff=(Date.now()-new Date(d))/1e3;if(diff<60)return'Just now';if(diff<3600)return Math.floor(diff/60)+'m ago';if(diff<86400)return Math.floor(diff/3600)+'h ago';return Math.floor(diff/86400)+'d ago'};
const catBg={Web:'#EEF2FF',Database:'#FEF3C7',Programming:'#DCFCE7',Other:'#F3F4F6'};
const catThumb={Web:'🌐',Database:'🗄️',Programming:'💻','AI/ML':'🤖',Networking:'🔗',Other:'📚'};

function toast(msg,type='ok'){
  const t=document.createElement('div');
  t.className='toast'+(type==='err'?' err':type==='warn'?' warn':'');
  t.textContent=msg;
  $('toasts').appendChild(t);
  setTimeout(()=>t.remove(),3200);
}

// ════════════════════════════════════════════════════════
//  AUTH
// ════════════════════════════════════════════════════════
let CU=null;
const DEMO={Admin:{e:'admin@elms.com',p:'admin123'},Instructor:{e:'teacher@elms.com',p:'teach123'},Student:{e:'naveen@elms.com',p:'student123'}};
function pickRole(r,btn){
  document.querySelectorAll('.rt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  $('l-email').value=DEMO[r].e; $('l-pass').value=DEMO[r].p;
  $('auth-err').classList.remove('show');
}
function doLogin(){
  const e=$('l-email').value.trim(),p=$('l-pass').value.trim();
  const u=DB.users.find(u=>u.email===e&&u.pass===p);
  if(!u){$('auth-err').classList.add('show');return}
  CU=u; $('auth-err').classList.remove('show');
  $('auth').classList.add('hidden'); $('app').classList.remove('hidden');
  buildNav(); go('dashboard');
  toast('Welcome back, '+CU.name.split(' ')[0]+'! 👋');
}
function showReg(){
  openM('Register New Account',`
    <div class="fgroup"><label class="flabel">Full Name *</label><input class="finput" id="rn" placeholder="Your full name"></div>
    <div class="fgroup"><label class="flabel">Email *</label><input class="finput" id="re" type="email" placeholder="email@example.com"></div>
    <div class="fgroup"><label class="flabel">Password *</label><input class="finput" id="rp" type="password" placeholder="Min 6 characters"></div>
    <div class="fgroup"><label class="flabel">Role</label><select class="finput" id="rr"><option>Student</option><option>Instructor</option></select></div>
  `,[{l:'Cancel',c:'btn-ol',fn:'closeM()'},{l:'Register',c:'btn-g',fn:'doReg()'}]);
}
function doReg(){
  const n=$('rn').value.trim(),e=$('re').value.trim(),p=$('rp').value.trim(),r=$('rr').value;
  if(!n||!e||!p)return toast('All fields required','err');
  if(p.length<6)return toast('Password min 6 chars','err');
  if(DB.users.find(u=>u.email===e))return toast('Email already registered','err');
  const colors={Student:'#0F6E56',Instructor:'#B45309'};
  DB.users.push({id:DB.nids.user++,name:n,email:e,pass:p,role:r,avatar:colors[r]||'#6B7280',joined:new Date().toISOString().split('T')[0]});
  save(); closeM(); toast('Account created! Please sign in.');
}
function doLogout(){
  CU=null; $('app').classList.add('hidden'); $('auth').classList.remove('hidden');
  $('l-email').value='admin@elms.com'; $('l-pass').value='admin123';
  document.querySelectorAll('.rt').forEach((b,i)=>{b.classList.toggle('on',i===0)});
}

// ════════════════════════════════════════════════════════
//  NAV
// ════════════════════════════════════════════════════════
const NAVS={
  Admin:[
    {id:'dashboard',ico:'📊',lbl:'Dashboard'},
    {id:'users',ico:'👥',lbl:'User Management'},
    {id:'allcourses',ico:'📚',lbl:'All Courses'},
    {id:'allassign',ico:'📋',lbl:'Assignments'},
    {id:'announce',ico:'📢',lbl:'Announcements'},
    {id:'reports',ico:'📈',lbl:'Reports'},
    {id:'wpr',ico:'📝',lbl:'WPR Summary'},
    {id:'notifs',ico:'🔔',lbl:'Notifications',badge:true},
  ],
  Instructor:[
    {id:'dashboard',ico:'📊',lbl:'Dashboard'},
    {id:'mycourses',ico:'📚',lbl:'My Courses'},
    {id:'createcourse',ico:'➕',lbl:'Create Course'},
    {id:'tchassign',ico:'📋',lbl:'Assignments'},
    {id:'tchquiz',ico:'❓',lbl:'Quizzes'},
    {id:'grading',ico:'🏆',lbl:'Grade Submissions'},
    {id:'announce',ico:'📢',lbl:'Announcements'},
    {id:'notifs',ico:'🔔',lbl:'Notifications',badge:true},
  ],
  Student:[
    {id:'dashboard',ico:'📊',lbl:'Dashboard'},
    {id:'browse',ico:'🔍',lbl:'Browse Courses'},
    {id:'enrolled',ico:'📚',lbl:'My Courses'},
    {id:'stuassign',ico:'📋',lbl:'Assignments'},
    {id:'stuquiz',ico:'❓',lbl:'Quizzes'},
    {id:'grades',ico:'🏆',lbl:'My Grades'},
    {id:'announce',ico:'📢',lbl:'Announcements'},
    {id:'notifs',ico:'🔔',lbl:'Notifications',badge:true},
  ]
};
const TITLES={dashboard:'Dashboard',users:'User Management',allcourses:'All Courses',allassign:'Assignments',announce:'Announcements',reports:'Reports & Analytics',wpr:'Weekly Progress Report Summary',notifs:'Notifications',mycourses:'My Courses',createcourse:'Create Course',tchassign:'Assignments',tchquiz:'Quizzes',grading:'Grade Submissions',browse:'Browse Courses',enrolled:'My Enrolled Courses',stuassign:'My Assignments',stuquiz:'Quizzes',grades:'My Grades',profile:'Profile',coursedetail:'Course Details',quizattempt:'Quiz Attempt'};

function buildNav(){
  const items=NAVS[CU.role]||[];
  const unread=DB.notifs.filter(n=>n.uid===CU.id&&!n.read).length;
  $('nav-menu').innerHTML='<div class="nsec">Main Menu</div>'+
    items.map(it=>`<div class="ni" id="nav-${it.id}" onclick="go('${it.id}')"><span class="ico">${it.ico}</span><span>${it.lbl}</span>${it.badge&&unread>0?`<span class="nb">${unread}</span>`:''}</div>`).join('')+
    '<div class="nsec" style="margin-top:6px">Account</div>'+ 
    `<div class="ni" id="nav-profile" onclick="go('profile')"><span class="ico">👤</span><span>Profile</span></div>`;
  const rc={Admin:'#534AB7',Instructor:'#B45309',Student:'#0F6E56'};
  const rbg={Admin:'#EEEDFE',Instructor:'#FAEEDA',Student:'#E1F5EE'};
  $('sb-foot').innerHTML=`<div class="av" style="background:${CU.avatar};width:34px;height:34px;font-size:11px">${init(CU.name)}</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${CU.name.split(' ')[0]}</div><div style="font-size:10px;color:${rc[CU.role]}">${CU.role}</div></div><button onclick="doLogout()" style="background:none;border:none;cursor:pointer;font-size:17px;color:var(--text2)" title="Logout">⏻</button>`;
  const rp=$('role-badge'); rp.textContent=CU.role; rp.style.background=rbg[CU.role]; rp.style.color=rc[CU.role];
  $('tb-name').textContent=CU.name;
  const ham=$('ham'); if(ham) ham.style.display=window.innerWidth<=768?'block':'none';
}

let curPage='';
function go(page,...args){
  curPage=page;
  document.querySelectorAll('.ni').forEach(el=>el.classList.remove('on'));
  const el=$('nav-'+page); if(el) el.classList.add('on');
  $('pg-title').textContent=TITLES[page]||page;
  const c=$('content'); c.innerHTML='';
  PAGES[page]?PAGES[page](...args):(c.innerHTML='<div class="empty"><div class="ei">🚧</div><p>Coming soon</p></div>');
  window.scrollTo(0,0);
  if(window.innerWidth<=768) document.getElementById('sidebar').classList.remove('sb-open');
  buildNav();
}

// ════════════════════════════════════════════════════════
//  MODAL
// ════════════════════════════════════════════════════════
function openM(title,body,btns=[]){
  $('mtitle').textContent=title;
  $('mbody').innerHTML=body;
  $('mfoot').innerHTML=btns.map(b=>`<button class="btn ${b.c}" onclick="${b.fn}">${b.l}</button>`).join('');
  $('modal').classList.remove('hidden');
}
function closeM(){$('modal').classList.add('hidden');$('mbody').innerHTML='';$('mfoot').innerHTML=''}
$('modal').addEventListener('click',e=>{if(e.target===$('modal'))closeM()});

// ════════════════════════════════════════════════════════
//  REUSABLE UI COMPONENTS
// ════════════════════════════════════════════════════════
function metric(ico,lbl,val,bg,color){return`<div class="mc"><div class="ico" style="background:${bg}">${ico}</div><div class="val" style="color:${color}">${val}</div><div class="lbl">${lbl}</div></div>`}
function roleBadge(r){const m={Admin:'bg-p',Instructor:'bg-a',Student:'bg-g'};return`<span class="bg ${m[r]||'bg-gr'}">${r}</span>`}
function statusBadge(a,sid){
  const sub=a.subs.find(s=>s.sid===sid);
  if(!sub)return'<span class="bg bg-r">Not Submitted</span>';
  if(sub.graded)return`<span class="bg bg-g">${sub.grade}/${a.max}</span>`;
  return'<span class="bg bg-a">Submitted</span>';
}
function progBar(pct,color='var(--g)'){return`<div class="prog"><div class="pf" style="width:${pct}%;background:${color}"></div></div>`}
function av(u,sz=32){return`<div class="av" style="background:${u.avatar};width:${sz}px;height:${sz}px;font-size:${sz/2.5}px">${init(u.name)}</div>`}
function emptyState(ico,msg){return`<div class="empty"><div class="ei">${ico}</div><p>${msg}</p></div>`}

// ════════════════════════════════════════════════════════
//  PAGES
// ════════════════════════════════════════════════════════
const PAGES={};
const pc=()=>$('content');

// ─── DASHBOARD ──────────────────────────────────────────
PAGES.dashboard=()=>{
  if(CU.role==='Admin') adminDash();
  else if(CU.role==='Instructor') teachDash();
  else stuDash();
};

function adminDash(){
  const stus=DB.users.filter(u=>u.role==='Student');
  const ins=DB.users.filter(u=>u.role==='Instructor');
  const totalSubs=DB.assignments.reduce((s,a)=>s+a.subs.length,0);
  const totalGraded=DB.assignments.reduce((s,a)=>s+a.subs.filter(s=>s.graded).length,0);
  pc().innerHTML=`
    <div class="page-hd"><h2>System Dashboard 📊</h2><p>Complete overview of ELMS platform.</p></div>
    <div class="mgrid">
      ${metric('👨‍🎓','Total Students',stus.length,'#E1F5EE','#0F6E56')}
      ${metric('👩‍🏫','Instructors',ins.length,'#EEEDFE','#534AB7')}
      ${metric('📚','Active Courses',DB.courses.length,'#FAEEDA','#B45309')}
      ${metric('📋','Assignments',DB.assignments.length,'#E6F1FB','#185FA5')}
    </div>
    <div class="g2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-hd"><h3>Enrollment by Course</h3></div>
        <div class="card-bd">
          <div class="chart-bar" id="enroll-chart"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-hd"><h3>Submission Statistics</h3></div>
        <div class="card-bd">
          ${DB.assignments.map(a=>{
            const pct=a.subs.length>0?Math.round(a.subs.filter(s=>s.graded).length/a.subs.length*100):0;
            return`<div style="margin-bottom:12px">
              <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                <span style="font-size:12px;font-weight:500">${a.title.substring(0,35)}…</span>
                <span style="font-size:11px;color:var(--text2)">${a.subs.length} sub</span>
              </div>
              ${progBar(pct)}
              <div style="font-size:10px;color:var(--text2);margin-top:2px">${pct}% graded</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
    <div class="g2">
      <div class="card">
        <div class="card-hd"><h3>Recent Users</h3><button class="btn btn-g btn-sm" onclick="go('users')">View All</button></div>
        <table class="tbl"><thead><tr><th>Name</th><th>Role</th><th>Joined</th></tr></thead><tbody>
          ${DB.users.slice(-5).reverse().map(u=>`<tr><td><div class="flex-g">${av(u,28)}<span style="font-weight:500">${u.name}</span></div></td><td>${roleBadge(u.role)}</td><td style="font-size:11px;color:var(--text2)">${fmt(u.joined)}</td></tr>`).join('')}
        </tbody></table>
      </div>
      <div class="card">
        <div class="card-hd"><h3>Course Status</h3></div>
        <div class="card-bd">
          <table class="tbl"><thead><tr><th>Course</th><th>Students</th><th>Lectures</th></tr></thead><tbody>
            ${DB.courses.map(c=>`<tr><td><div style="font-weight:500">${c.title}</div><span class="bg bg-p" style="font-size:10px">${c.code}</span></td><td>${c.students.length}</td><td>${c.lectures.length}</td></tr>`).join('')}
          </tbody></table>
        </div>
      </div>
    </div>`;
  setTimeout(()=>{
    const cc=$('enroll-chart');
    if(!cc)return;
    const mx=Math.max(...DB.courses.map(c=>c.students.length),1);
    cc.innerHTML=DB.courses.map(c=>`<div class="bar-item"><div class="bar-val">${c.students.length}</div><div class="bar" style="height:${Math.round(c.students.length/mx*100)}px" title="${c.title}: ${c.students.length} students"></div><div class="bar-lbl">${c.code}</div></div>`).join('');
  },50);
}

function teachDash(){
  const mc=DB.courses.filter(c=>c.instructor===CU.id);
  const ma=DB.assignments.filter(a=>mc.some(c=>c.id===a.cid));
  const pending=ma.reduce((s,a)=>s+a.subs.filter(s=>!s.graded).length,0);
  const allStu=[...new Set(mc.flatMap(c=>c.students))];
  pc().innerHTML=`
    <div class="page-hd"><h2>Welcome, ${CU.name.split(' ')[0]}! 📚</h2><p>Manage your courses and students.</p></div>
    <div class="mgrid">
      ${metric('📚','My Courses',mc.length,'#E1F5EE','#0F6E56')}
      ${metric('👨‍🎓','My Students',allStu.length,'#EEEDFE','#534AB7')}
      ${metric('📋','Assignments',ma.length,'#FAEEDA','#B45309')}
      ${metric('⏳','Pending Grades',pending,'#FCEBEB','#B91C1C')}
    </div>
    <div class="g2">
      <div class="card">
        <div class="card-hd"><h3>My Courses</h3><button class="btn btn-g btn-sm" onclick="go('createcourse')">+ New</button></div>
        <table class="tbl"><thead><tr><th>Course</th><th>Students</th><th>Lectures</th><th></th></tr></thead><tbody>
          ${mc.map(c=>`<tr><td><div style="font-weight:600">${c.title}</div><span class="bg bg-p" style="font-size:10px">${c.code}</span></td><td>${c.students.length}</td><td>${c.lectures.length}</td><td><button class="btn btn-ol btn-xs" onclick="curCid=${c.id};go('coursedetail')">Open</button></td></tr>`).join('')}
        </tbody></table>
      </div>
      <div class="card">
        <div class="card-hd"><h3>Recent Submissions</h3><button class="btn btn-g btn-sm" onclick="go('grading')">Grade All</button></div>
        ${ma.flatMap(a=>a.subs.map(s=>({...s,atitle:a.title,max:a.max,aid:a.id}))).slice(0,5).map(s=>{
          const u=DB.users.find(u=>u.id===s.sid);
          return`<div style="display:flex;align-items:center;gap:10px;padding:10px 18px;border-bottom:1px solid var(--border)">${av(u||{avatar:'#9CA3AF',name:'?'},28)}<div style="flex:1"><div style="font-size:13px;font-weight:500">${u?.name||'Unknown'}</div><div style="font-size:11px;color:var(--text2)">${s.atitle.substring(0,30)}…</div></div>${s.graded?`<span class="bg bg-g">${s.grade}/${s.max}</span>`:'<span class="bg bg-a">Pending</span>'}</div>`;
        }).join('') || emptyState('📭','No submissions yet')}
      </div>
    </div>`;
}

function stuDash(){
  const mc=DB.courses.filter(c=>c.students.includes(CU.id));
  const prog=DB.progress.filter(p=>p.sid===CU.id);
  const ma=DB.assignments.filter(a=>mc.some(c=>c.id===a.cid));
  const graded=DB.assignments.flatMap(a=>a.subs.filter(s=>s.sid===CU.id&&s.graded));
  const avg=graded.length?Math.round(graded.reduce((s,g)=>s+g.grade,0)/graded.length):0;
  const unread=DB.notifs.filter(n=>n.uid===CU.id&&!n.read).length;
  pc().innerHTML=`
    <div class="page-hd"><h2>Welcome, ${CU.name.split(' ')[0]}! 🎓</h2><p>Continue your learning journey today.</p></div>
    <div class="mgrid">
      ${metric('📚','Enrolled Courses',mc.length,'#E1F5EE','#0F6E56')}
      ${metric('📋','Assignments',ma.length,'#EEEDFE','#534AB7')}
      ${metric('✅','Graded',graded.length,'#FAEEDA','#B45309')}
      ${metric('📊','Avg Score',avg?avg+'%':'—',avg>=75?'#DCFCE7':avg>=50?'#FEF3C7':'#E6F1FB',avg>=75?'#166534':avg>=50?'#92400E':'#185FA5')}
    </div>
    <div class="g2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-hd"><h3>Course Progress</h3></div>
        <div class="card-bd">
          ${mc.map(c=>{
            const p=prog.find(p=>p.cid===c.id)||{pct:0};
            return`<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:13px;font-weight:500">${c.title}</span><span style="font-size:12px;font-weight:600;color:var(--g)">${p.pct}%</span></div>${progBar(p.pct)}<div style="font-size:11px;color:var(--text2);margin-top:3px">${c.code} &nbsp;•&nbsp; ${c.lectures.length} lectures</div></div>`;
          }).join('')||emptyState('📚','Enroll in courses to track progress')}
        </div>
      </div>
      <div class="card">
        <div class="card-hd"><h3>Recent Grades</h3><button class="btn btn-ol btn-sm" onclick="go('grades')">All Grades</button></div>
        <div class="card-bd">
          ${graded.slice(0,4).map(g=>{
            const a=DB.assignments.find(a=>a.subs.includes(g));
            if(!a)return'';
            const pct=Math.round(g.grade/a.max*100);
            return`<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:13px;font-weight:500">${a.title.substring(0,30)}…</span><span class="bg ${pct>=75?'bg-g':pct>=50?'bg-a':'bg-r'}">${g.grade}/${a.max}</span></div>${progBar(pct,pct>=75?'var(--g)':pct>=50?'var(--a)':'var(--r)')}</div>`;
          }).join('')||emptyState('🏆','No grades yet')}
        </div>
      </div>
    </div>
    ${unread>0?`<div class="card" style="margin-bottom:16px"><div class="card-hd"><h3>🔔 ${unread} Unread Notification${unread>1?'s':''}</h3><button class="btn btn-ol btn-sm" onclick="go('notifs')">View All</button></div>${DB.notifs.filter(n=>n.uid===CU.id&&!n.read).map(n=>`<div style="display:flex;gap:12px;padding:12px 18px;border-bottom:1px solid var(--border)"><div style="width:8px;height:8px;border-radius:50%;background:var(--g);flex-shrink:0;margin-top:5px"></div><div><div style="font-size:13px;font-weight:600">${n.title}</div><div style="font-size:12px;color:var(--text2)">${n.msg}</div><div style="font-size:11px;color:var(--text3);margin-top:3px">${n.time}</div></div></div>`).join('')}</div>`:''}`;
}

// ─── USERS (Admin) ────────────────────────────────────────
PAGES.users=()=>{
  let filter='All',search='';
  const render=()=>{
    const list=DB.users.filter(u=>(filter==='All'||u.role===filter)&&(u.name.toLowerCase().includes(search)||u.email.toLowerCase().includes(search)));
    $('utbody').innerHTML=list.map(u=>`<tr><td><div class="flex-g">${av(u,32)}<div><div style="font-weight:600">${u.name}</div></div></div></td><td style="color:var(--text2);font-size:12px">${u.email}</td><td>${roleBadge(u.role)}</td><td style="font-size:12px;color:var(--text2)">${fmt(u.joined)}</td><td><button class="btn btn-r btn-xs" ${u.id===CU.id?'disabled':''} onclick="delUser(${u.id})">Delete</button></td></tr>`).join('');
  };
  pc().innerHTML=`
    <div class="flex-b"><div class="page-hd" style="margin-bottom:0"><h2>User Management</h2><p>${DB.users.length} registered users</p></div><button class="btn btn-g" onclick="addUserModal()">+ Add User</button></div>
    <div class="card" style="margin-top:16px">
      <div class="card-hd" style="flex-wrap:wrap;gap:10px">
        <div style="display:flex;gap:5px;background:#F3F4F6;padding:4px;border-radius:8px">
          ${['All','Admin','Instructor','Student'].map(r=>`<button onclick="this.parentElement.querySelectorAll('button').forEach(b=>b.style.background='transparent');this.style.background='#fff';filter='${r}';render()" style="padding:5px 12px;border:none;border-radius:5px;font-size:12px;font-weight:600;cursor:pointer;background:${r==='All'?'#fff':'transparent'};font-family:inherit">${r}</button>`).join('')}
        </div>
        <input class="finput" style="width:220px" placeholder="🔍 Search users…" oninput="search=this.value.toLowerCase();render()">
      </div>
      <table class="tbl"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th><th>Action</th></tr></thead><tbody id="utbody"></tbody></table>
    </div>`;
  render();
};
function addUserModal(){
  openM('Add New User',`
    <div class="fgroup"><label class="flabel">Full Name *</label><input class="finput" id="un"></div>
    <div class="fgroup"><label class="flabel">Email *</label><input class="finput" id="ue" type="email"></div>
    <div class="fgroup"><label class="flabel">Password *</label><input class="finput" id="up" type="password" placeholder="Min 6 chars"></div>
    <div class="fgroup"><label class="flabel">Role</label><select class="finput" id="ur"><option>Student</option><option>Instructor</option><option>Admin</option></select></div>
  `,[{l:'Cancel',c:'btn-ol',fn:'closeM()'},{l:'Add User',c:'btn-g',fn:'saveUser()'}]);
}
function saveUser(){
  const n=$('un').value.trim(),e=$('ue').value.trim(),p=$('up').value.trim(),r=$('ur').value;
  if(!n||!e||!p)return toast('All fields required','err');
  if(DB.users.find(u=>u.email===e))return toast('Email already exists','err');
  const c={Student:'#0F6E56',Instructor:'#B45309',Admin:'#534AB7'};
  DB.users.push({id:DB.nids.user++,name:n,email:e,pass:p,role:r,avatar:c[r],joined:new Date().toISOString().split('T')[0]});
  save(); closeM(); go('users'); toast('User added successfully!');
}
function delUser(id){
  if(!confirm('Delete this user permanently?'))return;
  DB.users=DB.users.filter(u=>u.id!==id);
  DB.courses.forEach(c=>c.students=c.students.filter(s=>s!==id));
  save(); go('users'); toast('User deleted','warn');
}

// ...
// rest of the app.js content continues exactly as in original file
