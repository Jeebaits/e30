// Create an array of unordered data
const data = [12, 45, 196, 18, 500, 11, 122, 20, 30, 100];
// Create a selection sorting algorithm function
const selectionSort = (data) => {
    const length = data.length;
    // Create swap function
    const swap = (data, minIndex, index) => {
        ([data[minIndex], data[index]] = [data[index], data[minIndex]]);
    }

    // Looping for selecting element to be compared
    for (let index = 0; index < length; index ++){
        // var that holds the initial index andchanges after iteration
        let minIndex = index;

        for(let cIndex = index + 1; cIndex < length; cIndex ++){
            // Changing the index of minIndex with the cIndex which contains a smaller value
            if(data[cIndex] < data[minIndex]){
                minIndex = cIndex;
            }
        }
        if(minIndex !== index){
            // Create swapping method
            // const temp = data[minIndex];
            //data[minIndex] = data[index];
            // data[index] = temp;
            swap(data, minIndex, index);
        }
    }
    
    return data;
}

console.log(selectionSort(data));