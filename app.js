const stages = [
  ["stageUpload", "1단계 · 파일 업로드"],
  ["stageConcept", "2단계 · 컨셉 마련"],
  ["stagePlan", "3단계 · 기획하기"],
  ["stageAssets", "4단계 · 완성하기"],
  ["stageEdit", "5단계 · 편집하기"],
  ["stageSeo", "6단계 · SEO 글쓰기"],
  ["stageConvert", "7단계 · MP4→MP3 변환"],
];

const apiProviders = [
  ["openai", "OpenAI Images / TTS / Vision", "유료, 이미지 생성·분석·TTS"],
  ["google", "Google Gemini / Veo / Flow", "유료/일부 무료, 영상·이미지·분석"],
  ["runway", "Runway", "유료, 이미지→영상"],
  ["pika", "Pika", "유료/무료 크레딧, 영상 생성"],
  ["luma", "Luma Dream Machine", "유료/무료 크레딧, 영상 생성"],
  ["elevenlabs", "ElevenLabs", "유료/무료 할당, 고품질 음성"],
  ["replicate", "Replicate", "유료, 오픈 모델 실행"],
  ["stability", "Stability AI", "유료, 이미지 생성"],
];

const stylePresets = [
  ["동양 현대 실사", "contemporary East Asian live-action cinema, natural skin, modern city or interior, realistic lens, grounded emotion"],
  ["서양 현대 실사", "western contemporary live-action cinema, elegant locations, realistic people, soft contrast, premium music-video look"],
  ["동남아 현대 실사", "Southeast Asian contemporary live-action cinema, humid light, vivid streets, natural documentary realism"],
  ["흑인 현대 실사", "Black contemporary live-action cinema, expressive portrait lighting, urban realism, soulful emotional tone"],
  ["동양 로맨틱 2D", "East Asian romantic 2D animation, soft cherry blossoms, delicate line art, warm pastel atmosphere"],
  ["서양 로맨틱 2D", "western romantic 2D animation, glowing sunset, painterly character animation, tender expressions"],
  ["동양 3D 디즈니", "East Asian family-friendly 3D animated film style, rounded expressive faces, cinematic lighting, polished detail"],
  ["서양 3D 디즈니", "western family-friendly 3D animated film style, expressive characters, bright cinematic staging"],
  ["한국 전통 2D", "Korean traditional 2D illustration, hanbok, ink-wash texture, palace and village motifs, elegant composition"],
  ["한국 전통 3D", "Korean traditional 3D cinematic animation, hanbok fabric detail, lantern light, palace architecture"],
  ["한국 역사드라마 실사", "Korean historical drama live-action, Joseon-era wardrobe, cinematic period lighting, authentic props"],
  ["일본 애니", "Japanese anime film style, clean line art, emotional closeups, atmospheric skies, detailed backgrounds"],
  ["일본 전통", "traditional Japanese period illustration, kimono, old village streets, woodblock-inspired composition"],
  ["중국 전통", "traditional Chinese period drama style, flowing robes, palace gardens, poetic mist and lanterns"],
  ["서부극", "western frontier cinema, dusty sunlight, wide landscapes, dramatic silhouettes, rugged realism"],
  ["동남아 전통", "traditional Southeast Asian cultural cinema, ornate fabrics, temples, warm tropical light"],
  ["인도 전통", "traditional Indian cinematic style, rich textiles, palace detail, gold accents, expressive gestures"],
  ["남미 전통", "traditional Latin American folk-inspired cinema, vibrant textiles, mountains, festival colors"],
  ["아랍 전통", "traditional Arab cinematic style, desert architecture, patterned textiles, warm amber light"],
  ["동양 수채화", "East Asian watercolor illustration, translucent washes, poetic negative space, gentle emotional tone"],
  ["서양 수채화", "western watercolor illustration, soft pigment blooms, pastoral light, tender storybook mood"],
  ["채색 수묵화", "colored ink-wash painting, brush texture, restrained palette, elegant flowing composition"],
  ["동양 사이버펑크", "East Asian cyberpunk cinema, neon alleys, rain reflections, high-tech mood, dramatic color contrast"],
  ["서양 사이버펑크", "western cyberpunk cinema, neon skyline, futuristic streets, glossy reflections, intense atmosphere"],
  ["동양 판타지", "East Asian fantasy cinema, mythic light, mountains, robes, magical particles, epic scale"],
  ["서양 판타지", "western fantasy cinema, castles, glowing forests, heroic composition, realistic VFX"],
  ["스튜디오", "clean studio set, controlled lighting, minimal props, editorial music-video composition"],
  ["스튜우먼", "soft feminine studio portrait style, beauty lighting, gentle set design, elegant posing"],
  ["커버", "album cover art style, bold central subject, iconic composition, premium graphic mood without text"],
  ["픽셀아트", "pixel art music-video frame, vibrant blocks, retro game atmosphere, detailed pixel scene"],
  ["마인크래프트", "voxel block world style, bright landscapes, cubic characters, playful cinematic framing"],
  ["레고 3D", "toy brick 3D animation style, colorful block-built scene, playful cinematic lighting"],
  ["레트로 만화", "retro comic-book illustration, halftone texture, bold inks, dynamic panels without speech bubbles"],
  ["호러", "horror cinema, low-key lighting, uneasy shadows, suspenseful atmosphere, tasteful and non-gory"],
  ["히트", "street documentary realism, busy city crosswalks, handheld energy, fashionable urban mood"],
  ["두뇌 인체", "futuristic anatomical visualization style, translucent human forms, medical sci-fi lighting, clean composition"],
  ["몽골 투바음악", "Mongolian and Tuvan music video style, Mongolian performers, vast steppe landscape, traditional deels, morin khuur horsehead fiddle, throat singing mood, nomadic tents, wind, horses, earthy cinematic realism"],
  ["장터음악 각설이", "Korean traditional market music style, jangteo marketplace, gak-seori tteoryeong street performer, patched ragged clothes, rustic humor, janggu and kkwaenggwari rhythm, warm crowded market energy, realistic Korean folk performance"],
  ["조선힙합", "Joseon hip-hop fusion style, hanbok, modernized hanbok, gat hat, traditional palace or hanok street mixed with neon hip-hop stage, confident Korean performers, rhythmic dance, old-and-new cultural fusion"],
];

const motionPresets = [
  ["자동 교차 무빙", "장면마다 좌우, 위아래, 줌, 유형을 골고루 자동 교차"],
  ["좌 → 우 패닝", "왼쪽에서 오른쪽으로 부드럽게 가로지르는 시네마틱 무빙"],
  ["우 → 좌 패닝", "오른쪽에서 왼쪽으로 부드럽게 가로지르는 시네마틱 무빙"],
  ["아래 → 위 틸트업", "인물/하단에서 하늘/상단으로 서서히 올라가는 무빙"],
  ["위 → 아래 틸트다운", "상단에서 하단으로 서서히 내려오는 무빙"],
  ["다이내믹 줌인", "화면 중심으로 서서히 빨려 들어가며 다가선 이동"],
];

