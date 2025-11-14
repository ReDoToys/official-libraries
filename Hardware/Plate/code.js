let w = { name: 'Width',  type: 'FLOAT', value: 20, constraint: 'NONZERO', unit: 'cm' };
let h = { name: 'Height', type: 'FLOAT', value: 30, constraint: 'NONZERO', unit: 'cm' };
w = 20;
h = 30;

let face = new Sketch([0,0]).Fillet(1).
               LineTo([w,0]).Fillet(1).
               LineTo([w,h]).Fillet(1).
			   LineTo([0,h]).Fillet(1).
               End(true).Face();
			   
Extrude(face, [0 , 0, 1.8])