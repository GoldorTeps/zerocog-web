/**
 * ZeroCog — 3D Cognitive Architecture System
 * CSS 3D cuboids driven by scroll + mouse parallax
 * "Clock gears floating in space" — no external dependencies
 */
(function () {
  "use strict";

  /* ═══════════════════════════════════════════════
     COLOUR TOKENS
  ═══════════════════════════════════════════════ */
  const C = {
    face_white:     "rgba(248,249,252,0.82)",
    face_light:     "rgba(232,237,245,0.65)",
    face_tinted:    "rgba(210,221,235,0.45)",
    face_dark:      "rgba(15, 43, 70, 0.06)",
    face_accent:    "rgba(0,168,107,0.08)",
    edge_main:      "rgba(15,43,70,0.14)",
    edge_accent:    "rgba(0,168,107,0.35)",
    edge_faint:     "rgba(15,43,70,0.06)",
  };

  /* ═══════════════════════════════════════════════
     BLOCK DEFINITIONS
     x,y,z  = centre position in viewport % (0–100) or fixed px offsets
     w,h,d  = width, height, depth in px
     rotX,rotY,rotZ = initial rotation (deg)
     group  = gear group id (A/B/C)
     scrollTY = Y-translate speed multiplier per scroll px
     scrollTX = X-translate speed multiplier per scroll px
     scrollRY = Y-rotation speed (deg per 100px scroll)
     scrollRX = X-rotation speed
     drift    = horizontal curve factor (sin wave strength)
     accent = use teal edge on some faces
  ═══════════════════════════════════════════════ */
  const BLOCK_DEFS = [
    /* ── GROUP A — large left monolith cluster (rotates CW on scroll) */
    {
      id: "A1",
      cx: 10, cy: 30, z: -400,
      w: 480, h: 950, d: 180,
      rotX: 12,  rotY: -25, rotZ: 4,
      group: "A",
      scrollTY: -0.16,
      scrollRY:  0.038,
      scrollRX:  0.012,
      accent: false,
    },
    {
      id: "A2",
      cx: -10, cy: 60, z: -250,
      w: 350, h: 600, d: 140,
      rotX: -10, rotY: -32, rotZ: -3,
      group: "A",
      scrollTY: -0.08,
      scrollRY:  0.030,
      scrollRX:  0.008,
      accent: false,
    },
    {
      id: "A3",
      cx: 18, cy: 5, z: -120,
      w: 140, h: 750, d: 70,
      rotX: 6,  rotY: -18, rotZ: 3,
      group: "A",
      scrollTY: -0.24,
      scrollRY:  0.048,
      scrollRX: -0.010,
      accent: true,
    },

    /* ── GROUP B — right cluster (counter-rotates, like meshing gear) */
    {
      id: "B1",
      cx: 90, cy: 35, z: -380,
      w: 580, h: 880, d: 200,
      rotX: -15, rotY: 28, rotZ: -5,
      group: "B",
      scrollTY:  0.14,
      scrollRY: -0.035,
      scrollRX: -0.010,
      accent: false,
    },
    {
      id: "B2",
      cx: 105, cy: 10, z: -180,
      w: 320, h: 420, d: 130,
      rotX:  8,  rotY: 38, rotZ:  4,
      group: "B",
      scrollTY:  0.07,
      scrollRY: -0.028,
      scrollRX:  0.007,
      accent: false,
    },
    {
      id: "B3",
      cx: 82, cy: 75, z: -100,
      w: 180, h: 550, d: 80,
      rotX: -6, rotY: 22, rotZ: -4,
      group: "B",
      scrollTY:  0.20,
      scrollRY: -0.045,
      scrollRX:  0.014,
      accent: true,
    },

    /* ── GROUP C — scattered depth pieces (translate mostly in Z & Y) */
    {
      id: "C1",
      cx: 50, cy: -15, z: -600,
      w: 820, h: 480, d: 220, // Monumental chunky block
      rotX: 18, rotY: 10, rotZ: 0,
      group: "C",
      scrollTY: -0.32,
      scrollTX: -0.06, // Horizontal drift
      scrollRY:  0.018,
      scrollRX:  0.025,
      drift: 25, // Curve strength
      accent: false,
    },
    {
      id: "C2",
      cx: 30, cy: 95, z: -350,
      w: 550, h: 520, d: 280, // Massive volumetric piece
      rotX: -12, rotY: -15, rotZ: 3,
      group: "C",
      scrollTY:  0.30,
      scrollTX:  0.08,
      scrollRY: -0.018,
      scrollRX: -0.015,
      drift: 45,
      accent: false,
    },
    {
      id: "C3",
      cx: 68, cy: 50, z: -250,
      w: 350, h: 720, d: 190, // Large vertical monolith
      rotX:  10, rotY: 18, rotZ: -4,
      group: "C",
      scrollTY:  0.15,
      scrollTX: -0.05,
      scrollRY:  0.025,
      scrollRX:  0.018,
      drift: 20,
      accent: true,
    },
    {
      id: "C4",
      cx: 20, cy: 45, z: -800,
      w: 680, h: 420, d: 240, // Deep massive slab
      rotX: -7, rotY: -12, rotZ: 0,
      group: "C",
      scrollTY: -0.48,
      scrollTX:  0.18,
      scrollRY:  0.012,
      scrollRX: -0.010,
      drift: 70,
      accent: false,
    },
    {
      id: "C5",
      cx: 80, cy: 110, z: -550,
      w: 580, h: 540, d: 350, // Imposing chunky volume
      rotX:  12, rotY: 22, rotZ: 3,
      group: "C",
      scrollTY:  0.38,
      scrollTX: -0.15,
      scrollRY: -0.022,
      scrollRX:  0.010,
      drift: 35,
      accent: false,
    },
  ];

  /* ═══════════════════════════════════════════════
     DOM SETUP
  ═══════════════════════════════════════════════ */
  // Inject stage + scene into body
  const stage = document.createElement("div");
  stage.id = "arch-stage";
  Object.assign(stage.style, {
    position:    "fixed",
    inset:       "0",
    zIndex:      "-1",
    pointerEvents: "none",
    overflow:    "hidden",
    // Blueprint grid via CSS — pure CSS, no canvas needed for this layer
    backgroundImage: [
      "linear-gradient(rgba(15,43,70,0.035) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(15,43,70,0.035) 1px, transparent 1px)",
      "linear-gradient(rgba(15,43,70,0.015) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(15,43,70,0.015) 1px, transparent 1px)",
    ].join(","),
    backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
  });

  // Scene — receives perspective + mouse tilt
  const scene = document.createElement("div");
  scene.id = "arch-scene";
  Object.assign(scene.style, {
    position:        "absolute",
    inset:           "0",
    perspective:     "700px",
    perspectiveOrigin: "50% 30%",
    transformStyle:  "preserve-3d",
    willChange:      "transform",
  });

  stage.appendChild(scene);
  // Insert at beginning of body so it's behind everything
  document.body.insertBefore(stage, document.body.firstChild);

  /* ═══════════════════════════════════════════════
     CUBOID BUILDER
     Creates a real 6-face CSS 3D box
  ═══════════════════════════════════════════════ */
  function makeCuboid(def) {
    const { w, h, d, accent } = def;

    // Outer wrapper — this is what we transform to move the block
    const wrapper = document.createElement("div");
    wrapper.className = "arch-block";
    wrapper.dataset.id = def.id;
    Object.assign(wrapper.style, {
      position:      "absolute",
      width:         w + "px",
      height:        h + "px",
      transformStyle: "preserve-3d",
      willChange:    "transform",
      // Centre the block on its cx/cy
      left:  `calc(${def.cx}vw - ${w / 2}px)`,
      top:   `calc(${def.cy}vh - ${h / 2}px)`,
    });

    // Face definitions [translateX, translateY, translateZ, rotateX, rotateY, faceW, faceH, color, edgeColor]
    const faces = [
      // Front
      { tx: 0,      ty: 0,     tz: d/2,  rx: 0,   ry: 0,   fw: w,   fh: h,   fill: C.face_white,  edge: accent ? C.edge_accent : C.edge_main },
      // Back
      { tx: 0,      ty: 0,     tz:-d/2,  rx: 0,   ry: 180, fw: w,   fh: h,   fill: C.face_tinted, edge: C.edge_faint },
      // Left
      { tx:-w/2,    ty: 0,     tz: 0,    rx: 0,   ry:-90,  fw: d,   fh: h,   fill: C.face_light,  edge: C.edge_main },
      // Right
      { tx: w/2,    ty: 0,     tz: 0,    rx: 0,   ry: 90,  fw: d,   fh: h,   fill: accent ? C.face_accent : C.face_light, edge: accent ? C.edge_accent : C.edge_main },
      // Top
      { tx: 0,      ty:-h/2,   tz: 0,    rx: 90,  ry: 0,   fw: w,   fh: d,   fill: C.face_dark,   edge: C.edge_faint },
      // Bottom
      { tx: 0,      ty: h/2,   tz: 0,    rx:-90,  ry: 0,   fw: w,   fh: d,   fill: C.face_dark,   edge: C.edge_faint },
    ];

    faces.forEach(face => {
      const el = document.createElement("div");
      Object.assign(el.style, {
        position:               "absolute",
        width:                  face.fw + "px",
        height:                 face.fh + "px",
        background:             face.fill,
        border:                 `1px solid ${face.edge}`,
        boxSizing:              "border-box",
        backfaceVisibility:     "visible",
        // Centre face on wrapper origin
        left:    `${(w - face.fw) / 2}px`,
        top:     `${(h - face.fh) / 2}px`,
        transform: `translateX(${face.tx}px) translateY(${face.ty}px) translateZ(${face.tz}px) rotateX(${face.rx}deg) rotateY(${face.ry}deg)`,
        // Blueprint hash mark detail on front face
      });

      // Add architectural detail lines to front face only (larger faces)
      if (face.tz === d/2 && w > 100) {
        addBlueprintLines(el, face.fw, face.fh, accent);
      }

      wrapper.appendChild(el);
    });

    return wrapper;
  }

  /* Blueprint registration marks and dimension lines */
  function addBlueprintLines(el, fw, fh, accent) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", fw);
    svg.setAttribute("height", fh);
    Object.assign(svg.style, {
      position: "absolute", inset: "0",
      pointerEvents: "none",
      overflow: "visible",
    });

    const col = accent ? "rgba(0,168,107,0.30)" : "rgba(15,43,70,0.12)";
    const colFaint = accent ? "rgba(0,168,107,0.12)" : "rgba(15,43,70,0.06)";

    // Corner register marks
    const corners = [[0,0,1,1],[fw,0,-1,1],[0,fh,1,-1],[fw,fh,-1,-1]];
    corners.forEach(([cx, cy, sx, sy]) => {
      const size = 10;
      const l1 = document.createElementNS("http://www.w3.org/2000/svg","line");
      l1.setAttribute("x1", cx); l1.setAttribute("y1", cy);
      l1.setAttribute("x2", cx + sx * size); l1.setAttribute("y2", cy);
      l1.setAttribute("stroke", col); l1.setAttribute("stroke-width", "0.8");
      const l2 = document.createElementNS("http://www.w3.org/2000/svg","line");
      l2.setAttribute("x1", cx); l2.setAttribute("y1", cy);
      l2.setAttribute("x2", cx); l2.setAttribute("y2", cy + sy * size);
      l2.setAttribute("stroke", col); l2.setAttribute("stroke-width", "0.8");
      svg.appendChild(l1); svg.appendChild(l2);
    });

    // Centre cross-hair (only on tall blocks)
    if (fh > 120) {
      const cx = fw / 2, cy = fh / 2;
      [["x1","y1","x2","y2"],[0, cy, fw, cy]].forEach(coords => {
        const l = document.createElementNS("http://www.w3.org/2000/svg","line");
        l.setAttribute("x1", 0); l.setAttribute("y1", cy);
        l.setAttribute("x2", fw); l.setAttribute("y2", cy);
        l.setAttribute("stroke", colFaint); l.setAttribute("stroke-width", "0.5");
        svg.appendChild(l);
      });
      const lv = document.createElementNS("http://www.w3.org/2000/svg","line");
      lv.setAttribute("x1", cx); lv.setAttribute("y1", 0);
      lv.setAttribute("x2", cx); lv.setAttribute("y2", fh);
      lv.setAttribute("stroke", colFaint); lv.setAttribute("stroke-width", "0.5");
      svg.appendChild(lv);
    }

    // ID label top-left
    const text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttribute("x", "8"); text.setAttribute("y", "16");
    text.setAttribute("fill", col);
    text.setAttribute("font-size", "8");
    text.setAttribute("font-family", "ui-monospace, monospace");
    text.setAttribute("letter-spacing", "0.08em");
    text.textContent = `BLK_${Math.floor(Math.random() * 900 + 100)}`;
    svg.appendChild(text);

    el.appendChild(svg);
  }

  /* ═══════════════════════════════════════════════
     INSTANTIATE BLOCKS
  ═══════════════════════════════════════════════ */
  const blocks = BLOCK_DEFS.map(def => {
    const el = makeCuboid(def);
    scene.appendChild(el);
    return { def, el };
  });

  /* ═══════════════════════════════════════════════
     STATE
  ═══════════════════════════════════════════════ */
  let scrollY   = 0;
  let scrollSm  = 0;   // smooth scrollY
  let mouse     = { x: 0.5, y: 0.5 };
  let mouseSm   = { x: 0.5, y: 0.5 };

  // Initial block base transforms (captured at scroll=0)
  const BASE = BLOCK_DEFS.map(d => ({
    rotX: d.rotX,
    rotY: d.rotY,
    rotZ: d.rotZ,
    ty:   0,
  }));

  /* ═══════════════════════════════════════════════
     ANIMATION LOOP
  ═══════════════════════════════════════════════ */
  let raf;
  function tick() {
    // Smooth scroll
    scrollSm += (scrollY - scrollSm) * 0.06;

    // Smooth mouse
    const me = 0.07;
    mouseSm.x += (mouse.x - mouseSm.x) * me;
    mouseSm.y += (mouse.y - mouseSm.y) * me;

    // Scene tilt driven by mouse — gentle, architectural
    const tiltX =  (mouseSm.y - 0.5) *  8;   // deg
    const tiltY =  (mouseSm.x - 0.5) * 12;
    scene.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    // Per-block scroll transform
    blocks.forEach(({ def, el }, i) => {
      const base = BASE[i];
      const s = scrollSm;

      // Translate on Y and X axis
      const ty = s * def.scrollTY;
      const tx = (def.scrollTX ? s * def.scrollTX : 0);

      // Rotation driven by scroll (gear effect)
      const rY = base.rotY + s * def.scrollRY;
      const rX = base.rotX + s * def.scrollRX;
      const rZ = base.rotZ;

      // Small ambient float using time + drift curve
      const t = performance.now() / 1000;
      const floatY  = Math.sin(t * 0.12 + i * 1.3) * 8;
      const floatRZ = Math.sin(t * 0.07 + i * 2.1) * 1.2;
      const driftX  = def.drift ? Math.sin(t * 0.15 + i) * def.drift : 0;

      el.style.transform = [
        `translateZ(${def.z}px)`,
        `translateX(${tx + driftX}px)`,
        `translateY(${ty + floatY}px)`,
        `rotateX(${rX}deg)`,
        `rotateY(${rY}deg)`,
        `rotateZ(${rZ + floatRZ}deg)`,
      ].join(" ");
    });

    raf = requestAnimationFrame(tick);
  }

  /* ═══════════════════════════════════════════════
     EVENTS
  ═══════════════════════════════════════════════ */
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
  });

  window.addEventListener("touchmove", e => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX / window.innerWidth;
      mouse.y = e.touches[0].clientY / window.innerHeight;
    }
  }, { passive: true });

  /* ═══════════════════════════════════════════════
     INIT
  ═══════════════════════════════════════════════ */
  tick();

})();