const transitionPresets = [
  ["크로스 디졸브", "두 이미지가 교차하며 부드럽게 전환"],
  ["페이드 블랙", "서서히 어두워진 후 다음 장면 등장"],
  ["줌 인", "화면이 안쪽으로 빨려 들어가며 확대 전환"],
  ["줌 아웃", "화면이 뒤로 물러나며 축소 전환"],
  ["슬라이드 좌측", "좌측으로 매끄럽게 밀려나는 전환"],
  ["슬라이드 우측", "우측으로 밀려나는 슬라이드"],
  ["슬라이드 상단", "위쪽으로 올라가며 바뀌는 전환"],
  ["휩 팬", "빠른 스와이프 블러 액션 전환"],
];

const state = {
  title: "",
  ratio: "9:16",
  duration: 0,
  mp3: null,
  srtFile: null,
  srtText: "",
  captions: [],
  refs: [],
  concepts: [],
  selectedConcept: 0,
  selectedStyle: 0,
  scenes: [],
  clips: [],
  selectedEditTab: "timeline",
  selectedMotion: 0,
  selectedTransition: 0,
  mp4File: null,
  convertedMp3Blob: null,
  apiKeys: {},
  history: JSON.parse(localStorage.getItem("mvd-history") || "[]"),
};

const $ = (id) => document.getElementById(id);

function boot() {
  renderSteps();
  renderStyleGrids();
  renderEditPresets();
  renderCaptionChips();
  renderApiGrid();
  renderHistory();
  bind();
  log("앱이 준비되었습니다. MP3와 SRT를 업로드하면 자동으로 장면 길이를 산정합니다.");
}

function bind() {
  $("homeBtn").onclick = () => go(0);
  $("settingsBtn").onclick = () => go(3);
  $("mp3Input").onchange = handleMp3;
  $("srtInput").onchange = handleSrt;
  $("refInput").onchange = handleRefs;
  $("analyzeBtn").onclick = analyze;
  $("generateConceptsBtn").onclick = generateConcepts;
  $("buildStoryboardBtn").onclick = buildStoryboard;
  $("copyAllImagePrompts").onclick = () => copyText(state.scenes.map(s => s.imagePrompt).join("\n\n---\n\n"), "이미지 프롬프트 전체를 복사했습니다.");
  $("copyAllVideoPrompts").onclick = () => copyText(state.scenes.map(s => s.videoPrompt).join("\n\n---\n\n"), "영상 프롬프트 전체를 복사했습니다.");
  $("generateSeoBtn").onclick = generateSeo;
  $("copySeoTitle").onclick = () => copyText($("seoTitle").value, "유튜브 제목을 복사했습니다.");
  $("copySeoDesc").onclick = () => copyText($("seoDesc").value, "설명글을 복사했습니다.");
  $("copySeoTags").onclick = () => copyText($("seoTags").value, "해시태그를 복사했습니다.");
  $("copySeoAll").onclick = () => copyText(formatSeoOutput(), "SEO 전체 내용을 복사했습니다.");
  $("mp4Input").onchange = handleMp4Input;
  $("convertMp4Btn").onclick = convertMp4ToMp3;
  $("downloadMp3Btn").onclick = downloadConvertedMp3;
  $("clearConvertBtn").onclick = resetConverter;
  $("exportSettings").onclick = exportSettings;
  $("importSettings").onclick = () => $("settingsFile").click();
  $("settingsFile").onchange = importSettings;
  $("resetAllButKeys").onclick = resetAllButKeys;
  $("resetEverything").onclick = resetEverything;
  $("saveProjectBtn").onclick = saveProject;
  $("loadProjectBtn").onclick = () => $("projectFile").click();
  $("projectFile").onchange = loadProject;
  $("clipUpload").onchange = handleClips;
  $("pickEditFilesBtn").onclick = () => $("clipUpload").click();
  $("zipUploadBtn").onclick = () => $("clipUpload").click();
  $("bottomUploadBtn").onclick = () => $("clipUpload").click();
  $("replaceClipsBtn").onclick = () => $("clipUpload").click();
  $("appendClipsBtn").onclick = () => { $("clipUpload").dataset.mode = "append"; $("clipUpload").click(); };
  $("renderBtn").onclick = renderPreview;
  $("bottomRenderBtn").onclick = renderPreview;
  $("downloadVideo").onclick = downloadRendered;
  $("speakBtn").onclick = speakFreeVoice;
  $("playPreviewBtn").onclick = renderPreview;
  $("copyCurrentSrt").onclick = () => copyText(state.captions.map(c => `${fmt(c.start)} ${c.text}`).join("\n"), "현재 SRT 자막을 복사했습니다.");
  $("saveCaptionBtn").onclick = saveLiveCaption;
  $("autoTitleBtn").onclick = () => { $("titleText").value = state.title || $("projectTitle").value || "노래 제목"; renderPreview(); };
  $("studioSettingsBtn").onclick = () => switchEditorTab("subtitle");
  $("historyKeepBtn").onclick = () => saveHistory("편집 히스토리 보관");
  $("historyKeepBottom").onclick = () => saveHistory("편집 히스토리 보관");
  bindEditorTabs();
  bindEditorDrop();
  bindLiveControls();
  document.querySelectorAll("#ratioGroup button").forEach(btn => btn.onclick = () => {
    state.ratio = btn.dataset.ratio;
    document.querySelectorAll("#ratioGroup button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
}

function handleMp4Input(e) {
  const file = e.target.files[0];
  state.mp4File = file || null;
  state.convertedMp3Blob = null;
  $("downloadMp3Btn").disabled = true;
  $("convertedAudio").hidden = true;
  $("convertedAudio").removeAttribute("src");
  if (!file) {
    renderFileList("mp4FileList", []);
    $("convertMp4Btn").disabled = true;
    setConvertStatus("MP4 파일을 선택해 주세요.", 0);
    return;
  }
  renderFileList("mp4FileList", [file]);
  $("mp3OutputName").value = `${file.name.replace(/\.[^.]+$/, "")}.mp3`;
  $("convertMp4Btn").disabled = false;
  setConvertStatus(`${file.name} 파일을 불러왔습니다.`, 8);
}

async function convertMp4ToMp3() {
  if (!state.mp4File) return;
  if (!window.lamejs) {
    setConvertStatus("MP3 인코더를 불러오지 못했습니다. 인터넷 연결 후 새로고침해 주세요.", 0);
    return;
  }
  try {
    $("convertMp4Btn").disabled = true;
    $("downloadMp3Btn").disabled = true;
    setConvertStatus("MP4 오디오를 읽는 중입니다.", 18);
    const buffer = await state.mp4File.arrayBuffer();
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioCtx();
    setConvertStatus("오디오 트랙을 디코딩하는 중입니다.", 38);
    const audioBuffer = await audioCtx.decodeAudioData(buffer.slice(0));
    setConvertStatus("MP3로 인코딩하는 중입니다.", 58);
    const mp3Blob = encodeAudioBufferToMp3(audioBuffer, Number($("mp3Bitrate").value || 192), (progress) => {
      setConvertStatus(`MP3로 인코딩하는 중입니다. ${Math.round(progress)}%`, 58 + progress * 0.36);
    });
    await audioCtx.close();
    state.convertedMp3Blob = mp3Blob;
    const url = URL.createObjectURL(mp3Blob);
    $("convertedAudio").src = url;
    $("convertedAudio").hidden = false;
    $("downloadMp3Btn").disabled = false;
    setConvertStatus("변환 완료. MP3를 미리듣거나 다운로드할 수 있습니다.", 100);
    saveHistory("MP4를 MP3로 변환");
  } catch (err) {
    setConvertStatus(`변환 실패: ${err.message || err}`, 0);
  } finally {
    $("convertMp4Btn").disabled = !state.mp4File;
  }
}

function encodeAudioBufferToMp3(audioBuffer, bitrate, onProgress) {
  const channels = Math.min(2, audioBuffer.numberOfChannels);
  const sampleRate = audioBuffer.sampleRate;
  const left = floatTo16BitPCM(audioBuffer.getChannelData(0));
  const right = channels > 1 ? floatTo16BitPCM(audioBuffer.getChannelData(1)) : left;
  const encoder = new lamejs.Mp3Encoder(channels, sampleRate, bitrate);
  const blockSize = 1152;
  const chunks = [];
  for (let i = 0; i < left.length; i += blockSize) {
    const leftChunk = left.subarray(i, i + blockSize);
    const rightChunk = channels > 1 ? right.subarray(i, i + blockSize) : undefined;
    const mp3buf = channels > 1 ? encoder.encodeBuffer(leftChunk, rightChunk) : encoder.encodeBuffer(leftChunk);
    if (mp3buf.length) chunks.push(mp3buf);
    if (onProgress && i % (blockSize * 80) === 0) onProgress((i / left.length) * 100);
  }
  const end = encoder.flush();
  if (end.length) chunks.push(end);
  return new Blob(chunks, { type: "audio/mpeg" });
}

function floatTo16BitPCM(input) {
  const output = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]));
    output[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return output;
}

function downloadConvertedMp3() {
  if (!state.convertedMp3Blob) return;
  const name = $("mp3OutputName").value.trim() || "converted.mp3";
  downloadBlob(name.endsWith(".mp3") ? name : `${name}.mp3`, state.convertedMp3Blob);
}

function resetConverter() {
  state.mp4File = null;
  state.convertedMp3Blob = null;
  $("mp4Input").value = "";
  $("mp3OutputName").value = "";
  renderFileList("mp4FileList", []);
  $("convertMp4Btn").disabled = true;
  $("downloadMp3Btn").disabled = true;
  $("convertedAudio").hidden = true;
  $("convertedAudio").removeAttribute("src");
  setConvertStatus("MP4 파일을 선택해 주세요.", 0);
}

function setConvertStatus(text, percent) {
  if ($("convertStatusText")) $("convertStatusText").textContent = text;
  if ($("convertProgress")) $("convertProgress").style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function bindEditorTabs() {
  if (!$("editorTabs")) return;
  $("editorTabs").querySelectorAll("button").forEach(btn => {
    btn.onclick = () => switchEditorTab(btn.dataset.tab);
  });
}

function switchEditorTab(tab) {
  state.selectedEditTab = tab;
  document.querySelectorAll("#editorTabs button").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === tab));
}

