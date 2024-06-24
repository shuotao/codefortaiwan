document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '搜尋中...';
    
    // 模擬從 API 獲取數據
    setTimeout(() => {
        // 假設獲取的數據
        const data = [
            { name: '味全奶茶', store: '7-11', image: 'https://via.placeholder.com/100' },
            { name: '味全奶茶', store: '全家', image: 'https://via.placeholder.com/100' },
        ];
        
        // 清空結果
        resultsDiv.innerHTML = '';
        
        // 顯示結果
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>商店: ${item.store}</p>
                <img src="${item.image}" alt="${item.name}" width="100">
            `;
            resultsDiv.appendChild(itemDiv);
        });
    }, 1000);
});
