// ==UserScript==
// @name         百度全页面样式优化-去广告，深色模式
// @namespace    http://tampermonkey.net/
// @version      1.46
// @icon         data:image/png;base64,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
// @description  添加单双列布局切换，官网置顶功能，优化百度官方标识识别，增加深色模式切换，移除百度搜索结果跳转页面，并加宽搜索结果。
// @author       Gemini-Rcccccccc (Enhanced)
// @match        *://www.baidu.com/*
// @match        *://www1.baidu.com/*
// @match        *://m.baidu.com/*
// @match        *://xueshu.baidu.com/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @connect      *
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/543000/%E7%99%BE%E5%BA%A6%E5%85%A8%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%BC%98%E5%8C%96-%E5%8E%BB%E5%B9%BF%E5%91%8A%EF%BC%8C%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.user.js
// @updateURL https://update.greasyfork.org/scripts/543000/%E7%99%BE%E5%BA%A6%E5%85%A8%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%BC%98%E5%8C%96-%E5%8E%BB%E5%B9%BF%E5%91%8A%EF%BC%8C%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F.meta.js
// ==/UserScript==

(function() {
    'use strict';
    // ==============================================
    // 稳定可靠的防闪烁/防白屏技术
    // ==============================================
    const observer = new MutationObserver(() => {
        if (document.body) {
            document.body.style.opacity = '0';
            observer.disconnect();
        }
    });
    observer.observe(document.documentElement, { childList: true });
    // ==============================================
    // 重定向功能工具函数
    // ==============================================
    function getUrlAttribute(baseUrl = location.href, attribute, needDecode = true) {
        const [, search = ''] = baseUrl.split("?");
        const searchValue = search.split("&");
        for (let i = 0; i < searchValue.length; i++) {
            const [key, value] = searchValue[i].split("=");
            if (key === attribute) {
                return needDecode ?
                    decodeURIComponent(value) : value;
            }
        }
        return "";
    }

    function Reg_Get(HTML, reg) {
        const RegE = new RegExp(reg);
        try {
            return RegE.exec(HTML)[1];
        } catch (e) {
            return "";
        }
    }

    // ==============================================
    // 重定向处理核心函数
    // ==============================================
    function removeMobileBaiduDirectLink() {
        const nodes = document.querySelectorAll("#page #page-bd #results .result:not([ac_redirectStatus])");
        nodes.forEach(curNode => {
            try {
                const logData = curNode.getAttribute('data-log');
                if (!logData) return;

                const curData = JSON.parse(logData.replace(/'/gm, '"'));
                const trueLink = curData.mu;

                if (trueLink) {
                    const article = curNode.querySelector("article");
                    if (article) article.setAttribute("rl-link-href", trueLink);

                    curNode.querySelectorAll("a").forEach(a => {
                        a.setAttribute("data-original-href", a.href);
                        a.setAttribute("href", trueLink);
                    });
                }

                curNode.setAttribute("ac_redirectStatus", "1");
            } catch (e) {
                console.error('处理百度移动重定向失败', e);
            }
        });
    }

    function remove_xueshuBaidu() {
        if (location.host.includes('xueshu.baidu')) {
            const xnodes = document.querySelectorAll("a[href*='sc_vurl=http']");
            xnodes.forEach(node => {
                const xurl = getUrlAttribute(node.href, "sc_vurl", true);
                if (xurl) {
                    node.setAttribute("data-original-href", node.href);
                    node.href = xurl;
                }
            });
        }
    }

    function resetURLNormal() {
        const mainSelector = "#content_left>.c-container";
        const linkSelector = "h3.t>a, .c-container article a";

        if (location.host.includes('m.baidu')) {
            removeMobileBaiduDirectLink();
            return;
        }

        const mainList = document.querySelectorAll(mainSelector);
        const hasDealHrefSet = new Set();
        mainList.forEach(curNode => {
            if (curNode.getAttribute("ac_redirectStatus") !== null) return;
            curNode.setAttribute("ac_redirectStatus", "0");

            const linkNode = curNode.querySelector(linkSelector);
            if (!linkNode || !linkNode.href) return;

            let linkHref = linkNode.href;
            if (hasDealHrefSet.has(linkHref)) return;
            hasDealHrefSet.add(linkHref);

            if (linkHref.startsWith('javascript') || linkHref.startsWith('#')) return;

            let trueLink = curNode.getAttribute('mu') || linkNode.getAttribute('data-mdurl');
            if (trueLink && !trueLink.includes('nourl')) {
                if (trueLink.includes('baidu.com')) {
                    const [, first = ''] = /(ie=[^&]+)/.exec(location.search) || [];
                    trueLink = trueLink.replace(/(ie=[^&]+)/, first);
                }

                dealRedirect(null, linkHref, trueLink, linkNode);
                return;
            }

            if (linkHref.includes("www.baidu.com/link")) {
                let url = linkHref.replace(/^http:/, "https:");
                if (!url.includes("eqid")) {
                    url = url + "&wd=&eqid=";
                }

                GM_xmlhttpRequest({
                    url: url,
                    headers: {
                        "Accept": "*/*",
                        "Referer": linkHref.replace(/^http:/, "https:")
                    },
                    method: "GET",
                    timeout: 8000,
                    onload: function(response) {
                        if (response.responseText || response.responseHeaders) {
                            let resultResponseUrl = Reg_Get(response.responseText, "URL='([^']+)'");

                            if (!resultResponseUrl && response.responseHeaders.includes("tm-finalurl")) {
                                resultResponseUrl = Reg_Get(response.responseHeaders, "tm-finalurl\\w+: ([^\\s]+)");
                            }

                            dealRedirect(this, linkHref, resultResponseUrl, linkNode);
                        }
                    }
                });
            }
        });
    }

    function dealRedirect(request, curNodeHref, resultResponseUrl, linkNode) {
        if (!resultResponseUrl || resultResponseUrl.includes("www.baidu.com/link")) return;
        try {
            if (linkNode) {
                linkNode.setAttribute("data-original-href", linkNode.href);
                linkNode.href = resultResponseUrl;

                if (linkNode.text && linkNode.text.length < 10 &&
                    !linkNode.parentElement.tagName.toLowerCase().startsWith("h")) {
                    const host = new URL(resultResponseUrl).hostname;
                    if (!linkNode.textContent.includes(host)) {
                        const hostSpan = document.createElement('span');
                        hostSpan.className = 'gm-host-name';
                        hostSpan.textContent = host;

                        const separator = document.createElement('span');
                        separator.className = 'gm-host-separator';
                        separator.textContent = ' - ';

                        linkNode.parentNode.insertBefore(separator, linkNode.nextSibling);
                        linkNode.parentNode.insertBefore(hostSpan, separator.nextSibling);
                    }
                }
            }

            if (request) request.abort();
        } catch (e) {
            console.error('处理重定向失败', e);
        }
    }

    function processRedirects() {
        remove_xueshuBaidu();
        resetURLNormal();
    }

    // ==============================================
    // 通用模块
    // ==============================================
    const customSearchBoxHTML =
          '<div class="gm-search-container">' +
          '<input class="gm-search-input" type="text" maxlength="255" autocomplete="off" placeholder="请输入搜索内容">' +
          '<button class="gm-search-button">百度一下</button>' +
          '</div>';
    const commonStyles =
          '.gm-search-input { width: 600px; height: 42px; padding-left: 25px; border: 1px solid #c4c7ce !important; box-sizing: border-box !important; border-right: none !important; outline: none !important; font-size: 16px; color: #000; background: #fff; border-radius: 24px 0 0 24px; }' +
          '.gm-search-input:focus { border-color: #4e6ef2 !important; }' +
          '.gm-search-button { height: 42px; padding: 0 25px; border: none !important; box-sizing: border-box !important; outline: none !important; cursor: pointer; font-size: 17px; background: #4e6ef2; border-radius: 0 24px 24px 0; color: #fff; display: flex; align-items: center; justify-content: center; white-space: nowrap; }' +
          '.gm-search-button:hover { background: #3079e8; }' +
          '.official-pinned-hint { background: #4e6ef2; color: white; padding: 3px 10px; border-radius: 4px; font-size: 12px; margin-bottom: 8px; display: inline-block; }' +
          '.gm-host-name { color: #666; font-size: 13px; margin-left: 4px; }' +
          '.gm-host-separator { color: #999; }' +
          'body.dark-mode .gm-host-name { color: #aaa; }' +
          'body.dark-mode .gm-host-separator { color: #777; }' +

          // 单列布局样式
          'body.single-column #container.sam_newgrid, body.single-column #content_left, body.single-column .wrapper_new #content_left, body.single-column #container.sam_newgrid #content_left { width: 100% !important; max-width: 1200px !important; margin: 0 auto !important; padding: 0 !important; display: flex !important; flex-direction: column !important; align-items: center !important; }' +
          'body.single-column .c-container, body.single-column .result-op, body.single-column .result { width: 100% !important; max-width: 800px !important; margin: 0 auto 25px auto !important; padding: 25px !important; border-radius: 10px !important; box-shadow: 0 3px 10px rgba(0,0,0,0.08) !important; background-color: #fff !important; transition: all 0.3s ease !important; box-sizing: border-box !important; }' +
          'body.single-column #content_left > .c-container:first-child { margin-top: 30px !important; }' +

          // 双列布局样式
          'body.double-column #container.sam_newgrid, body.double-column #content_left, body.double-column .wrapper_new #content_left, body.double-column #container.sam_newgrid #content_left { width: 100% !important; max-width: 1400px !important; margin: 0 auto !important; padding: 20px !important; display: flex !important; flex-wrap: wrap !important; gap: 20px !important; align-items: stretch !important; justify-content: space-between !important; }' +
          'body.double-column .c-container, body.double-column .result-op, body.double-column .result { width: calc(50% - 10px) !important; margin: 0 !important; padding: 20px !important; border-radius: 10px !important; box-shadow: 0 3px 10px rgba(0,0,0,0.08) !important; background-color: #fff !important; transition: all 0.3s ease !important; box-sizing: border-box !important; overflow: hidden !important; display: flex !important; flex-direction: column !important; max-height: 380px !important; }' +

          // 内容高度和显示优化
          'body.double-column .c-abstract, body.double-column .c-span-last { max-height: 4.8em !important; overflow: hidden !important; display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; line-height: 1.6 !important; }' +
          'body.double-column h3.t, body.double-column h3[class*="title"] { font-size: 16px !important; line-height: 1.4 !important; margin-bottom: 10px !important; max-height: 2.8em !important; overflow: hidden !important; display: -webkit-box !important; -webkit-line-clamp: 2 !important; -webkit-box-orient: vertical !important; }' +

          // 强制内容不溢出
          'body.double-column .c-container *, body.double-column .result-op *, body.double-column .result * { max-width: 100% !important; box-sizing: border-box !important; word-wrap: break-word !important; }' +
          'body.double-column h3, body.double-column h3 a { display: block !important; word-break: break-word !important; white-space: normal !important; }' +

          // 图片和媒体优化
          'body.double-column img, body.double-column video { max-width: 100% !important; max-height: 200px !important; height: auto !important; display: block !important; object-fit: cover !important; }' +
          'body.double-column .c-img, body.double-column .c-img6 { max-height: 200px !important; overflow: hidden !important; }' +

          // 百科卡片特殊处理 (有更高的max-height)
          'body.double-column .c-group-wrapper, body.double-column div[tpl*="baike"] { width: 100% !important; overflow: hidden !important; max-height: 500px !important; }' +
          'body.double-column .c-group-wrapper .c-group-inner, body.double-column .c-group-wrapper ._content_1ml43_4, body.double-column .c-group-wrapper .content_309tE { width: 100% !important; padding: 15px !important; max-height: 450px !important; overflow: hidden !important; }' +
          'body.double-column ._bg-header_1ml43_46 { width: 100% !important; padding: 15px 15px 0 15px !important; }' +
          'body.double-column .c-group-wrapper .sc-paragraph { max-height: 4.8em !important; overflow: hidden !important; display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; }' +

          // 视频和游戏卡片优化
          'body.double-column div[tpl*="soft"], body.double-column .result[tpl="soft"] { max-height: 350px !important; }' +
          'body.double-column div[tpl*="video"], body.double-column .result[tpl*="video"] { max-height: 380px !important; }' +
          'body.double-column iframe, body.double-column video { max-height: 180px !important; }' +

          // 大图片卡片优化
          'body.double-column .c-img-border { max-height: 180px !important; overflow: hidden !important; }' +
          'body.double-column .c-img-radius-large { max-height: 180px !important; overflow: hidden !important; border-radius: 8px !important; }' +

          // 列表类内容优化
          'body.double-column .c-gap-top-small, body.double-column .c-gap-bottom-small { margin-top: 8px !important; margin-bottom: 8px !important; }' +
          'body.double-column ul, body.double-column ol { max-height: 150px !important; overflow: hidden !important; }' +

          // 标签和按钮
          'body.double-column .tag-wrapper_1sGop, body.double-column .tag-container_ksKXH { width: 100% !important; grid-column: 1 / -1 !important; }' +

          // 底部内容自动填充空白
          'body.double-column .c-showurl, body.double-column .c-tools { margin-top: auto !important; padding-top: 10px !important; flex-shrink: 0 !important; }' +

          // Flex布局修复
          'body.double-column .c-row, body.double-column [class*="flex"] { display: flex !important; flex-wrap: wrap !important; }' +

          // 更多内容按钮样式
          'body.double-column .c-moreinfo, body.double-column .show-more { display: inline-block !important; color: #4e6ef2 !important; cursor: pointer !important; margin-top: 8px !important; }' +

          // 响应式：小屏幕自动单列
          '@media (max-width: 1200px) { body.double-column #container.sam_newgrid, body.double-column #content_left { grid-template-columns: 1fr !important; } body.double-column .c-container, body.double-column .result-op, body.double-column .result { max-height: none !important; min-height: auto !important; } }' +

          '.c-container:hover, .result-op:hover, .result:hover { box-shadow: 0 6px 15px rgba(0,0,0,0.12) !important; transform: translateY(-3px) !important; }' +
          '#wrapper_wrapper, #container { max-width: 100% !important; padding: 0 !important; box-sizing: border-box !important; }' +
          '#content_right, #con-ar { display: none !important; }' +
          '.op_translation_textbg { background: none !important; }' +
          '.tag-wrapper_1sGop { display: flex !important; justify-content: center !important; width: 100% !important; max-width: 900px !important; margin: 0 auto !important; padding: 0 !important; }' +
          '.tag-scroll_3EMBO { display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 5px !important; max-width: 100% !important; }' +

          // (* REVISED *) 对齐底部的相关搜索和翻页栏
          'body.double-column #rs, body.double-column #page { max-width: 1400px !important; margin: 20px auto !important; padding: 0 20px !important; box-sizing: border-box !important; }' +
          'body.double-column #rs > div, body.double-column #page > div { margin-left: 0 !important; margin-right: auto !important; }';

    GM_addStyle(
        '.gm-official-hint { position: absolute; left: 5px; bottom: 5px; padding: 6px 12px !important; background: #4e6ef2 !important; color: white !important; border-radius: 4px !important; font-size: 13px !important; box-shadow: 0 2px 4px rgba(0,0,0,0.2); z-index: 1; }' +
        '#content_left > .c-container:first-child, #content_left > .result:first-child { position: relative; padding-bottom: 30px !important; }'
    );
    // ==============================================
    // 核心执行函数
    // ==============================================
    const runModifications = () => {
        try {
            if (window.location.pathname === '/') {
                const homepageStyles =
                      '#form, #s_form, .s_btn_wr, .s_ipt_wr, .fm, .ai-input, .s-center-box, #s_main, #s_new_search_guide, #bottom_layer, #bottom_space { display: none !important; }' +
                      '#lg, #lg img { display: block !important; opacity: 1 !important; visibility: visible !important; }' +
                      '.gm-search-container { position: absolute; top: 220px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }';
                GM_addStyle(commonStyles + homepageStyles);
                if (!document.querySelector('.gm-search-container')) {
                    document.body.insertAdjacentHTML('beforeend', customSearchBoxHTML);
                    document.querySelector('.gm-search-input')?.focus();
                    attachEventListeners();
                }
            }
            else if (window.location.pathname === '/s') {
                const resultsPageStyles =
                      '#content_left > div[style*="display:block !important"], #content_left > div[data-ec-ad-type], div[tpl="new_baikan_index"], [tpl="wenda_generate"], .ai-entry.cos-space-mb-xs, .result-op.c-container.new-pmd[tpl="ai_index"], .result-op[tpl="wenda_generate"], div[m-name^="mirror-san/app/wenda_generate"], div[tpl="ai_ask"] { display: none !important; }' +
                      '#s_form, #u { display: none !important; }' +
                      'div[tpl="new_baikan_index"], ' +
                      '#head { height: 60px !important; display: flex; align-items: center; justify-content: center; background: #fff !important; border-bottom: 1px solid #e4e7ed !important; transition: background-color 0.3s, border-color 0.3s; }' +
                      '#container { padding-top: 10px !important; }' +
                      '#s_tab { width: fit-content !important; margin-left: auto !important; margin-right: auto !important; padding-left: 0 !important; }' +
                      '#s_tab .s-tab-item { margin-left: 12px !important; margin-right: 12px !important; }' +
                      '.gm-search-container { display: flex; margin: 0 auto; justify-content: center; }' +
                      '.tag-container_ksKXH, .wrapper_l .tag-wrapper_1sGop { width: fit-content; margin: 0px auto !important; position: relative !important; top: unset !important; bottom: unset !important; }' +

                      // 控制按钮通用样式
                      '.gm-control-button { position: fixed; bottom: 20px; width: 48px; height: 48px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 50%; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 10000; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35); transition: all 0.3s cubic-bezier(.25,.8,.25,1) !important; overflow: hidden; }' +
                      '.gm-control-button::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%); opacity: 0; transition: opacity 0.3s ease; }' +
                      '.gm-control-button:hover { transform: scale(1.1) rotate(5deg); box-shadow: 0 6px 18px rgba(102, 126, 234, 0.5); }' +
                      '.gm-control-button:hover::before { opacity: 1; }' +
                      '.gm-control-button:active { transform: scale(1.02); box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4); }' +

                      // 设置按钮
                      '#settings-toggle { left: 20px; }' +
                      '.settings-icon { width: 22px; height: 22px; transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2)); }' +
                      '.settings-icon svg { width: 100%; height: 100%; fill: #ffffff; }' +
                      '#settings-toggle:hover .settings-icon { transform: rotate(120deg) scale(1.08); }' +

                      // 返回顶部按钮
                      '#back-to-top { right: 20px; opacity: 0; visibility: hidden; transition: all 0.3s cubic-bezier(.25,.8,.25,1) !important; }' +
                      '#back-to-top.show { opacity: 1; visibility: visible; }' +
                      '.back-to-top-icon { width: 22px; height: 22px; transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2)); }' +
                      '.back-to-top-icon svg { width: 100%; height: 100%; fill: #ffffff; }' +
                      '#back-to-top:hover .back-to-top-icon { transform: translateY(-4px) scale(1.08); animation: bounce 0.6s ease-in-out infinite; }' +
                      '@keyframes bounce { 0%, 100% { transform: translateY(-4px) scale(1.08); } 50% { transform: translateY(-6px) scale(1.08); } }' +

                      // 设置面板
                      '#settings-panel { position: fixed; bottom: 76px; left: 20px; background: #fff; border-radius: 12px; box-shadow: 0 8px 28px rgba(0,0,0,0.15); padding: 10px; z-index: 10001; opacity: 0; visibility: hidden; transform: translateY(15px) scale(0.9); transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); min-width: 160px; backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); }' +
                      '#settings-panel::before { content: ""; position: absolute; top: -6px; left: 18px; width: 12px; height: 12px; background: #fff; transform: rotate(45deg); border-left: 1px solid rgba(0,0,0,0.05); border-top: 1px solid rgba(0,0,0,0.05); }' +
                      '#settings-panel.show { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }' +

                      // 设置项
                      '.settings-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); user-select: none; position: relative; overflow: hidden; }' +
                      '.settings-item::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%); opacity: 0; transition: opacity 0.25s ease; }' +
                      '.settings-item:hover { background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%); transform: translateX(2px); }' +
                      '.settings-item:hover::before { opacity: 1; }' +
                      '.settings-item-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #202124; font-weight: 500; z-index: 1; }' +
                      '.settings-item-icon { width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; transition: transform 0.25s ease; }' +
                      '.settings-item:hover .settings-item-icon { transform: scale(1.1) rotate(5deg); }' +
                      '.settings-item-icon svg { width: 100%; height: 100%; }' +

                      // 开关按钮
                      '.toggle-switch { position: relative; width: 38px; height: 22px; background: #dadce0; border-radius: 11px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); flex-shrink: 0; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1); }' +
                      '.toggle-switch::after { content: ""; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%); border-radius: 50%; transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); box-shadow: 0 2px 4px rgba(0,0,0,0.2); }' +
                      '.toggle-switch.active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); box-shadow: inset 0 1px 3px rgba(0,0,0,0.15), 0 0 12px rgba(102, 126, 234, 0.35); }' +
                      '.toggle-switch.active::after { transform: translateX(16px); box-shadow: 0 2px 6px rgba(0,0,0,0.3); }' +

                      // 分隔线
                      '.settings-divider { height: 1px; background: linear-gradient(90deg, transparent 0%, #e8eaed 50%, transparent 100%); margin: 6px 0; }' +

                      // 深色模式图标
                      '.icon-dark-mode { width: 16px; height: 16px; }' +
                      '.icon-dark-mode svg { fill: #5f6368; transition: fill 0.25s ease; }' +
                      '.settings-item:hover .icon-dark-mode svg { fill: #667eea; }' +

                      // 布局图标
                      '.icon-layout { width: 16px; height: 16px; }' +
                      '.icon-layout svg { fill: #5f6368; stroke: #5f6368; transition: all 0.25s ease; }' +
                      '.settings-item:hover .icon-layout svg { fill: #667eea; stroke: #667eea; }' +

                      // 深色模式下的样式
                      'body.dark-mode .gm-control-button { background-color: #3c4043; }' +
                      'body.dark-mode .gm-control-button:hover { background-color: #4d5154; }' +
                      'body.dark-mode .settings-icon svg { fill: #e8eaed; }' +
                      'body.dark-mode #settings-panel { background: #292a2d; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }' +
                      'body.dark-mode .settings-item { color: #e8eaed; }' +
                      'body.dark-mode .settings-item:hover { background: #3c4043; }' +
                      'body.dark-mode .settings-item-label { color: #e8eaed; }' +
                      'body.dark-mode .settings-divider { background: #3c4043; }' +
                      'body.dark-mode .icon-dark-mode svg, body.dark-mode .icon-layout svg { fill: #e8eaed; stroke: #e8eaed; }' +
                      'body.dark-mode .toggle-switch { background: #5f6368; }' +

                      // 深色模式核心样式
                      'body.dark-mode { background-color: #1a1a1a !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode #head { background: #252525 !important; border-bottom: 1px solid #333 !important; }' +
                      'body.dark-mode .gm-search-input { background: #333; border-color: #555 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .c-container, body.dark-mode .result-op, body.dark-mode .result[tpl="soft"], body.dark-mode div[class*="_aladdin"] { background-color: #252525 !important; border: 1px solid #333 !important; border-radius: 8px; padding: 15px; }' +
                      'body.dark-mode .c-container > .t.c-title, body.dark-mode .tags_2yHYj, body.dark-mode .cos-tabs.cos-tabs-bar .cos-tabs-header, body.dark-mode .tag-container_ksKXH, body.dark-mode .wrapper_l .tag-wrapper_1sGop { background-color: transparent !important; }' +
                      'body.dark-mode #content_left a, body.dark-mode #content_left h3[class*="title"], body.dark-mode #content_left h3[class*="title"] *, body.dark-mode #content_left .op-soft-title, body.dark-mode #content_left .op-soft-title *, body.dark-mode .tag-container_ksKXH a, body.dark-mode .wrapper_l .tag-wrapper_1sGop a { color: #8ab4f8 !important; text-decoration: none !important; background-color: transparent !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode #content_left a:hover { text-decoration: underline !important; }' +
                      'body.dark-mode .c-abstract, body.dark-mode .c-abstract *, body.dark-mode .c-span-last, body.dark-mode .summary-text_560AW, body.dark-mode .summary-text_560AW *, body.dark-mode #content_left em, body.dark-mode .new-pmd .c-color-text, body.dark-mode .cu-color-text, body.dark-mode .content-summary_2vT1Z .summary_7f0uR, body.dark-mode .cos-text-body, body.dark-mode .orientation-title-wrapper_YgpKw .orientation-title_50ct8, body.dark-mode .pc_5KjyO .text_4wMIj, body.dark-mode .pc_ZVQ8P .title_6sD3p, body.dark-mode ._group-title_klgk1_34 { color: #e8e6e3 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode #content_left em { font-style: italic !important; }' +
                      'body.dark-mode .op-soft-info-text, body.dark-mode .c-showurl, body.dark-mode .c-showurl *, body.dark-mode .cosc-source-text, body.dark-mode .cos-color-text-minor, body.dark-mode .op_translation_usertip, body.dark-mode .fy-dictwisenew-tip_79GW0, body.dark-mode .cos-color-text-tiny, body.dark-mode .stockStateContainer_bpzBK, body.dark-mode .phrase-text_1u3Zc, body.dark-mode .fy-dictwisenew-tip_1tVMp, body.dark-mode .cos-item-desc_7mnJc { color: #999 !important; text-shadow: none !important; }' +
                      'body.dark-mode div[class*="stock-container"] * { color: #e8e6e3 !important; background: none !important; background-color: transparent !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode div[class*="stock-container"] a { color: #8ab4f8 !important; }' +
                      'body.dark-mode .op-stock-nav-item-selected { background-color: #3a3a3a !important; border-radius: 4px !important; }' +
                      'body.dark-mode #s_tab a, body.dark-mode #s_tab span { color: #ccc !important; text-decoration: none !important; text-shadow: none !important; }' +
                      'body.dark-mode #s_tab .s-tab-item.current span { color: #fff !important; }' +
                      'body.dark-mode #s_tab .s-tab-item.current { border-bottom-color: #4e6ef2 !important; }' +
                      'body.dark-mode #page a, body.dark-mode #page strong { background-color: #333 !important; border: 1px solid #555 !important; color: #e8e3e3 !important; text-shadow: none !important; }' +
                      'body.dark-mode #page strong, body.dark-mode #page a.n:hover { background-color: #4e6ef2 !important; color: #fff !important; border-color: #4e6ef2 !important; }' +
                      'body.dark-mode #dark-mode-toggle { background-color: #3c4043; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); }' +
                      'body.dark-mode #dark-mode-toggle:hover { background-color: #4d5154; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5); }' +
                      'body.dark-mode .dark-mode-icon-sun { opacity: 0; transform: scale(0.5) rotate(90deg); }' +
                      'body.dark-mode .dark-mode-icon-moon { opacity: 1; transform: scale(1) rotate(0deg); box-shadow: inset 8px -8px 0 0 #e8eaed; }' +
                      'body.dark-mode .text-con_6ko8Y *, body.dark-mode .common-content_6I4X7, body.dark-mode .common-content_6I4X7 *, body.dark-mode .common-text_4MwRe, body.dark-mode .bg_75N1H, body.dark-mode .marklang-paragraph, body.dark-mode .item-text_1uePL, body.dark-mode .detail-text_6bA6P, body.dark-mode .item-num_13Q8D, body.dark-mode .scroll-box_2RZdL .week-box_5twsY .week-item_4zjYh .value_1wQkq, body.dark-mode .pc-sub-title_eKXM1 { color: #e8e6e3 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode .words-text_5Ps7D, body.dark-mode .words-text_5Ps7D span, body.dark-mode .cos-search-link-text, body.dark-mode .cos-icon-research, body.dark-mode .cos-more-link-text, body.dark-mode .cos-tabs-header .cos-tab, body.dark-mode .detail-underline_7dWH2, body.dark-mode .detail-icon_3mni6 i { color: #8ab4f8 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode .common-text_2R17p.cos-font-medium, body.dark-mode object.cos-line-clamp-2 .mean-text_4MwRe { color: #e8e6e3 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +

                      // 标签和按钮
                      'body.dark-mode .tabContainer_4bRe9 { background: transparent !important; border-bottom: 1px solid #444 !important; }' +
                      'body.dark-mode .tabItem_14YyZ span, body.dark-mode .tabItem_14YyZ .cos-icon { color: #999 !important; }' +
                      'body.dark-mode .tabItem_14YyZ.active_2sYvR span, body.dark-mode .tabItem_14YyZ.active_2sYvR .cos-icon { color: #fff !important; }' +
                      'body.dark-mode .tabItem_14YyZ.active_2sYvR { border-bottom: 2px solid #4e6ef2 !important; background-color: #3c4043 !important; border-radius: 6px !important; }' +
                      'body.dark-mode .item_uMLQg .number_7sHfk, body.dark-mode .item_uMLQg .desc_1V5he, body.dark-mode .item_uMLQg .red_e7rrn .number_7sHfk, body.dark-mode .item_uMLQg .red_e7rrn .desc_1V5he, body.dark-mode .item_uMLQg .selected_3I0vG .number_7sHfk, body.dark-mode .item_uMLQg .selected_3I0vG .desc_1V5he { color: #e8e6e3 !important; }' +
                      'body.dark-mode .item_uMLQg .selected_3I0vG { background-color: #3c4043 !important; border-radius: 8px; }' +
                      'body.dark-mode .jrStockColorCommon_5usgg, body.dark-mode .result-label_2twAL, body.dark-mode .result-content_4C7SO, body.dark-mode .cos-link span, body.dark-mode .cos-input-box, body.dark-mode .cos-input-box::placeholder, body.dark-mode .c-fwb.cu-font-bold { color: #e8e6e3 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      '.cos-tabs.cos-tabs-bar .cos-tab { border-radius: var(--cos-rounded-sm) !important; box-sizing: border-box !important; }' +
                      '.new-pmd.c-container, .new-pmd .c-container { color: #333 !important; word-wrap: break-word !important; word-break: break-all !important; }' +
                      'body.dark-mode .new-pmd.c-container, body.dark-mode .new-pmd .c-container, body.dark-mode .new-pmd .c-color-t { color: #ddd !important; }' +
                      'body.dark-mode div[tpl="fy_sg_dictwisenew_san"] .cosc-card-content-border::after { border: none !important; }' +

                      // 日历控件
                      'body.dark-mode .footer_3iz2Q { background-color: #252525 !important; padding: 16px !important; border-radius: 0 0 8px 8px !important; }' +
                      'body.dark-mode .content_2YLYk { background-color: #939090 !important; }' +
                      'body.dark-mode .more_4Wd1Y { background-color: #939090 !important; }' +
                      'body.dark-mode .more_4Wd1Y:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode .header_2JJaR { background-color: #252525 !important; padding: 8px !important; border-radius: 8px 8px 0 0 !important; }' +
                      'body.dark-mode ._select-entry_1svrl_48, body.dark-mode .header-btn_68kgy { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode ._select-entry_1svrl_48 span, body.dark-mode ._select-entry_1svrl_48 i { color: #e8e6e3 !important; }' +
                      'body.dark-mode .calendar-prev-month_mlSD9, body.dark-mode .calendar-next-month_67Qbg { color: #e8e6e3 !important; }' +
                      'body.dark-mode ._bg-header_1ml43_46 { background: #252525 !important; }' +
                      'body.dark-mode ._horizontal-gradient_1ml43_56, body.dark-mode ._radial-gradient-box_1ml43_100, body.dark-mode ._border-layer_1ml43_64, body.dark-mode ._vertical-gradient_1ml43_197 { display: none !important; }' +
                      'body.dark-mode .date_1NCuX, body.dark-mode .left_1rsjT div, body.dark-mode .text_1aZG9, body.dark-mode .content_2YLYk > div:last-child, body.dark-mode .content_2YLYk .cos-icon { color: #0c0c0c !important; }' +
                      'body.dark-mode .tag_1vuJL.primary_6QEFO { background-color: #0c0c0c !important; color: #8ab4f8 !important; }' +
                      'body.dark-mode .tag_1vuJL.gray_4CByt { background-color: #0c0c0c !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .divider_2iIet { border-bottom-color: #0c0c0c !important; }' +
                      'body.dark-mode .week_4Dpla .cos-col { color: #e8e6e3 !important; }' +
                      'body.dark-mode .week_4Dpla .cu-color-red { color: #ff8a80 !important; }' +
                      'body.dark-mode .sc-popup._popup_65wrg_1 { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; }' +
                      'body.dark-mode ._selectItem_1svrl_23 { color: #e8e6e3 !important; }' +
                      'body.dark-mode ._selectItem_1svrl_23:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode ._selectItem_1svrl_23._selected_1svrl_14 { background-color: #4e6ef2 !important; color: #ffffff !important; }' +

                      // 词典卡片
                      'body.dark-mode .common-text_2R17p { color: #e8e6e3 !important; }' +
                      'body.dark-mode .common-content_6bdEK .cos-tag { background-color: #3c4043 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .orginal-bg_5BENF, body.dark-mode .orginal-bg_7DUYv { background-color: #3c4043 !important; border-radius: 6px !important; }' +
                      'body.dark-mode .orginal-tip_2KtVB, body.dark-mode .orginal-txt_3dDqw, body.dark-mode .orginal-tip_6LLO4, body.dark-mode .orginal-txt_7mXZW { color: #e8e6e3 !important; }' +
                      'body.dark-mode .orginal-bg_5BENF svg, body.dark-mode .audio-wrap_5VmPZ svg { fill: #e8e6e3 !important; }' +
                      'body.dark-mode .exam-tabs_rufRu .cos-tabs-header-container, body.dark-mode .exam-tabs_G4cbw .cos-tabs-header-container { background-color: #3c4043 !important; background-image: none !important; }' +
                      'body.dark-mode .exam-tabs_G4cbw .cos-tab { color: #ccc !important; }' +
                      'body.dark-mode .exam-tabs_G4cbw .cos-tab-active { color: #fff !important; background-color: #4d5154 !important; border-radius: 6px !important; }' +
                      'body.dark-mode .jindu_7EgZt { background-color: #555 !important; }' +
                      'body.dark-mode .jindu-light_1fvAY { background-color: #4e6ef2 !important; }' +
                      'body.dark-mode .num_57XJn { color: #ccc !important; }' +
                      'body.dark-mode .dict-link_tDRnr .part-name_4zPck, body.dark-mode .dict-link_tDRnr .mean-text_md00R { color: #e8e6e3 !important; }' +

                      // 翻译卡片
                      'body.dark-mode .op_translation_lagfrom, body.dark-mode .op_translation_lagto { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; box-shadow: 0 2px 10px 0 rgba(0,0,0,.3) !important; }' +
                      'body.dark-mode .op_translation_text, body.dark-mode .op_translation_result, body.dark-mode .op_translation_title, body.dark-mode .op_translation_usertip, body.dark-mode .op_translation_src, body.dark-mode .op_translation_dst { color: #e8e6e3 !important; text-shadow: 0 0 2px rgba(0,0,0,0.5) !important; }' +
                      'body.dark-mode .words-text_5Dlhx span, body.dark-mode .common-text_e22jW, body.dark-mode .fy-dictwisenew-liju-cont_1wU6K *, body.dark-mode .phrase-text_ZmQpU, body.dark-mode .tab-con-head_7gCd7, body.dark-mode .star-text_5tiOq, body.dark-mode .text_5Ce9G, body.dark-mode .title_54JCh, body.dark-mode .video-title_1PCJ2, body.dark-mode .daoliu-con_3XOTP a { color: #e8e6e3 !important; }' +
                      'body.dark-mode .cosc-card-shadow::after, .pc-fresh-smooth .cosc-card-shadow::after { display: none !important; }' +

                      // 标签导航栏
                      'body.dark-mode #s_tab_inner { display: flex !important; align-items: center !important; flex-wrap: nowrap !important; gap: 4px !important; padding: 8px 0 !important; width: 100% !important; justify-content: center !important; }' +
                      'body.dark-mode .s_tab_inner .s-tab-item, body.dark-mode .s_tab_inner .cur-tab { display: inline-flex !important; align-items: center !important; justify-content: center !important; vertical-align: middle !important; height: 30px !important; line-height: 32px !important; padding: 0 1px !important; margin: 0 2px !important; }' +
                      'body.dark-mode .s_tab_inner .s-tab-item img, body.dark-mode .s_tab_inner .cur-tab img { display: inline-block !important; vertical-align: middle !important; margin-right: 10px !important; width: 16px !important; height: 16px !important; object-fit: contain !important; }' +
                      'body.dark-mode .s_tab_inner .s-tab-item span, body.dark-mode .s_tab_inner .cur-tab { display: inline-block !important; vertical-align: middle !important; white-space: nowrap !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .s_tab_inner .s-tab-filter { display: inline-flex !important; align-items: center !important; margin-left: 6px !important; }' +

                      // 按钮组和输入框
                      'body.dark-mode ._button-group-col_1t6ud_13 { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; }' +
                      'body.dark-mode ._button-group-item_1t6ud_18 { color: #e8e6e3 !important; background-color: transparent !important; }' +
                      'body.dark-mode ._button-group-col_1t6ud_13:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode .flexible-marker-red { color: #ff8a80 !important; background-color: rgba(255, 138, 128, 0.2) !important; }' +
                      'body.dark-mode .cos-item-desc_7mnJc .cos-divider { border-bottom-color: #3c4043 !important; }' +
                      'body.dark-mode ._tabs-nav-wrapper_1n2to_4 { background-color: #3c4043 !important; }' +
                      'body.dark-mode .input-area_1J3Qm { background-color: #3c4043 !important; border-color: #5f6368 !important; }' +
                      'body.dark-mode .input-area_1J3Qm .cos-input-box { background-color: transparent !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .input-area_1J3Qm .cos-input-box::placeholder { color: #aaa !important; }' +
                      'body.dark-mode .input-submit-button_3paYP { background-color: #4e6ef2 !important; color: #ffffff !important; border: none !important; }' +
                      'body.dark-mode .text-area-box_4e4nT { background-color: #3c4043 !important; border-radius: 8px !important; }' +
                      'body.dark-mode .text-area_5EkLk { background-color: transparent !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .text-area_5EkLk::placeholder { color: #aaa !important; }' +
                      'body.dark-mode .publish-btn_5BhsJ { background-color: #4e6ef2 !important; color: #ffffff !important; border-radius: 8px !important; }' +
                      'body.dark-mode .see-more-content_2Bljh { background-color: #3c4043 !important; color: #e8e6e3 !important; border-radius: 6px !important; }' +

                      // 百科卡片
                      'body.dark-mode .c-group-wrapper { background: transparent !important; }' +
                      'body.dark-mode ._content-border_1ml43_4, body.dark-mode ._content-border_1ml43_4::before, body.dark-mode ._content-border_1ml43_4::after { border: none !important; box-shadow: none !important; }' +
                      'body.dark-mode .content_309tE, body.dark-mode ._content_1ml43_4 { background-color: #252525 !important; }' +
                      'body.dark-mode .title-wrapper_XLSiK span, body.dark-mode .sub-title_1i3V4 span, body.dark-mode .sc-paragraph, body.dark-mode .icon-text_4yDnQ { color: #e8e6e3 !important; }' +
                      'body.dark-mode .attribute-item_3r4Kz { background-color: #3c4043 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .pc-tag_2Nde8 { background-color: #3f51b5 !important; color: #fff !important; }' +
                      'body.dark-mode .button-wrapper_1q1Ke, body.dark-mode .button_5TLOW { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; }' +
                      'body.dark-mode .button-wrapper_1q1Ke div, body.dark-mode .button_5TLOW span { color: #e8e6e3 !important; }' +
                      'body.dark-mode .button-wrapper_1q1Ke:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode .group-title_4Houf span { color: #e8e6e3 !important; }' +
                      'body.dark-mode .capsule_1g0n7 { background-color: rgba(0,0,0,0.5) !important; color: #fff !important; }' +
                      'body.dark-mode .text_2db6I span { color: #e8e6e3 !important; }' +
                      'body.dark-mode .line_7aHFC { background-color: #5f6368 !important; }' +
                      'body.dark-mode .achievement_FrrQd { background-color: #3c4043 !important; }' +
                      'body.dark-mode .achievement_FrrQd .cos-color-text, body.dark-mode .achievement_FrrQd .achievement-icon_4bWKk { color: #e8e6e3 !important; }' +
                      'body.dark-mode .achievement_FrrQd svg path { fill: #e8e6e3 !important; }' +
                      'body.dark-mode .cos-tabs-header .cos-tab { background-color: #3c4043 !important; border-radius: 16px !important; margin: 0 4px !important; }' +
                      'body.dark-mode .tag-item_2blKp { color: #e8e6e3 !important; padding: 4px 12px !important; }' +
                      'body.dark-mode .cos-tabs-header .cos-tab:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode .cos-tabs-right-arrow i { color: #e8e6e3 !important; }' +
                      'body.dark-mode .avatar-p_6jWfg.cos-color-text { color: #e8e6e3 !important; }' +
                      'body.dark-mode .avatar-subTitle_6Gcsc { color: #aaa !important; }' +
                      'body.dark-mode .more-btn_1tnGY { background-color: #3c4043 !important; border-radius: 8px !important; }' +
                      'body.dark-mode .more-btn_1tnGY .cos-more-link-text, body.dark-mode .more-btn_1tnGY .cos-icon-right { color: #8ab4f8 !important; }' +
                      'body.dark-mode .interaction_66WRZ, body.dark-mode .baike-slink-wrapper_7k8vl, body.dark-mode .baike-wrapper_6AORN { background-color: #252525 !important; }' +
                      '.pc-fresh-wrapper-ext .new-pmd.c-container { width: 100% !important; max-width: 800px !important; }' +
                      '.c-group-wrapper, div[tpl*="baike"], div[tpl="baike_san"], div[srcid*="baike"], .new-pmd[data-module="baike"], div[data-module="baike"] { width: 100% !important; max-width: 800px !important; margin: 0 auto 25px auto !important; padding: 0 !important; border-radius: 10px !important; box-shadow: 0 3px 10px rgba(0,0,0,0.08) !important; background-color: #fff !important; transition: all 0.3s ease !important; box-sizing: border-box !important; overflow: hidden !important; }' +
                      '.c-group-wrapper .c-group-inner, .c-group-wrapper ._content_1ml43_4, .c-group-wrapper .content_309tE, div[tpl*="baike"] .c-group-inner, div[tpl*="baike"] ._content_1ml43_4 { width: 100% !important; max-width: none !important; padding: 25px !important; margin: 0 !important; box-sizing: border-box !important; }' +
                      '.c-group-wrapper ._bg-header_1ml43_46, ._bg-header_1ml43_46 { width: 100% !important; margin: 0 !important; padding: 25px 25px 0 25px !important; }' +
                      '.c-group-wrapper .title-wrapper_XLSiK, .c-group-wrapper .sub-title_1i3V4, .c-group-wrapper .sc-paragraph { padding-left: 0 !important; padding-right: 0 !important; }' +
                      '.c-group-wrapper .button-wrapper_1q1Ke, .c-group-wrapper .footer_3iz2Q { margin: 0 !important; width: 100% !important; }' +
                      '.c-group-wrapper .group-title_4Houf { padding: 15px 25px !important; margin: 0 !important; }' +
                      '.c-group-wrapper ._horizontal-gradient_1ml43_56, .c-group-wrapper ._radial-gradient-box_1ml43_100, .c-group-wrapper ._border-layer_1ml43_64, .c-group-wrapper ._vertical-gradient_1ml43_197 { display: none !important; }' +
                      '.c-group-wrapper:hover, div[tpl*="baike"]:hover { box-shadow: 0 6px 15px rgba(0,0,0,0.12) !important; transform: translateY(-3px) !important; }' +
                      'div[class*="c-group-wrapper"], .c-container.c-group-wrapper { width: 100% !important; max-width: 800px !important; margin-left: auto !important; margin-right: auto !important; }' +
                      'body.dark-mode .c-group-wrapper, body.dark-mode div[tpl*="baike"] { background-color: #252525 !important; border: 1px solid #333 !important; }' +
                      'body.dark-mode .c-group-wrapper ._bg-header_1ml43_46, body.dark-mode ._bg-header_1ml43_46, body.dark-mode .c-group-wrapper .content_309tE, body.dark-mode .c-group-wrapper ._content_1ml43_4 { background-color: #252525 !important; }' +
                      '.pc-fresh-smooth .c-group-wrapper::after, .pc-fresh-smooth .new-pmd .c-border::after { display: none !important; }' +

                      // 其他组件
                      'body.dark-mode .scroll-box_2RZdL .tips_33agN { color: #e8e6e3 !important; }' +
                      'body.dark-mode .selectorContainer_5CicL { background-color: #3c4043 !important; border: 1px solid #5f6368 !important; border-radius: 6px !important; }' +
                      'body.dark-mode .selectItem_1bUAj { color: #e8e6e3 !important; }' +
                      'body.dark-mode .selectItem_1bUAj:hover { background-color: #4d5154 !important; }' +
                      'body.dark-mode .pc-rs-upgrade_3SRoo .rs-link_2DE3Q { background: #3c4043 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .pc-rs-upgrade_3SRoo .rs-link_2DE3Q:hover { background: #4d5154 !important; }' +
                      'body.dark-mode .foot-container_2X1Nt, body.dark-mode .pc-fresh-wrapper .page_2muyV .page-inner_2jZi2, body.dark-mode #page { background-color: transparent !important; }' +
                      'body.dark-mode .orientation-title-wrapper_YgpKw { background-color: transparent !important; }' +
                      'body.dark-mode .pc-fresh-title-con ._paragraph_klgk1_2, body.dark-mode .pc_Al2N0 .lineheight-normal_1msvK { color: #000 !important; }' +
                      'body.dark-mode .short-answer_bpGXV { color: #e8e6e3 !important; }' +

                      'body.dark-mode .cos-select-option-text { color: #e8e6e3 !important; }' +
                      'body.dark-mode .cos-popover { background-color: #3c4043 !important; color: #e8e6e3 !important; border: 1px solid #5f6368 !important; }' +
                      'body.dark-mode .cos-select-option:hover { background-color: #5f6368 !important; }' +
                      'body.dark-mode .cos-select-entry-placeholder, body.dark-mode .cos-select-entry-text { color: #e8e6e3 !important; }' +
                      '.cu-border._content-border_1q9is_4::after { display: none !important; }' +
                      'body.dark-mode .cos-tag { background-color: #3c4043 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode .title_7oZ5i { color: #e8e6e3 !important; }' +
                      'body.dark-mode .cos-more-link-line .cos-more-link-container, body.dark-mode .cos-more-link-subtle .cos-more-link-container { border-color: #5f6368 !important; background-color: #3c4043 !important; color: #e8e6e3 !important; }' +

                      '.index-quotation-list_1qZl1 .scroll-page_1w5Lc .scroll-item_4u9LE::after { display: none !important; }' +
                      '.border-module-container_3OL9k::after { display: none !important; }' +
                      'body.dark-mode [data-module="bottom-bar"] button { background: #3c4043 !important; border: 1px solid #5f6368 !important; color: #e8e6e3 !important; }' +
                      'body.dark-mode [data-module="bottom-bar"] button * { color: #e8e6e3 !important; }' +
                      'body.dark-mode .hot-rank_5h8zn .hot-rank-box_1fRyO .hot-rank-list_2O6wP .hot-rank-item_6jERB .info_JbXg3 .name_6ggHn { color: #e8e6e3 !important; }' +
                      '.pc-fresh-wrapper .page_2muyV .page-inner_2jZi2 { width: 100% !important; margin: 0 auto !important; padding-left: 0 !important; display: flex !important; justify-content: center !important; }' +

                      // 日历卡片样式修正
                      'body.dark-mode .calender-box_3bBIx .calendar-tab_YVB65 .calendar-tab-box_3pHF1 .calendar-tab-content_3SYFq, body.dark-mode .calender-box_3bBIx .calendar-tab_YVB65 .calendar-tab-box_3pHF1 .calendar-tab-content_3SYFq * { color: #e8e6e3 !important; background-color: transparent !important; }' +
                      'body.dark-mode .calendar_1ggIJ .wrap_4tS72 .month-item_4SUiq .month-day_3eicC .month-day-text_2WHEx { color: #e8e6e3 !important; }';

                GM_addStyle(commonStyles + resultsPageStyles);

                const header = document.getElementById('head');
                if (header) { header.innerHTML = customSearchBoxHTML; }
                const query = new URLSearchParams(window.location.search).get('wd');
                if (query) { document.querySelector('.gm-search-input').value = query; }

                attachEventListeners();
                rankOfficialSite();
                setupSettingsMenu();
                processRedirects();
                initMainObserver(); // 初始化主观察器
            }
        } catch (error) {
            console.error('百度样式脚本出现错误:', error);
        } finally {
            if (document.body) { document.body.style.opacity = '1'; }
        }
    };
      // ==============================================
    // 翻页&动态内容监听器
    // ==============================================
    function initMainObserver() {

        // 防止观察器被重复初始化
        if (window.mainObserverAttached) return;
        window.mainObserverAttached = true;

        const observerConfig = {
            childList: true,
            subtree: true
        };

        const mainObserver = new MutationObserver((mutations) => {
            let isSignificantChange = false;
            for (const mutation of mutations) {

                // 我们只关心添加了新节点的变化
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    for (const node of mutation.addedNodes) {

                        // 检查新添加的节点是否是核心内容容器，这是页面切换的强烈信号
                        if (node.nodeType === 1 && (node.id === 'content_left' || (node.querySelector && node.querySelector('#content_left')))) {
                            isSignificantChange = true;
                            break;
                        }
                    }
                }
                if (isSignificantChange) break;
            }

            // 如果发生了页面切换
            if (isSignificantChange) {

                // 停止当前的观察器，防止在处理期间的DOM修改再次触发它，造成无限循环
                mainObserver.disconnect();

                const wrapper = document.getElementById('wrapper');
                if (wrapper) {

                    // 立即隐藏内容，防止闪烁
                    wrapper.style.visibility = 'hidden';
                }

                // 使用一个极短的延迟来重新应用脚本，确保DOM已准备好
                setTimeout(() => {
                    runModifications(); // 重新应用所有样式和功能
                    if (wrapper) {

                        // 恢复内容显示
                        wrapper.style.visibility = 'visible';
                    }

                    // 在所有操作完成后，重新开始观察
                      if(document.body) mainObserver.observe(document.body, observerConfig);
                }, 0);
            }
        });

        // 启动观察器
        if (document.body) {
            mainObserver.observe(document.body, observerConfig);
        }
    }

    // ==============================================
    // 初始化执行
    // ==============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runModifications);
    } else {
        runModifications();
    }

    // ==============================================
    // 辅助函数
    // ==============================================
    function attachEventListeners() {
        const input = document.querySelector('.gm-search-input');
        const button = document.querySelector('.gm-search-button');
        const doSearch = () => {
            const query = input.value.trim();
            if (query) { window.location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query); }
        };
        if(button) button.addEventListener('click', doSearch);
        if(input) input.addEventListener('keydown', (event) => { if (event.key === 'Enter') { doSearch(); } });
    }

    function setupSettingsMenu() {
        if(document.getElementById('settings-toggle')) return;

    // 创建返回顶部按钮
    const backToTopButton = document.createElement('div');
    backToTopButton.id = 'back-to-top';
    backToTopButton.className = 'gm-control-button';
    backToTopButton.title = '返回顶部';
    backToTopButton.innerHTML =
        '<span class="back-to-top-icon">' +
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>' +
        '<path d="M7.41 20.41L12 15.83l4.59 4.58L18 19l-6-6-6 6z"/>' +
        '</svg>' +
        '</span>';

    // 创建设置按钮
    const settingsButton = document.createElement('div');
    settingsButton.id = 'settings-toggle';
    settingsButton.className = 'gm-control-button';
    settingsButton.title = '设置';
    settingsButton.innerHTML =
        '<span class="settings-icon">' +
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>' +
        '</svg>' +
        '</span>';

    // 创建设置面板
    const settingsPanel = document.createElement('div');
    settingsPanel.id = 'settings-panel';
    settingsPanel.innerHTML =
        '<div class="settings-item" id="dark-mode-item">' +
            '<div class="settings-item-label">' +
                '<div class="settings-item-icon icon-dark-mode">' +
                    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3z"/>' +
                    '</svg>' +
                '</div>' +
                '<span>深色模式</span>' +
            '</div>' +
            '<div class="toggle-switch" id="dark-mode-switch"></div>' +
        '</div>' +
        '<div class="settings-divider"></div>' +
        '<div class="settings-item" id="layout-item">' +
            '<div class="settings-item-label">' +
                '<div class="settings-item-icon icon-layout">' +
                    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<rect x="3" y="4" width="8" height="16" rx="1" stroke-width="2"/>' +
                        '<rect x="13" y="4" width="8" height="16" rx="1" stroke-width="2"/>' +
                    '</svg>' +
                '</div>' +
                '<span>双列布局</span>' +
            '</div>' +
            '<div class="toggle-switch" id="layout-switch"></div>' +
        '</div>';


    document.body.appendChild(settingsButton);
    document.body.appendChild(backToTopButton);
    document.body.appendChild(settingsPanel);

        // 返回顶部按钮功能
        const toggleBackToTop = () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        };

        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 切换面板显示
        let isPanelOpen = false;
        settingsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            isPanelOpen = !isPanelOpen;
            settingsPanel.classList.toggle('show', isPanelOpen);
        });

        // 点击其他地方关闭面板
        document.addEventListener('click', (e) => {
            if (!settingsPanel.contains(e.target) && e.target !== settingsButton) {
                isPanelOpen = false;
                settingsPanel.classList.remove('show');
            }
        });

        // 深色模式切换
        const darkModeItem = document.getElementById('dark-mode-item');
        const darkModeSwitch = document.getElementById('dark-mode-switch');
        const updateDarkMode = (isDark) => {
            document.body.classList.toggle('dark-mode', isDark);
            darkModeSwitch.classList.toggle('active', isDark);
        };

        darkModeItem.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            GM_setValue('darkMode', isDark);
            updateDarkMode(isDark);
        });

        // 初始化深色模式
        const savedDarkMode = GM_getValue('darkMode', false);
        updateDarkMode(savedDarkMode);

        // 布局切换
        const layoutItem = document.getElementById('layout-item');
        const layoutSwitch = document.getElementById('layout-switch');
        const updateLayout = (isDouble) => {
            document.body.classList.toggle('single-column', !isDouble);
            document.body.classList.toggle('double-column', isDouble);
            layoutSwitch.classList.toggle('active', isDouble);
        };

        layoutItem.addEventListener('click', () => {
            const isDouble = !document.body.classList.contains('double-column');
            GM_setValue('doubleColumn', isDouble);
            updateLayout(isDouble);
        });

        // 初始化布局
        const savedLayout = GM_getValue('doubleColumn', false);
        updateLayout(savedLayout);
    }

    function rankOfficialSite() {

        // 使用延时确保动态加载的内容已经被渲染
        setTimeout(() => {
            const resultsContainer = document.getElementById('content_left');
            if (!resultsContainer) return;

            const results = Array.from(resultsContainer.children).filter(el => el.matches('.c-container[id], .result[id]'));
            let bestResult = null;
            let topScore = -1;
            const query = new URLSearchParams(window.location.search).get('wd') || '';

            results.forEach((result, index) => {
                let score = 0;
                const linkElement = result.querySelector('h3 a, .t a');
                if (!linkElement) return;

                const href = linkElement.href || '';
                const title = linkElement.textContent || '';

                const isOfficial = result.querySelector('span.suffix-icon_3Ox2w span.tag_6iNm4.www-tag-fill-blue_3n0y3') ||
                    (result.querySelector('span.tag_6iNm4') && result.querySelector('span.tag_6iNm4').textContent.trim() === '官方') ||
                    result.querySelector('[data-is-official="1"]') ||
                    result.querySelector('.c-icon-official');

                if (isOfficial) score += 150;
                if (index === 0) score += 50; // 给第一条结果加分

                try {
                    const domain = new URL(href).hostname.replace('www.', '');
                    if (query && domain.startsWith(query.toLowerCase().replace(/\s/g, ''))) score += 30;
                } catch (e) {}

                if (title.includes('官网') || title.includes('官方')) score += 20;
                if (score > topScore) {
                    topScore = score;
                    bestResult = result;
                }
            });
            if (bestResult && topScore > 100) {
                if (resultsContainer.firstElementChild !== bestResult) {
                    resultsContainer.insertBefore(bestResult, resultsContainer.firstElementChild);
                }

                let hint = bestResult.querySelector('.gm-official-hint');
                if (!hint) {
                    hint = document.createElement('div');
                    hint.className = 'gm-official-hint';
                    bestResult.appendChild(hint);
                }
                hint.textContent = '官方网站结果已置顶';
            }
        }, 500); // 增加延时以等待DOM渲染
    }
})();
