const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://zabu23:12345jelszó@cluster0.y8rfkvl.mongodb.net/"


async function lekerdezes(){
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T14");
        const collection = db.collection("Helsinki");

        const eredmeny = await collection.find({SportAg:{$in:["torna","uszas"]}},{projection:{_id:0,SportAg:1,VersenySzam:1}}).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch(err){
        console.err("Hiba történt a művelet végrehajtásában!",err);
    }
}
lekerdezes()