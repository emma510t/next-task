export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");

  const data = await res.json();

  return {
    title: data.name,

    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1 className="text-2xl font-semibold">{data.name}</h1>
      <p>farvorite color: {data.favouriteColor}</p>
      <img src={data.image.url} alt="Dog" className="w-96" />
    </main>
  );
}
