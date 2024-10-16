function findMaxSum() {
    const n = parseInt(document.getElementById('n').value);
    const k = parseInt(document.getElementById('k').value);
    const matrixInput = document.getElementById('matrix').value.trim().split('\n');

    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = matrixInput[i].split(',').map(Number);
    }

    let maxSum = 0;

    for (let i = 0; i <= n - k; i++) {
        for (let j = 0; j <= n - k; j++) {
            let currentSum = 0;
            for (let x = 0; x < k; x++) {
                for (let y = 0; y < k; y++) {
                    currentSum += matrix[i + x][j + y];
                }
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerText = 'Tổng Lớn Nhất: ' + maxSum;
    outputDiv.style.display = 'block';
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function copyToClipboard(snippetId) {
    const snippet = document.getElementById(snippetId).innerText;
    navigator.clipboard.writeText(snippet).then(() => {
        showPopup();
    }).catch(err => {
        console.error('Không thể sao chép: ', err);
    });
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

function downloadFile(fileName, codeId) {
    const code = document.getElementById(codeId).innerText.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append link to the body
    document.body.appendChild(link);
    link.click();

    // Remove the link after downloading
    document.body.removeChild(link);
}
