// const KEY = "96b947a45d33d7dc1c49af3203966408";

// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web

//myKey="99e856575c4cd845ea14233bcd283817"
const KEY = "96b947a45d33d7dc1c49af3203966408";
//getData
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();
  console.log("finished!");

  return data;
};

getData().then((data) => console.log(data));
