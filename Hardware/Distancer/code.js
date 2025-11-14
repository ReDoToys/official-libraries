let h = { name: 'Height', type: 'FLOAT', value: 3, constraint: 'NONZERO', unit: 'cm' };
h = 3;

Begin();
const hexShape = new Sketch([0.35, 0])
  .LineTo([0.5 * 0.35, 0.866 * 0.35])
  .LineTo([-0.5 * 0.35, 0.866 * 0.35])
  .LineTo([-0.35, 0])
  .LineTo([-0.5 * 0.35, -0.866 * 0.35])
  .LineTo([0.5 * 0.35, -0.866 * 0.35])
  .End(true)
  .Face();

const hexPrism = Extrude(hexShape, [0,0,h]);
const cylinder = Cylinder(0.3, h, false);
const distancer = Difference(hexPrism, [cylinder]);
