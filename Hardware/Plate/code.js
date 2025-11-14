let w = { name: 'Width',  type: 'FLOAT', value: 20, constraint: 'NONZERO', unit: 'cm' };
let h = { name: 'Height', type: 'FLOAT', value: 30, constraint: 'NONZERO', unit: 'cm' };
w = 20;
h = 30;

Begin();
let face = new Sketch([0,0]).Fillet(2).
               LineTo([w,0]).Fillet(2).
               LineTo([w,h]).Fillet(2).
			   LineTo([0,h]).Fillet(2).
               End(true).Face();
			   
Extrude(face, [0, 1.7, 0]),