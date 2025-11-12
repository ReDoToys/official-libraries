let w = { name: 'Width', type: 'FLOAT', value: 2, unit: 'MM' };
let h = { name: 'Height', type: 'FLOAT', value: 3, constraint: 'NONZERO', unit: 'MM' };
let l = { name: 'Length', type: 'FLOAT', value: 4, constraint: 'NONZERO' };
w = 2;
h = 3;
l = 4;

Begin();
Box(w,h,l);