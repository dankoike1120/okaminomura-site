/* ============================================
   狼ノ村 ─ Brand Site Script
   Sumi-e × Minimal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- i18n TRANSLATIONS ---------- */
  const translations = {
    ja: {
      loading_sub: '丹波山村イマーシブプロジェクト',
      header_logo: '狼ノ村',
      lang_label: 'EN',
      hero_line1: 'その村には、',
      hero_line2: 'まだ語られていない',
      hero_line3: '物語がある。',
      hero_desc: '狼伝承の残る村で起こる<br>人と狼のミステリーシリーズ',
      news_title: 'お知らせ',
      news_1: '「狼ノ村」ブランドサイトを公開しました',
      news_2: 'Vol.3「狼ノ森」5月開催決定 ─ 参加者募集開始',
      news_3: 'Vol.2「狼ノ宴」開催レポートを公開しました',
      latest_title: '最新イベント',
      latest_badge: '参加者募集中',
      latest_text: '本物の森で一泊二日。焚き火と星空の下、<br>嘘をつき、見破り、信じる──<br>身体ごと物語に入り込む、リアル人狼体験。',
      latest_info: '<p><strong>2026年 5月24日（土）〜 25日（日）</strong></p><p>山梨県丹波山村 ─ 一泊二日</p>',
      latest_cta: 'イベント詳細を見る',
      concept_title: 'コンセプト',
      concept_lead: '人と狼が共存する村。<br>だが狼は、守護者なのか、<br>それとも試す存在なのか。',
      concept_p1: '新宿から約2時間。街灯のない山道を抜けた先に、<br>人口わずか500人の村──丹波山村がある。<br>この村には、古くから狼にまつわる伝承が息づいている。',
      concept_p2: '「狼ノ村」は、その伝承を物語の核に据えた<br>没入型シアターシリーズ。<br>あなたに渡されるのは、名前と過去と秘密。',
      concept_p3: '村を歩き、焚き火を囲み、誰かと語り合う。<br>あなたは「観客」じゃない。<br>物語の、当事者だ。',
      series_title: 'シリーズ',
      series_intro: '舞台も事件も異なる、複数の独立した物語。<br>どの作品からでも参加できます。',
      badge_ended: '終了',
      badge_upcoming: '開催予定',
      title_mura: '狼ノ村',
      sub_mura: 'OKAMI NO MURA',
      title_utage: '狼ノ宴',
      sub_utage: 'OKAMI NO UTAGE',
      title_mori: '狼ノ森',
      sub_mori: 'OKAMI NO MORI',
      series_v1_text: '霧に包まれた山村を舞台に、村全体を巡る大規模マーダーミステリー。古民家の住人、消えた記録、封印された祠──すべてが手がかりになる。',
      series_v2_text: '豪華な宴席が舞台。料理と酒を楽しみながら、隣の人物の「本当の目的」を探る。華やかさの裏に潜む、もうひとつの物語。',
      series_v3_text: '本物の森で一泊二日。焚き火と星空の下、嘘をつき、見破り、信じる──身体ごと物語に入り込む、リアル人狼体験の最新作。',
      series_link: '詳細を見る →',
      tabayama_title: '丹波山村',
      tabayama_lead: '東京から2時間の秘境。<br>物語が生まれる村。',
      tabayama_p1: '山梨県北都留郡丹波山村。人口わずか500人。<br>東京都との県境に位置しながら、<br>深い山と清流に囲まれた秘境。',
      tabayama_p2: '街灯のない夜道、満天の星空、<br>朝靄に霞む山々、川のせせらぎ──<br>この村だからこそ成り立つ体験がある。',
      access_train: '電車',
      access_train_detail: 'JR青梅線「奥多摩駅」よりバス約40分',
      access_car: '車',
      access_car_detail: '中央道「勝沼IC」より約60分',
      access_shinjuku: '新宿から',
      access_shinjuku_detail: '約2時間（電車+バス）',
    },
    en: {
      loading_sub: 'Tabayama Village Immersive Project',
      header_logo: '狼ノ村',
      lang_label: 'JA',
      hero_line1: 'Every wolf legend',
      hero_line2: 'was born',
      hero_line3: 'somewhere real.',
      hero_desc: 'An immersive mystery series<br>from a village where wolf legends still live',
      news_title: 'News',
      news_1: 'OKAMI NO MURA brand site launched',
      news_2: 'Vol.3 "OKAMI NO MORI" — May dates confirmed',
      news_3: 'Vol.2 "OKAMI NO UTAGE" event report published',
      latest_title: 'Latest Event',
      latest_badge: 'Now Accepting',
      latest_text: 'Two days, one night in a real forest.<br>Around the fire, under the stars —<br>step inside a story you won\'t just watch, but live.',
      latest_info: '<p><strong>May 24 (Sat) – 25 (Sun), 2026</strong></p><p>Tabayama Village, Yamanashi — overnight immersive</p>',
      latest_cta: 'View Event Details',
      concept_title: 'Concept',
      concept_lead: 'A village where humans and wolves<br>have coexisted for centuries.<br>Guardians — or something<br>that tests us?',
      concept_p1: 'Two hours from Shinjuku, past mountain roads with no streetlights, lies Tabayama — a village of just 500 people. Here, ancient wolf legends aren\'t relics of the past. They\'re still part of everyday life.',
      concept_p2: 'Long before "werewolf" became a game played around tables, there were places like this — where the line between human and wolf was never quite clear. OKAMI NO MURA is an immersive theater series rooted in these living legends.',
      concept_p3: 'Walk the village. Gather around the fire. Speak with strangers who may not be what they seem. You\'re not the audience — you\'re part of the story.',
      series_title: 'Series',
      series_intro: 'Each volume is an independent story —<br>different settings, different mysteries.<br>Join from any chapter.',
      badge_ended: 'Ended',
      badge_upcoming: 'Upcoming',
      title_mura: 'Village of Wolves',
      sub_mura: 'OKAMI NO MURA',
      title_utage: 'Feast of Wolves',
      sub_utage: 'OKAMI NO UTAGE',
      title_mori: 'Forest of Wolves',
      sub_mori: 'OKAMI NO MORI',
      series_v1_text: 'A large-scale mystery woven through a fog-covered mountain village. The locals, the missing records, a sealed shrine — everything is a clue.',
      series_v2_text: 'An elegant banquet becomes the stage. Over fine food and drink, uncover the true intentions of the person beside you. Behind the glamour lies another story entirely.',
      series_v3_text: 'Two days in a real forest. Around the bonfire and under the stars, step inside a story where trust and doubt blur — the latest chapter of the immersive experience.',
      series_link: 'View Details →',
      tabayama_title: 'Tabayama Village',
      tabayama_lead: 'A hidden village,<br>two hours from Tokyo.<br>Where stories are born.',
      tabayama_p1: 'Tabayama Village, Yamanashi. Population: 500. Sitting on the border of Tokyo, surrounded by deep mountains and crystal-clear streams — one of the last untouched places near the capital.',
      tabayama_p2: 'Unlit roads at night, a sky full of stars, morning mist clinging to the peaks, the sound of the river — some say the oldest wolf legends in Japan echo through these mountains.',
      access_train: 'Train',
      access_train_detail: '40 min by bus from JR Okutama Station',
      access_car: 'Car',
      access_car_detail: '60 min from Katsunuma IC (Chūō Expy)',
      access_shinjuku: 'Shinjuku',
      access_shinjuku_detail: 'Approx. 2 hours (train + bus)',
    }
  };

  let currentLang = 'ja';

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
  }

  /* ---------- LANGUAGE TOGGLE ---------- */
  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    const next = currentLang === 'ja' ? 'en' : 'ja';
    setLang(next);
  });

  /* ---------- LOADING SCREEN ---------- */
  const loading = document.getElementById('loading');
  const hero = document.querySelector('.hero');

  const hideLoading = () => {
    loading.classList.add('is-hidden');
    document.body.style.overflow = '';
    setTimeout(() => hero.classList.add('is-loaded'), 500);
  };

  document.body.style.overflow = 'hidden';

  const minDisplayTime = 4000;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);
    setTimeout(hideLoading, remaining);
  });

  setTimeout(hideLoading, minDisplayTime + 500);

  /* ---------- HEADER SCROLL ---------- */
  const header = document.getElementById('header');

  const handleScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 80);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- HAMBURGER ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const headerNav = document.getElementById('headerNav');

  menuBtn.addEventListener('click', () => {
    const open = menuBtn.classList.toggle('is-active');
    headerNav.classList.toggle('is-open');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('is-active');
      headerNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ---------- SMOOTH SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- IMAGE REVEAL ON SCROLL ---------- */
  const imgs = document.querySelectorAll('.series-card__img img, .latest__card-img img, .concept__visual img');
  const imgObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1)';
          imgObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  imgs.forEach(img => {
    img.style.transform = 'scale(1.06)';
    img.style.transition = 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)';
    imgObserver.observe(img);
  });
});
