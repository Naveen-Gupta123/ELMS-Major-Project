// ════════════════════════════════════════════════════════
//  EXTENDED WORKSPACE & LEARNING MODULES
// ════════════════════════════════════════════════════════
let curCid = null; // Tracks current course focus context

// ─── BROWSE COURSES (Student View) ──────────────────────
PAGES.browse = () => {
  const contentNode = $('content');
  const studentEnrolledIds = DB.courses
    .filter(c => c.students.includes(CU.id))
    .map(c => c.id);

  contentNode.innerHTML = `
    <div style="margin-bottom: 20px;">
      <h2>Available Class Catalogs</h2>
      <p style="color: var(--text2); font-size: 12px;">Discover and register for new academic tracks.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
      ${DB.courses.map(c => {
        const isEnrolled = studentEnrolledIds.includes(c.id);
        return `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div class="card-bd">
              <div style="font-size: 24px; margin-bottom: 8px;">${c.thumb || '📚'}</div>
              <h3 style="font-size: 15px; margin-bottom: 4px;">${c.title}</h3>
              <span class="bg bg-p" style="font-size: 10px; display: inline-block; margin-bottom: 8px;">${c.code}</span>
              <p style="color: var(--text2); font-size: 12px; line-height: 1.4; margin-bottom: 12px;">${c.desc}</p>
              <div style="font-size: 11px; color: var(--text3);">Duration: ${c.dur}</div>
            </div>
            <div style="padding: 12px 18px; border-top: 1px solid var(--border); background: #FAFAFA; text-align: right;">
              ${isEnrolled 
                ? `<button class="btn btn-g btn-xs" style="opacity: 0.6; cursor: not-allowed;" disabled>✓ Enrolled</button>`
                : `<button class="btn btn-ol btn-xs" onclick="enrollInCourse(${c.id})">Enroll Path →</button>`
              }
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
};

window.enrollInCourse = (courseId) => {
  const targetCourse = DB.courses.find(c => c.id === courseId);
  if (!targetCourse) return toast('Course reference invalid', 'err');

  targetCourse.students.push(CU.id);
  DB.progress.push({ sid: CU.id, cid: courseId, done: [], pct: 0 });
  
  // Create system alert record
  DB.notifs.push({
    id: DB.nids.notif++,
    uid: CU.id,
    title: 'Enrolled Successfully 🎉',
    msg: `You have signed up for path "${targetCourse.title}".`,
    time: 'Just now',
    read: false
  });

  save();
  go('browse');
  toast(`Registered for ${targetCourse.code}!`);
};

// ─── INSTRUCTOR COURSE WORKSPACE ────────────────────────
PAGES.courses = () => {
  const teacherCourses = DB.courses.filter(c => c.instructor === CU.id);
  
  $('content').innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div>
        <h2>Assigned Class Syllabus Modules</h2>
        <p style="color: var(--text2); font-size: 12px;">Modify curricula and analyze registered student populations.</p>
      </div>
      <button class="btn btn-g" onclick="showNewCourseModal()">+ Add Course</button>
    </div>
    <div class="card">
      <table class="tbl">
        <thead>
          <tr><th>Code</th><th>Course Track Name</th><th>Roster Count</th><th>Lectures</th><th>Actions</th></tr>
        </thead>
        <tbody>
          ${teacherCourses.map(c => `
            <tr>
              <td><span class="bg bg-g">${c.code}</span></td>
              <td><strong>${c.title}</strong></td>
              <td>${c.students.length} Learners</td>
              <td>${c.lectures.length} Items</td>
              <td><button class="btn btn-ol btn-xs" onclick="curCid=${c.id}; openCourseConsole();">Console</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};

function showNewCourseModal() {
  openM('Instantiate New Class Path', `
    <div class="fgroup"><label class="flabel">Course Title Name *</label><input class="finput" id="nc-title" placeholder="e.g. Advanced Operating Systems"></div>
    <div class="fgroup"><label class="flabel">Course Alpha-Code *</label><input class="finput" id="nc-code" placeholder="e.g. CS-402"></div>
    <div class="fgroup"><label class="flabel">Brief Abstract Summary *</label><input class="finput" id="nc-desc" placeholder="Provide overview guidelines..."></div>
    <div class="fgroup"><label class="flabel">Domain Category</label>
      <select class="finput" id="nc-cat">
        <option>Web</option><option>Database</option><option>Programming</option><option>Other</option>
      </select>
    </div>
  `, [
    { l: 'Cancel', c: 'btn-ol', fn: 'closeM()' },
    { l: 'Generate Path', c: 'btn-g', fn: 'saveNewCourse()' }
  ]);
}

window.saveNewCourse = () => {
  const title = $('nc-title').value.trim();
  const code = $('nc-code').value.trim();
  const desc = $('nc-desc').value.trim();
  const cat = $('nc-cat').value;

  if (!title || !code || !desc) return toast('All mandatory inputs missing', 'err');

  DB.courses.push({
    id: DB.nids.course++,
    title, code, desc, cat,
    instructor: CU.id,
    students: [],
    dur: '10 weeks',
    thumb: '💻',
    tags: [cat],
    pub: true,
    lectures: []
  });

  save();
  closeM();
  go('courses');
  toast('Syllabus file created!');
};

window.openCourseConsole = () => {
  const targetCourse = DB.courses.find(c => c.id === curCid);
  $('content').innerHTML = `
    <div style="margin-bottom: 20px;">
      <button class="btn btn-ol btn-xs" onclick="go('courses')" style="margin-bottom: 8px;">← Return Grid</button>
      <h2>Syllabus Studio: ${targetCourse.title} (${targetCourse.code})</h2>
    </div>
    <div class="card" style="margin-bottom: 20px;">
      <div class="mhd" style="border:none; padding-bottom: 0;"><h3>Lecture Materials Array</h3></div>
      <div class="card-bd">
        <table class="tbl" style="margin-bottom: 14px;">
          <thead><tr><th>ID</th><th>Topic Title</th><th>Runtime Length</th></tr></thead>
          <tbody>
            ${targetCourse.lectures.map(l => `<tr><td>${l.id}</td><td>${l.title}</td><td>${l.min} Mins</td></tr>`).join('')}
          </tbody>
        </table>
        <div style="display: flex; gap: 8px;">
          <input class="finput" id="nl-title" placeholder="New lesson name..." style="flex: 2;">
          <input class="finput" id="nl-min" type="number" placeholder="Mins" style="flex: 1;">
          <button class="btn btn-g" onclick="appendLectureItem()">+ Append Item</button>
        </div>
      </div>
    </div>
  `;
};

window.appendLectureItem = () => {
  const title = $('nl-title').value.trim();
  const duration = parseInt($('nl-min').value, 10);
  if (!title || !duration) return toast('Lesson field invalid', 'warn');

  const targetCourse = DB.courses.find(c => c.id === curCid);
  const nextId = targetCourse.lectures.length + 1;
  targetCourse.lectures.push({ id: nextId, title, min: duration });

  save();
  openCourseConsole();
  toast('Lesson array index added!');
};