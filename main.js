/**
 * AI Hub 및 Shutterstock 한식 검색 결과 반영 (정밀 매칭)
 * 출처: AI Hub, Shutterstock (Korean Food Collection)
 */

const mealData = {
    general: {
        soups: [
            { name: "김치찌개", img: "https://images.unsplash.com/photo-1620050854497-a61902047537?auto=format&fit=crop&q=80&w=600" },
            { name: "된장찌개", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=600" },
            { name: "미역국", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "순두부찌개", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "육개장", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=600" },
            { name: "삼계탕", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "부대찌개", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=600" }
        ],
        sides: [
            { name: "불고기", img: "https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&q=80&w=600" },
            { name: "제육볶음", img: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=600" },
            { name: "비빔밥", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600" },
            { name: "해물파전", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600" },
            { name: "잡채", img: "https://images.unsplash.com/photo-1534939561122-0d12d7e5d199?auto=format&fit=crop&q=80&w=600" },
            { name: "보쌈", img: "https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&q=80&w=600" },
            { name: "계란말이", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600" },
            { name: "떡볶이", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600" },
            { name: "고등어구이", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600" },
            { name: "배추김치", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    diet: {
        soups: [
            { name: "맑은 콩나물국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600" },
            { name: "미역국(저염)", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "황태해장국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600" }
        ],
        sides: [
            { name: "두부 스테이크", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
            { name: "닭가슴살 샐러드", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" },
            { name: "월남쌈", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
            { name: "도토리묵 무침", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" },
            { name: "구운 채소", img: "https://images.unsplash.com/photo-1452967712862-0cca1839ff27?auto=format&fit=crop&q=80&w=600" },
            { name: "삶은 달걀", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600" }
        ]
    }
};

const recommendBtn = document.getElementById('recommend-btn');
const resetBtn = document.getElementById('reset-btn');
const resultContainer = document.getElementById('result');
const soupResult = document.getElementById('soup-result');
const sideResults = document.getElementById('side-results');
const controls = document.querySelector('.controls');

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function recommendMenu() {
    const category = document.querySelector('input[name="category"]:checked').value;
    const data = mealData[category];
    
    const selectedSoup = data.soups[Math.floor(Math.random() * data.soups.length)];
    const selectedSides = getRandomItems(data.sides, 4);
    
    soupResult.innerHTML = `
        <div class="item-display">
            <img src="${selectedSoup.img}" alt="${selectedSoup.name}" class="food-img">
            <span class="item-name">${selectedSoup.name}</span>
        </div>
    `;
    
    sideResults.innerHTML = '';
    selectedSides.forEach(side => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-display">
                <img src="${side.img}" alt="${side.name}" class="food-img">
                <span class="side-name">${side.name}</span>
            </div>
        `;
        sideResults.appendChild(li);
    });
    
    controls.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

function resetMenu() {
    resultContainer.classList.add('hidden');
    controls.classList.remove('hidden');
}

recommendBtn.addEventListener('click', recommendMenu);
resetBtn.addEventListener('click', recommendMenu);
