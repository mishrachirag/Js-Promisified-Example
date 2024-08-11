async function delay(ms) {
    const response = await fetch(`/delay/${ms}`);
    if (!response.ok) {
        throw new Error('Error with delay');
    }
    const data = await response.json();
    return data.message;
}


async function fetchData() {
    const response = await fetch('/fetch-data');
    if (!response.ok) {
        throw new Error('Error fetching data');
    }
    const data = await response.json();
    return data;
}


async function readFile() {
    const response = await fetch('/read-file');
    if (!response.ok) {
        throw new Error('Error reading file');
    }
    const data = await response.json();
    return data.content;
}


document.getElementById('delayBtn').addEventListener('click', async () => {
    document.getElementById('delayOutput').innerText = 'Waiting...';
    try {
        const message = await delay(2000);
        document.getElementById('delayOutput').innerText = message;
    } catch (error) {
        document.getElementById('delayOutput').innerText = 'Error with delay';
    }
});

document.getElementById('fetchBtn').addEventListener('click', async () => {
    document.getElementById('fetchOutput').innerText = 'Fetching data...';
    try {
        const data = await fetchData();
        document.getElementById('fetchOutput').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('fetchOutput').innerText = 'Error fetching data';
    }
});

document.getElementById('readFileBtn').addEventListener('click', async () => {
    document.getElementById('readFileOutput').innerText = 'Reading file...';
    try {
        const content = await readFile();
        document.getElementById('readFileOutput').innerText = content;
    } catch (error) {
        document.getElementById('readFileOutput').innerText = 'Error reading file';
    }
});
