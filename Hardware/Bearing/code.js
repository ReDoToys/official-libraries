let width = 0.8;
let outerRadius = 1.5;
let innerRadius = 0.9;
let sphereRadius = width / 2;
let sphereSpacing = 45;

let rectOuter = new Sketch([outerRadius, -width / 2])
  .LineTo([outerRadius + 0.3, -width / 2])
  .LineTo([outerRadius + 0.3, width / 2])
  .LineTo([outerRadius, width / 2])
  .End(true)
  .Face();

let rectInner = new Sketch([innerRadius, -width / 2])
  .LineTo([innerRadius - 0.3, -width / 2])
  .LineTo([innerRadius - 0.3, width / 2])
  .LineTo([innerRadius, width / 2])
  .End(true)
  .Face();

let ring = Revolve(
  Union([rectOuter, rectInner]),
  360,
  [0, 1, 0]
);

for (let deg = 0; deg < 360; deg += sphereSpacing) {
  Rotate(
    [0, 1, 0],
    deg,
    Translate(
      [(outerRadius + innerRadius) / 2, 0, 0],
      Sphere(sphereRadius)
    )
  );
}