function bindEditorDrop() {
  const zone = $("editDropZone");
  if (!zone) return;
  ["dragenter", "dragover"].forEach(type => zone.addEventListener(type, e => {
    e.preventDefault();
    zone.classList.add("dragging");
  }));
  ["dragleave", "drop"].forEach(type => zone.addEventListener(type, e => {
    e.preventDefault();
    zone.classList.remove("dragging");
  }));
  zone.addEventListener("drop", e => {
    ingestEditFiles([...e.dataTransfer.files], $("clipUpload").dataset.mode === "append");
    $("clipUpload").dataset.mode = "";
  });
}

function bindLiveControls() {
  ["fontSize", "letterSpacing", "strokeWidth", "subtitleY", "motionStrength", "globalClipDuration", "bgmVolume", "ttsVolume", "titleFontSize"].forEach(id => {
    const el = $(id);
    if (el) el.oninput = () => {
      updateEditorValueLabels();
      renderPreview();
    };
  });
  ["fontColor", "fontSelect", "fontWeight", "titlePos", "titleBg", "bgmSelect", "motionPreset", "transitionPreset"].forEach(id => {
    const el = $(id);
    if (el) el.onchange = renderPreview;
  });
  document.querySelectorAll(".color-row button").forEach(btn => btn.onclick = () => {
    $("fontColor").value = btn.dataset.color;
    renderPreview();
  });
  updateEditorValueLabels();
}

function updateEditorValueLabels() {
  if ($("fontSizeValue")) $("fontSizeValue").textContent = `${$("fontSize").value}px`;
  if ($("letterValue")) $("letterValue").textContent = `${$("letterSpacing").value}px`;
  if ($("strokeValue")) $("strokeValue").textContent = `${$("strokeWidth").value}px`;
  if ($("subtitleYValue")) $("subtitleYValue").textContent = `${$("subtitleY").value}px`;
  if ($("motionValue")) $("motionValue").textContent = `${$("motionStrength").value}x`;
}

function renderSteps() {
  $("steps").innerHTML = stages.map((s, i) => `<button data-i="${i}" class="${i===0?"active":""}">${s[1]}</button>`).join("");
  $("steps").querySelectorAll("button").forEach(btn => btn.onclick = () => go(Number(btn.dataset.i)));
}

function go(i) {
  stages.forEach(([id], idx) => $(id).classList.toggle("active", idx === i));
  $("steps").querySelectorAll("button").forEach((b, idx) => b.classList.toggle("active", idx === i));
  $("pageTitle").textContent = stages[i][1];
  if (i === 4) {
    renderCaptionChips();
    renderTimeline();
    renderPreview();
  }
  if (i === 5 && !$("seoInput").value.trim()) {
    $("seoInput").value = state.captions.map(c => c.text).join("\n") || state.scenes.map(s => s.lyric).join("\n") || state.title;
  }
}

