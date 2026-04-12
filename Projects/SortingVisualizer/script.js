const container = document.getElementById('array-container');
const generateBtn = document.getElementById('generate-btn');
const applyCustomBtn = document.getElementById('apply-custom-btn');
const customArrayInput = document.getElementById('custom-array-input');
const speedSlider = document.getElementById('speed-slider');
const sizeInput = document.getElementById('size-input');
const sortBtns = document.querySelectorAll('.sort-btn');

const COLORS = {
    default: 'var(--bar-default)',
    compare: 'var(--bar-compare)',
    swap: 'var(--bar-swap)',
    sorted: 'var(--bar-sorted)'
};

// Modal Elements
const modalOverlay = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');

let array = [];
let bars = [];
let isSorting = false;
let delayTime = 50;
let arraySize = 50; // default array size

function init() {
    setupSpeed();
    setupSize();
    generateArray();
}

function setupSize() {
    let val = parseInt(sizeInput.value);
    if (isNaN(val) || val < 5) val = 5;
    if (val > 150) val = 150;
    sizeInput.value = val;
    arraySize = val;
}

sizeInput.addEventListener('change', () => {
    setupSize();
    generateArray();
});

function setupSpeed() {
    // 1 to 100 range. Faster = smaller delay
    delayTime = 200 - (speedSlider.value * 1.9); // Approx 10ms to 200ms range
}

speedSlider.addEventListener('input', () => {
    setupSpeed();
});

function toggleControls(disable) {
    generateBtn.disabled = disable;
    applyCustomBtn.disabled = disable;
    customArrayInput.disabled = disable;
    speedSlider.disabled = disable;
    sizeInput.disabled = disable;
    sortBtns.forEach(btn => btn.disabled = disable);
    isSorting = disable;
}

// Global flag to track if we're dealing with a custom array
let isCustomArrayActive = false;

// Custom Modal Logic
function showModal(title, message, type) {
    modalTitle.innerText = title;
    modalMessage.innerText = message;
    
    // Reset classes
    modalOverlay.className = 'modal-overlay';
    modalOverlay.classList.add(type); // 'success' or 'error'
    
    // Show modal
    modalOverlay.classList.remove('hidden');
}

function hideModal() {
    modalOverlay.classList.add('hidden');
}

modalCloseBtn.addEventListener('click', hideModal);

function renderBars(inputArray) {
    container.innerHTML = '';
    bars = [];
    array = [...inputArray];

    const minVal = -100;
    const maxVal = 100;

    // Calculate dynamic width based on container width (assume roughly 1000px max)
    // minus some gap space. We'll use percentage or a calculated pixel value.
    // CSS flex-grow handles a lot, but setting a flex-basis or max-width helps.
    const containerWidth = container.clientWidth || 1000;
    const gapTotal = (array.length - 1) * 3; // 3px gap in CSS
    // Cap bar width at a reasonable max (e.g. 80px) so few elements don't get massive
    const calculatedWidth = Math.min(80, Math.max(2, Math.floor((containerWidth - gapTotal) / array.length)));

    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        const bar = document.createElement('div');
        bar.classList.add('array-bar');
        
        // Dynamically override max-width based on array size
        bar.style.maxWidth = `${calculatedWidth}px`;
        
        // Height calculation: Map -100 to 100 range onto 5% to 100% height
        const normalizedHeight = ((val - minVal) / (maxVal - minVal)) * 95 + 5;
        bar.style.height = `${normalizedHeight}%`;
        bar.innerText = val;
        
        container.appendChild(bar);
        bars.push(bar);
    }
}

function generateArray() {
    if (isSorting) return;
    
    isCustomArrayActive = false;
    generateBtn.disabled = false;

    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
        // Values from -100 to 100
        const val = Math.floor(Math.random() * 201) - 100;
        newArray.push(val);
    }
    customArrayInput.value = ''; // Clear custom input when random is generated
    renderBars(newArray);
}

