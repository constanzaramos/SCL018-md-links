const fs = require('fs');
function leer(ruta,cb){
    fs.readFile(ruta,(err,data)=>{
        cb(data.toString());
    })
}
//leer(__dirname + '/archivo.md', console.log)

escribir = (ruta,contenido,cb) =>{
    fs.writeFile(ruta,contenido,function(err){
        if(err){
            console.error('No he podido escribirlo',err);
        }else{
            console.log('Se ha escrito correctamente')
        }

    });
}
//escribir(__dirname + '/archivo.md', 'Soy un archivo nuevo', console.log)

borrar = (ruta,cb)=>{
    fs.unlink(ruta,cb);

}
borrar(__dirname + '/archivo.md',console.log);