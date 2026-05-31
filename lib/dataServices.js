import clientPromise from "@/lib/mongodb";

export async function fetchProducts(query = {}) {
  const client = await clientPromise;
  const db = client.db("Tobarok");
  return await db.collection("tobaroks").find(query).toArray();
}
