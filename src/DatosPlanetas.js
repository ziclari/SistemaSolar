import imgsol from "./imgPlanetasGrandes/sol.png";
import imgmercurio from "./imgPlanetasGrandes/mercurio.png";
import imgvenus from "./imgPlanetasGrandes/venus.png";
import imgtierra from "./imgPlanetasGrandes/tierra.jpg";
import imgmarte from "./imgPlanetasGrandes/marte.png";
import imgjupiter from "./imgPlanetasGrandes/jupiter.jpg";
import imgsaturno from "./imgPlanetasGrandes/saturno.png";
import imgurano from "./imgPlanetasGrandes/urano.png";
import imgneptuno from "./imgPlanetasGrandes/neptuno.jpg";

export const PLANETAS = [
    {id:"sol",nombre: "Sol", imgGrande: imgsol, info:"Los planetas giran alrededor de una estrella, el sol. No tienen luz propia, sino que reflejan la luz solar."},
    {id:"mercurio",nombre: "Mercurio", imgGrande:imgmercurio, info:"Mercurio es el planeta del sistema solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites al igual que Venus."},
    {id:"venus",nombre: "Venus" , imgGrande:imgvenus, info:"Venus es el planeta más cercano a la Tierra. Refleja muy bien la luz solar, hace que sea el planeta más luminoso visto desde la Tierra."},
    {id:"latierra",nombre: "La Tierra", imgGrande:imgtierra, info:"La Tierra es nuestro planeta y el único habitado. Está situado en la ecosfera, un espacio que rodea al Sol y que tiene las condiciones adecuadas para que exista vida."},
    {id:"marte",nombre: "Marte", imgGrande:imgmarte, info:"Marte es el cuarto planeta del sistema solar en orden de distancia al Sol. Forma parte de los llamados PLANETAS TELURICOS (de naturaleza rocosa, como la tierra) y es el planeta interior más alejado del sol."},
    {id:"jupiter",nombre: "Júpiter", imgGrande:imgjupiter,info:"Júpiter es el quinto planeta del sistema solar. Forma parte de los denominados planetas exteriores o gaseosos. Recibe su nombre del dios romano Júpiter. Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase."},
    {id:"saturno",nombre: "Saturno", imgGrande:imgsaturno, info:"Saturno es el segundo planeta más grande del Sistema Solar y el único con anillos visibles desde la Tierra. Se ve claramente achatado por los polos a causa de la rápida rotación."},
    {id:"urano",nombre: "Urano", imgGrande:imgurano, info:"Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo."},
    {id:"neptuno",nombre: "Neptuno", imgGrande:imgneptuno, info:"Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores o gigantes gaseosos, y es el primero que fue descubierto gracias a predicciones matemáticas."}
  ];