const ui = new UI();
const bubble = new BubbleSort(ui);
const quickSortObj = new QuickSort(ui);
const mergeSortObj = new MergeSort(ui);
const test = new Test();

document.getElementById('test').addEventListener('click', ()=> est.test());
document.getElementById('bubble-sort').addEventListener('click',  ()=> bubble.bubbleSort());
document.getElementById('quick-sort').addEventListener('click', () =>  quickSortObj.quickSort());
document.getElementById('merge-sort').addEventListener('click', () =>  mergeSortObj.mergeSort());

ui.arraySlider.addEventListener('input', () => {
    if (ui.arrayActive)
       ui.getArray();
});

document.getElementById('new-array').addEventListener('click', (e)=>{ 
    ui.getArray();
    ui.arrayActive = true;
    e.preventDefault();
});