applyCustomBtn.addEventListener('click', () => {
    if (isSorting) return;
    const inputStr = customArrayInput.value.trim();
    if (!inputStr) {
        showModal('Input Required', 'Please enter some comma-separated values to apply.', 'error');
        return;
    }

    // Parse comma-separated values, filter out non-numbers, constrain between -100 and 100
    const parsedArray = inputStr.split(',')
        .map(str => parseInt(str.trim()))
        .filter(num => !isNaN(num))
        .map(num => Math.max(-100, Math.min(100, num)));

    // Ensure elements do not exceed the currently fixed array size
    if (parsedArray.length > arraySize) {
        showModal('Limit Exceeded', `You entered ${parsedArray.length} elements, but the current maximum array size is set to ${arraySize}.`, 'error');
        return;
    }

    if (parsedArray.length > 0) {
        // Enforce max 150 items so DOM doesn't break
        const finalArray = parsedArray.slice(0, 150);
        arraySize = finalArray.length;
        sizeInput.value = arraySize; // Update size input to match
        
        isCustomArrayActive = true;
        generateBtn.disabled = true; // Disable Generate until explicitly sorted
        
        renderBars(finalArray);
    } else {
        showModal('Invalid Format', 'Please enter a valid comma-separated list of numbers.', 'error');
    }
});

generateBtn.addEventListener('click', () => generateArray());

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function markSorted(indices) {
    for (let index of indices) {
        if (bars[index]) {
            bars[index].style.backgroundColor = COLORS.sorted;
        }
    }
}

async function bubbleSort() {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            bars[j].style.backgroundColor = COLORS.compare;
            bars[j + 1].style.backgroundColor = COLORS.compare;
            await sleep(delayTime);

            if (array[j] > array[j + 1]) {
                // Swap values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                const minVal = -100;
                const maxVal = 100;
                const h1 = ((array[j] - minVal) / (maxVal - minVal)) * 95 + 5;
                const h2 = ((array[j + 1] - minVal) / (maxVal - minVal)) * 95 + 5;

                // Perform swap visual
                bars[j].style.backgroundColor = COLORS.swap;
                bars[j + 1].style.backgroundColor = COLORS.swap;
                bars[j].style.height = `${h1}%`;
                bars[j].innerText = array[j];
                bars[j + 1].style.height = `${h2}%`;
                bars[j + 1].innerText = array[j + 1];
                await sleep(delayTime);
            }

            // Revert color if not final sorted position
            bars[j].style.backgroundColor = COLORS.default;
            bars[j + 1].style.backgroundColor = COLORS.default;
        }
        await markSorted([n - i - 1]);
    }
    await markSorted([0]); // mark the very first element as sorted at the end
}

async function selectionSort() {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        bars[minIdx].style.backgroundColor = COLORS.compare;
        await sleep(delayTime);

        for (let j = i + 1; j < n; j++) {
            bars[j].style.backgroundColor = COLORS.compare;
            await sleep(delayTime);

            if (array[j] < array[minIdx]) {
                if (minIdx !== i) {
                    bars[minIdx].style.backgroundColor = COLORS.default;
                }
                minIdx = j;
                bars[minIdx].style.backgroundColor = COLORS.swap;
            } else {
                bars[j].style.backgroundColor = COLORS.default;
            }
        }

        if (minIdx !== i) {
            let temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;

            const minVal = -100;
            const maxVal = 100;
            const h1 = ((array[i] - minVal) / (maxVal - minVal)) * 95 + 5;
            const h2 = ((array[minIdx] - minVal) / (maxVal - minVal)) * 95 + 5;

            bars[i].style.height = `${h1}%`;
            bars[i].innerText = array[i];
            bars[minIdx].style.height = `${h2}%`;
            bars[minIdx].innerText = array[minIdx];
            await sleep(delayTime);
        }

        bars[minIdx].style.backgroundColor = COLORS.default;
        bars[i].style.backgroundColor = COLORS.sorted;
    }
}

async function insertionSort() {
    let n = array.length;
    bars[0].style.backgroundColor = COLORS.sorted; // First one is trivially sorted
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        
        bars[i].style.backgroundColor = COLORS.compare;
        await sleep(delayTime);

        while (j >= 0 && array[j] > key) {
            bars[j].style.backgroundColor = COLORS.swap;
            bars[j + 1].style.backgroundColor = COLORS.swap;
            
            array[j + 1] = array[j];
            const minVal = -100;
            const maxVal = 100;
            const hJ1 = ((array[j + 1] - minVal) / (maxVal - minVal)) * 95 + 5;

            bars[j + 1].style.height = `${hJ1}%`;
            bars[j + 1].innerText = array[j + 1];
            
            await sleep(delayTime);
            
            bars[j].style.backgroundColor = COLORS.sorted;
            bars[j + 1].style.backgroundColor = COLORS.compare;
            j = j - 1;
        }
        array[j + 1] = key;
        const minVal = -100;
        const maxVal = 100;
        const hKey = ((key - minVal) / (maxVal - minVal)) * 95 + 5;
        
        bars[j + 1].style.height = `${hKey}%`;
        bars[j + 1].innerText = key;
        bars[i].style.backgroundColor = COLORS.sorted;
        
        // Ensure all previous are green and reset the active one
        for (let k = 0; k <= i; k++) {
             bars[k].style.backgroundColor = COLORS.sorted;
        }
        await sleep(delayTime);
    }
}

