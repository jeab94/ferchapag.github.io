var forma=new THREE.Geometry();

forma.vertices.push( new THREE.Vector3(1,0,1));//0
forma.vertices.push( new THREE.Vector3(1,0,-1));//1
forma.vertices.push( new THREE.Vector3(-1,0,-1));
forma.vertices.push( new THREE.Vector3(-1,0,1));//3
forma.vertices.push( new THREE.Vector3(1,1,1));
forma.vertices.push( new THREE.Vector3(1,1,-1));//5
forma.vertices.push( new THREE.Vector3(-1,1,-1));
forma.vertices.push( new THREE.Vector3(-1,1,1));//7

forma.faces.push(new THREE.Face3(3,2,1));//base
forma.faces.push(new THREE.Face3(3,1,0));
forma.faces.push(new THREE.Face3(7,6,5));//arriba
forma.faces.push(new THREE.Face3(7,5,4));
forma.faces.push(new THREE.Face3(3,7,4));//enfrente
forma.faces.push(new THREE.Face3(3,4,0));
forma.faces.push(new THREE.Face3(2,3,7));//izq
forma.faces.push(new THREE.Face3(2,6,7));
forma.faces.push(new THREE.Face3(2,1,5));//atras
forma.faces.push(new THREE.Face3(2,6,5));
forma.faces.push(new THREE.Face3(0,1,5));//derecha
forma.faces.push(new THREE.Face3(0,4,5));

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material=new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(forma, material);
malla.rotateX(Math.PI/4);

var escena=new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
