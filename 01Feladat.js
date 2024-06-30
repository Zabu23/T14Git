const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://zabu23:12345jelszó@cluster0.y8rfkvl.mongodb.net/"


async function kollekcioLetrehozas(){
try{
    const client = await MongoClient.connect(url);
    const db = client.db("T14");
    await db.createCollection("Helsinki");
    console.log("A Helsinki kollekció a T14 adatbázisban létrejött!");
    client.close();
}
catch(err){
    console.err("Hiba történt a művelet végrehajtásában!",err);
}
}
kollekcioLetrehozas()