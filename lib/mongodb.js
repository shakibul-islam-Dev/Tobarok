import clientPromise from "@/lib/mongodb";

export async function getProducts(filter = {}) {
  const client = await clientPromise;
  const db = client.db("Tobarok");
  const collection = db.collection("tobaroks");

  return await collection.find(filter).toArray();
}