function generateSeo() {
  const raw = $("seoInput").value.trim() || state.title || "감성 뮤직비디오";
  const clean = raw.replace(/\s+/g, " ").trim();
  const titleBase = state.title || extractSeoKeyword(clean) || "감성 뮤직비디오";
  const mood = detectSeoMood(clean);
  const rewritten = rewriteSeoSentence(clean, titleBase, mood);
  let title = buildSeoTitle(titleBase, mood, clean);
  if (title.length < 20) title = `${title} 가사와 영상으로 다시 듣는 노래`;
  const keywords = buildSeoKeywords(clean, titleBase, mood);
  const desc = [
    `${title}`,
    "",
    `${rewritten}`,
    "",
    "이 영상은 노래의 메시지와 분위기를 바탕으로 장면을 다시 구성한 뮤직비디오입니다.",
    "원문의 의미는 유지하되, 시청자가 제목과 설명만 보고도 감정선과 볼거리를 이해할 수 있도록 SEO 문장으로 정리했습니다.",
    "",
    "감상 포인트",
    `- ${mood} 분위기의 영상미`,
    "- 가사와 대본 흐름을 따라가는 장면 구성",
    "- 음악의 핵심 정서를 살린 영상 연출",
    "- 유튜브 검색과 추천 노출을 고려한 제목·설명·해시태그 구성",
    "",
    "추천 시청 포인트",
    "- 첫 장면에서 전체 분위기를 확인해 보세요.",
    "- 후렴 또는 감정이 강해지는 구간에서 영상 전환을 집중해서 보면 더 좋습니다.",
    "- 가사 속 핵심 단어가 장면 이미지와 어떻게 연결되는지도 함께 느껴보세요.",
    "",
    "영상 정보",
    `- 주제: ${titleBase}`,
    `- 분위기: ${mood}`,
    "- 형식: 음악 기반 뮤직비디오 / 가사 영상 / AI 영상 콘셉트",
    "",
    "좋아요와 구독은 다음 뮤직비디오 제작에 큰 힘이 됩니다.",
    "댓글로 다음에 보고 싶은 노래 분위기나 영상 스타일을 남겨 주세요.",
  ].join("\n");
  const tags = keywords.map(k => `#${k.replace(/[^\p{L}\p{N}_가-힣]/gu, "")}`).filter(t => t.length > 1).slice(0, 18).join(" ");
  $("seoTitle").value = title;
  $("seoDesc").value = desc;
  $("seoTags").value = tags;
  saveHistory("SEO 글쓰기 생성");
}

function extractSeoKeyword(text) {
  const first = text.split(/[,.!?。\n]/)[0]?.trim() || "";
  const words = first.match(/[가-힣A-Za-z0-9]{2,}/g) || [];
  return words.slice(0, 5).join(" ").slice(0, 28).trim() || first.slice(0, 24).trim();
}

function buildSeoTitle(titleBase, mood, text) {
  if (/조선|한복|힙합|장단/.test(text)) return `조선 감성 힙합 뮤직비디오 | 한복과 비트가 만난 ${mood}`;
  if (/장터|각설이|타령|신명|흥/.test(text)) return `장터의 흥을 담은 뮤직비디오 | 각설이 타령 감성`;
  if (/몽골|투바|초원|바람|마두금/.test(text)) return `몽골 초원의 울림 | 투바 음악 감성 뮤직비디오`;
  if (/이별|그리움|눈물|슬픔/.test(text)) return `그리움을 담은 감성 뮤직비디오 | 마음을 울리는 노래`;
  if (/희망|꿈|내일|다시/.test(text)) return `다시 피어나는 희망의 노래 | 감동 뮤직비디오`;
  return `${titleBase} 새롭게 풀어낸 ${mood} 뮤직비디오`;
}

function rewriteSeoSentence(text, titleBase, mood) {
  const summary = text.length > 190 ? `${text.slice(0, 190)}...` : text;
  if (/조선|한복|힙합|장단/.test(text)) {
    return `조선의 전통적인 의상과 현대적인 힙합 리듬이 어우러지는 분위기를 중심으로, ${titleBase}의 메시지를 새롭게 풀어냈습니다. 한복과 개량한복이 주는 고전미, 장단과 비트가 만드는 에너지, 그리고 노래가 가진 희망의 감정을 함께 느낄 수 있습니다.`;
  }
  if (/장터|각설이|타령|신명|흥/.test(text)) {
    return `한국 장터 특유의 활기와 각설이 타령의 해학적인 정서를 살려, ${titleBase}의 분위기를 더 신명 나게 표현했습니다. 누더기 옷, 장터 사람들, 풍물 장단이 어우러지는 장면을 떠올리며 즐길 수 있는 영상입니다.`;
  }
  if (/몽골|투바|초원|바람|마두금/.test(text)) {
    return `넓은 초원과 바람, 몽골·투바 음악의 깊은 울림을 떠올리게 하는 방식으로 ${titleBase}의 감정을 다시 구성했습니다. 목소리의 울림과 대자연의 이미지를 연결해 웅장하면서도 차분한 분위기를 전합니다.`;
  }
  return `${titleBase}의 핵심 의미를 유지하면서도, 유튜브 시청자가 더 쉽게 이해하고 클릭할 수 있도록 문장을 새롭게 다듬었습니다. 원문이 가진 정서는 ${mood}으로 정리되며, 영상은 다음 내용을 중심으로 감상할 수 있습니다: ${summary}`;
}

function detectSeoMood(text) {
  if (/눈물|그리움|이별|슬픔|외로움/.test(text)) return "눈물 나는 감성";
  if (/웃음|재미|장터|각설이|신명|흥/.test(text)) return "흥겨운 재미";
  if (/희망|꿈|내일|빛|다시/.test(text)) return "희망적인 감동";
  if (/몽골|투바|초원|바람/.test(text)) return "웅장한 초원 감성";
  if (/조선|한복|힙합|장단/.test(text)) return "전통과 힙합의 퓨전";
  return "감동적인 분위기";
}

function buildSeoKeywords(text, title, mood) {
  const base = [title, mood, "뮤직비디오", "AI뮤직비디오", "가사영상", "유튜브음악", "감성영상", "노래추천"];
  const nouns = text.match(/[가-힣A-Za-z0-9]{2,}/g) || [];
  return [...new Set([...base, ...nouns.slice(0, 12)])];
}

function formatSeoOutput() {
  return `제목:\n${$("seoTitle").value}\n\n설명글:\n${$("seoDesc").value}\n\n해시태그:\n${$("seoTags").value}`;
}

