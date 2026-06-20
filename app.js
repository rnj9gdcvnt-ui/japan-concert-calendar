(function () {
  const data = window.CONCERT_DATA;
  const events = data.events
    .map((event) => ({ ...event, dateObj: parseDate(event.date) }))
    .sort((a, b) => a.dateObj - b.dateObj || a.artist.localeCompare(b.artist, "ja"));

  const today = parseDate(data.checkedAt);
  let currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const els = {
    summaryLine: document.getElementById("summaryLine"),
    searchInput: document.getElementById("searchInput"),
    artistSelect: document.getElementById("artistSelect"),
    regionSelect: document.getElementById("regionSelect"),
    confidenceSelect: document.getElementById("confidenceSelect"),
    ticketSelect: document.getElementById("ticketSelect"),
    monthTitle: document.getElementById("monthTitle"),
    calendarGrid: document.getElementById("calendarGrid"),
    eventList: document.getElementById("eventList"),
    eventCount: document.getElementById("eventCount"),
    emptyArtists: document.getElementById("emptyArtists"),
    emptyCount: document.getElementById("emptyCount"),
    prevMonth: document.getElementById("prevMonth"),
    nextMonth: document.getElementById("nextMonth"),
    todayBtn: document.getElementById("todayBtn"),
    exportBtn: document.getElementById("exportBtn"),
    heroEventStat: document.getElementById("heroEventStat"),
    heroArtistStat: document.getElementById("heroArtistStat")
  };

  init();

  function init() {
    registerServiceWorker();
    fillSelect(els.artistSelect, ["全部歌手", ...data.artists], "all");
    fillSelect(els.regionSelect, ["全部地区", ...unique(events.map((event) => event.region)).sort()], "all");
    fillSelect(els.ticketSelect, ["全部票务", ...unique(events.map(ticketPhase)).sort()], "all");

    els.summaryLine.textContent = `已核验至 ${data.checkedAt}，当前收录 ${events.length} 场未来/待确认日本及亚洲演出；每条都保留来源和核验等级。`;
    els.heroEventStat.textContent = `${events.length} 场`;
    els.heroArtistStat.textContent = `${data.artists.length} 组歌手`;
    els.emptyCount.textContent = `${data.emptyArtists.length} 组`;
    els.emptyArtists.innerHTML = data.emptyArtists
      .map((item) => `<div class="emptyItem"><strong>${escapeHtml(item.artist)}</strong><span>${escapeHtml(item.note)}</span></div>`)
      .join("");

    [els.searchInput, els.artistSelect, els.regionSelect, els.confidenceSelect, els.ticketSelect].forEach((el) => {
      el.addEventListener("input", render);
    });
    els.prevMonth.addEventListener("click", () => {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
      render();
    });
    els.nextMonth.addEventListener("click", () => {
      currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      render();
    });
    els.todayBtn.addEventListener("click", () => {
      currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      render();
    });
    els.exportBtn.addEventListener("click", exportIcs);

    render();
  }

  function render() {
    const filtered = getFilteredEvents();
    renderMonth(filtered);
    renderList(filtered);
  }

  function getFilteredEvents() {
    const query = els.searchInput.value.trim().toLowerCase();
    const artist = els.artistSelect.value;
    const region = els.regionSelect.value;
    const confidence = els.confidenceSelect.value;
    const ticket = els.ticketSelect.value;

    return events.filter((event) => {
      const phase = ticketPhase(event);
      const text = [event.artist, event.title, event.region, event.city, event.venue, event.status, phase, event.note]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const confidenceMatches =
        confidence === "all" ||
        (confidence === "official" && event.confidence === "official") ||
        (confidence === "review" && event.confidence === "review");

      return (
        (!query || text.includes(query)) &&
        (artist === "all" || event.artist === artist) &&
        (region === "all" || event.region === region) &&
        (ticket === "all" || phase === ticket) &&
        confidenceMatches
      );
    });
  }

  function renderMonth(filtered) {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    els.monthTitle.textContent = `${year}年 ${String(month + 1).padStart(2, "0")}月`;
    els.calendarGrid.innerHTML = "";

    const first = new Date(year, month, 1);
    const start = new Date(year, month, 1 - first.getDay());
    const byDate = groupBy(filtered, (event) => event.date);

    for (let i = 0; i < 42; i += 1) {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const key = formatDate(date);
      const dayEvents = byDate[key] || [];
      const day = document.createElement("div");
      day.className = [
        "day",
        date.getMonth() !== month ? "outside" : "",
        key === data.checkedAt ? "today" : ""
      ]
        .filter(Boolean)
        .join(" ");
      day.innerHTML = `<div class="dayNum"><span>${date.getDate()}</span><span>${dayEvents.length ? dayEvents.length : ""}</span></div>`;

      dayEvents.slice(0, 4).forEach((event) => {
        const link = document.createElement("a");
        link.className = `pill ${event.confidence === "review" ? "review" : ""}`;
        link.href = event.source;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.innerHTML = `
          <strong>${escapeHtml(event.artist)}</strong>
          <span>${escapeHtml(event.region)} · ${escapeHtml(ticketPhase(event))}</span>
        `;
        day.appendChild(link);
      });

      if (dayEvents.length > 4) {
        const more = document.createElement("span");
        more.className = "pill";
        more.textContent = `+${dayEvents.length - 4} more`;
        day.appendChild(more);
      }

      els.calendarGrid.appendChild(day);
    }
  }

  function renderList(filtered) {
    els.eventCount.textContent = `${filtered.length} 场`;
    if (!filtered.length) {
      els.eventList.innerHTML = `<div class="event"><p class="meta">没有匹配的演出。试试放宽筛选。</p></div>`;
      return;
    }

    els.eventList.innerHTML = filtered
      .map((event) => {
        const time = event.start ? `${event.start} 开演${event.open ? ` / ${event.open} 开场` : ""}` : "时间待确认";
        const badge = event.confidence === "official" ? "官方核验" : "需要复查";
        const phase = ticketPhase(event);
        return `
          <article class="event">
            <div class="eventTop">
              <div>
                <h3>${escapeHtml(event.artist)} · ${escapeHtml(event.title)}</h3>
                <p class="meta">${formatHumanDate(event.dateObj)} · ${escapeHtml(time)}</p>
                <p class="meta">${escapeHtml(event.region)} ${escapeHtml(event.city)} · ${escapeHtml(event.venue)}</p>
              </div>
              <div class="statusStack">
                <span class="ticketBadge">${escapeHtml(phase)}</span>
                <span class="tag ${event.confidence}">${badge}</span>
              </div>
            </div>
            <div class="tags">
              <span class="tag">${escapeHtml(event.status || "状态待确认")}</span>
              ${event.note ? `<span class="tag review">${escapeHtml(event.note)}</span>` : ""}
            </div>
            <a class="source" href="${event.source}" target="_blank" rel="noreferrer">打开来源</a>
          </article>
        `;
      })
      .join("");
  }

  function exportIcs() {
    const filtered = getFilteredEvents();
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Japan Concert Calendar//CN"
    ];

    filtered.forEach((event) => {
      const start = event.start ? event.start.replace(":", "") : "1200";
      const endHour = event.start ? String(Math.min(Number(event.start.slice(0, 2)) + 2, 23)).padStart(2, "0") : "14";
      const end = event.start ? `${endHour}${event.start.slice(3, 5)}` : "1400";
      const date = event.date.replaceAll("-", "");
      lines.push(
        "BEGIN:VEVENT",
        `UID:${event.date}-${slug(event.artist)}-${slug(event.venue)}@japan-concert-calendar`,
        `DTSTAMP:${data.checkedAt.replaceAll("-", "")}T000000Z`,
        `DTSTART;TZID=Asia/Tokyo:${date}T${start}00`,
        `DTEND;TZID=Asia/Tokyo:${date}T${end}00`,
        `SUMMARY:${icsEscape(`${event.artist} - ${event.title}`)}`,
        `LOCATION:${icsEscape(`${event.region} ${event.city} ${event.venue}`)}`,
        `DESCRIPTION:${icsEscape(`${ticketPhase(event)}\\n${event.status || ""}\\n来源: ${event.source}\\n核验: ${event.confidence}`)}`,
        "END:VEVENT"
      );
    });

    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "japan-concert-calendar.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  function fillSelect(select, values, allValue) {
    select.innerHTML = values
      .map((value, index) => `<option value="${index === 0 ? allValue : escapeHtml(value)}">${escapeHtml(value)}</option>`)
      .join("");
  }

  function ticketPhase(event) {
    const status = String(event.status || "");
    const title = String(event.title || "");

    if (event.artist === "YOASOBI") return "官方先行";
    if (event.artist === "ヨルシカ") return "一轮结束";
    if (status.includes("結果発表")) return "抽选结果";
    if (/FC|会員|ボクンチ/.test(status)) return "FC抽选";
    if (status.includes("售罄") || status.includes("SOLD OUT")) return "售罄";
    if (status.includes("一般発売") || status.includes("一般发售") || status.includes("公开发售") || status.includes("General On Sale")) return "一般发售";
    if (status.includes("フェス") || status.includes("EVENT")) return "活动票";
    if (status.includes("票务待公布")) return "未开票";
    if (status.includes("亚洲巡演")) return "亚洲巡演";
    if (status.includes("售票信息") || status.includes("e+")) return "售票中";
    if (status.includes("二级") || event.confidence === "review") return "待复查";
    if (status.includes("TOUR") || status.includes("ONE-MAN") || title.includes("TOUR")) return "未开票";
    return "待确认";
  }

  function parseDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function formatHumanDate(date) {
    const weekday = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} 周${weekday}`;
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function groupBy(items, getKey) {
    return items.reduce((acc, item) => {
      const key = getKey(item);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function icsEscape(value) {
    return String(value ?? "")
      .replaceAll("\\", "\\\\")
      .replaceAll(",", "\\,")
      .replaceAll(";", "\\;")
      .replaceAll("\n", "\\n");
  }

  function slug(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "event";
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || location.protocol !== "https:") return;

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
