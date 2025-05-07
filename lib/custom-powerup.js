(() => {
    let hasRun = false;
    let tries = 0;
    const maxTries = 20;

    const tryRun = () => {
        const quizReady = document.querySelector('[data-block-id="cmad1g2v2000h3b7ynrc8sl2l"]');
        const coverReady = document.querySelector("div.cover__header-content");

        if (quizReady && coverReady && !hasRun) {
            try {
                runCoverUI();
                runQuizUI();
                hasRun = true;
                console.log("✅ PowerUp enhancements applied!");
            } catch (e) {
                console.error("❌ PowerUp error:", e);
            }
        }

        tries++;
        if (!hasRun && tries < maxTries) {
            setTimeout(tryRun, 500);
        }
    };

    tryRun();
})();

// ✅ 封面页美化函数
function runCoverUI() {
    const cover = document.querySelector("div.cover__header-content");
    if (!cover) return;

    cover.style.display = "flex";
    cover.style.flexDirection = "column";
    cover.style.justifyContent = "center";
    cover.style.alignItems = "center";
    cover.style.height = "100vh";
    cover.style.padding = "0";
    cover.style.margin = "0";
    cover.style.maxWidth = "100%";
    cover.style.position = "relative";

    // logo
    const logo = document.createElement("img");
    logo.src = "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746565818/Baillies_Brewery_Logo_Black_zfffkr.png";
    logo.style.width = "120px";
    logo.style.marginBottom = "20px";
    cover.insertBefore(logo, cover.firstChild);

    // beer image
    const beerImg = document.createElement("img");
    beerImg.src = "https://res.cloudinary.com/ddvkbrwvs/image/upload/v1746566274/beer2_hx0bm3.png";
    beerImg.style.position = "absolute";
    beerImg.style.bottom = "0";
    beerImg.style.left = "50%";
    beerImg.style.transform = "translateX(-50%)";
    beerImg.style.width = "380px";
    beerImg.style.maxWidth = "90vw";
    beerImg.style.pointerEvents = "none";
    cover.appendChild(beerImg);

    // 隐藏下方内容
    const nextSection = document.querySelector(".cover__details");
    if (nextSection) {
        nextSection.style.display = "none";
    }
}

// ✅ Quiz UI + Carousel 部分（你的原始逻辑）
// 提示：此处省略 runQuizUI() 的定义，因为它太长
// 若你需要我继续拆出完整函数内容，可接续处理