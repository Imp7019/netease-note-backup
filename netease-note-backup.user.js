// ==UserScript==
// @name           网易云音乐笔记(动态)备份插件
// @namespace      https://github.com/sansan0/netease-note-backup
// @version        3.1
// @description    提取网易云音乐页面的文字内容，歌曲信息和图片
// @author         sansan
// @match          https://music.163.com/*
// @grant          GM_setClipboard
// @grant          GM_xmlhttpRequest
// @connect        music.163.com
// @connect        p1.music.126.net
// @connect        p2.music.126.net
// @connect        p3.music.126.net
// @license        GPL-3.0 License
// @icon           data:image/png;base64,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
// @noframes       true
// ==/UserScript==

(function() {
    'use strict';

    if (window !== window.top) return;

    const UI_CONTAINER_ID = 'netease-comment-extractor-ui';
    const defaultSettings = {
        imageSize: 100,
        useBase64Images: true
    };

    let userSettings = {...defaultSettings};
    let uiElements = null;
    let hasInitialized = false;
    let articleArray = [];
    let processedIds = new Set();
    let observer = null;
    let hasScrolledToTop = false;
    let isScrollThrottled = false;
    let isAutoScrolling = false;
    let autoScrollTimeout = null;
    let lastArticleCount = 0;
    let noNewContentStartTime = null;
    let totalEventCount = 0;

    // 创建UI界面
    function createUI() {
        const existingUI = document.getElementById(UI_CONTAINER_ID);
        if (existingUI) existingUI.remove();

        const uiContainer = document.createElement('div');
        uiContainer.id = UI_CONTAINER_ID;
        uiContainer.style.position = 'fixed';
        uiContainer.style.top = '10px';
        uiContainer.style.left = '10px';
        uiContainer.style.zIndex = '9999';
        uiContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        uiContainer.style.padding = '10px';
        uiContainer.style.borderRadius = '5px';
        uiContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        uiContainer.style.fontFamily = 'Arial, sans-serif';
        uiContainer.style.fontSize = '14px';

        const countDisplay = document.createElement('div');
        countDisplay.id = 'article-count';
        countDisplay.style.marginBottom = '10px';
        countDisplay.innerText = '已检测到 0 篇文章';

        const rangeContainer = document.createElement('div');
        rangeContainer.style.display = 'flex';
        rangeContainer.style.alignItems = 'center';
        rangeContainer.style.marginBottom = '10px';

        const startRangeInput = document.createElement('input');
        startRangeInput.type = 'number';
        startRangeInput.min = '1';
        startRangeInput.value = '1';
        startRangeInput.style.width = '50px';
        startRangeInput.style.marginRight = '5px';
        startRangeInput.style.padding = '5px';

        const rangeSeparator = document.createElement('span');
        rangeSeparator.innerText = '到';
        rangeSeparator.style.margin = '0 5px';

        const endRangeInput = document.createElement('input');
        endRangeInput.type = 'number';
        endRangeInput.min = '1';
        endRangeInput.value = '1';
        endRangeInput.style.width = '50px';
        endRangeInput.style.marginRight = '10px';
        endRangeInput.style.padding = '5px';

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.marginBottom = '10px';

        const copyButton = document.createElement('button');
        copyButton.innerText = '复制';
        copyButton.style.padding = '5px 10px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.marginRight = '10px';

        const maxButton = document.createElement('button');
        maxButton.innerText = '最大';
        maxButton.style.padding = '5px 10px';
        maxButton.style.cursor = 'pointer';

        const settingsContainer = document.createElement('div');
        settingsContainer.style.marginBottom = '10px';
        settingsContainer.style.borderTop = '1px solid #ddd';
        settingsContainer.style.paddingTop = '10px';

        const sizeContainer = document.createElement('div');
        sizeContainer.style.display = 'flex';
        sizeContainer.style.alignItems = 'center';
        sizeContainer.style.marginBottom = '5px';

        const sizeLabel = document.createElement('label');
        sizeLabel.innerText = '图片大小(px): ';
        sizeLabel.style.marginRight = '5px';

        const sizeInput = document.createElement('input');
        sizeInput.type = 'number';
        sizeInput.min = '50';
        sizeInput.max = '500';
        sizeInput.value = userSettings.imageSize;
        sizeInput.style.width = '60px';
        sizeInput.style.padding = '3px';

        const base64Container = document.createElement('div');
        base64Container.style.display = 'flex';
        base64Container.style.alignItems = 'center';

        const base64Checkbox = document.createElement('input');
        base64Checkbox.type = 'checkbox';
        base64Checkbox.checked = userSettings.useBase64Images;
        base64Checkbox.style.marginRight = '5px';

        const base64Label = document.createElement('label');
        base64Label.innerText = '将图片转为base64格式(推荐)';

        const exportContainer = document.createElement('div');
        exportContainer.style.display = 'flex';
        exportContainer.style.alignItems = 'center';
        exportContainer.style.marginBottom = '10px';

        const exportButton = document.createElement('button');
        exportButton.innerText = '导出HTML';
        exportButton.style.padding = '5px 10px';
        exportButton.style.cursor = 'pointer';

        // 添加自动滚动按钮
        const autoScrollButton = document.createElement('button');
        autoScrollButton.innerText = '自动滚动加载';
        autoScrollButton.style.padding = '5px 10px';
        autoScrollButton.style.cursor = 'pointer';
        autoScrollButton.style.marginLeft = '10px';
        autoScrollButton.style.backgroundColor = '#4CAF50';
        autoScrollButton.style.color = 'white';
        autoScrollButton.style.border = 'none';
        autoScrollButton.style.borderRadius = '3px';

        const statusDisplay = document.createElement('div');
        statusDisplay.style.fontSize = '12px';
        statusDisplay.style.color = '#666';
        statusDisplay.style.marginTop = '5px';
        statusDisplay.innerText = '等待加载...';

        // 组装UI元素
        sizeContainer.appendChild(sizeLabel);
        sizeContainer.appendChild(sizeInput);

        base64Container.appendChild(base64Checkbox);
        base64Container.appendChild(base64Label);

        settingsContainer.appendChild(sizeContainer);
        settingsContainer.appendChild(base64Container);

        rangeContainer.appendChild(startRangeInput);
        rangeContainer.appendChild(rangeSeparator);
        rangeContainer.appendChild(endRangeInput);

        buttonContainer.appendChild(copyButton);
        buttonContainer.appendChild(maxButton);

        exportContainer.appendChild(exportButton);
        exportContainer.appendChild(autoScrollButton);

        uiContainer.appendChild(countDisplay);
        uiContainer.appendChild(rangeContainer);
        uiContainer.appendChild(buttonContainer);
        uiContainer.appendChild(settingsContainer);
        uiContainer.appendChild(exportContainer);
        uiContainer.appendChild(statusDisplay);

        setupInputEvents(sizeInput, base64Checkbox, startRangeInput, endRangeInput, statusDisplay);

        return {
            uiContainer,
            countDisplay,
            startRangeInput,
            endRangeInput,
            copyButton,
            maxButton,
            exportButton,
            autoScrollButton,
            statusDisplay,
            sizeInput,
            base64Checkbox
        };
    }

    function setupInputEvents(sizeInput, base64Checkbox, startRangeInput, endRangeInput, statusDisplay) {
        sizeInput.addEventListener('change', function() {
            userSettings.imageSize = parseInt(this.value) || defaultSettings.imageSize;
            statusDisplay.innerText = `已设置图片尺寸为 ${userSettings.imageSize}px`;
        });

        base64Checkbox.addEventListener('change', function() {
            userSettings.useBase64Images = this.checked;
            statusDisplay.innerText = `已${this.checked ? '启用' : '禁用'}图片base64转换`;
        });

        startRangeInput.addEventListener('change', function() {
            const start = parseInt(this.value) || 1;
            const end = parseInt(endRangeInput.value) || 1;
            const total = articleArray.length;

            if (start < 1) {
                this.value = 1;
            } else if (start > total) {
                this.value = total;
            }

            if (start > end) {
                endRangeInput.value = this.value;
            }

            statusDisplay.innerText = `已设置范围: ${this.value} 到 ${endRangeInput.value}`;
        });

        endRangeInput.addEventListener('change', function() {
            const start = parseInt(startRangeInput.value) || 1;
            const end = parseInt(this.value) || 1;
            const total = articleArray.length;

            if (end < 1) {
                this.value = 1;
            } else if (end > total) {
                this.value = total;
            }

            if (end < start) {
                startRangeInput.value = this.value;
            }

            statusDisplay.innerText = `已设置范围: ${startRangeInput.value} 到 ${this.value}`;
        });
    }

    // 等待主文档准备就绪，添加UI
    function addUIToDocument() {
        if (document.body) {
            if (!uiElements) {
                uiElements = createUI();
                document.body.appendChild(uiElements.uiContainer);
                setupUIEvents();
            }
        } else {
            setTimeout(addUIToDocument, 100);
        }
    }

    // 清理缩略图 URL；原图下载链接的 9999y9999 参数必须保留。
    function cleanImageUrl(url) {
        if (!url) return '';
        const secureUrl = url.replace(/^http:/, 'https:');
        if (/[?&]param=9999y9999(?:&|$)/.test(secureUrl)) return secureUrl;
        return secureUrl.split('?')[0];
    }

    // 将图片转换为base64格式
    function convertImageToBase64(url) {
        return new Promise((resolve, reject) => {
            if (!url) {
                resolve('');
                return;
            }

            const secureUrl = url.replace(/^http:/, 'https:');

            GM_xmlhttpRequest({
                method: 'GET',
                url: secureUrl,
                responseType: 'blob',
                onload: function(response) {
                    if (response.status === 200) {
                        const reader = new FileReader();
                        reader.onloadend = function() {
                            resolve(reader.result);
                        };
                        reader.onerror = function() {
                            console.error('无法读取图片数据:', secureUrl);
                            resolve('');
                        };
                        reader.readAsDataURL(response.response);
                    } else {
                        console.error('获取图片失败:', response.status, secureUrl);
                        resolve('');
                    }
                },
                onerror: function(error) {
                    console.error('请求图片出错:', error, secureUrl);
                    resolve('');
                }
            });
        });
    }

    // 从网易云展示的时间文本中提取月份。无法可靠识别的相对时间会归入“未识别日期”，避免误归档。
    function getMonthKey(timeText) {
        const text = String(timeText || '').trim();
        const fullDate = text.match(/(20\d{2})[\/.年-](\d{1,2})/);
        if (fullDate) {
            return `${fullDate[1]}-${String(fullDate[2]).padStart(2, '0')}`;
        }

        // 网易云常将当年动态展示为“8月2日 00:25”，缺少年份时按导出当年归档。
        const monthAndDay = text.match(/(\d{1,2})月\d{1,2}日/);
        if (monthAndDay) {
            return `${new Date().getFullYear()}-${String(monthAndDay[1]).padStart(2, '0')}`;
        }

        return 'unknown';
    }

    function getMonthLabel(monthKey) {
        if (monthKey === 'unknown') return '未识别日期';
        const [year, month] = monthKey.split('-');
        return `${year} 年 ${Number(month)} 月`;
    }

    function getYearKey(monthKey) {
        return monthKey === 'unknown' ? 'unknown' : monthKey.split('-')[0];
    }

    function getYearLabel(yearKey) {
        return yearKey === 'unknown' ? '未识别年份' : `${yearKey} 年`;
    }

    function escapeHtml(value) {
        return String(value || '').replace(/[&<>'"]/g, char => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        }[char]));
    }

    function getExportProfile() {
        const profile = { name: '网易云音乐用户', avatar: '' };
        try {
            const iframe = document.getElementById('g_iframe');
            const doc = iframe && iframe.contentDocument;
            if (!doc) return profile;
            const nameElement = doc.querySelector('#j-name-wrap');
            if (nameElement && nameElement.textContent.trim()) profile.name = nameElement.textContent.trim();
            const avatarElement = doc.querySelector('.head img, .avatar img, .m-proifo img');
            if (avatarElement) profile.avatar = getOriginalImageUrl(avatarElement);
        } catch (error) {
            console.warn('读取导出账号信息失败:', error);
        }
        return profile;
    }

    // 生成HTML导出内容，处理图片为base64格式
    async function generateHtmlContent(articles) {
        const profile = getExportProfile();
        const monthGroups = new Map();
        articles.forEach(article => {
            const monthKey = getMonthKey(article.time);
            if (!monthGroups.has(monthKey)) monthGroups.set(monthKey, []);
            monthGroups.get(monthKey).push(article);
        });

        const groups = Array.from(monthGroups, ([key, items]) => ({ key, items }));
        const timelineYears = new Map();
        groups.forEach(group => {
            const yearKey = getYearKey(group.key);
            if (!timelineYears.has(yearKey)) timelineYears.set(yearKey, []);
            timelineYears.get(yearKey).push(group);
        });
        const availableMonths = Array.from(new Set(groups
            .filter(group => group.key !== 'unknown')
            .map(group => group.key.split('-')[1]))).sort();
        const datedGroups = groups.filter(group => group.key !== 'unknown');
        const dateRange = datedGroups.length
            ? `${getMonthLabel(datedGroups[datedGroups.length - 1].key)} — ${getMonthLabel(datedGroups[0].key)}`
            : '时间信息未能按月份归档';

        let html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网易云音乐动态导出</title>
    <style>
        :root { color: #27272a; background: #f6f6f3; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 40px 24px 80px; background: radial-gradient(circle at top, #fffdf7 0, #f6f6f3 42rem); }
        .page { max-width: 1160px; margin: 0 auto; }
        .hero { display: grid; grid-template-columns: minmax(0, 1fr) minmax(260px, 380px); gap: 28px; padding: 22px 4px 34px; align-items: center; }
        .eyebrow { color: #c2410c; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        h1 { margin: 8px 0; font-family: Georgia, "Noto Serif SC", serif; font-size: clamp(30px, 5vw, 48px); letter-spacing: -.04em; }
        .summary { margin: 0; color: #71717a; font-size: 14px; }
        .profile-card { display: flex; align-items: center; gap: 14px; min-height: 112px; padding: 20px; border: 1px solid #e9e8e2; border-radius: 16px; background: rgba(255,255,255,.68); }
        .profile-avatar, .profile-avatar-fallback { width: 64px; height: 64px; flex: 0 0 64px; border-radius: 50%; background: #fed7aa; object-fit: cover; }
        .profile-avatar-fallback { display: grid; place-items: center; color: #c2410c; font-size: 24px; font-weight: 700; }
        .profile-label { margin: 0 0 5px; color: #a1a1aa; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .profile-name { margin: 0; color: #27272a; font-size: 18px; font-weight: 700; word-break: break-word; }
        .archive-tools { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 10px; margin-top: 2px; }
        .archive-tools input, .archive-tools select { min-height: 38px; border: 1px solid #deded8; border-radius: 9px; outline: none; background: rgba(255,255,255,.9); color: #3f3f46; font: inherit; font-size: 14px; }
        .archive-tools input { flex: 1 1 230px; padding: 0 12px; }
        .archive-tools select { flex: 0 1 150px; padding: 0 30px 0 12px; cursor: pointer; }
        .archive-tools input:focus, .archive-tools select:focus { border-color: #ea580c; box-shadow: 0 0 0 3px rgba(234,88,12,.12); }
        .layout { display: grid; grid-template-columns: minmax(0, 1fr) 220px; gap: 48px; align-items: start; }
        .month-section { scroll-margin-top: 24px; margin-bottom: 40px; }
        .month-title { display: flex; align-items: center; gap: 12px; margin: 0 0 14px; color: #52525b; font-size: 14px; font-weight: 700; }
        .month-title::after { content: ""; height: 1px; flex: 1; background: #deded8; }
        .article { padding: 22px; margin-bottom: 14px; border: 1px solid #e9e8e2; border-radius: 16px; background: rgba(255,255,255,.88); box-shadow: 0 3px 14px rgba(39,39,42,.035); }
        .time { display: inline-flex; align-items: center; margin-bottom: 15px; padding: 5px 9px; border-radius: 7px; background: #f4f4f1; color: #52525b; font-size: 14px; font-weight: 700; letter-spacing: .01em; }
        .text { color: #3f3f46; white-space: pre-wrap; line-height: 1.8; word-break: break-word; }
        .song { margin: 16px 0 2px; padding: 13px 15px; border-radius: 10px; background: #fff7ed; color: #78716c; font-size: 14px; line-height: 1.65; }
        .song a { color: #c2410c; text-decoration: none; font-weight: 600; }
        .song a:hover { text-decoration: underline; }
        .images { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 16px; }
        .images img { display: block; max-width: ${userSettings.imageSize}px; max-height: ${userSettings.imageSize}px; width: auto; height: auto; object-fit: cover; border-radius: 9px; cursor: zoom-in; transition: transform .18s ease, box-shadow .18s ease; }
        .images img:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(39,39,42,.16); }
        .timeline { position: sticky; top: 26px; padding: 6px 0 6px 20px; border-left: 1px solid #d6d3d1; }
        .timeline-title { margin: 0 0 12px; color: #a1a1aa; font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .timeline-year { margin: 0 0 10px; }
        .timeline-year summary { cursor: pointer; color: #52525b; font-size: 13px; font-weight: 700; list-style: none; }
        .timeline-year summary::-webkit-details-marker { display: none; }
        .timeline-year summary::before { content: "▾"; display: inline-block; margin-right: 6px; color: #a1a1aa; transition: transform .18s ease; }
        .timeline-year:not([open]) summary::before { transform: rotate(-90deg); }
        .timeline-months { padding-top: 5px; }
        .timeline-link { position: relative; display: block; padding: 7px 0; color: #71717a; font-size: 13px; text-decoration: none; transition: color .18s ease; }
        .timeline-link::before { content: ""; position: absolute; left: -25px; top: 50%; width: 8px; height: 8px; border: 2px solid #f6f6f3; border-radius: 50%; background: #d6d3d1; transform: translateY(-50%); }
        .timeline-link:hover, .timeline-link.active { color: #c2410c; font-weight: 700; }
        .timeline-link.active::before { background: #ea580c; }
        .timeline-count { margin-left: 5px; color: #a1a1aa; font-size: 11px; font-weight: 400; }
        .no-results { display: none; padding: 42px 20px; border: 1px dashed #d6d3d1; border-radius: 14px; color: #71717a; text-align: center; }
        .lightbox { display: none; position: fixed; inset: 0; padding: 30px; background-color: rgba(24,24,27,.88); z-index: 1000; justify-content: center; align-items: center; cursor: zoom-out; }
        .lightbox img { max-width: 94%; max-height: 92%; object-fit: contain; border-radius: 5px; }
        .close-lightbox { position: absolute; top: 16px; right: 22px; color: white; font-size: 32px; cursor: pointer; }
        @media (max-width: 780px) { body { padding: 24px 16px 56px; } .hero { grid-template-columns: 1fr; padding-bottom: 24px; } .profile-card { min-height: auto; } .layout { display: block; } .timeline { position: sticky; top: 0; z-index: 10; display: flex; gap: 2px; overflow-x: auto; margin: 0 -16px 24px; padding: 10px 16px; border: 0; background: rgba(246,246,243,.94); backdrop-filter: blur(8px); } .timeline-title { display: none; } .timeline-link { flex: 0 0 auto; padding: 7px 10px; border-radius: 99px; background: #ecece7; } .timeline-link::before { display: none; } .timeline-link.active { background: #fff7ed; } .article { padding: 18px; border-radius: 13px; } }
    </style>
    <script>
        function openLightbox(imgSrc) {
            const lightbox = document.getElementById("lightbox");
            const lightboxImg = document.getElementById("lightbox-img");
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        }
        function closeLightbox() {
            document.getElementById("lightbox").style.display = "none";
        }
        document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll(".timeline-link");
            const sections = document.querySelectorAll(".month-section");
            const yearFilter = document.getElementById("year-filter");
            const monthFilter = document.getElementById("month-filter");
            const searchInput = document.getElementById("search-input");
            const noResults = document.getElementById("no-results");
            const applyFilters = function() {
                const year = yearFilter.value;
                const month = monthFilter.value;
                const query = searchInput.value.trim().toLocaleLowerCase();
                let visibleArticles = 0;
                document.querySelectorAll(".article").forEach(article => {
                    const matchesYear = year === "all" || article.dataset.year === year;
                    const matchesMonth = month === "all" || article.dataset.monthNumber === month;
                    const matchesSearch = !query || article.textContent.toLocaleLowerCase().includes(query);
                    const visible = matchesYear && matchesMonth && matchesSearch;
                    article.hidden = !visible;
                    if (visible) visibleArticles += 1;
                });
                sections.forEach(section => { section.hidden = !section.querySelector(".article:not([hidden])"); });
                noResults.style.display = visibleArticles ? "none" : "block";
            };
            yearFilter.addEventListener("change", applyFilters);
            monthFilter.addEventListener("change", applyFilters);
            searchInput.addEventListener("input", applyFilters);
            if (!links.length || !sections.length || !window.IntersectionObserver) return;
            const setActive = function(id) {
                links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + id));
            };
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
            }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
            sections.forEach(section => observer.observe(section));
        });
    </script>
</head>
<body>
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
        <span class="close-lightbox">&times;</span>
        <img id="lightbox-img" src="" alt="大图">
    </div>
    <main class="page">
        <header class="hero">
            <div class="hero-copy">
            <div class="eyebrow">NetEase Cloud Music · Archive</div>
            <h1>我的动态回忆</h1>
            <p class="summary">${articles.length} 条动态 · ${dateRange}</p>
            </div>
            <aside class="profile-card" aria-label="导出账号信息">${profile.avatar
                ? `<img class="profile-avatar" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.name)}的头像" onerror="this.style.display='none'">`
                : `<div class="profile-avatar-fallback" aria-hidden="true">${escapeHtml(profile.name.charAt(0))}</div>`}
                <div><p class="profile-label">NetEase Cloud Music</p><p class="profile-name">${escapeHtml(profile.name)}</p></div>
            </aside>
            <div class="archive-tools" aria-label="筛选与搜索">
                <select id="year-filter" aria-label="按年份筛选">
                    <option value="all">全部年份</option>`;
        for (const [yearKey] of timelineYears) {
            html += `
                    <option value="${yearKey}">${getYearLabel(yearKey)}</option>`;
        }
        html += `
                </select>
                <select id="month-filter" aria-label="按时间筛选">
                    <option value="all">全部月份</option>`;
        for (const month of availableMonths) {
            html += `
                    <option value="${month}">${Number(month)} 月</option>`;
        }
        html += `
                </select>
                <input id="search-input" type="search" placeholder="搜索动态、歌曲或歌手…" aria-label="搜索动态">
            </div>
        </header>
        <div class="layout">
            <div class="feed">
                <div class="no-results" id="no-results">没有找到匹配的动态</div>`;

        for (const group of groups) {
            const sectionId = `month-${group.key}`;
            html += `
                <section class="month-section" id="${sectionId}">
                    <h2 class="month-title">${getMonthLabel(group.key)}</h2>`;

            for (const article of group.items) {
                html += `
    <article class="article" data-month="${group.key}" data-year="${getYearKey(group.key)}" data-month-number="${group.key === 'unknown' ? '' : group.key.split('-')[1]}">
        <div class="time">${article.time}</div>
        <div class="text">${article.text}</div>`;

            if (article.song) {
                html += `
        <div class="song">
            <div><a href="${article.song.url}" target="_blank">${article.song.title}</a></div>
            <div>歌手: <a href="${article.song.artistUrl}" target="_blank">${article.song.artist}</a></div>
        </div>`;
            }

            if (article.images && article.images.length > 0) {
                html += `
        <div class="images">`;
                for (const image of article.images) {
                    const cleanedUrl = cleanImageUrl(image);
                    if (cleanedUrl) {
                        if (userSettings.useBase64Images) {
                            const base64Image = await convertImageToBase64(cleanedUrl);
                            if (base64Image) {
                                html += `
            <img src="${base64Image}" alt="图片" loading="lazy" onclick="openLightbox('${base64Image}')" />`;
                            }
                        } else {
                            html += `
            <img src="${cleanedUrl}" alt="图片" loading="lazy" onclick="openLightbox('${cleanedUrl}')" onerror="this.style.display='none';" />`;
                        }
                    }
                }
                html += `
        </div>`;
            }

                html += `
    </article>`;
            }
            html += `
                </section>`;
        }

        html += `
</div>
            <nav class="timeline" aria-label="按月浏览">
                <div class="timeline-title">时间轴</div>`;
        for (const [yearKey, yearGroups] of timelineYears) {
            const yearCount = yearGroups.reduce((count, group) => count + group.items.length, 0);
            html += `
                <details class="timeline-year" open>
                    <summary>${getYearLabel(yearKey)}<span class="timeline-count">${yearCount}</span></summary>
                    <div class="timeline-months">`;
            for (const group of yearGroups) {
                const sectionId = `month-${group.key}`;
                html += `
                        <a class="timeline-link" href="#${sectionId}">${group.key === 'unknown' ? '未识别日期' : `${Number(group.key.split('-')[1])} 月`}<span class="timeline-count">${group.items.length}</span></a>`;
            }
            html += `
                    </div>
                </details>`;
        }
        html += `
            </nav>
        </div>
    </main>
</body>
</html>`;
        return html;
    }

    // 获取名称用于导出文件名
    function getExportFileName() {
        const url = window.location.href;
        let userId = '';
        const idMatch = url.match(/[\?&]id=(\d+)/);
        if (idMatch && idMatch[1]) {
            userId = idMatch[1];
        }

        let userName = '';
        try {
            const iframe = document.getElementById('g_iframe');
            if (iframe && iframe.contentDocument) {
                const nameElement = iframe.contentDocument.querySelector('#j-name-wrap');
                if (nameElement) {
                    userName = nameElement.textContent.trim();
                }
            }
        } catch (e) {
            console.error('获取用户名失败:', e);
        }

        if (!userName) {
            userName = '网易云音乐用户';
        }

        return (userId ? userId + '_' : '') + userName.replace(/[\\/:*?"<>|]/g, '_') + '.html';
    }

    // 使用下载链接直接保存，避免 window.open 被浏览器的弹窗拦截器阻止。
    function safeDownloadFile(content, filename) {
        try {
            const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
            const objectUrl = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = objectUrl;
            downloadLink.download = filename;
            // 网易云会委托处理页面内 a 标签的点击并改写 hash；阻止事件冒泡，
            // 同时不把下载链接插入页面，确保由浏览器执行原生 download 行为。
            downloadLink.addEventListener('click', event => event.stopPropagation());
            downloadLink.click();

            // 下载开始后再释放临时地址；过早释放会导致部分浏览器下载空文件。
            setTimeout(() => URL.revokeObjectURL(objectUrl), 60 * 1000);

            return true;
        } catch (e) {
            console.error('下载文件失败:', e);
            alert('下载失败: ' + e.message);
            return false;
        }
    }

    // 获取选定范围的文章
    function getSelectedArticles() {
        if (!uiElements) return [];

        const start = Math.max(1, parseInt(uiElements.startRangeInput.value) || 1);
        const end = Math.min(articleArray.length, parseInt(uiElements.endRangeInput.value) || 1);

        if (start > end || start > articleArray.length) {
            return [];
        }

        return articleArray.slice(start - 1, end);
    }

    // 处理HTML文本内容，保留<br>等安全标签
    function processHTMLText(htmlContent) {
        if (!htmlContent) return '';

        let processedText = htmlContent;
        processedText = processedText.replace(/<a[^>]*data-action="activity"[^>]*>(.*?)<\/a>/gi, '$1');

        return processedText;
    }

    // 设置UI事件
    function setupUIEvents() {
        if (!uiElements) return;

        uiElements.maxButton.addEventListener('click', function() {
            const articles = updateArticleCount();
            if (articles.length > 0) {
                uiElements.startRangeInput.value = '1';
                uiElements.endRangeInput.value = articles.length;
                uiElements.statusDisplay.innerText = `已设置范围: 1 到 ${articles.length}`;
            }
        });

        uiElements.copyButton.addEventListener('click', function() {
            updateArticleCount();
            const selectedArticles = getSelectedArticles();

            if (selectedArticles.length === 0) {
                alert('请输入有效的范围');
                return;
            }

            const copyText = selectedArticles.map(article => {
                const processedText = article.text.replace(/<br\s*\/?>/gi, '\n');
                const plainText = processedText.replace(/<[^>]+>/g, '');
                return `${article.time}\n${plainText}`;
            }).join('\n\n');

            try {
                GM_setClipboard(copyText);

                const originalText = uiElements.copyButton.innerText;
                uiElements.copyButton.innerText = '已复制!';
                uiElements.statusDisplay.innerText = `已复制 ${selectedArticles.length} 篇文章`;
                setTimeout(() => {
                    uiElements.copyButton.innerText = originalText;
                }, 1500);
            } catch (error) {
                console.error('复制失败:', error);
                alert('复制失败，请检查脚本权限');
                uiElements.statusDisplay.innerText = '复制失败';
            }
        });

        uiElements.exportButton.addEventListener('click', async function() {
            updateArticleCount();
            const selectedArticles = getSelectedArticles();

            if (selectedArticles.length === 0) {
                alert('请输入有效的范围');
                return;
            }

            const originalText = uiElements.exportButton.innerText;
            uiElements.exportButton.innerText = '处理中...';
            uiElements.statusDisplay.innerText = `正在处理 ${selectedArticles.length} 篇文章...`;

            try {
                await resolveOriginalImages(selectedArticles);
                if (userSettings.useBase64Images) {
                    uiElements.statusDisplay.innerText = `正在处理和转换图片...这可能需要一些时间`;
                }

                const htmlContent = await generateHtmlContent(selectedArticles);
                const fileName = getExportFileName();

                if (safeDownloadFile(htmlContent, fileName)) {
                    uiElements.statusDisplay.innerText = `已导出 ${selectedArticles.length} 篇文章到 ${fileName}`;
                } else {
                    uiElements.statusDisplay.innerText = '导出失败，请检查浏览器设置';
                }
            } catch (error) {
                console.error('导出处理失败:', error);
                uiElements.statusDisplay.innerText = '导出失败: ' + error.message;
                alert('导出失败: ' + error.message);
            } finally {
                setTimeout(() => {
                    uiElements.exportButton.innerText = originalText;
                }, 1500);
            }
        });

        // 添加自动滚动按钮事件
        uiElements.autoScrollButton.addEventListener('click', function() {
            if (isAutoScrolling) {
                stopAutoScroll('用户停止');
            } else {
                startAutoScroll();
            }
        });
    }

    // 获取iframe文档
    function getIframeDocument() {
        const iframe = document.getElementById('g_iframe');
        if (!iframe) return null;

        try {
            return iframe.contentDocument || iframe.contentWindow.document;
        } catch (e) {
            console.error('无法访问iframe内容:', e);
            return null;
        }
    }

    // 获取总动态数
    function getTotalEventCount() {
        const iframeDoc = getIframeDocument();
        if (!iframeDoc) return 0;

        const eventCountElement = iframeDoc.getElementById('event_count2');
        if (eventCountElement) {
            const count = parseInt(eventCountElement.textContent.trim());
            if (!isNaN(count)) {
                return count;
            }
        }

        return 0;
    }

    // 滚动到底部
    function scrollToBottom() {
        const iframeDoc = getIframeDocument();
        if (!iframeDoc) return false;

        try {
            const scrollHeight = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
            iframeDoc.documentElement.scrollTop = scrollHeight;
            iframeDoc.body.scrollTop = scrollHeight;
            return true;
        } catch (e) {
            console.error('滚动到底部失败:', e);
            return false;
        }
    }

    // 执行自动滚动
    function performAutoScroll() {
        if (!isAutoScrolling) return;

        const currentArticleCount = articleArray.length;

        // 检查是否达到总数
        if (totalEventCount > 0 && currentArticleCount >= totalEventCount) {
            stopAutoScroll(`已加载所有动态 (${currentArticleCount}/${totalEventCount})`);
            return;
        }

        // 检查是否超过1分钟没有新内容
        if (currentArticleCount === lastArticleCount) {
            if (!noNewContentStartTime) {
                noNewContentStartTime = Date.now();
            } else if (Date.now() - noNewContentStartTime > 60000) { // 超过1分钟
                if (totalEventCount > 0 && currentArticleCount < totalEventCount) {
                    stopAutoScroll(`已停止加载 (${currentArticleCount}/${totalEventCount})，部分动态可能已隐藏`);
                } else {
                    stopAutoScroll('超过1分钟没有新内容，已停止');
                }
                return;
            }
        } else {
            noNewContentStartTime = null;
            lastArticleCount = currentArticleCount;
        }

        // 滚动到底部
        scrollToBottom();

        if (uiElements) {
            const statusText = totalEventCount > 0
                ? `自动滚动中... 已加载 ${currentArticleCount}/${totalEventCount} 篇文章`
                : `自动滚动中... 已加载 ${currentArticleCount} 篇文章`;
            uiElements.statusDisplay.innerText = statusText;
        }

        // 等待5秒后继续下一次滚动
        autoScrollTimeout = setTimeout(() => {
            updateArticleCount();
            performAutoScroll();
        }, 5000);
    }

    // 启动自动滚动
    function startAutoScroll() {
        if (isAutoScrolling) return;

        isAutoScrolling = true;
        lastArticleCount = articleArray.length;
        noNewContentStartTime = null;

        // 获取总动态数
        totalEventCount = getTotalEventCount();

        if (uiElements) {
            uiElements.autoScrollButton.innerText = '停止滚动';
            uiElements.autoScrollButton.style.backgroundColor = '#f44336';
            uiElements.statusDisplay.innerText = totalEventCount > 0
                ? `开始自动滚动... 总动态数: ${totalEventCount}`
                : '开始自动滚动...';
        }

        // 立即执行第一次滚动
        performAutoScroll();
    }

    // 停止自动滚动
    function stopAutoScroll(reason) {
        if (!isAutoScrolling) return;

        isAutoScrolling = false;

        if (autoScrollTimeout) {
            clearTimeout(autoScrollTimeout);
            autoScrollTimeout = null;
        }

        if (uiElements) {
            uiElements.autoScrollButton.innerText = '自动滚动加载';
            uiElements.autoScrollButton.style.backgroundColor = '#4CAF50';
            uiElements.statusDisplay.innerText = reason || '已停止自动滚动';
        }
    }

    // 滚动到顶部以确保捕获所有内容
    function scrollToTop() {
        const iframeDoc = getIframeDocument();
        if (!iframeDoc) return false;

        try {
            const originalScrollPosition = iframeDoc.documentElement.scrollTop || iframeDoc.body.scrollTop;

            iframeDoc.documentElement.scrollTop = 0;
            iframeDoc.body.scrollTop = 0;

            hasScrolledToTop = true;

            if (uiElements) {
                uiElements.statusDisplay.innerText = '已滚动到顶部，正在扫描...';
            }

            setTimeout(() => {
                iframeDoc.documentElement.scrollTop = originalScrollPosition;
                iframeDoc.body.scrollTop = originalScrollPosition;
                if (uiElements) {
                    uiElements.statusDisplay.innerText = '扫描完成，已恢复滚动位置';
                }
            }, 1000);

            return true;
        } catch (e) {
            console.error('滚动到顶部失败:', e);
            return false;
        }
    }

    // 提取歌曲信息
    function extractSongInfo(elem) {
        try {
            const srcElement = elem.querySelector('.src');
            if (!srcElement) return null;

            const scntElement = srcElement.querySelector('.scnt');
            if (!scntElement) return null;

            const titleElement = scntElement.querySelector('.tit a');
            if (!titleElement) return null;

            const title = titleElement.textContent.trim();
            const songHref = titleElement.getAttribute('href');
            const songUrl = songHref ? `https://music.163.com${songHref}` : '';

            const artistElement = scntElement.querySelector('.from a');
            if (!artistElement) return null;

            const artist = artistElement.textContent.trim();
            const artistHref = artistElement.getAttribute('href');
            const artistUrl = artistHref ? `https://music.163.com${artistHref}` : '';

            return {
                title,
                url: songUrl,
                artist,
                artistUrl
            };
        } catch (e) {
            console.error('提取歌曲信息失败:', e);
            return null;
        }
    }

    // 网易云列表页的 src 常为方形裁剪缩略图，原图通常在懒加载属性中。
    function getOriginalImageUrl(img) {
        const attributes = ['data-original', 'data-origin', 'data-src', 'data-lazy-src', 'data-url'];
        // 网易云的不同页面版本会把原图地址放在 img 或可点击的 .pic 父元素上。
        for (const element of [img, img.closest('.pic')]) {
            if (!element) continue;
            for (const attribute of attributes) {
                const source = element.getAttribute(attribute);
                if (source) {
                    return source.split('?')[0].replace(/^http:/, 'https:');
                }
            }
        }

        const source = img.getAttribute('src');
        if (source) return source.split('?')[0].replace(/^http:/, 'https:');
        return '';
    }

    // 提取图片URL
    function extractImageUrls(elem) {
        try {
            const imageUrls = [];
            const imageElements = elem.querySelectorAll('.pics .pic img');

            if (imageElements && imageElements.length > 0) {
                imageElements.forEach(img => {
                    const originalSrc = getOriginalImageUrl(img);
                    if (originalSrc) {
                        imageUrls.push(originalSrc);
                    }
                });
            } else {
                const coverImg = elem.querySelector('.cover .lnk img');
                if (coverImg) {
                    const originalSrc = getOriginalImageUrl(coverImg);
                    if (originalSrc) {
                        imageUrls.push(originalSrc);
                    }
                }
            }

            return imageUrls;
        } catch (e) {
            console.error('提取图片URL失败:', e);
            return [];
        }
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getViewerDocuments(iframeDoc) {
        // NetEase has used both iframe-local and top-level image viewers.
        return iframeDoc === document ? [document] : [iframeDoc, document];
    }

    function findVisibleElement(documents, selector) {
        for (const doc of documents) {
            for (const element of doc.querySelectorAll(selector)) {
                if (element.getClientRects().length > 0) return element;
            }
        }
        return null;
    }

    async function closeImageViewer(iframeDoc) {
        const documents = getViewerDocuments(iframeDoc);
        const closeButton = findVisibleElement(documents,
            '.m-layer .zcls, .m-layer [title="关闭"], .zcls, [title="关闭"]'
        );
        if (closeButton) {
            closeButton.click();
            await wait(250);
            return closeButton.getClientRects().length === 0;
        }

        // Fallback for viewer versions without a discoverable close button.
        for (const doc of documents) {
            doc.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true
            }));
        }
        await wait(250);
        return !findVisibleElement(documents, '.m-layer, .u-mask');
    }

    function hasSameImagePath(firstUrl, secondUrl) {
        try {
            return new URL(firstUrl).pathname === new URL(secondUrl).pathname;
        } catch (error) {
            return firstUrl === secondUrl;
        }
    }

    function findItemViewerElement(itemElement, selector) {
        const candidates = itemElement.querySelectorAll(`.showpic ${selector}`);
        for (const element of candidates) {
            if (element.getClientRects().length > 0) return element;
        }
        return null;
    }

    async function closeItemViewer(itemElement) {
        const foldButton = findItemViewerElement(itemElement, 'a[data-action="fold"]');
        if (!foldButton) return true;
        foldButton.click();
        await wait(180);
        return !findItemViewerElement(itemElement, 'a[data-action="fold"]');
    }

    async function getViewerOriginalUrl(iframeDoc, itemElement, pictureIndex, previousUrl = '', expectedUrl = '') {
        const documents = getViewerDocuments(iframeDoc);
        // 每条动态的“查看原图”都在自身 showpic 面板中，绝不能跨 li.itm 查找。
        // 必须逐条动态重新查询图片节点：查看器关闭后网易云可能会重绘列表，旧节点引用不可靠。
        for (let attempt = 0; attempt < 3; attempt++) {
            const viewerClosed = await closeItemViewer(itemElement);
            if (!viewerClosed) {
                await wait(220);
                if (!await closeItemViewer(itemElement)) {
                    throw new Error('图片查看器未完全关闭，停止切换图片');
                }
            }
            itemElement.scrollIntoView({ block: 'center', inline: 'nearest' });
            await wait(180);
            const pictureElement = itemElement.querySelectorAll('.pics .pic')[pictureIndex];
            if (!pictureElement) {
                throw new Error(`当前动态的第 ${pictureIndex + 1} 张图片不存在`);
            }
            // 网易云把打开查看器的事件绑定在实际 img 上；点击 .pic 容器会导致
            // 后续动态的查看器不切图，从而重复读取上一张图片的原图链接。
            const imageElement = pictureElement.querySelector('img') || pictureElement;
            const view = iframeDoc.defaultView || window;
            ['mousedown', 'mouseup', 'click'].forEach(type => imageElement.dispatchEvent(
                new MouseEvent(type, { bubbles: true, cancelable: true, view })
            ));
            await wait(300 + attempt * 180);

            const viewOriginal = findItemViewerElement(itemElement, 'a[data-action="big"]');
            if (!viewOriginal) {
                await closeItemViewer(itemElement);
                throw new Error('当前动态未找到“查看原图”按钮');
            }
            viewOriginal.click();
            await wait(280 + attempt * 150);

            const viewerImage = findVisibleElement(documents, '.m-layer img') ||
                findItemViewerElement(itemElement, 'img');
            const originalUrl = viewerImage ? getOriginalImageUrl(viewerImage) : '';
            // “查看原图”会打开全屏层；每次读取后都同时关闭全屏层与当前 item 面板，
            // 防止导出完成后遗留多个图片查看窗口。
            const globalViewerClosed = await closeImageViewer(iframeDoc);
            const itemViewerClosed = await closeItemViewer(itemElement);
            const isStale = previousUrl && originalUrl === previousUrl && expectedUrl &&
                !hasSameImagePath(originalUrl, expectedUrl);

            if (originalUrl && globalViewerClosed && itemViewerClosed && !isStale) return originalUrl;
            await wait(120);
        }

        throw new Error('图片查看器未切换到当前图片（已重试 3 次）');
    }

    // 网易云只会在图片查看器中暴露“下载原图”链接。导出前才读取，
    // 这样平时扫描动态不会被逐张图片的操作拖慢。
    async function resolveOriginalImages(articles) {
        const iframeDoc = getIframeDocument();
        if (!iframeDoc) return;

        const pictureArticles = articles.filter(article =>
            article.itemElem && article.itemElem.querySelectorAll('.pics .pic').length > 0
        );
        const total = pictureArticles.reduce((count, article) =>
            count + article.itemElem.querySelectorAll('.pics .pic').length, 0
        );
        let completed = 0;
        let previousViewerUrl = '';

        for (const article of pictureArticles) {
            const pictureElements = Array.from(article.itemElem.querySelectorAll('.pics .pic'));
            const originalUrls = [];

            for (let pictureIndex = 0; pictureIndex < pictureElements.length; pictureIndex++) {
                completed += 1;
                if (uiElements) {
                    uiElements.statusDisplay.innerText = `正在读取原图链接 (${completed}/${total})...`;
                }
                try {
                    const fallbackUrl = article.images[originalUrls.length] || '';
                    const originalUrl = await getViewerOriginalUrl(
                        iframeDoc, article.itemElem, pictureIndex, previousViewerUrl, fallbackUrl
                    );
                    if (!originalUrl) throw new Error('未找到“下载原图”链接');
                    originalUrls.push(originalUrl);
                    previousViewerUrl = originalUrl;
                } catch (error) {
                    console.warn('读取原图链接失败，使用备用图片地址:', error);
                    originalUrls.push(article.images[originalUrls.length] || '');
                }
            }

            if (originalUrls.length === article.images.length && originalUrls.every(Boolean)) {
                article.images = originalUrls;
            }
        }
    }

    // 为元素生成唯一ID
    function generateElementId(elem, time, text) {
        return `${time}-${text.substring(0, 30).replace(/\s+/g, '')}`;
    }

    // 收集所有文章
    function scanForArticles() {
        const iframeDoc = getIframeDocument();
        if (!iframeDoc) {
            return { articles: articleArray, newFound: false };
        }

        const dcntcElements = iframeDoc.querySelectorAll('.dcntc');
        let newArticlesFound = false;

        dcntcElements.forEach(elem => {
            const timeElem = elem.querySelector('.time');
            const textElem = elem.querySelector('.text');

            if (timeElem) {
                let time = '';
                const timeLink = timeElem.querySelector('a');
                if (timeLink) {
                    time = timeLink.textContent.trim();
                } else {
                    time = timeElem.textContent.trim();
                }

                const text = textElem ? textElem.innerHTML.trim() : '';
                const song = extractSongInfo(elem);
                const images = extractImageUrls(elem);

                // 分享单曲等动态可能没有 .text 正文；只要存在正文、歌曲或图片之一就应保留。
                if (time && (text || song || images.length > 0)) {
                    const identityText = text || `${song ? `${song.title}-${song.artist}` : ''}-${images.join('|')}`;
                    const articleId = generateElementId(elem, time, identityText);

                    if (!processedIds.has(articleId)) {
                        const domIndex = articleArray.length;

                        articleArray.push({
                            id: articleId,
                            time: time,
                            text: text,
                            song: song,
                        images: images,
                        elem: elem,
                        // 图片查看器及“查看原图”控件以完整的动态条目 li.itm 为作用范围。
                        itemElem: elem.closest('li.itm') || elem,
                        domIndex: domIndex
                        });

                        processedIds.add(articleId);
                        newArticlesFound = true;
                    }
                }
            }
        });

        return {
            articles: articleArray,
            newFound: newArticlesFound
        };
    }

    // 更新文章计数显示和范围输入
    function updateArticleCount() {
        if (!uiElements) return articleArray;

        const result = scanForArticles();
        const articles = result.articles;
        const total = articles.length;

        // 获取总动态数（如果之前没有获取或需要更新）
        if (totalEventCount === 0) {
            totalEventCount = getTotalEventCount();
        }

        const countText = totalEventCount > 0
            ? `已检测到 ${total}/${totalEventCount} 篇文章`
            : `已检测到 ${total} 篇文章`;

        uiElements.countDisplay.innerText = countText;

        const currentEndValue = parseInt(uiElements.endRangeInput.value) || 1;
        if (result.newFound || currentEndValue > total) {
            if (currentEndValue > total) {
                uiElements.endRangeInput.value = total > 0 ? total : 1;
            }
        }

        if (!isAutoScrolling) {
            uiElements.statusDisplay.innerText = result.newFound ?
                `发现新内容，共 ${total} 篇` :
                `内容稳定，共 ${total} 篇`;
        }

        return articles;
    }

    // 重置所有状态
    function resetAllState() {
        articleArray.length = 0;
        processedIds.clear();
        hasScrolledToTop = false;
        totalEventCount = 0;

        // 停止自动滚动
        if (isAutoScrolling) {
            stopAutoScroll('页面已更新');
        }
    }

    // 设置iframe滚动监听
    function setupIframeScrollListener() {
        const iframe = document.getElementById('g_iframe');
        if (!iframe || !iframe.contentWindow) return;

        iframe.contentWindow.addEventListener('scroll', function() {
            if (!isScrollThrottled) {
                isScrollThrottled = true;
                setTimeout(() => {
                    updateArticleCount();
                    isScrollThrottled = false;
                }, 300);
            }
        });
    }

    // 设置 MutationObserver 监听iframe DOM变化
    function setupMutationObserver() {
        if (observer) {
            observer.disconnect();
        }

        const iframeDoc = getIframeDocument();
        if (!iframeDoc) return;

        observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;

            for (const mutation of mutations) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                    break;
                }
            }

            if (shouldUpdate) {
                updateArticleCount();
            }
        });

        observer.observe(iframeDoc.body, { childList: true, subtree: true });
    }

    // 初始化函数
    function initialize() {
        if (hasInitialized) {
            if (uiElements) {
                uiElements.statusDisplay.innerText = '重新扫描中...';
            }
            updateArticleCount();
            return;
        }

        const iframe = document.getElementById('g_iframe');
        if (!iframe) {
            if (uiElements) {
                uiElements.statusDisplay.innerText = '等待iframe加载...';
            }
            setTimeout(initialize, 1000);
            return;
        }

        if (!iframe.contentDocument || !iframe.contentWindow ||
            !iframe.contentDocument.body || iframe.contentDocument.readyState !== 'complete') {
            if (uiElements) {
                uiElements.statusDisplay.innerText = '等待iframe内容加载完成...';
            }
            setTimeout(initialize, 1000);
            return;
        }

        if (uiElements) {
            uiElements.statusDisplay.innerText = '正在初始化...';
        }

        hasInitialized = true;

        if (!hasScrolledToTop) {
            if (scrollToTop()) {
                setTimeout(() => {
                    setupIframeScrollListener();
                    setupMutationObserver();
                    updateArticleCount();
                }, 1500);
            } else {
                setupIframeScrollListener();
                setupMutationObserver();
                updateArticleCount();
            }
        } else {
            setupIframeScrollListener();
            setupMutationObserver();
            updateArticleCount();
        }
    }

    // 监听iframe变化
    function monitorIframeChanges() {
        const iframeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
                    if (uiElements) {
                        uiElements.statusDisplay.innerText = 'iframe更新，重新初始化...';
                    }

                    if (observer) {
                        observer.disconnect();
                    }

                    resetAllState();
                    hasInitialized = false;
                    setTimeout(initialize, 1000);
                }
            });
        });

        const iframe = document.getElementById('g_iframe');
        if (iframe) {
            iframeObserver.observe(iframe, { attributes: true });
        }
    }

    // 监听页面变化，以便在导航到新页面时重新初始化
    window.addEventListener('hashchange', function() {
        if (uiElements) {
            uiElements.statusDisplay.innerText = 'URL变化，重新初始化...';
        }

        resetAllState();
        hasInitialized = false;
        setTimeout(initialize, 1000);
    });

    // 主函数：添加UI并开始初始化
    function main() {
        addUIToDocument();

        const checkIframeInterval = setInterval(() => {
            const iframe = document.getElementById('g_iframe');
            if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
                clearInterval(checkIframeInterval);
                initialize();
                monitorIframeChanges();
            }
        }, 1000);

        setTimeout(() => {
            initialize();
            monitorIframeChanges();
        }, 2000);

        setInterval(() => {
            updateArticleCount();
        }, 5000);
    }

    if (window === window.top && !window.netEaseCommentExtractorInitialized) {
        window.netEaseCommentExtractorInitialized = true;
        main();
    }
})();
