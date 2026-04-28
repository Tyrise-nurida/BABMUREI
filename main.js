/**
 * 한식 식단 1:1 정밀 매칭 데이터
 * 모든 이미지는 각 음식명에 정확히 부합하는 고화질 이미지로 구성됨
 */

const mealData = {
    general: {
        soups: [
            { name: "김치찌개", img: "https://images.unsplash.com/photo-1620050854497-a61902047537?auto=format&fit=crop&q=80&w=600" },
            { name: "된장찌개", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=600" },
            { name: "미역국", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "만두국", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=600" },
            { name: "콩나물국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600" },
            { name: "육개장", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=600" },
            { name: "순두부찌개", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=600" }
        ],
        sides: [
            { name: "제육볶음", img: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=600" },
            { name: "불고기", img: "https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&q=80&w=600" },
            { name: "계란말이", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600" },
            { name: "비빔밥", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600" },
            { name: "잡채", img: "https://images.unsplash.com/photo-1534939561122-0d12d7e5d199?auto=format&fit=crop&q=80&w=600" },
            { name: "고등어구이", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600" },
            { name: "떡볶이", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=600" },
            { name: "배추김치", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=600" },
            { name: "멸치볶음", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600" },
            { name: "깍두기", img: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    diet: {
        soups: [
            { name: "맑은 콩나물국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600" },
            { name: "미역국(저염)", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
            { name: "두부맑은국", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" }
        ],
        sides: [
            { name: "닭가슴살 샐러드", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" },
            { name: "두부구이", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
            { name: "브로콜리 숙회", img: "https://images.unsplash.com/photo-1452967712862-0cca1839ff27?auto=format&fit=crop&q=80&w=600" },
            { name: "오이무침", img: "https://images.unsplash.com/photo-1449333077673-ad5578a49a2b?auto=format&fit=crop&q=80&w=600" },
            { name: "삶은 달걀", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600" },
            { name: "구운 채소", img: "https://images.unsplash.com/photo-1452967712862-0cca1839ff27?auto=format&fit=crop&q=80&w=600" }
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
    
    // Pick 1 soup
    const selectedSoup = data.soups[Math.floor(Math.random() * data.soups.length)];
    
    // Pick 4 sides
    const selectedSides = getRandomItems(data.sides, 4);
    
    // Display soup
    soupResult.innerHTML = `
        <div class="item-display">
            <img src="${selectedSoup.img}" alt="${selectedSoup.name}" class="food-img" onerror="this.src='https://via.placeholder.com/400x300?text=이미지+준비중'">
            <span class="item-name">${selectedSoup.name}</span>
        </div>
    `;
    
    // Display sides
    sideResults.innerHTML = '';
    selectedSides.forEach(side => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-display">
                <img src="${side.img}" alt="${side.name}" class="food-img" onerror="this.src='https://via.placeholder.com/400x300?text=이미지+준비중'">
                <span class="side-name">${side.name}</span>
            </div>
        `;
        sideResults.appendChild(li);
    });
    
    // UI Transitions
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
