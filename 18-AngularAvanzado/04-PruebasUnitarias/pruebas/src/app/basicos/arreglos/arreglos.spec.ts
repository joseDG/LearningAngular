import { obtenerRobots } from './arreglos';


describe('Pruebas de arreglos', () =>{

  it('Debe de retornar al menos 3 robots', () =>{
    const resp =  obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir MegaMan y Ultron', () =>{
    const resp =  obtenerRobots();
    expect(resp).toContain('Megan');
    expect(resp).toContain('Ultron');
  })
})