async function countingSort() {
    let n = array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        bars[i].style.backgroundColor = COLORS.compare;
        count[array[i] - min]++;
        await sleep(delayTime);
        bars[i].style.backgroundColor = COLORS.default;
    }

    let k = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            array[k] = i + min;
            
            bars[k].style.backgroundColor = COLORS.swap;
            
            const minVal = -100;
            const maxVal = 100;
            const h = ((array[k] - minVal) / (maxVal - minVal)) * 95 + 5;
            bars[k].style.height = `${h}%`;
            bars[k].innerText = array[k];
            
            await sleep(delayTime);
            bars[k].style.backgroundColor = COLORS.sorted;
            
            k++;
            count[i]--;
        }
    }
}

async function mergeSortHelper(l, r) {
    if (l >= r) return;
    let m = l + Math.floor((r - l) / 2);
    await mergeSortHelper(l, m);
    await mergeSortHelper(m + 1, r);
    await merge(l, m, r);
}

async function merge(l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = array[l + i];
        bars[l + i].style.backgroundColor = COLORS.compare;
    }
    for (let j = 0; j < n2; j++) {
        R[j] = array[m + 1 + j];
        bars[m + 1 + j].style.backgroundColor = COLORS.compare;
    }
    await sleep(delayTime);

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        } else {
            array[k] = R[j];
            j++;
        }
        bars[k].style.backgroundColor = COLORS.swap;
        
        const minVal = -100;
        const maxVal = 100;
        const h = ((array[k] - minVal) / (maxVal - minVal)) * 95 + 5;
        bars[k].style.height = `${h}%`;
        bars[k].innerText = array[k];
        
        await sleep(delayTime);
        k++;
    }

    while (i < n1) {
        array[k] = L[i];
        bars[k].style.backgroundColor = COLORS.swap;
        
        const minVal = -100;
        const maxVal = 100;
        const h = ((array[k] - minVal) / (maxVal - minVal)) * 95 + 5;
        bars[k].style.height = `${h}%`;
        bars[k].innerText = array[k];
        
        await sleep(delayTime);
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = R[j];
        bars[k].style.backgroundColor = COLORS.swap;
        
        const minVal = -100;
        const maxVal = 100;
        const h = ((array[k] - minVal) / (maxVal - minVal)) * 95 + 5;
        bars[k].style.height = `${h}%`;
        bars[k].innerText = array[k];
        
        await sleep(delayTime);
        j++;
        k++;
    }

    for (let idx = l; idx <= r; idx++) {
        bars[idx].style.backgroundColor = COLORS.sorted;
    }
}

async function mergeSort() {
    await mergeSortHelper(0, array.length - 1);
}

async function partition(low, high) {
    let pivot = array[high];
    bars[high].style.backgroundColor = COLORS.compare; // pivot element
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        bars[j].style.backgroundColor = COLORS.compare;
        await sleep(delayTime);

        if (array[j] < pivot) {
            i++;
            // swap
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            
            bars[i].style.backgroundColor = COLORS.swap;
            bars[j].style.backgroundColor = COLORS.swap;
            
            const minVal = -100;
            const maxVal = 100;
            const h1 = ((array[i] - minVal) / (maxVal - minVal)) * 95 + 5;
            const h2 = ((array[j] - minVal) / (maxVal - minVal)) * 95 + 5;

            bars[i].style.height = `${h1}%`;
            bars[i].innerText = array[i];
            bars[j].style.height = `${h2}%`;
            bars[j].innerText = array[j];
            
            await sleep(delayTime);
            
            bars[i].style.backgroundColor = COLORS.default;
            bars[j].style.backgroundColor = COLORS.default;
        } else {
            bars[j].style.backgroundColor = COLORS.default;
        }
    }
    // swap array[i+1] and array[high] (or pivot)
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    
    bars[i + 1].style.backgroundColor = COLORS.swap;
    bars[high].style.backgroundColor = COLORS.swap;
    
    const minVal = -100;
    const maxVal = 100;
    const h1 = ((array[i + 1] - minVal) / (maxVal - minVal)) * 95 + 5;
    const h2 = ((array[high] - minVal) / (maxVal - minVal)) * 95 + 5;

    bars[i + 1].style.height = `${h1}%`;
    bars[i + 1].innerText = array[i + 1];
    bars[high].style.height = `${h2}%`;
    bars[high].innerText = array[high];
    
    await sleep(delayTime);
    
    bars[i + 1].style.backgroundColor = COLORS.sorted;
    bars[high].style.backgroundColor = COLORS.default;
    
    return (i + 1);
}

