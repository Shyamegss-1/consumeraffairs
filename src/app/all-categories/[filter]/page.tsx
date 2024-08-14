import { getCategories } from "@/server-actions/getPopularCategories";

export default async function Page({
  params: { filter },
}: {
  params: { filter: string };
}) {
  // Get artist information
  // const artist = await getCategories();

  return (
    <>
      <h1>{filter}</h1>
      {/* Pass the artist ID to the Playlists component */}
    </>
  );
}

// async function Playlists({ artistID }: { artistID: string }) {
//   // Use the artist ID to fetch playlists
//   const playlists = await getArtistPlaylists(artistID)

//   return (
//     <ul>
//       {playlists.map((playlist) => (
//         <li key={playlist.id}>{playlist.name}</li>
//       ))}
//     </ul>
//   )
// }
