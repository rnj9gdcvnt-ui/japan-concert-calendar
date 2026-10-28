const calendarEvents = (window.__CONCERT_EVENT_CHUNKS || [])
  .flat()
  .filter((event) => event.date >= "2026-10-28" && event.date <= "2027-10-28")
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
        status: "CD封入先行受付中（2026-10-21〜11-02）；AIM会員优先抽选已结束",
        source: "https://www.aimyong.net/feature/cosmic_percent",
        ticketPhase: "CD封入先行"
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
