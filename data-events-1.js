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

const zutomayoHallTourDates = [
  ["2027-01-15", "17:00", "18:00", "広島", "広島", "広島文化学園HBGホール"],
  ["2027-01-18", "17:30", "18:30", "千葉", "市川", "市川市文化会館 大ホール"], ["2027-01-19", "17:30", "18:30", "千葉", "市川", "市川市文化会館 大ホール"],
  ["2027-01-21", "18:00", "19:00", "東京", "八王子", "J:COMホール八王子"], ["2027-01-26", "18:00", "19:00", "東京", "江東", "SGCホール有明"], ["2027-01-27", "18:00", "19:00", "東京", "江東", "SGCホール有明"],
  ["2027-02-06", "17:00", "18:00", "静岡", "富士", "富士市文化会館ロゼシアター"], ["2027-02-15", "18:00", "19:00", "兵庫", "神戸", "神戸国際会館こくさいホール"], ["2027-02-16", "18:00", "19:00", "兵庫", "神戸", "神戸国際会館こくさいホール"], ["2027-02-21", "17:00", "18:00", "大分", "大分", "iichikoグランシアタ"], ["2027-02-23", "18:00", "19:00", "熊本", "熊本", "熊本城ホール メインホール"], ["2027-02-27", "17:00", "18:00", "福島", "いわき", "いわき芸術文化交流館アリオス アルパイン大ホール"],
  ["2027-03-04", "18:00", "19:00", "東京", "江東", "東京ガーデンシアター"], ["2027-03-05", "18:00", "19:00", "東京", "江東", "東京ガーデンシアター"], ["2027-03-13", "17:00", "18:00", "愛媛", "松山", "松山市民会館 大ホール"], ["2027-03-15", "18:00", "19:00", "福岡", "福岡", "福岡サンパレス"], ["2027-03-16", "18:00", "19:00", "山口", "山口", "KDDI維新ホール"], ["2027-03-24", "17:30", "18:30", "愛知", "名古屋", "愛知県芸術劇場 大ホール"], ["2027-03-25", "17:30", "18:30", "愛知", "名古屋", "愛知県芸術劇場 大ホール"], ["2027-03-30", "18:00", "19:00", "石川", "金沢", "金沢歌劇座"], ["2027-03-31", "18:00", "19:00", "石川", "金沢", "金沢歌劇座"],
  ["2027-04-08", "18:00", "19:00", "奈良", "奈良", "なら100年会館 大ホール"], ["2027-04-10", "17:00", "18:00", "岡山", "岡山", "岡山芸術創造劇場 ハレノワ 大劇場"], ["2027-04-11", "16:00", "17:00", "岡山", "岡山", "岡山芸術創造劇場 ハレノワ 大劇場"], ["2027-04-20", "18:00", "19:00", "北海道", "札幌", "札幌文化芸術劇場 hitaru"], ["2027-04-21", "18:00", "19:00", "北海道", "札幌", "札幌文化芸術劇場 hitaru"], ["2027-04-27", "18:00", "19:00", "大阪", "大阪", "フェスティバルホール"], ["2027-04-28", "18:00", "19:00", "大阪", "大阪", "フェスティバルホール"],
  ["2027-05-01", "17:00", "18:00", "東京", "立川", "立川ステージガーデン"], ["2027-05-02", "17:00", "18:00", "東京", "立川", "立川ステージガーデン"], ["2027-05-11", "18:00", "19:00", "宮城", "仙台", "仙台サンプラザホール"], ["2027-05-12", "18:00", "19:00", "宮城", "仙台", "仙台サンプラザホール"], ["2027-05-17", "18:00", "19:00", "神奈川", "川崎", "カルッツかわさき ホール"], ["2027-05-18", "18:00", "19:00", "神奈川", "川崎", "カルッツかわさき ホール"], ["2027-05-22", "17:00", "18:00", "和歌山", "和歌山", "和歌山県民文化会館"], ["2027-05-23", "17:00", "18:00", "和歌山", "和歌山", "和歌山県民文化会館"]
];

