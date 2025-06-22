
javascript:(function(){document.querySelector("#primary-button button").click(); setTimeout(() => {     const data = [...document.querySelectorAll("ytd-transcript-segment-renderer")].map(z => z.innerText);     console.log(data) }, 6000);})();
