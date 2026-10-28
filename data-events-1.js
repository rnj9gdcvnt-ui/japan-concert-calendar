window.__CONCERT_EVENT_CHUNKS = window.__CONCERT_EVENT_CHUNKS || [];
const newArtistSource = {
  backNumber: "https://backnumber.info/news/detail/400314",
  sakanaction: "https://sakanaction.jp/feature/tour2026-2027",
  aveMujica: "https://bang-dream.com/events/avemujica_7th/",
  mygo: "https://bang-dream.com/events/mygo_9th_hyogo/",
  countdownJapan: "https://countdownjapan.jp/2627/artist/"
};

const sakanactionDates = [
  ["2027-02-20", "17:00", "18:00", "千葉", "船橋", "ららアリーナ 東京ベイ"],
  ["2027-02-21", "16:00", "17:00", "千葉", "船橋", "ららアリーナ 東京ベイ"],
  ["2027-02-23", "16:00", "17:00", "千葉", "船橋", "ららアリーナ 東京ベイ"],
  ["2027-02-27", "17:00", "18:00", "千葉", "船橋", "ららアリーナ 東京ベイ"],
  ["2027-02-28", "16:00", "17:00", "千葉", "船橋", "ららアリーナ 東京ベイ"],
  ["2027-03-06", "17:00", "18:00", "北海道", "札幌", "北海道立総合体育センター 北海きたえーる"],
  ["2027-03-07", "16:00", "17:00", "北海道", "札幌", "北海道立総合体育センター 北海きたえーる"],
  ["2027-03-17", "17:30", "18:30", "兵庫", "神戸", "GLION ARENA KOBE"],
  ["2027-03-18", "17:30", "18:30", "兵庫", "神戸", "GLION ARENA KOBE"],
  ["2027-03-27", "17:00", "18:00", "愛知", "名古屋", "ポートメッセなごや 第一展示館"],
  ["2027-03-28", "16:00", "17:00", "愛知", "名古屋", "ポートメッセなごや 第一展示館"],
  ["2027-04-03", "17:00", "18:00", "香川", "高松", "あなぶきアリーナ香川"],
  ["2027-04-04", "16:00", "17:00", "香川", "高松", "あなぶきアリーナ香川"],
  ["2027-04-17", "17:00", "18:00", "宮城", "仙台", "ゼビオアリーナ仙台"],
  ["2027-04-18", "16:00", "17:00", "宮城", "仙台", "ゼビオアリーナ仙台"],
  ["2027-04-24", "17:00", "18:00", "福井", "越前", "サンドーム福井"],
  ["2027-04-25", "16:00", "17:00", "福井", "越前", "サンドーム福井"],
  ["2027-05-04", "17:00", "18:00", "福岡", "福岡", "マリンメッセ福岡A館"],
  ["2027-05-05", "16:00", "17:00", "福岡", "福岡", "マリンメッセ福岡A館"],
  ["2027-05-08", "17:00", "18:00", "広島", "広島", "広島グリーンアリーナ"],
  ["2027-05-09", "16:00", "17:00", "広島", "広島", "広島グリーンアリーナ"]
];

const backNumberDates = [
  ["2027-09-02", "東京", "東京", "豊洲PIT"],
  ["2027-09-03", "東京", "東京", "豊洲PIT"],
  ["2027-09-10", "北海道", "札幌", "Zepp Sapporo"],
  ["2027-09-11", "北海道", "札幌", "Zepp Sapporo"],
  ["2027-09-24", "大阪", "大阪", "Zepp Osaka Bayside"],
  ["2027-09-25", "大阪", "大阪", "Zepp Osaka Bayside"],
  ["2027-10-09", "山形", "山形", "やまぎん県民ホール"],
  ["2027-10-10", "山形", "山形", "やまぎん県民ホール"],
  ["2027-10-16", "石川", "金沢", "本多の森 北電ホール"],
  ["2027-10-17", "石川", "金沢", "本多の森 北電ホール"]
];