async function handleMp3(e) {
  const files = [...e.target.files];
  const file = files.find(f => /\.(mp3|mpeg|wav)$/i.test(f.name) || f.type.startsWith("audio/"));
  if (!file) return;
  state.mp3 = file;
  setProjectTitleFromFile(file);
  renderFileList("mp3FileList", files);
  const base = file.name.replace(/\.[^.]+$/, "").toLowerCase();
  const matchingSrt = files.find(f => /\.srt$/i.test(f.name) && f.name.replace(/\.[^.]+$/, "").toLowerCase() === base);
  if (matchingSrt) await loadSrtFile(matchingSrt, "mp3와 같은 제목의 SRT 자동 연결");
  const url = URL.createObjectURL(file);
  const audio = new Audio(url);
  audio.onloadedmetadata = () => {
    state.duration = audio.duration || 0;
    URL.revokeObjectURL(url);
    updateStats();
    log(`MP3 분석 완료: ${file.name}, ${fmt(state.duration)}`);
  };
}

async function handleSrt(e) {
  const file = e.target.files[0];
  if (!file) return;
  setProjectTitleFromFile(file);
  renderFileList("srtFileList", [file]);
  await loadSrtFile(file, "SRT 별도 업로드 완료");
}

async function loadSrtFile(file, label) {
  state.srtFile = file;
  state.srtText = await file.text();
  state.captions = parseSrt(state.srtText);
  renderFileList("srtFileList", [file]);
  updateStats();
  log(`${label}: ${file.name}, ${state.captions.length}줄`);
}

function handleRefs(e) {
  const files = [...e.target.files];
  if (files[0] && !state.title) setProjectTitleFromFile(files[0]);
  state.refs = files.map(f => ({ name: f.name, url: URL.createObjectURL(f) }));
  log(`참조 이미지 ${state.refs.length}개를 스타일 기준으로 등록했습니다.`);
}

function parseSrt(text) {
  return text.replace(/\r/g, "").split(/\n\n+/).map(block => {
    const lines = block.split("\n").filter(Boolean);
    const time = lines.find(l => l.includes("-->")) || "";
    const [a, b] = time.split("-->").map(v => toSec((v || "").trim()));
    return { start: a || 0, end: b || 0, text: lines.filter(l => !/^\d+$/.test(l) && !l.includes("-->")).join(" ") };
  }).filter(x => x.text);
}

function toSec(t) {
  const m = t.match(/(\d+):(\d+):(\d+),(\d+)/);
  if (!m) return 0;
  return (+m[1])*3600 + (+m[2])*60 + (+m[3]) + (+m[4])/1000;
}

function updateStats() {
  $("durationText").textContent = fmt(state.duration);
  $("srtCount").textContent = state.captions.length;
  $("sceneEstimate").textContent = Math.max(1, Math.ceil((state.duration || captionDuration()) / Number($("modelUnit")?.value || 9)));
}

function captionDuration() {
  return state.captions.at(-1)?.end || 0;
}

function analyze() {
  state.title = $("projectTitle").value || state.mp3?.name?.replace(/\.[^.]+$/, "") || "새 뮤직비디오";
  if (!state.duration) state.duration = captionDuration();
  generateConcepts();
  go(1);
}

function generateConcepts() {
  const text = state.captions.map(c => c.text).join(" ").slice(0, 1200);
  const tone = $("toneSelect").value;
  const age = $("ageSelect").value;
  const vibes = [
    ["감성 드라마", "따뜻한 자연광, 인물의 표정, 회상 장면, 차분한 카메라 무빙"],
    ["시네마틱 스토리", "강한 명암, 도시와 실내를 오가는 영화적 컷, 신뢰감 있는 서사"],
    ["몽환적 뮤직비디오", "느린 움직임, 빛 번짐, 상징적 오브젝트, 부드러운 색감"],
  ];
  state.concepts = vibes.map(([name, style], i) => ({
    name: `${tone}형 ${name}`,
    audience: age,
    style,
    summary: `${state.title}의 가사와 음악 흐름을 ${tone} 중심으로 해석합니다. ${age} 시청자가 바로 이해할 수 있게 장면마다 감정의 원인과 결과가 보이도록 구성합니다.`,
    hook: text ? `핵심 가사: ${text.slice(0, 120)}...` : "SRT가 없으면 음원 분위기 중심의 비주얼 플로우로 구성합니다.",
    count: Math.max(1, Math.ceil((state.duration || 60) / Number($("modelUnit").value))),
    selected: i === state.selectedConcept,
  }));
  renderConcepts();
  saveHistory("컨셉 추천 생성");
}

function renderStyleGrids() {
  const html = stylePresets.map(([name], i) => styleCard(i, name)).join("");
  if ($("styleGrid")) $("styleGrid").innerHTML = html;
  if ($("assetStyleGrid")) $("assetStyleGrid").innerHTML = html;
  updateStyleLabels();
}

function styleCard(i, name) {
  const num = String(i + 1).padStart(2, "0");
  const imageName = i < 36 ? `style-ref-${num}.png?v=attached1` : `style-${num}.png?v=extra1`;
  return `<button class="style-card ${i === state.selectedStyle ? "selected" : ""}" data-style="${i}" onclick="selectStyle(${i})">
    <img class="style-thumb" src="./assets/styles/${imageName}" alt="${num}. ${escapeHtml(name)} 예제 이미지" loading="lazy" />
    <span class="style-label">${num}. ${name}</span>
  </button>`;
}

window.selectStyle = (i) => {
  state.selectedStyle = i;
  renderStyleGrids();
  if (state.scenes.length) buildStoryboard();
  log(`스타일 적용: ${String(i + 1).padStart(2, "0")}. ${stylePresets[i][0]}`);
};

function updateStyleLabels() {
  const name = `${String(state.selectedStyle + 1).padStart(2, "0")}. ${stylePresets[state.selectedStyle][0]}`;
  if ($("selectedStyleText")) $("selectedStyleText").textContent = name;
  if ($("assetStyleText")) $("assetStyleText").textContent = name;
}

function renderConcepts() {
  $("conceptList").innerHTML = state.concepts.map((c, i) => `
    <article class="concept ${i===state.selectedConcept?"selected":""}">
      <h4>${c.name}</h4>
      <p>${c.summary}</p>
      <p>${c.hook}</p>
      <p><b>${c.count}개</b> 클립 · 옴니 기준 9초 내외</p>
      <button onclick="selectConcept(${i})">이 컨셉 적용</button>
    </article>`).join("");
}

window.selectConcept = (i) => {
  state.selectedConcept = i;
  renderConcepts();
  buildStoryboard();
  go(2);
};

