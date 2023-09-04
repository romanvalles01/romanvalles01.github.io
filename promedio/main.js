const main = document.getElementById("main");

let contGrupos = 0;
let promGrupos = 0;

let numeroGrupos = parseInt(prompt("Ingresa el numero de grupos"));

while (contGrupos < numeroGrupos) {
  contGrupos++;

  let promGrupo = 0;
  let alumnos = parseInt(
    prompt(`Ingresa la cantidad de alumnos en el grupo: ${contGrupos}`)
  );
  let contAlumnos = 0;
  while (contAlumnos < alumnos) {
    contAlumnos = contAlumnos + 1;
    let contMaterias = 0;
    let promedioAlumno = 0;
    let materias = parseInt(
      prompt(
        `Ingrese el numero de materias del alumno: ${contAlumnos} del grupo: ${contGrupos}`
      )
    );

    while (contMaterias < materias) {
      let c1 = parseInt(
        prompt(
          `Primera calificacion del alumno: ${contAlumnos} del grupo: ${contGrupos}`
        )
      );
      let c2 = parseInt(
        prompt(
          `Segunda calificacion del alumno: ${contAlumnos} del grupo: ${contGrupos}`
        )
      );
      let c3 = parseInt(
        prompt(
          `Tercera calificacion del alumno: ${contAlumnos} del grupo: ${contGrupos}`
        )
      );

      contMaterias = contMaterias + 1;

      let promedioMateria = (c1 + c2 + c3) / 3;
      promedioAlumno = promedioAlumno + promedioMateria;
    } //PRIMER SALIDA

    promedioAlumno = promedioAlumno / materias;
    let pAhtml = `<p>El promedio del alumno: ${contAlumnos} del grupo: ${contGrupos} es: ${Math.trunc(
      promedioAlumno
    )}</p>`;

    main.innerHTML += pAhtml;

    console.log(
      `El promedio del alumno: ${contAlumnos} del grupo: ${contGrupos} es: ${Math.trunc(
        promedioAlumno
      )}`
    );
    promGrupo = promGrupo + promedioAlumno;
  } //SEGUNDA SALIDA

  promGrupo = promGrupo / alumnos;

  let pGhtml = `<p>Promedio del grupo ${contGrupos}: ${Math.trunc(
    promGrupo
  )}</p>`;

  main.innerHTML += pGhtml;

  console.log(`Promedio del grupo ${contGrupos}: ${Math.trunc(promGrupo)}`);
  promGrupos = promGrupos + promGrupo;
}
//ULTIMA SALIDA
promGrupos = promGrupos / numeroGrupos;

let pGThtml = `<p>Promedio de los grupos en total: ${Math.trunc(
  promGrupos
)}</p>`;

main.innerHTML += pGThtml;

console.log(`Promedio de los grupos en total: ${Math.trunc(promGrupos)}`);
