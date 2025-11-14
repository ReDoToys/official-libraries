let h = { name: 'Height', type: 'FLOAT', value: 3, constraint: 'NONZERO', unit: 'cm' };
h = 3;

Begin();
let hexShape = new Sketch([1 * 0.27, 0])
  .LineTo([0.5 * 0.27, 0.866 * 0.27])
  .LineTo([-0.5 * 0.27, 0.866 * 0.27])
  .LineTo([-1 * 0.27, 0])
  .LineTo([-0.5 * 0.27, -0.866 * 0.27])
  .LineTo([0.5 * 0.27, -0.866 * 0.27])
  .End(true)
  .Face();

let hexPrism = Extrude(hexShape, [0,0,h]);
let cylinder = Cylinder(0.13, h, false);
let distancer = Difference(hexPrism, [cylinder]);
