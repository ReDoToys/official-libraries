let h = { name: 'Height', type: 'FLOAT', value: 3, constraint: 'NONZERO', unit: 'cm' };
let r = { name: 'Radius', type: 'FLOAT', value: 1, constraint: 'NONZERO', unit: 'cm' };
h = 3;
r = 1;

Begin();
Cylinder(r,h);