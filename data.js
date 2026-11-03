const vaundyArenaTimes = {
  "2027-08-14": ["17:00", "18:00"], "2027-08-15": ["15:00", "16:00"],
  "2027-08-28": ["17:00", "18:00"], "2027-08-29": ["15:00", "16:00"],
  "2027-09-19": ["17:00", "18:00"], "2027-09-20": ["15:00", "16:00"],
  "2027-09-25": ["17:00", "18:00"], "2027-09-26": ["15:00", "16:00"]
};

const calendarEvents = (window.__CONCERT_EVENT_CHUNKS || [])
  .flat()
  .filter((event) => event.date >= "2026-11-03" && event.date <= "2027-11-03")
  .map((event) => {
    if (event.artist === "YOASOBI" && event.date <= "2026-12-06") {
      return {
        ...event,
        status: "官方一般发售已于2026-10-10开始；余票以来源页面为准",
        source: "https://www.yoasobi-music.jp/news/587488",
        ticketPhase: "一般发售"
      };
    }

    if (event.artist === "あいみょん" && event.date >= "2027-02-06" && event.date <= "2027-04-29") {
      return {
        ...event,
        status: "CD封入先行已于2026-11-02截止；后续抽选以官网公告为准",
        source: "https://www.aimyong.net/feature/cosmic_percent",
        ticketPhase: "一轮结束"
      };
    }

    if (event.artist === "Vaundy" && vaundyArenaTimes[event.date]) {
      const [open, start] = vaundyArenaTimes[event.date];
      return {
        ...event,
        open,
        start,
        status: "ぴあ独占先行已结束；后续票务见官方页",
        source: "https://vaundy.jp/news/detail/11145",
        ticketPhase: "一轮结束"
      };
    }

    return event;
  });

window.CONCERT_DATA = {
  ...(window.__CONCERT_DATA_META || {}),
  events: calendarEvents
};
delete window.__CONCERT_DATA_META;
delete window.__CONCERT_EVENT_CHUNKS;