function buildStoryboard() {
  const unit = Number($("modelUnit").value || 9);
  const total = state.duration || captionDuration() || 60;
  const count = Math.max(1, Math.ceil(total / unit));
  const concept = state.concepts[state.selectedConcept] || { name: "감동형 시네마틱", style: "따뜻하고 신뢰감 있는 시네마틱 스타일" };
  const [styleName, stylePrompt] = stylePresets[state.selectedStyle];
  const master = $("masterPrompt").value.trim();
  state.scenes = Array.from({ length: count }, (_, i) => {
    const start = i * unit;
    const end = Math.min(total, start + unit);
    const lyric = captionsFor(start, end);
    const desc = lyric || `${state.title}의 ${i + 1}번째 감정 전환 구간`;
    const common = `프로젝트: ${state.title}
화면비: ${state.ratio}
컨셉: ${concept.name}
스타일 고정: ${concept.style}
선택 스타일 프리셋: ${String(state.selectedStyle + 1).padStart(2, "0")}. ${styleName}
스타일 강제 적용 지시: ${stylePrompt}
참조 이미지 스타일을 반드시 유지: ${state.refs.map(r => r.name).join(", ") || "없음"}
추가 지시: ${master || "인물의 감정이 명확하고 장면 연결이 자연스럽게"}
구간: ${fmt(start)} - ${fmt(end)}
가사/대본: ${desc}`;
    return {
      id: crypto.randomUUID(),
      index: i + 1,
      start,
      end,
      duration: +(end - start).toFixed(1),
      lyric: desc,
      imagePrompt: `${common}

긴 이미지 프롬프트:
반드시 "${styleName}" 스타일로 생성한다. ${stylePrompt}. 노래의 감정선을 시각적으로 표현한다. 카메라는 인물의 표정과 손짓, 주변 사물의 질감, 빛의 방향을 섬세하게 포착한다. 장면은 과장된 광고 이미지가 아니라 실제 뮤직비디오 스틸컷처럼 자연스럽고 고급스럽다. 색감은 선택 스타일과 컨셉에 맞게 통일하고, 이전/다음 장면과 인물·장소·소품의 연속성이 유지된다. 화면 안에는 글자, 로고, 자막, 워터마크가 절대 없어야 한다.
no text, no logo, no watermark`,
      videoPrompt: `${common}

동영상 프롬프트:
9초 내외의 뮤직비디오 클립. 한국어 나레이션 포함: "${desc.slice(0, 90)}"
반드시 "${styleName}" 스타일을 유지한다. ${stylePrompt}. 느린 카메라 무빙, 자연스러운 인물 동작, 감정이 쌓이는 컷 구성. 화면 자막은 제외. 배경음악은 넣지 않는다. 최종 편집에서 원본 MP3와 자막을 입힐 수 있도록 깨끗한 영상 소스만 만든다.
no text, no subtitles, no bgm, no logo, no watermark`,
    };
  });
  renderStoryboard();
  renderStyleGrids();
  renderAssets();
  renderTimelineFromScenes();
  renderCaptionChips();
  saveHistory("씬별 콘티 생성");
}

function captionsFor(start, end) {
  return state.captions.filter(c => c.end >= start && c.start <= end).map(c => c.text).join(" ");
}

function renderStoryboard() {
  $("storyboard").innerHTML = state.scenes.map(sceneTemplate).join("");
}

function sceneTemplate(s) {
  return `<article class="scene">
    <div class="scene-num">${s.index}</div>
    <div>
      <h4>${fmt(s.start)} - ${fmt(s.end)} · ${s.duration}초</h4>
      <p>${s.lyric}</p>
      <div class="promptbox">${escapeHtml(s.imagePrompt)}</div>
      <div class="promptbox">${escapeHtml(s.videoPrompt)}</div>
      <div class="scene-actions">
        <button onclick="copyScene('${s.id}','image')">이미지 복사</button>
        <button onclick="copyScene('${s.id}','video')">영상 복사</button>
        <button onclick="downloadPrompt('${s.id}')">프롬프트 저장</button>
      </div>
    </div>
  </article>`;
}

function renderAssets() {
  renderStyleGrids();
  $("assetList").innerHTML = state.scenes.map(s => `<article class="scene">
    <div class="scene-num">${s.index}</div>
    <div>
      <h4>씬 ${s.index} 에셋</h4>
      <p>이미지/영상 생성 버튼은 API 키 설정 후 연결됩니다. Google Flow는 공식 외부 자동제어 API가 없으면 직접 명령 실행 대신 복사용 프롬프트를 제공합니다.</p>
      <div class="scene-actions">
        <button onclick="mockGenerate('${s.id}','image')">이미지 생성 실행</button>
        <button onclick="mockGenerate('${s.id}','video')">영상 생성 실행</button>
        <button onclick="copyScene('${s.id}','image')">이미지 프롬프트 복사</button>
        <button onclick="copyScene('${s.id}','video')">영상 프롬프트 복사</button>
      </div>
    </div>
  </article>`).join("");
}

function renderApiGrid() {
  $("apiGrid").innerHTML = apiProviders.map(([id, name, desc]) => `<div class="api-card">
    <h4>${name}</h4><p>${desc}</p>
    <input id="key-${id}" type="password" placeholder="API key" />
    <div class="button-row"><button onclick="testApi('${id}')">테스트</button></div>
  </div>`).join("");
}

window.testApi = (id) => {
  const value = $(`key-${id}`).value.trim();
  state.apiKeys[id] = value;
  log(value ? `${id} 키 형식 확인 완료. 실제 서버 호출은 백엔드 연결 후 활성화됩니다.` : `${id} 키가 비어 있습니다.`);
  updateApiHealth();
};

function updateApiHealth() {
  const count = Object.values(state.apiKeys).filter(Boolean).length;
  $("apiHealth").textContent = count ? `API ${count}개 설정` : "API 미설정";
}

window.copyScene = (id, type) => {
  const s = state.scenes.find(x => x.id === id);
  copyText(type === "image" ? s.imagePrompt : s.videoPrompt, `${type === "image" ? "이미지" : "영상"} 프롬프트를 복사했습니다.`);
};

window.downloadPrompt = (id) => {
  const s = state.scenes.find(x => x.id === id);
  download(`${state.title}-scene-${s.index}-prompts.txt`, `${s.imagePrompt}\n\n--- VIDEO ---\n\n${s.videoPrompt}`);
};

window.mockGenerate = (id, type) => {
  const s = state.scenes.find(x => x.id === id);
  log(`생성 요청 준비: 씬 ${s.index} ${type}. API 백엔드를 연결하면 이 버튼에서 바로 실행됩니다.`);
  copyScene(id, type);
};

function handleClips(e) {
  ingestEditFiles([...e.target.files], e.target.dataset.mode === "append");
  e.target.dataset.mode = "";
}

