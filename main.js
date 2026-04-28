const mealData = {
    general: {
        soups: [
            { name: "김치찌개", img: "https://images.unsplash.com/photo-1620050854497-a61902047537?auto=format&fit=crop&q=80&w=400" },
            { name: "된장찌개", img: "https://images.unsplash.com/photo-1583216075404-484967315181?auto=format&fit=crop&q=80&w=400" },
            { name: "미역국", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400" },
            { name: "부대찌개", img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80&w=400" },
            { name: "콩나물국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=400" }
        ],
        sides: [
            { name: "제육볶음", img: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&q=80&w=400" },
            { name: "계란말이", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400" },
            { name: "멸치볶음", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400" },
            { name: "불고기", img: "https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&q=80&w=400" },
            { name: "깍두기", img: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&q=80&w=400" },
            { name: "어묵볶음", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=400" },
            { name: "고등어구이", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400" }
        ]
    },
    diet: {
        soups: [
            { name: "맑은 콩나물국", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=400" },
            { name: "순두부맑은국", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400" },
            { name: "야채수프", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400" },
            { name: "소고기무국(저지방)", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400" }
        ],
        sides: [
            { name: "닭가슴살 샐러드", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" },
            { name: "두부구이", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" },
            { name: "삶은 계란", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400" },
            { name: "브로콜리 숙회", img: "https://images.unsplash.com/photo-1452967712862-0cca1839ff27?auto=format&fit=crop&q=80&w=400" },
            { name: "파프리카 스틱", img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&q=80&w=400" },
            { name: "오이무침(저염)", img: "https://images.unsplash.com/photo-1449333077673-ad5578a49a2b?auto=format&fit=crop&q=80&w=400" }
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
            <img src="${selectedSoup.img}" alt="${selectedSoup.name}" class="food-img">
            <span>${selectedSoup.name}</span>
        </div>
    `;
    
    // Display sides
    sideResults.innerHTML = '';
    selectedSides.forEach(side => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-display">
                <img src="${side.img}" alt="${side.name}" class="food-img">
                <span>${side.name}</span>
            </div>
        `;
        sideResults.appendChild(li);
    });
    
    // UI Transitions
    controls.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

function resetMenu() {
    resultContainer.classList.add('hidden');
    controls.classList.remove('hidden');
}

recommendBtn.addEventListener('click', recommendMenu);
resetBtn.addEventListener('click', resetMenu);
