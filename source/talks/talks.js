/* Qexo 说说 (talks) renderer — self-hosted, no third-party dependency.
 * Reads settings from window.QEXO_TALKS (title/name/avatar/site/limit). */
(function () {
  var CFG = Object.assign({
    el: 'talk-wrap',
    title: '说说',
    name: '博主',
    avatar: '/img/avatar.png',
    site: '',
    limit: 8
  }, window.QEXO_TALKS || {});

  var SITE = String(CFG.site || '').replace(/\/+$/, '');
  var root = document.getElementById(CFG.el);
  if (!root || !SITE) return;

  var page = 1, total = 0, shown = 0, loading = false;
  var wrap = document.createElement('div');
  root.appendChild(wrap);

  var toolbar = document.createElement('div');
  toolbar.className = 'talk-toolbar';
  toolbar.innerHTML = '<span></span><span class="talk-refresh">刷新</span>';
  root.insertBefore(toolbar, wrap);
  var totalEl = toolbar.querySelector('span');
  toolbar.querySelector('.talk-refresh').onclick = function () {
    if (loading) return;
    wrap.innerHTML = ''; page = 1; shown = 0; totalEl.textContent = '';
    load();
  };

  var moreBtn = document.createElement('button');
  moreBtn.className = 'talk-more';
  moreBtn.textContent = '加载更多';
  moreBtn.onclick = function () { page++; load(); };

  function esc(s) { return String(s == null ? '' : s); }
  function fmt(ts) {
    var n = Number(ts);
    if (String(ts).length === 10) n *= 1000;
    var d = new Date(n), diff = (Date.now() - n) / 1000;
    if (diff < 60) return '刚刚';
    if (diff < 3600) return Math.floor(diff / 60) + ' 分钟前';
    if (diff < 86400) return Math.floor(diff / 3600) + ' 小时前';
    if (diff < 604800) return Math.floor(diff / 86400) + ' 天前';
    var p = function (x) { return String(x).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  function card(t) {
    var el = document.createElement('div');
    el.className = 'talk-card';
    var tags = (t.tags || []).map(function (x) {
      return '<span class="talk-tag">#' + esc(x) + '</span>';
    }).join('');
    el.innerHTML =
      '<img class="talk-avatar" src="' + esc(CFG.avatar) + '" alt="avatar" onerror="this.style.visibility=\'hidden\'">' +
      '<div class="talk-main">' +
        '<div class="talk-head"><span class="talk-name">' + esc(CFG.name) + '</span>' +
          '<span class="talk-time">' + fmt(t.time) + '</span></div>' +
        '<div class="talk-content">' + (t.content || '') + '</div>' +
        (tags ? '<div class="talk-tags">' + tags + '</div>' : '') +
        '<div class="talk-foot"><span class="talk-like' + (t.liked ? ' liked' : '') + '">' +
          '<span class="heart">' + (t.liked ? '❤' : '♡') + '</span><span class="likes">' + (t.like || 0) + '</span>' +
        '</span></div>' +
      '</div>';
    var likeEl = el.querySelector('.talk-like');
    likeEl.onclick = function () { toggleLike(t, likeEl); };
    return el;
  }

  function toggleLike(t, likeEl) {
    var body = new URLSearchParams();
    body.append('id', t.id);
    fetch(SITE + '/pub/like_talk/', { method: 'POST', body: body })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r.status) return;
        t.liked = r.action;
        t.like += r.action ? 1 : -1;
        likeEl.classList.toggle('liked', t.liked);
        likeEl.classList.add('pop');
        setTimeout(function () { likeEl.classList.remove('pop'); }, 360);
        likeEl.querySelector('.heart').textContent = t.liked ? '❤' : '♡';
        likeEl.querySelector('.likes').textContent = t.like;
      })
      .catch(function () {});
  }

  function skeleton() {
    var s = document.createElement('div');
    s.className = 'talk-card talk-card--skel';
    s.innerHTML = '<div class="talk-avatar" style="background:#eef1f6"></div>' +
      '<div class="talk-main"><div class="talk-skel-line" style="width:30%"></div>' +
      '<div class="talk-skel-line"></div><div class="talk-skel-line" style="width:60%"></div></div>';
    return s;
  }

  function load() {
    if (loading) return;
    loading = true;
    var sk = skeleton(); wrap.appendChild(sk);
    if (moreBtn.parentNode) moreBtn.remove();
    fetch(SITE + '/pub/talks/?page=' + page + '&limit=' + CFG.limit)
      .then(function (r) { return r.json(); })
      .then(function (r) {
        sk.remove();
        if (!r.status) { state('加载失败：' + (r.msg || '')); return; }
        total = r.count; totalEl.textContent = total + ' 条动态';
        if (!r.data.length && page === 1) { state('还没有说说～'); return; }
        r.data.forEach(function (t) { wrap.appendChild(card(t)); shown++; });
        if (shown < total) wrap.appendChild(moreBtn);
        else if (total > CFG.limit) {
          moreBtn.textContent = '没有更多了'; moreBtn.disabled = true;
          moreBtn.style.cursor = 'default'; wrap.appendChild(moreBtn);
        }
      })
      .catch(function (e) { sk.remove(); state('加载失败：' + e); })
      .finally(function () { loading = false; });
  }

  function state(msg) {
    var d = document.createElement('div');
    d.className = 'talk-state'; d.textContent = msg; wrap.appendChild(d);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