function ingestEditFiles(files, append = false) {
  const mediaFiles = files.filter(f => f.type.startsWith("video") || f.type.startsWith("image") || f.type.startsWith("audio") || /\.(zip|mp3|wav|srt)$/i.test(f.name));
  if (!mediaFiles.length) return;
  const mediaClips = mediaFiles.filter(f => f.type.startsWith("video") || f.type.startsWith("image") || /\.zip$/i.test(f.name)).map((f, i) => ({
    id: crypto.randomUUID(),
    name: f.name,
    url: f.type.startsWith("image") || f.type.startsWith("video") ? URL.createObjectURL(f) : "",
    type: f.type.startsWith("video") ? "video" : f.type.startsWith("image") ? "image" : "zip",
    duration: state.scenes[i]?.duration || 9,
    transition: transitionPresets[state.selectedTransition][0],
    motion: motionPresets[state.selectedMotion][0],
  }));
  const srt = mediaFiles.find(f => /\.srt$/i.test(f.name));
  if (srt) loadSrtFile(srt, "편집 화면에서 SRT 연결");
  const mp3 = mediaFiles.find(f => f.type.startsWith("audio"));
  if (mp3) {
    state.mp3 = mp3;
    setProjectTitleFromFile(mp3);
    if ($("titleText")) $("titleText").value = state.title;
  }
  state.clips = append ? [...state.clips, ...mediaClips] : mediaClips;
  renderFileList("editFileList", mediaFiles);
  renderTimeline();
  renderPreview();
  log(`편집 파일 ${mediaFiles.length}개를 불러왔습니다.`);
}

function renderTimelineFromScenes() {
  if (state.clips.length) return;
  state.clips = state.scenes.map(s => ({ id: s.id, name: `씬 ${s.index}`, url: "", type: "placeholder", duration: s.duration, transition: transitionPresets[state.selectedTransition][0], motion: motionPresets[state.selectedMotion][0] }));
  renderTimeline();
}

function renderTimeline() {
  if (!$("timeline")) return;
  $("timeline").innerHTML = state.clips.map((c, i) => `<div class="clip">
    <b>${i + 1}</b>
    <div>${c.url && c.type === "image" ? `<img src="${c.url}" alt="" />` : `<span class="clip-thumb">${i + 1}</span>`}</div>
    <div><strong>Scene ${i + 1}</strong><small>${escapeHtml(c.name)} · ${c.motion || "자동 무빙"} · ${c.transition || "크로스 디졸브"}</small>
      <p>${escapeHtml(state.scenes[i]?.lyric?.slice(0, 70) || state.captions[i]?.text?.slice(0, 70) || "대본 연동 클립")}</p>
      <select onchange="setTransition('${c.id}',this.value)">${transitionPresets.map(t => `<option ${c.transition === t[0] ? "selected" : ""}>${t[0]}</option>`).join("")}</select>
      <input type="range" min="3" max="15" value="${c.duration}" onchange="setClipDuration('${c.id}',this.value)" />
    </div>
    <div class="button-row"><button onclick="moveClip(${i},-1)">‹</button><button onclick="moveClip(${i},1)">›</button><button class="danger" onclick="deleteClip(${i})">⌫</button></div>
  </div>`).join("");
}

window.setTransition = (id, v) => state.clips.find(c => c.id === id).transition = v;
window.setClipDuration = (id, v) => state.clips.find(c => c.id === id).duration = Number(v);
window.deleteClip = (i) => {
  state.clips.splice(i, 1);
  renderTimeline();
  renderPreview();
};
window.moveClip = (i, dir) => {
  const j = i + dir;
  if (j < 0 || j >= state.clips.length) return;
  [state.clips[i], state.clips[j]] = [state.clips[j], state.clips[i]];
  renderTimeline();
};

function renderCaptionChips() {
  if (!$("captionChips")) return;
  const samples = state.captions.length ? state.captions.slice(0, 5).map(c => c.text) : [
    "바람이 머문다 간 그 길목에서",
    "오늘도 수고한 우리 모두를 위해",
    "가슴속 묻어둔 아련한 그 시절의 노래",
    "지나온 청춘이 눈부시게 아름답다",
    "다시 피어날 내일의 꿈을 향하여",
  ];
  $("captionChips").innerHTML = samples.map(t => `<button onclick="setLiveCaption('${escapeAttr(t)}')">+ ${escapeHtml(t.slice(0, 24))}</button>`).join("");
}

window.setLiveCaption = (text) => {
  $("liveCaptionInput").value = text;
  renderPreview();
};

function saveLiveCaption() {
  const text = $("liveCaptionInput").value.trim();
  if (!text) return;
  if (!state.captions.length) state.captions.push({ start: 0, end: 9, text });
  else state.captions[0].text = text;
  renderCaptionChips();
  renderPreview();
  saveHistory("현재 장면 자막 저장");
}

function renderEditPresets() {
  if ($("motionPresets")) {
    $("motionPresets").innerHTML = motionPresets.map((p, i) => presetCard("motion", p, i, i === state.selectedMotion)).join("");
  }
  if ($("transitionPresets")) {
    $("transitionPresets").innerHTML = transitionPresets.map((p, i) => presetCard("transition", p, i, i === state.selectedTransition)).join("");
  }
}

function presetCard(type, preset, i, selected) {
  return `<button class="preset-card ${selected ? "selected" : ""}" onclick="selectEditPreset('${type}',${i})"><b>${preset[0]}</b><span>${preset[1]}</span></button>`;
}

window.selectEditPreset = (type, i) => {
  if (type === "motion") {
    state.selectedMotion = i;
    state.clips.forEach(c => c.motion = motionPresets[i][0]);
    if ($("motionPreset")) $("motionPreset").selectedIndex = Math.min(i, $("motionPreset").options.length - 1);
  } else {
    state.selectedTransition = i;
    state.clips.forEach(c => c.transition = transitionPresets[i][0]);
    if ($("transitionPreset")) $("transitionPreset").selectedIndex = Math.min(i, $("transitionPreset").options.length - 1);
  }
  renderEditPresets();
  renderTimeline();
  renderPreview();
};

window.applyAllMotion = () => selectEditPreset("motion", $("motionPreset").selectedIndex);
window.applyAllTransitions = () => selectEditPreset("transition", $("transitionPreset").selectedIndex);

