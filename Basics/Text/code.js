let value = { name: 'Text', type: 'TEXT', value: 'Text' };
let size = { name: 'Size', type: 'INT', value: 4, constraint: 'NONZERO', unit: 'cm' };
let t = { name: 'Thickness', type: 'FLOAT', value: 0.10, constraint: 'NONZERO', unit: 'cm' };
value = 'Text';
size = 4;
t = 0.10;

Begin();
Text3D(value, size, t, 'Roboto');