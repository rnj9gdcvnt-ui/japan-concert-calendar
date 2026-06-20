window.CONCERT_DATA = {
  ...(window.__CONCERT_DATA_META || {}),
  events: (window.__CONCERT_EVENT_CHUNKS || []).flat()
};
delete window.__CONCERT_DATA_META;
delete window.__CONCERT_EVENT_CHUNKS;