async function renderPreview() {
  if (!$("preview")) return;
  const canvas = $("preview");
  const ctx = canvas.getContext("2d");
  const title = $("titleText").value || state.title || "Music Video";
  const caption = $("liveCaptionInput")?.value || state.captions[0]?.text || "바람이 불어오는 곳 그곳으로 가네";
  ctx.fillStyle = "#111827";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, "#1e1b4b"); grad.addColorStop(.45, "#3f1f2f"); grad.addColorStop(1, "#f59e0b");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,.32)";
  for (let i = 0; i < 8; i++) ctx.fillRect(40 + i * 85, 820 - (i % 3) * 70, 62, 280);
  ctx.fillStyle = "rgba(255,210,128,.85)";
  for (let i = 0; i < 8; i++) ctx.fillRect(70 + i * 85, 920 - (i % 3) * 70, 8, 12);
  ctx.fillStyle = "#111827";
  ctx.beginPath(); ctx.arc(360, 610, 35, 0, Math.PI * 2); ctx.fill();
  ctx.fillRect(322, 650, 78, 250);
  ctx.fillStyle = $("fontColor")?.value || "#ffffff";
  ctx.font = `800 ${$("titleFontSize")?.value || 44}px ${$("fontSelect")?.value || "Malgun Gothic"}`;
  ctx.textAlign = "center";
  const y = $("titlePos")?.value === "상단" ? 155 : $("titlePos")?.value === "하단" ? 1040 : 350;
  ctx.globalAlpha = .82;
  wrap(ctx, title, canvas.width / 2, y, canvas.width - 100, Number($("fontSize").value) * 1.25);
  ctx.globalAlpha = 1;
  const subSize = Number($("fontSize")?.value || 44);
  const subY = 1080 + Number($("subtitleY")?.value || 0);
  ctx.font = `800 ${subSize}px Malgun Gothic`;
  ctx.lineWidth = Number($("strokeWidth")?.value || 3);
  ctx.strokeStyle = "rgba(0,0,0,.9)";
  ctx.fillStyle = "rgba(0,0,0,.72)";
  ctx.fillRect(70, subY - subSize - 12, canvas.width - 140, subSize + 34);
  ctx.fillStyle = $("fontColor")?.value || "#ffffff";
  if ($("strokeOn")?.checked) ctx.strokeText(caption.slice(0, 34), canvas.width / 2, subY);
  ctx.fillText(caption.slice(0, 34), canvas.width / 2, subY);
  if ($("downloadVideo")) $("downloadVideo").disabled = false;
  if ($("previewCaption")) $("previewCaption").textContent = caption.slice(0, 45);
  if ($("previewTime")) $("previewTime").textContent = `00:00 / ${fmt(state.duration || 58)}`;
  if ($("previewRatio")) $("previewRatio").textContent = state.ratio || "16:9";
  if ($("transitionBadge")) $("transitionBadge").textContent = `전환: ${transitionPresets[state.selectedTransition][0]}`;
  if ($("motionAutoBtn")) $("motionAutoBtn").textContent = `무빙: ${motionPresets[state.selectedMotion][0]}`;
  saveHistory("편집 미리보기 렌더");
  log("미리보기 렌더 완료. 실제 MP4 합성은 ffmpeg 백엔드 연결 시 전체 클립/음원/자막으로 출력됩니다.");
}

function speakFreeVoice() {
  const text = state.captions.map(c => c.text).join(" ").slice(0, 180) || $("titleText").value || state.title;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ko-KR"; u.rate = .95; u.pitch = 1;
  speechSynthesis.speak(u);
  log("브라우저 무료 한국어 음성으로 미리듣기를 재생합니다.");
}

function downloadRendered() {
  const canvas = $("preview");
  canvas.toBlob(blob => downloadBlob(`${state.title || "music-video"}-title.png`, blob), "image/png");
}

function exportSettings() {
  syncKeys();
  download("music-video-director-settings.json", JSON.stringify({ apiKeys: state.apiKeys, ratio: state.ratio }, null, 2));
}

async function importSettings(e) {
  const file = e.target.files[0]; if (!file) return;
  const data = JSON.parse(await file.text());
  state.apiKeys = data.apiKeys || {};
  Object.entries(state.apiKeys).forEach(([k, v]) => { const el = $(`key-${k}`); if (el) el.value = v; });
  updateApiHealth();
  log("설정을 불러왔습니다.");
}

function saveProject() {
  syncKeys();
  download(`${state.title || "music-video-project"}.mvd.json`, JSON.stringify(state, (k, v) => k === "mp3" || k === "srtFile" ? undefined : v, 2));
}

async function loadProject(e) {
  const file = e.target.files[0]; if (!file) return;
  Object.assign(state, JSON.parse(await file.text()));
  $("projectTitle").value = state.title || "";
  updateStats(); renderConcepts(); renderStyleGrids(); renderStoryboard(); renderAssets(); renderTimeline(); renderHistory(); updateApiHealth();
  log("프로젝트를 불러왔습니다.");
}

function resetAllButKeys() {
  const keys = state.apiKeys;
  Object.assign(state, { title:"", ratio:"9:16", duration:0, mp3:null, srtFile:null, captions:[], srtText:"", refs:[], concepts:[], selectedConcept:0, selectedStyle:0, scenes:[], clips:[], history:state.history, apiKeys:keys });
  $("projectTitle").value = ""; renderFileList("mp3FileList", []); renderFileList("srtFileList", []); updateStats(); renderConcepts(); renderStyleGrids(); renderStoryboard(); renderAssets(); renderTimeline();
  log("API 키를 제외한 프로젝트 내용을 초기화했습니다.");
}

function resetEverything() {
  localStorage.removeItem("mvd-history");
  location.reload();
}

function syncKeys() {
  apiProviders.forEach(([id]) => state.apiKeys[id] = $(`key-${id}`).value.trim());
}

function saveHistory(action) {
  state.history.unshift({ at: new Date().toLocaleString(), action, title: state.title || $("projectTitle").value || "무제" });
  state.history = state.history.slice(0, 20);
  localStorage.setItem("mvd-history", JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  $("historyPanel").innerHTML = state.history.map(h => `<div class="history-item"><span>${h.at} · ${h.title}</span><b>${h.action}</b></div>`).join("");
}

function log(msg) {
  const el = $("log");
  if (!el) return;
  el.textContent = `[${new Date().toLocaleTimeString()}] ${msg}\n` + el.textContent;
}

function fmt(sec) {
  sec = Math.max(0, Math.floor(sec || 0));
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[ch]));
}

function escapeAttr(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, " ");
}

function renderFileList(id, files) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = files.length ? files.map(f => `<span>${escapeHtml(f.name)}</span>`).join("") : `<em>선택된 파일 없음</em>`;
}

function setProjectTitleFromFile(file) {
  const title = file.name.replace(/\.[^.]+$/, "");
  state.title = title;
  if ($("projectTitle")) $("projectTitle").value = title;
  if ($("titleText") && !$("titleText").value) $("titleText").value = title;
}

function copyText(text, msg) {
  navigator.clipboard.writeText(text);
  log(msg);
}

function download(name, text) {
  downloadBlob(name, new Blob([text], { type: "application/json;charset=utf-8" }));
}

function downloadBlob(name, blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function wrap(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/);
  let line = "";
  words.forEach(word => {
    const test = `${line}${word} `;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y); line = `${word} `; y += lineHeight;
    } else line = test;
  });
  ctx.fillText(line, x, y);
}

boot();