window.__CONCERT_EVENT_CHUNKS.push([
  ...zutomayoHallTourDates.map(([date, open, start, region, city, venue]) => ({ artist: "ずっと真夜中でいいのに。", title: "ZUTOMAYO Hall Tour 2027「アピクラ電機」LÚ.NIM.LÀL", date, open, start, region, city, venue, status: "PREMIUM会員二次先行は11/7開始；一般最速先行は11/17開始", ticketPhase: "FC二次先行待开", confidence: "official", source: "https://zutomayo.net/apicula/" })),
  { artist: "XG", title: "XG WORLD TOUR: THE CORE FINAL \"1\"", date: "2027-02-10", open: "16:30", start: "18:30", region: "東京", city: "東京", venue: "東京ドーム", status: "官方先着先行已开始；余票见官方页", ticketPhase: "官方先行", confidence: "official", source: "https://xgalx.com/xg/news/detail.php?id=1135785" },
  { artist: "XG", title: "XG WORLD TOUR: THE CORE FINAL \"7\"", date: "2027-02-11", open: "15:00", start: "17:00", region: "東京", city: "東京", venue: "東京ドーム", status: "官方先着先行已开始；余票见官方页", ticketPhase: "官方先行", confidence: "official", source: "https://xgalx.com/xg/news/detail.php?id=1135785" },
  { artist: "XG", title: "XG WORLD TOUR: THE CORE FINAL \"1\"", date: "2027-02-27", open: "15:00", start: "17:00", region: "大阪", city: "大阪", venue: "京セラドーム大阪", status: "官方先着先行已开始；余票见官方页", ticketPhase: "官方先行", confidence: "official", source: "https://xgalx.com/xg/news/detail.php?id=1135785" },
  { artist: "XG", title: "XG WORLD TOUR: THE CORE FINAL \"7\"", date: "2027-02-28", open: "15:00", start: "17:00", region: "大阪", city: "大阪", venue: "京セラドーム大阪", status: "官方先着先行已开始；余票见官方页", ticketPhase: "官方先行", confidence: "official", source: "https://xgalx.com/xg/news/detail.php?id=1135785" },
  ...[["2026-12-01", "東京", "江東", "SGC HALL ARIAKE"], ["2026-12-02", "東京", "江東", "SGC HALL ARIAKE"], ["2026-12-04", "大阪", "大阪", "Zepp Osaka Bayside"]].map(([date, region, city, venue]) => ({ artist: "Ave Mujica", title: "EVANESCENCE 2026 JAPAN", date, open: "18:00", start: "19:00", region, city, venue, status: date === "2026-12-04" ? "一般发售预计枚数结束；以官方票务为准" : "一般发售中；支持嘉宾出演", ticketPhase: date === "2026-12-04" ? "售罄" : "一般发售", confidence: "official", source: "https://www.creativeman.co.jp/artist/2026/12evanescence/", note: "Ave Mujica为Support Act。" })),
  { artist: "Ave Mujica", title: "Ave Mujica 8th LIVE「Discrimen Fati」", date: "2027-05-29", open: "17:00", start: "18:30", region: "神奈川", city: "横浜", venue: "Kアリーナ横浜", status: "最速先行抽选至12/6；CD初回封入申込券必需", ticketPhase: "最速先行", confidence: "official", source: "https://bang-dream.com/events/avemujica-8th/" },
  { artist: "Ave Mujica", title: "Ave Mujica 8th LIVE「Discrimen Fati」", date: "2027-05-30", open: "16:00", start: "17:30", region: "神奈川", city: "横浜", venue: "Kアリーナ横浜", status: "最速先行抽选至12/6；CD初回封入申込券必需", ticketPhase: "最速先行", confidence: "official", source: "https://bang-dream.com/events/avemujica-8th/" },
  { artist: "MyGO!!!!!", title: "WONDERLIVET 2026", date: "2026-11-21", open: "11:00", start: "12:00", region: "韩国", city: "高阳", venue: "KINTEX HALL 7·8·9·10", status: "音乐节出演；出演时间及票务见主办方", ticketPhase: "活动票", confidence: "official", source: "https://bang-dream.com/events/?artist=mygo", note: "时间为音乐节开场/开演，并非艺人出演时间。" },
  ...[["2027-10-02", "17:00", "18:00", "大阪", "大阪", "大阪城ホール"], ["2027-10-03", "15:00", "16:00", "大阪", "大阪", "大阪城ホール"], ["2027-10-16", "17:00", "18:00", "広島", "広島", "広島グリーンアリーナ"], ["2027-10-17", "15:00", "16:00", "広島", "広島", "広島グリーンアリーナ"], ["2027-10-23", "17:00", "18:00", "新潟", "新潟", "朱鷺メッセ・新潟コンベンションセンター"], ["2027-10-24", "15:00", "16:00", "新潟", "新潟", "朱鷺メッセ・新潟コンベンションセンター"]].map(([date, open, start, region, city, venue]) => ({ artist: "Vaundy", title: "Vaundy JAPAN ARENA TOUR 2027-2028", date, open, start, region, city, venue, status: "ぴあ独占先行已结束；后续票务见官方页", ticketPhase: "一轮结束", confidence: "official", source: "https://vaundy.jp/news/detail/11145" }))
]);
