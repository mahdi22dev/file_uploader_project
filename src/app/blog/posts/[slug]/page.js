export default async function Page({ params }) {
  // const downloadURL = await FetchdownloadURL(full);

  return (
    <>
      <main>{params.slug}</main>
    </>
  );
}
