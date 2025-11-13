let w = { name: 'Width',  type: 'FLOAT', value: 2, constraint: 'NONZERO', unit: 'cm' };
let h = { name: 'Height', type: 'FLOAT', value: 3, constraint: 'NONZERO', unit: 'cm' };
let l = { name: 'Length', type: 'FLOAT', value: 4, constraint: 'NONZERO', unit: 'cm' };
w = 2;
h = 3;
l = 4;

Begin();
Box(w,h,l);