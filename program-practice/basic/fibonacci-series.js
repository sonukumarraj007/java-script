// 2 = 0, 1
// 5 = 0, 1, 1, 2, 3

function generateFibonacciSeries(number){
  if(number>0){
    let first_series_no = 0;
    let second_series_no = 1;
    let next_series_no;

    for(let i=1; i<=number; i++){
        console.log(first_series_no);
        next_series_no = first_series_no + second_series_no;
        first_series_no = second_series_no;
        second_series_no = next_series_no;
    }
  }
   
}

console.log(generateFibonacciSeries(5));