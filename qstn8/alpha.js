function sorting()
{
    let array =[];
    let length = 5;

    // accepting input for aarray from user
    for( i=0; i<length; i++)    
        {
        array[i] = prompt( "enter 5 object names:");
        }
    document.getElementById('sort_ans').innerText = "The Array elements are " + array + '\n' +
    " The Array elements in alphabetical order is " +  array.sort();
}