window.__CONCERT_EVENT_CHUNKS.push([
  {
    artist: "Ave Mujica", title: "Ave Mujica 7th LIVE「Virtus」", date: "2026-10-24", open: "17:00", start: "18:30",
    region: "東京", city: "調布", venue: "京王アリーナTOKYO", status: "当日券（見切れ席）先着；配信はDAY2のみ", ticketPhase: "当日券", confidence: "official", source: newArtistSource.aveMujica
  },
  {
    artist: "Ave Mujica", title: "Ave Mujica 7th LIVE「Virtus」", date: "2026-10-25", open: "16:00", start: "17:30",
    region: "東京", city: "調布", venue: "京王アリーナTOKYO", status: "当日券（一般指定席）先着；线上配信券销售至11月1日", ticketPhase: "当日券 / 配信", confidence: "official", source: newArtistSource.aveMujica
  },
  {
    artist: "MyGO!!!!!", title: "MyGO!!!!! 9th LIVE「つなぎ目の向こうに」- 神戸再景編 -", date: "2026-11-14", open: "16:30", start: "18:00",
    region: "兵庫", city: "神戸", venue: "ワールド記念ホール", status: "一般発売中；先着・上限数まで", ticketPhase: "一般发售", confidence: "official", source: newArtistSource.mygo
  },
  {
    artist: "MyGO!!!!!", title: "MyGO!!!!! 9th LIVE「つなぎ目の向こうに」- 神戸再景編 -", date: "2026-11-15", open: "15:30", start: "17:00",
    region: "兵庫", city: "神戸", venue: "ワールド記念ホール", status: "一般発売中；先着・上限数まで", ticketPhase: "一般发售", confidence: "official", source: newArtistSource.mygo
  },
  {
    artist: "MyGO!!!!!", title: "MyGO!!!!! 9th LIVE「つなぎ目の向こうに」- 香港還想編 -", date: "2027-01-03", open: "", start: "19:00",
    region: "香港", city: "香港", venue: "AsiaWorld-Expo, Hall 5", status: "官方已公布；票务详情待后续公告", ticketPhase: "待公布", confidence: "official", source: "https://bang-dream.com/events/mygo_9th_hongkong/"
  },
  {
    artist: "tuki.", title: "COUNTDOWN JAPAN 26/27", date: "2026-12-29", open: "", start: "",
    region: "千葉", city: "千葉", venue: "幕張メッセ 国際展示場1〜11ホール・イベントホール", status: "フェス出演；出演时间待公布", ticketPhase: "活动票", confidence: "official", source: "https://tuki-official.net/contents/schedule"
  },
  {
    artist: "にしな", title: "COUNTDOWN JAPAN 26/27", date: "2026-12-29", open: "", start: "",
    region: "千葉", city: "千葉", venue: "幕張メッセ 国際展示場1〜11ホール・イベントホール", status: "フェス出演；出演时间待公布", ticketPhase: "活动票", confidence: "official", source: newArtistSource.countdownJapan
  },
  {
    artist: "LiSA", title: "COUNTDOWN JAPAN 26/27", date: "2026-12-31", open: "", start: "",
    region: "千葉", city: "千葉", venue: "幕張メッセ 国際展示場1〜11ホール・イベントホール", status: "フェス出演；出演时间待公布", ticketPhase: "活动票", confidence: "official", source: "https://www.sonymusic.co.jp/artist/lisa/info/587622"
  },
  {
    artist: "ずっと真夜中でいいのに。", title: "COUNTDOWN JAPAN 26/27", date: "2026-12-31", open: "", start: "",
    region: "千葉", city: "千葉", venue: "幕張メッセ 国際展示場1〜11ホール・イベントホール", status: "フェス出演；出演时间待公布", ticketPhase: "活动票", confidence: "official", source: newArtistSource.countdownJapan
  },
  ...sakanactionDates.map(([date, open, start, region, city, venue]) => ({
    artist: "サカナクション", title: "SAKANAQUARIUM 2026-2027「透明」", date, open, start, region, city, venue,
    status: "官方公布全场售罄；官方票务交易待公告", ticketPhase: "售罄", confidence: "official", source: newArtistSource.sakanaction
  })),
  ...backNumberDates.map(([date, region, city, venue]) => ({
    artist: "back number", title: "back number fanclub tour 2027「one room party vol.8」", date, open: "", start: "", region, city, venue,
    status: "Gold key会员限定；抽选与售票详情预计11月中旬公布", ticketPhase: "FC限定 / 待公布", confidence: "official", source: newArtistSource.backNumber
  }))
]);
