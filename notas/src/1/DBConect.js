export function Mos() {
    //console.log("imporado");
  return "asda"
}
export function square(x) {
    return x * x;
}
/*const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/Tareas";

mongoose
  .connect(url, {})
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.log(e));

const TareaShema = mongoose.Schema({
  nombre: String,
  tipo: String,
});



//mostrar
const TareaModel = mongoose.model("tareas", TareaShema);

const mostrar = async () => {
  const tarea = await TareaModel.find();
  console.log(tarea);
};
mostrar();

//Crear
const Crear = async () => {
  const tarea = new TareaModel({
    nombre: "Insertado",
    tipo: "Tipo de insertado",
  });
  const result = await tarea.save();
  console.log(result);
};
//Crear()

//editar
const editar = async (id) => {
  const tarea = await TareaModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: "Modificado name",
        tipo: "Mod",
      },
    }
  );
  console.log(tarea);
};
//editar('62d5dd33c9c817e222d4afaa')

//borrar
const borrar = async (id) => {
  const tarea = await TareaModel.deleteOne({ _id: id });
  console.log(tarea);
};

//borrar('62d61f6931962510e145402b')
mostrar();
*/