async function quickSortHelper(low, high) {
    if (low < high) {
        let pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
    } else if (low === high) {
        bars[low].style.backgroundColor = COLORS.sorted;
    }
}

async function quickSort() {
    await quickSortHelper(0, array.length - 1);
    await markSorted([...Array(array.length).keys()]); // Ensure all are green
}

async function heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && array[l] > array[largest]) {
        largest = l;
    }
    if (r < n && array[r] > array[largest]) {
        largest = r;
    }

    if (largest != i) {
        bars[i].style.backgroundColor = COLORS.compare;
        bars[largest].style.backgroundColor = COLORS.compare;
        await sleep(delayTime);

        let swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        bars[i].style.backgroundColor = COLORS.swap;
        bars[largest].style.backgroundColor = COLORS.swap;
        
        const minVal = -100;
        const maxVal = 100;
        const h1 = ((array[i] - minVal) / (maxVal - minVal)) * 95 + 5;
        const h2 = ((array[largest] - minVal) / (maxVal - minVal)) * 95 + 5;
        
        bars[i].style.height = `${h1}%`;
        bars[i].innerText = array[i];
        bars[largest].style.height = `${h2}%`;
        bars[largest].innerText = array[largest];
        
        await sleep(delayTime);

        bars[i].style.backgroundColor = COLORS.default;
        bars[largest].style.backgroundColor = COLORS.default;

        await heapify(n, largest);
    }
}

async function heapSort() {
    let n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        bars[0].style.backgroundColor = COLORS.swap;
        bars[i].style.backgroundColor = COLORS.swap;
        
        const minVal = -100;
        const maxVal = 100;
        const h1 = ((array[0] - minVal) / (maxVal - minVal)) * 95 + 5;
        const h2 = ((array[i] - minVal) / (maxVal - minVal)) * 95 + 5;

        bars[0].style.height = `${h1}%`;
        bars[0].innerText = array[0];
        bars[i].style.height = `${h2}%`;
        bars[i].innerText = array[i];

        await sleep(delayTime);
        
        bars[0].style.backgroundColor = COLORS.default;
        bars[i].style.backgroundColor = COLORS.sorted;

        await heapify(i, 0);
    }
    bars[0].style.backgroundColor = COLORS.sorted;
}

// Bind events to buttons
document.getElementById('bubble-btn').addEventListener('click', async () => {
    toggleControls(true);
    await bubbleSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Bubble Sort has finished successfully!', 'success');
});

document.getElementById('selection-btn').addEventListener('click', async () => {
    toggleControls(true);
    await selectionSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Selection Sort has finished successfully!', 'success');
});

document.getElementById('insertion-btn').addEventListener('click', async () => {
    toggleControls(true);
    await insertionSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Insertion Sort has finished successfully!', 'success');
});

document.getElementById('counting-btn').addEventListener('click', async () => {
    toggleControls(true);
    await countingSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Counting Sort has finished successfully!', 'success');
});

document.getElementById('merge-btn').addEventListener('click', async () => {
    toggleControls(true);
    await mergeSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Merge Sort has finished successfully!', 'success');
});

document.getElementById('quick-btn').addEventListener('click', async () => {
    toggleControls(true);
    await quickSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Quick Sort has finished successfully!', 'success');
});

document.getElementById('heap-btn').addEventListener('click', async () => {
    toggleControls(true);
    await heapSort();
    toggleControls(false);
    if (isCustomArrayActive) generateBtn.disabled = false;
    showModal('Task Completed', 'Heap Sort has finished successfully!', 'success');
});

init();
