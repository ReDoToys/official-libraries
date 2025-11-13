let rBase = { name: 'Base Radius', type: 'FLOAT', value: 1, constraint: 'NONZERO', unit: 'cm' };
let rTop = { name: 'Top Radius', type: 'FLOAT', value: 1, unit: 'cm' };
let h = { name: 'Height', type: 'FLOAT', value: 1, constraint: 'NONZERO', unit: 'cm' };
rBase = 1;
rTop = 0.5;
h = 2;

Begin();
Cone(rBase,rTop, h);