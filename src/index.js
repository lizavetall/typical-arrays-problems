
exports.min = function min (array) {
  if(array == undefined || array.length==0 ) return 0;
    let Min=array[0];
    for(let i=1;i<array.length;i++)
    {
        if(Min>array[i]) Min=array[i];
    }
    return Min;
}

exports.max = function max (array) {
  if(array == undefined || array.length==0) return 0;
  let Max=array[0];
  for(let i=1;i<array.length;i++)
  {
      if(Max<array[i]) Max=array[i];
  }
  return Max;
}

exports.avg = function avg (array) {
  if(array == undefined || array.length==0) return 0;
    let summ=0;
    for(let i=0;i<array.length;i++)
    {
        summ+=array[i];
    }
    return summ/array.length;
}
